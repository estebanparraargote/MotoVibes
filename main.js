/* ══════════════════════════════════════
   AUDIO ENGINE — Archivos MP3
   Coloca los archivos en la carpeta /audio/
══════════════════════════════════════ */

const PRODUCT_AUDIO = {
  'sticker-1': 'audio/sticker_x1.mp3',
  'sticker-2': 'audio/sticker_x2.mp3',
  'pack-5':    'audio/sticker_x5.mp3',
};

// Precarga para reproducción instantánea
const _audioCache = {};
Object.entries(PRODUCT_AUDIO).forEach(([id, src]) => {
  const a = new Audio(src);
  a.preload = 'auto';
  _audioCache[id] = a;
});

function playProductSound(id) {
  try {
    const a = _audioCache[id];
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch(e) {}
}


/* ══════════════════════════════════════
   PRODUCTOS DE VENTA
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
          <img src="images/Navi Portada.png" alt=" Duo Sticker Honda Navi" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">
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
   DATOS DEL CARRUSEL
══════════════════════════════════════ */
const CAROUSEL_ITEMS = [
  { e: '<img src="images/Navi Roja.png" alt="Navi Roja">',          bg: 'linear-gradient(135deg,#CC0000,#7a0000)', n: 'Navi Clásica Roja' },
  { e: '<img src="images/Navi Noche.png" alt="Navi en la noche">',  bg: 'linear-gradient(135deg,#111111,#3a3a3a)', n: 'Navi Night Rider' },
  { e: '<img src="images/Navi Fuego.png" alt="Navi en llamas">',    bg: 'linear-gradient(135deg,#FF5500,#ffaa00)', n: 'Navi en Llamas' },
  { e: '<img src="images/Navi Futurista.png" alt="Navi futurista">', bg: 'linear-gradient(135deg,#6bcb77,#4d96ff)', n: 'Navi Pop Art' },
  { e: '<img src="images/Navi Ciudad.png" alt="Navi ciudad">',      bg: 'linear-gradient(135deg,#f093fb,#4d96ff)', n: 'Navi Ciudad' },
  { e: '<img src="images/Navi Black.png" alt="Navi Black">',        bg: 'linear-gradient(135deg,#1a1a1a,#050505)', n: 'Navi Blackout' },
  { e: '<img src="images/Navi Playa.png" alt="Navi En la costa">',  bg: 'linear-gradient(135deg,#4facfe,#00c9ff)', n: 'Navi Costera' },
  { e: '<img src="images/Navi Custom.png" alt="Navi Custom">',      bg: 'linear-gradient(135deg,#fa709a,#fee140)', n: 'Navi Full Equipada' },
  { e: '<img src="images/Navi Montaña.png" alt="Navi Montaña">',    bg: 'linear-gradient(135deg,#fa709a,#fee140)', n: 'Navi Montaña' },
];

/* ══════════════════════════════════════
   UTILIDADES
══════════════════════════════════════ */
const fmt = n => '$' + n.toLocaleString('es-CL');

/* ══════════════════════════════════════
   ESTADO DEL CARRITO
══════════════════════════════════════ */
let cart = (() => {
  try {
    const raw = localStorage.getItem('motovibes_cart');
    if (!raw) return [];
    const saved = JSON.parse(raw);
    // Rehidratar desde el catálogo para tener siempre data fresca
    return saved
      .map(({ id, qty }) => {
        const p = STORE_PRODUCTS.find(x => x.id === id);
        return p ? { ...p, qty } : null;
      })
      .filter(Boolean);
  } catch { return []; }
})();

/* ══════════════════════════════════════
   CARRUSEL AUTOMÁTICO
══════════════════════════════════════ */
(function buildCarousel() {
  const track = document.getElementById('carousel-track');
  const items = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

  track.innerHTML = items.map(p => `
    <div class="c-card" role="button" tabindex="0" aria-label="${p.n}">
      <div class="c-bg" style="background:${p.bg}">${p.e}</div>
      <div class="c-overlay"></div>
      <div class="c-info">
        <div class="c-name">${p.n}</div>
      </div>
    </div>
  `).join('');
})();

/* ══════════════════════════════════════
   CARRITO — AGREGAR / QUITAR / CAMBIAR CANTIDAD
══════════════════════════════════════ */
function addToCart(id) {
  const p = STORE_PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Reproducir sonido único por producto
  if (PRODUCT_AUDIO[id]) {
    try { playProductSound(id); } catch(e) {}
  }

  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });

  syncCart();
  openSidebar();
  showToast(`"${p.n}" agregado al carrito`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  syncCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else syncCart();
}

/* ══════════════════════════════════════
   CARRITO — SINCRONIZAR UI
══════════════════════════════════════ */
function syncCart() {
  const total    = cart.reduce((s, x) => s + x.qty, 0);
  const subtotal = cart.reduce((s, x) => s + x.p * x.qty, 0);

  document.getElementById('cart-badge').textContent = total;
  document.getElementById('sb-count').textContent = `${total} producto${total !== 1 ? 's' : ''}`;

  const emptyEl = document.getElementById('sb-empty');
  const itemsEl = document.getElementById('sb-items');
  const footEl  = document.getElementById('sb-foot');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    itemsEl.innerHTML = '';
    footEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  footEl.style.display = 'block';

  itemsEl.innerHTML = cart.map(x => `
    <div class="ci">
      <div class="ci-thumb" style="background:${x.bg}">${x.e}</div>
      <div class="ci-info">
        <div class="ci-name">${x.n}</div>
        <div class="ci-cat2">${x.qtyLabel}</div>
        <div class="ci-bot">
          <span class="ci-price2">${fmt(x.p * x.qty)}</span>
          <div class="ci-qty">
            <button class="q-btn" onclick="changeQty('${x.id}', -1)" aria-label="Disminuir cantidad">−</button>
            <span class="q-num">${x.qty}</span>
            <button class="q-btn" onclick="changeQty('${x.id}', 1)" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="ci-del" onclick="removeFromCart('${x.id}')" aria-label="Eliminar ${x.n}">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('sum-sub').textContent = fmt(subtotal);
  document.getElementById('sum-tot').textContent = fmt(subtotal);
  document.getElementById('sum-tot').textContent = fmt(subtotal);

  localStorage.setItem('motovibes_cart', JSON.stringify(
    cart.map(({ id, qty }) => ({ id, qty }))
  ));
  document.getElementById('flow-pay-btn').href = 'checkout.html';
}

/* ══════════════════════════════════════
   SIDEBAR — ABRIR / CERRAR
══════════════════════════════════════ */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar').setAttribute('aria-hidden', 'false');
  document.getElementById('backdrop').classList.add('open');
  document.getElementById('cart-open').setAttribute('aria-expanded', 'true');
  document.getElementById('cart-close').focus();
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar').setAttribute('aria-hidden', 'true');
  document.getElementById('backdrop').classList.remove('open');
  document.getElementById('cart-open').setAttribute('aria-expanded', 'false');
  document.getElementById('cart-open').focus();
}

document.getElementById('cart-open').addEventListener('click', openSidebar);
document.getElementById('cart-close').addEventListener('click', closeSidebar);
document.getElementById('backdrop').addEventListener('click', closeSidebar);
document.getElementById('cont-btn').addEventListener('click', closeSidebar);
document.getElementById('empty-link')?.addEventListener('click', closeSidebar);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
let toastTimer;

function showToast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════
   SCROLL — HEADER
══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
});

/* ══════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════
   RESTAURAR CARRITO AL CARGAR
══════════════════════════════════════ */
syncCart();
