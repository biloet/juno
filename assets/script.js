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

// Animated counters
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, start = performance.now(), dur = 1600;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString('id-ID') + (p === 1 && target >= 100 ? '+' : '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

// Program filter
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  document.querySelectorAll('#programGrid .card').forEach(card => {
    card.classList.toggle('is-hidden', f !== 'all' && card.dataset.cat !== f);
  });
}));

// Testimonial slider
const track = document.getElementById('sliderTrack');
const dotsWrap = document.getElementById('sliderDots');
const slides = track.children.length;
let current = 0, timer;
for (let i = 0; i < slides; i++) {
  const d = document.createElement('button');
  d.setAttribute('aria-label', `Testimoni ${i + 1}`);
  d.addEventListener('click', () => { go(i); restart(); });
  dotsWrap.appendChild(d);
}
function go(i) {
  current = (i + slides) % slides;
  track.style.transform = `translateX(-${current * 100}%)`;
  [...dotsWrap.children].forEach((d, idx) => d.classList.toggle('is-active', idx === current));
}
function restart() { clearInterval(timer); timer = setInterval(() => go(current + 1), 5000); }
go(0); restart();

// Contact form (front-end only)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.nama.value.trim();
  document.getElementById('formMsg').textContent = `Terima kasih, ${name}! Tim kami akan segera menghubungi Anda.`;
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
