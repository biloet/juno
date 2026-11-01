// Navbar: scroll state + mobile menu
const nav = document.querySelector('.nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const toTop = document.getElementById('toTop');

const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
  toTop.classList.toggle('is-visible', window.scrollY > 600);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
  nav.classList.toggle('menu-open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  nav.classList.remove('menu-open');
}));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Live agent terminal (simulated activity log)
const term = document.getElementById('terminal');
const events = [
  ['sales', 'menjawab 3 pertanyaan prospek baru'],
  ['ops', 'memproses 12 pesanan → dikirim'],
  ['fin', 'rekonsiliasi transaksi harian: OK'],
  ['mkt', 'menerbitkan artikel: "5 tips onboarding"'],
  ['ops', 'tiket support #482 diselesaikan (2m 14s)'],
  ['sales', 'mengirim penawaran ke 2 klien B2B'],
  ['fin', 'pengeluaran iklan $38 / batas $50 ✓'],
  ['mkt', 'A/B test headline: varian B +12% CTR'],
  ['ops', 'memperbarui stok dari supplier'],
  ['hum', 'persetujuan diminta: kontrak > $1.000'],
  ['fin', 'laporan harian dikirim ke founder'],
  ['sales', 'follow-up otomatis: 7 lead hangat'],
];
const pad = n => String(n).padStart(2, '0');
let ei = 0;
function addLog() {
  const [ag, msg] = events[ei++ % events.length];
  const d = new Date();
  const line = document.createElement('div');
  line.className = 'log' + (ag === 'hum' ? ' log--hum' : '');
  line.innerHTML = `<time>${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}</time><span class="ag ag--${ag}">[${ag === 'hum' ? 'human' : ag}]</span>${msg}`;
  const cursor = term.querySelector('.cursor-line');
  term.insertBefore(line, cursor);
  const logs = term.querySelectorAll('.log');
  if (logs.length > 13) logs[0].remove();
}
const cursorLine = document.createElement('div');
cursorLine.className = 'cursor-line';
cursorLine.innerHTML = '<span style="color:var(--primary)">atlas ❯</span> <span class="cursor"></span>';
term.appendChild(cursorLine);
for (let i = 0; i < 6; i++) addLog();
setInterval(addLog, 1600);

// Animated counters
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
    const start = performance.now(), dur = 1500;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

// Membership seats (contoh angka — ganti dengan data asli)
const TOTAL = 500, TAKEN = 362;
const seatsIO = new IntersectionObserver(([e]) => {
  if (!e.isIntersecting) return;
  document.getElementById('seatsFill').style.width = (TAKEN / TOTAL * 100) + '%';
  document.getElementById('seatsLeft').textContent = TOTAL - TAKEN;
  seatsIO.disconnect();
}, { threshold: 0.4 });
seatsIO.observe(document.querySelector('.seats'));

// Research filter
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  document.querySelectorAll('#researchGrid .post').forEach(p => {
    p.classList.toggle('is-hidden', f !== 'all' && p.dataset.cat !== f);
  });
}));

// Subscribe form (front-end only)
document.getElementById('subscribeForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').textContent = `✓ ${e.target.email.value} terdaftar. Sampai jumpa di inbox.`;
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
