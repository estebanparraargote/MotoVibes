/* ══════════════════════════════════════
   AUDIO — Sonido de pago (checkout)
   Archivo: audio/Compra.mp3
══════════════════════════════════════ */
const _checkoutAudio = new Audio('audio/compra.mp3');
_checkoutAudio.preload = 'auto';

function playSound_checkout() {
  try {
    _checkoutAudio.currentTime = 0;
    _checkoutAudio.play().catch(() => {});
  } catch(e) {}
}

/* ══════════════════════════════════════
   CATÁLOGO DE PRODUCTOS (espejo de main.js)
   Se usa para rehidratar el carrito desde
   sessionStorage sin depender del HTML serializado.
══════════════════════════════════════ */
const STORE_PRODUCTS = [
  {
    id: 'sticker-1',
    n: 'Sticker individual',
    p: 3000,
    qtyLabel: '1x Sticker',
    e: `<div style="position:relative;width:100%;height:100%;background:linear-gradient(135deg,#111111,#3a3a3a);">
          <img src="images/Navi Portada.png" alt="Sticker Honda Navi" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 60%);"></div>
          <div style="position:absolute;bottom:4px;left:0;right:0;text-align:center;font-family:'Bebas Neue',Impact,sans-serif;font-size:0.7rem;letter-spacing:0.08em;color:#fff;line-height:1.1;">
            <div style="font-size:0.95rem;">1x</div>
            <div style="font-size:0.55rem;color:rgba(255,255,255,0.7);">Sticker</div>
          </div>
        </div>`,
    bg: 'linear-gradient(135deg,#CC0000,#7a0000)'
  },
  {
    id: 'sticker-2',
    n: 'Sticker Dúo',
    p: 5000,
    qtyLabel: '2x Stickers',
    e: `<div style="position:relative;width:100%;height:100%;background:linear-gradient(135deg,#111111,#3a3a3a);">
          <img src="images/Navi Portada.png" alt="Duo Sticker Honda Navi" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 60%);"></div>
          <div style="position:absolute;bottom:4px;left:0;right:0;text-align:center;font-family:'Bebas Neue',Impact,sans-serif;font-size:0.7rem;letter-spacing:0.08em;color:#fff;line-height:1.1;">
            <div style="font-size:0.95rem;">2x</div>
            <div style="font-size:0.55rem;color:rgba(255,255,255,0.7);">Stickers</div>
          </div>
        </div>`,
    bg: 'linear-gradient(135deg,#CC0000,#7a0000)'
  },
  {
    id: 'pack-5',
    n: 'Pack de 5 stickers',
    p: 10000,
    qtyLabel: '5x Stickers',
    e: `<div style="position:relative;width:100%;height:100%;background:linear-gradient(135deg,#111111,#3a3a3a);">
          <img src="images/Navi Portada.png" alt="Pack 5 stickers Honda Navi" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 60%);"></div>
          <div style="position:absolute;bottom:4px;left:0;right:0;text-align:center;font-family:'Bebas Neue',Impact,sans-serif;letter-spacing:0.08em;color:#fff;line-height:1.1;">
            <div style="font-size:0.95rem;color:#CC0000;">5x</div>
            <div style="font-size:0.55rem;color:rgba(255,255,255,0.7);">Stickers</div>
          </div>
        </div>`,
    bg: 'linear-gradient(135deg,#111111,#3a3a3a)'
  }
];

/* ══════════════════════════════════════
   REHIDRATAR CARRITO DESDE sessionStorage
══════════════════════════════════════ */
const fmt = n => '$' + Number(n || 0).toLocaleString('es-CL');

let cart = (() => {
  try {
    const raw = sessionStorage.getItem('motovibes_cart');
    if (!raw) return [];
    const saved = JSON.parse(raw);
    return saved
      .map(({ id, qty }) => {
        const p = STORE_PRODUCTS.find(x => x.id === id);
        return p ? { ...p, qty } : null;
      })
      .filter(Boolean);
  } catch { return []; }
})();

/* ══════════════════════════════════════
   ELEMENTOS DEL DOM
══════════════════════════════════════ */
const checkoutItemsEl = document.getElementById('checkout-items');
const subtotalEl      = document.getElementById('checkout-subtotal');
const totalEl         = document.getElementById('checkout-total');
const saveEl          = document.getElementById('checkout-save');
const formEl          = document.getElementById('checkout-form');

/* ══════════════════════════════════════
   CARRITO — CAMBIAR CANTIDAD / ELIMINAR
══════════════════════════════════════ */
function checkoutChangeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(x => x.id !== id);
  }
  sessionStorage.setItem('motovibes_cart', JSON.stringify(
    cart.map(({ id, qty }) => ({ id, qty }))
  ));
  renderCheckout();
}

