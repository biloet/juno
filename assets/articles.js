// Data artikel riset. Tambah artikel baru cukup dengan menambah objek di array ini.
// Field: id (slug URL), cat (field|teardown|playbook), title, excerpt, date (YYYY-MM-DD), author, body (HTML).
// Isi artikel adalah contoh — ganti dengan tulisan asli Anda.
window.ARTICLES = [
  {
    id: 'agen-customer-support',
    cat: 'field',
    title: 'Ketika agen mulai menangani customer support penuh',
    excerpt: 'Apa yang berhasil, apa yang rusak, dan di mana manusia masih dibutuhkan.',
    date: '2026-10-21',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Customer support adalah fungsi pertama yang hampir selalu diserahkan ke agen. Volumenya tinggi, polanya berulang, dan hasilnya mudah diukur. Tapi "mudah diotomasi" tidak sama dengan "aman diotomasi sepenuhnya".</p>
<h2>Kenapa support jadi titik awal</h2>
<p>Sebagian besar tiket support jatuh ke beberapa kategori yang sama: status pesanan, pengembalian dana, reset akun, dan pertanyaan produk dasar. Untuk kategori seperti ini, agen bisa membaca riwayat pelanggan, memeriksa sistem, dan menyelesaikan tiket tanpa menunggu jam kerja.</p>
<p>Keuntungan terbesarnya bukan sekadar biaya, melainkan <strong>waktu respons</strong>. Pelanggan yang dijawab dalam hitungan menit cenderung jauh lebih puas daripada yang menunggu hingga hari kerja berikutnya.</p>
<h2>Apa yang sering rusak</h2>
<ul>
  <li><strong>Kasus tepi yang emosional.</strong> Pelanggan yang marah atau sedang dalam situasi sulit butuh empati dan fleksibilitas yang sering di luar aturan tertulis.</li>
  <li><strong>Kebijakan yang ambigu.</strong> Jika aturan pengembalian dana tidak jelas, agen akan menafsirkannya secara tidak konsisten.</li>
  <li><strong>Aksi tak bisa dibatalkan.</strong> Pengembalian dana besar atau penutupan akun adalah keputusan yang mahal jika salah.</li>
</ul>
<blockquote>Agen yang baik bukan yang tidak pernah eskalasi, melainkan yang tahu persis kapan harus eskalasi.</blockquote>
<h2>Pola yang berhasil</h2>
<p>Tim yang berhasil biasanya memakai tiga lapis: agen menyelesaikan tiket rutin secara otomatis, agen menyiapkan draf untuk tiket berisiko sedang lalu manusia menyetujui, dan tiket berisiko tinggi langsung diteruskan ke manusia beserta ringkasan konteks.</p>
<div class="callout"><strong>Aturan praktis:</strong> mulai dengan agen dalam mode "draf saja" selama beberapa minggu. Ukur seberapa sering manusia mengubah draf, lalu buka otomasi penuh untuk kategori yang hampir tidak pernah diubah.</div>
<h2>Di mana manusia tetap dibutuhkan</h2>
<p>Manusia tetap memegang kebijakan: apa yang boleh dijanjikan, batas kompensasi, dan nada komunikasi brand. Peran mereka bergeser dari menjawab tiket menjadi merancang aturan dan meninjau pola kegagalan.</p>
`
  },
  {
    id: 'agensi-pemasaran-nol-karyawan',
    cat: 'teardown',
    title: 'Membangun ulang agensi pemasaran dengan nol karyawan',
    excerpt: 'Eksperimen pikiran: memetakan setiap peran ke agen dan alur kerja.',
    date: '2026-10-14',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Ini adalah eksperimen pikiran: jika sebuah agensi pemasaran dibangun dari nol hari ini, peran mana yang bisa dijalankan agen, dan peran mana yang tetap butuh manusia?</p>
<h2>Memetakan peran</h2>
<p>Agensi pemasaran pada umumnya terdiri dari account manager, strategist, copywriter, desainer, media buyer, dan analis. Kami memetakan setiap peran ke salah satu dari tiga kategori.</p>
<table>
  <thead><tr><th>Peran</th><th>Dijalankan oleh</th><th>Catatan</th></tr></thead>
  <tbody>
    <tr><td>Copywriter</td><td>Agen</td><td>Draf massal, variasi A/B, adaptasi channel</td></tr>
    <tr><td>Analis</td><td>Agen</td><td>Laporan harian dan deteksi anomali</td></tr>
    <tr><td>Media buyer</td><td>Agen + guardrail</td><td>Batas anggaran harian, persetujuan untuk kenaikan</td></tr>
    <tr><td>Desainer</td><td>Agen + review</td><td>Aset turunan otomatis, konsep utama ditinjau</td></tr>
    <tr><td>Strategist</td><td>Manusia + agen</td><td>Agen riset, manusia memutuskan arah</td></tr>
    <tr><td>Account manager</td><td>Manusia</td><td>Kepercayaan klien masih soal hubungan</td></tr>
  </tbody>
</table>
<h2>Alur kerja yang muncul</h2>
<ol>
  <li>Klien mengirim brief; agen strategi menyusun riset pasar dan tiga opsi arah.</li>
  <li>Manusia memilih arah dan menetapkan anggaran serta batasan brand.</li>
  <li>Agen kreatif memproduksi aset; agen media meluncurkan kampanye kecil sebagai uji.</li>
  <li>Agen analis melaporkan hasil harian dan mengusulkan realokasi anggaran.</li>
</ol>
<h2>Titik kegagalan</h2>
<p>Risiko terbesar ada pada <strong>konsistensi brand</strong> dan <strong>pengeluaran iklan</strong>. Tanpa panduan brand yang ketat dan batas belanja yang keras, agen bisa menghasilkan konten yang "benar secara teknis" tapi terasa asing, atau menghabiskan anggaran pada eksperimen yang tidak menjanjikan.</p>
<div class="callout"><strong>Kesimpulan:</strong> agensi seperti ini lebih mirip "satu atau dua manusia + banyak agen" daripada benar-benar nol manusia. Nilai manusia terkonsentrasi pada hubungan klien dan selera.</div>
`
  },
  {
    id: 'guardrail-anggaran-agen',
    cat: 'playbook',
    title: 'Merancang guardrail anggaran untuk agen',
    excerpt: 'Batas pengeluaran, aturan eskalasi, dan jejak audit yang praktis.',
    date: '2026-10-07',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Memberi agen akses ke uang adalah momen ketika eksperimen berubah menjadi bisnis sungguhan. Playbook ini merangkum guardrail minimum sebelum agen boleh membelanjakan sepeser pun.</p>
<h2>1. Batas berlapis</h2>
<p>Gunakan beberapa lapis batas sekaligus, bukan satu angka besar:</p>
<ul>
  <li><strong>Per transaksi</strong> — misalnya maksimal $50 tanpa persetujuan.</li>
  <li><strong>Per hari</strong> — total belanja harian per agen.</li>
  <li><strong>Per kategori</strong> — iklan, software, dan vendor punya pagu masing-masing.</li>
</ul>
<h2>2. Aturan eskalasi</h2>
<p>Tentukan dengan jelas kapan agen harus berhenti dan bertanya. Contoh pemicu eskalasi:</p>
<ul>
  <li>Transaksi melebihi batas per transaksi.</li>
  <li>Vendor atau penerima baru yang belum pernah dibayar.</li>
  <li>Kontrak berulang (langganan) dengan durasi di atas satu bulan.</li>
  <li>Pengeluaran yang tidak bisa dikembalikan.</li>
</ul>
<pre><code>policy:
  per_transaction_max: 50
  daily_max: 300
  require_approval:
    - new_vendor
    - recurring_contract
    - non_refundable
  notify: founder@contoh.com</code></pre>
<h2>3. Jejak audit</h2>
<p>Setiap pengeluaran harus tercatat dengan alasan dalam bahasa biasa: apa yang dibeli, kenapa, dan tujuan mana yang didukung. Catatan ini membuat tinjauan mingguan jauh lebih cepat dan membantu menemukan pola pemborosan.</p>
<blockquote>Jika Anda tidak bisa menjelaskan sebuah pengeluaran agen dalam satu kalimat, guardrail Anda belum cukup ketat.</blockquote>
<h2>4. Tombol darurat</h2>
<p>Selalu sediakan cara untuk membekukan semua pengeluaran agen dalam satu langkah, misalnya kartu virtual yang bisa dinonaktifkan seketika. Uji tombol ini secara berkala, bukan hanya saat terjadi masalah.</p>
<div class="callout"><strong>Mulai kecil:</strong> beri batas yang terasa terlalu ketat di awal, lalu longgarkan berdasarkan data, bukan berdasarkan rasa percaya.</div>
`
  },
  {
    id: 'agen-di-industri-manufaktur',
    cat: 'field',
    title: 'Agen di industri manufaktur: dari simulasi ke lantai pabrik',
    excerpt: 'Bagaimana otomasi agentic merambah pekerjaan industri.',
    date: '2026-09-30',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Sebagian besar pembahasan zero-human company berfokus pada bisnis digital. Namun gelombang berikutnya mulai menyentuh pekerjaan fisik dan industri, dimulai dari perencanaan dan simulasi.</p>
<h2>Dimulai dari perencanaan</h2>
<p>Sebelum menyentuh mesin, agen paling berguna di sisi perencanaan: menjadwalkan produksi, memprediksi kebutuhan bahan baku, dan menyusun pesanan pembelian. Ini pekerjaan berbasis data yang mirip dengan operasional bisnis digital.</p>
<h2>Simulasi sebagai jembatan</h2>
<p>Model simulasi memungkinkan agen menguji keputusan sebelum diterapkan di dunia nyata. Agen bisa mencoba ratusan variasi parameter proses di simulasi, lalu hanya mengusulkan yang terbaik ke insinyur manusia.</p>
<ul>
  <li>Optimasi desain komponen sebelum prototipe dibuat.</li>
  <li>Pengujian skenario gangguan rantai pasok.</li>
  <li>Penjadwalan perawatan mesin berbasis prediksi.</li>
</ul>
<h2>Kenapa lantai pabrik berbeda</h2>
<p>Kesalahan di dunia fisik punya konsekuensi yang jauh lebih berat: keselamatan pekerja, kerusakan peralatan, dan produk cacat. Karena itu, otonomi di lantai pabrik tumbuh jauh lebih lambat dan selalu dengan manusia sebagai pengawas.</p>
<blockquote>Di dunia digital, kesalahan agen bisa di-rollback. Di lantai pabrik, tidak selalu.</blockquote>
<div class="callout"><strong>Pelajaran untuk founder:</strong> mulailah dari lapisan informasi (perencanaan, pengadaan, pelaporan) dan biarkan otonomi fisik menjadi tahap terakhir.</div>
`
  },
  {
    id: 'memori-jangka-panjang-agen',
    cat: 'playbook',
    title: 'Memori jangka panjang untuk agen operator',
    excerpt: 'Cara menyimpan konteks bisnis agar agen konsisten dari hari ke hari.',
    date: '2026-09-23',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Agen yang lupa keputusan kemarin akan mengulang kesalahan yang sama hari ini. Memori jangka panjang adalah fondasi agar agen operator berperilaku konsisten.</p>
<h2>Tiga jenis memori</h2>
<ul>
  <li><strong>Memori fakta</strong> — data stabil: harga, kebijakan, profil pelanggan, kontak vendor.</li>
  <li><strong>Memori keputusan</strong> — apa yang sudah diputuskan, oleh siapa, dan alasannya.</li>
  <li><strong>Memori pelajaran</strong> — apa yang pernah gagal dan apa yang harus dihindari.</li>
</ul>
<h2>Struktur sederhana yang berhasil</h2>
<p>Anda tidak selalu butuh sistem rumit. Banyak tim memulai dengan dokumen terstruktur yang dibaca agen di awal setiap tugas:</p>
<pre><code>/memori
  bisnis.md      # misi, produk, harga, kebijakan
  keputusan.md   # log keputusan + tanggal + alasan
  pelajaran.md   # kegagalan & aturan baru
  pelanggan/     # catatan per pelanggan penting</code></pre>
<h2>Menjaga memori tetap sehat</h2>
<p>Memori yang tidak dirawat akan penuh kontradiksi. Jadwalkan peninjauan berkala: hapus informasi usang, gabungkan catatan yang tumpang tindih, dan tandai keputusan yang sudah tidak berlaku.</p>
<blockquote>Memori agen adalah dokumen hidup. Perlakukan seperti kode: ditinjau, dirapikan, dan diberi versi.</blockquote>
<div class="callout"><strong>Tips:</strong> minta agen menulis ringkasan "apa yang saya pelajari hari ini" di akhir setiap hari, lalu tinjau mingguan sebelum dimasukkan ke memori permanen.</div>
`
  },
  {
    id: 'toko-online-satu-founder-lima-agen',
    cat: 'teardown',
    title: 'Toko online yang dijalankan satu founder + lima agen',
    excerpt: 'Bedah struktur biaya, alur kerja, dan titik kegagalannya.',
    date: '2026-09-16',
    author: 'Tim Riset Autonoma',
    body: `
<p class="lead">Teardown ini membedah model ilustratif sebuah toko online kecil: satu founder, lima agen, dan tidak ada karyawan. Angka di bawah adalah contoh untuk menggambarkan struktur, bukan data perusahaan nyata.</p>
<h2>Susunan tim agen</h2>
<table>
  <thead><tr><th>Agen</th><th>Tugas utama</th><th>Butuh persetujuan untuk</th></tr></thead>
  <tbody>
    <tr><td>Produk</td><td>Riset tren, deskripsi produk, harga</td><td>Produk baru, perubahan harga &gt; 10%</td></tr>
    <tr><td>Marketing</td><td>Konten, email, iklan</td><td>Anggaran iklan di atas batas harian</td></tr>
    <tr><td>Support</td><td>Tiket, retur, ulasan</td><td>Refund di atas batas</td></tr>
    <tr><td>Operasional</td><td>Pesanan, stok, pengiriman</td><td>Supplier baru</td></tr>
    <tr><td>Keuangan</td><td>Pembukuan, laporan</td><td>Pembayaran besar</td></tr>
  </tbody>
</table>
<h2>Peran founder</h2>
<p>Founder menghabiskan waktunya untuk tiga hal: menyetujui keputusan besar, meninjau laporan harian, dan menjaga hubungan dengan supplier utama. Pekerjaan rutin sepenuhnya ditangani agen.</p>
<h2>Titik kegagalan</h2>
<ol>
  <li><strong>Koordinasi antar-agen.</strong> Agen marketing mempromosikan produk yang stoknya hampir habis karena tidak membaca data operasional terbaru.</li>
  <li><strong>Kebisingan persetujuan.</strong> Terlalu banyak permintaan persetujuan membuat founder kewalahan dan mulai menyetujui tanpa membaca.</li>
  <li><strong>Supplier.</strong> Hubungan dengan supplier masih sangat bergantung pada komunikasi manusia.</li>
</ol>
<div class="callout"><strong>Perbaikan:</strong> satu sumber data bersama untuk semua agen, serta pengelompokan persetujuan menjadi satu ringkasan harian alih-alih notifikasi satu per satu.</div>
`
  }
];

window.CATEGORY_LABEL = { field: 'Field Notes', teardown: 'Teardown', playbook: 'Playbook' };

window.readingTime = html => {
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
};

window.formatDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
