// Render halaman detail artikel berdasarkan ?id=slug
(() => {
  const id = new URLSearchParams(location.search).get('id');
  const list = window.ARTICLES || [];
  const idx = list.findIndex(a => a.id === id);
  const $ = sel => document.getElementById(sel);

  if (idx === -1) {
    $('article').hidden = true;
    $('notFound').hidden = false;
    document.title = 'Artikel tidak ditemukan — Autonoma';
    return;
  }

  const a = list[idx];
  const cat = CATEGORY_LABEL[a.cat];
  document.title = `${a.title} — Autonoma`;
  document.querySelector('meta[name="description"]').setAttribute('content', a.excerpt);

  $('crumbCat').textContent = cat;
  $('artCat').textContent = cat;
  $('artTitle').textContent = a.title;
  $('artExcerpt').textContent = a.excerpt;
  $('artAuthor').textContent = a.author;
  $('artDate').textContent = formatDate(a.date);
  $('artRead').textContent = readingTime(a.body);
  $('artBody').innerHTML = a.body;

  // Daftar isi otomatis dari <h2>
  const slug = t => t.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
  const headings = [...$('artBody').querySelectorAll('h2')];
  $('toc').innerHTML = headings.map(h => {
    h.id = slug(h.textContent);
    return `<li><a href="#${h.id}">${h.textContent}</a></li>`;
  }).join('');
  if (!headings.length) document.querySelector('.toc').hidden = true;

  // Sorot bagian yang sedang dibaca
  const tocLinks = [...$('toc').querySelectorAll('a')];
  const tocIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      tocLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  headings.forEach(h => tocIO.observe(h));

  // Progress bar membaca
  const bar = $('progress');
  const body = $('artBody');
  const updateProgress = () => {
    const r = body.getBoundingClientRect();
    const total = r.height - window.innerHeight * 0.6;
    const p = Math.min(Math.max(-r.top / Math.max(total, 1), 0), 1);
    bar.style.width = (p * 100) + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Share
  $('shareX').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(location.href)}`;
  $('copyLink').addEventListener('click', async e => {
    try { await navigator.clipboard.writeText(location.href); e.target.textContent = '✓ Tersalin'; }
    catch { e.target.textContent = 'Gagal menyalin'; }
    setTimeout(() => (e.target.textContent = 'Salin link'), 2000);
  });

  // Sebelumnya / berikutnya
  const prev = list[idx + 1], next = list[idx - 1];
  const pagerLink = (art, label, cls) => art
    ? `<a class="pager__link ${cls}" href="artikel.html?id=${art.id}"><small>${label}</small><span>${art.title}</span></a>`
    : '<span></span>';
  $('pager').innerHTML = pagerLink(prev, '← Sebelumnya', '') + pagerLink(next, 'Berikutnya →', 'pager__link--next');

  // Artikel terkait: kategori sama dulu, lalu sisanya
  const related = list.filter(x => x.id !== a.id)
    .sort((x, y) => (y.cat === a.cat) - (x.cat === a.cat))
    .slice(0, 3);
  $('related').innerHTML = related.map(r => `
    <a class="post" href="artikel.html?id=${r.id}">
      <span class="post__cat">${CATEGORY_LABEL[r.cat]}</span>
      <h3>${r.title}</h3>
      <p>${r.excerpt}</p>
      <span class="post__meta">${formatDate(r.date)} · ${readingTime(r.body)} menit baca</span>
    </a>`).join('');
})();