function checkoutRemove(id) {
  cart = cart.filter(x => x.id !== id);
  sessionStorage.setItem('motovibes_cart', JSON.stringify(
    cart.map(({ id, qty }) => ({ id, qty }))
  ));
  renderCheckout();
}

/* ══════════════════════════════════════
   RENDER DEL RESUMEN
══════════════════════════════════════ */
function renderCheckout() {
  const submitBtn = formEl.querySelector('.checkout-submit');

  if (!cart.length) {
    checkoutItemsEl.innerHTML = `
      <div class="sb-empty" style="height:auto; padding:1rem 0;">
        <div class="sb-empty-icon">🛒</div>
        <p>No hay productos en tu checkout.<br><a href="index.html">Volver a la tienda →</a></p>
      </div>
    `;
    subtotalEl.textContent = fmt(0);
    totalEl.textContent = 'CLP ' + fmt(0);
    saveEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '.6';
    submitBtn.style.cursor = 'not-allowed';
    return;
  }

  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  submitBtn.style.cursor = 'pointer';

  let subtotal = 0;
  let ahorro = 0;

  checkoutItemsEl.innerHTML = cart.map(item => {
    const lineTotal = item.p * item.qty;
    subtotal += lineTotal;

    if (item.id === 'sticker-2') {
      ahorro += 1000 * item.qty;  // vs 2x $3.000 = $6.000
    }
    if (item.id === 'pack-5') {
      ahorro += 5000 * item.qty;  // vs 5x $3.000 = $15.000
    }

    return `
      <article class="summary-item">
        <div class="summary-thumb" style="background:${item.bg}">
          ${item.e}
          <span class="qty-badge">${item.qty}</span>
        </div>
        <div class="summary-info">
          <h3>${item.n}</h3>
          <div class="summary-meta">${item.qtyLabel}</div>
          <div class="co-controls">
            <button class="co-q-btn" onclick="checkoutChangeQty('${item.id}', -1)" aria-label="Disminuir">−</button>
            <span class="co-q-num">${item.qty}</span>
            <button class="co-q-btn" onclick="checkoutChangeQty('${item.id}', 1)" aria-label="Aumentar">+</button>
            <button class="co-del-btn" onclick="checkoutRemove('${item.id}')" aria-label="Eliminar">🗑️</button>
          </div>
        </div>
        <div class="summary-price">${fmt(lineTotal)}</div>
      </article>
    `;
  }).join('');

  subtotalEl.textContent = fmt(subtotal);
  totalEl.textContent = 'CLP ' + fmt(subtotal);
  saveEl.textContent = ahorro > 0 ? `🏷️ AHORRO TOTAL ${fmt(ahorro)}` : '';
}

/* ══════════════════════════════════════
   SUBMIT DEL FORMULARIO
══════════════════════════════════════ */
formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const submitBtn = formEl.querySelector('.checkout-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ Procesando...';

  // Sonido de pago confirmado
  try { playSound_checkout(); } catch(err) {}

  const formData = new FormData(formEl);
  const customer = Object.fromEntries(formData.entries());

  // Calcular total desde el carrito
  const total = cart.reduce((s, x) => s + x.p * x.qty, 0);

  // Preparar productos para la Edge Function
  const productos = cart.map(x => ({ id: x.id, n: x.n, p: x.p, qty: x.qty }));

  try {
    const res = await fetch(
      'https://schktmtqkufhdolhindw.supabase.co/functions/v1/confirmar-orden',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaGt0bXRxa3VmaGRvbGhpbmR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjgyODksImV4cCI6MjA4OTEwNDI4OX0.HtpsxvcD_zYEIViyZJjSMZGqa5bg1umWpSTobdDYP0w'
        },
        body: JSON.stringify({
          email:     customer.email,
          nombre:    `${customer.nombre} ${customer.apellidos}`.trim(),
          telefono:  customer.telefono,
          region:    customer.region,
          ciudad:    customer.ciudad,
          comuna:    customer.comuna,
          direccion: customer.direccion,
          total,
          productos,
        })
      }
    );

    const data = await res.json();

    if (data.ok && data.token) {
      // Limpiar carrito
      localStorage.removeItem('motovibes_cart');

      // Redirigir a gracias con el token
      window.location.href = 'gracias.html?token=' + data.token;
    } else {
      throw new Error(data.error || 'Error procesando la orden');
    }

  } catch(err) {
    console.error('Error:', err);
    alert('Hubo un problema procesando tu orden. Por favor intenta nuevamente.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Pagar ahora';
  }
});

renderCheckout();

/* ══════════════════════════════════════
   SCROLL — HEADER (igual que main.js)
══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
});
