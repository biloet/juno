# Autonoma — Zero-Human Company Landing Page

Landing page statis (HTML + CSS + JavaScript murni) bertema **zero-human company**: perusahaan yang operasionalnya dijalankan agen AI, dengan manusia memegang arah dan tata kelola.

## Bagian halaman
Navbar · Hero dengan terminal log agen (simulasi live) · Ticker · Konsep (tradisional vs zero-human) · Cara Kerja · Bangun (Atlas & Swarm) · Riset (dengan filter) · Statistik · Membership (dengan kuota kursi) · FAQ · CTA newsletter · Footer

## Struktur
- `index.html` — konten halaman
- `assets/styles.css` — tema gelap, responsive
- `assets/script.js` — menu mobile, animasi scroll, terminal agen, counter, kuota kursi, filter riset, form

## Menjalankan
Buka `index.html` di browser, atau:

```bash
python3 -m http.server 8000
```

## Kustomisasi
- Nama brand "Autonoma" dan agen "Atlas" adalah placeholder — ganti di `index.html`.
- Warna di variabel `:root` pada `assets/styles.css`.
- Isi log terminal di array `events` dan angka kursi (`TOTAL`, `TAKEN`) di `assets/script.js`.
- Artikel riset, statistik, dan harga adalah contoh; ganti dengan data asli.
- Form newsletter hanya front-end; hubungkan ke layanan email (mis. Buttondown, Mailchimp, Formspree).

## Halaman artikel riset
- Semua artikel ada di `assets/articles.js` (array `ARTICLES`). Tambah artikel = tambah satu objek.
- Halaman detail: `artikel.html?id=<slug>` — berisi breadcrumb, progress bar membaca, daftar isi otomatis dari `<h2>`, tombol bagikan, artikel sebelumnya/berikutnya, dan artikel terkait.
- Kartu riset di beranda dibuat otomatis dari data yang sama.
