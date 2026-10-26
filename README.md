# Rancangan Website Pastry — Maison Crème

Template website statis responsif untuk usaha pastry/roti. Isi meliputi:
- Banner utama dengan foto pastry
- Katalog produk, deskripsi singkat, dan harga contoh
- Form pesanan dengan pilihan produk, jumlah, perkiraan total, catatan, dan tombol WhatsApp
- Bagian testimoni contoh
- Tampilan responsif untuk ponsel dan desktop

## Isi folder
- `index.html` — struktur halaman
- `style.css` — tampilan dan responsif
- `script.js` — kalkulasi harga dan integrasi WhatsApp
- `README.md` — panduan pemasangan

## 1. Sesuaikan sebelum dipublikasikan
1. Buka `script.js`.
2. Ganti `WHATSAPP_NUMBER = "6281234567890"` dengan nomor WhatsApp bisnis Anda. Gunakan kode negara Indonesia `62`, tanpa `+`, spasi, atau tanda hubung. Contoh format: `628xxxxxxxxxx`.
3. Di `index.html`, ubah nama brand “Maison Crème”, nama produk, harga, deskripsi, dan ulasan sesuai usaha Anda.
4. Ganti ulasan contoh dengan testimoni asli yang sudah mendapat izin pelanggan.
5. Foto produk menggunakan URL Unsplash sehingga perlu koneksi internet. Ganti URL foto pada `index.html` dengan foto produk milik Anda untuk hasil yang lebih autentik.
6. Harga di katalog dan pilihan produk pada form perlu tetap sama dengan daftar harga pada `script.js`.

## 2. Publikasikan gratis melalui GitHub Pages
1. Login atau buat akun di https://github.com.
2. Buat repository baru, misalnya `website-pastry`.
3. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke root repository (bukan hanya file ZIP).
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`, kemudian **Save**.
6. Tunggu proses publikasi. URL biasanya berbentuk `https://USERNAME.github.io/website-pastry/`.
7. Buka URL tersebut dan uji katalog serta tombol WhatsApp dari ponsel.

## 3. Tampilkan di Google Sites
Google Sites tidak menjalankan unggahan file HTML/CSS/JS sebagai situs mandiri secara langsung. Cara praktisnya adalah meng-host template ini di GitHub Pages terlebih dahulu, lalu menyematkan URL GitHub Pages ke Google Sites.

1. Buat situs di https://sites.google.com.
2. Pilih **Sisipkan (Insert) → Sematkan (Embed)**.
3. Pilih tab **URL**, masukkan URL GitHub Pages yang sudah aktif, lalu klik **Sisipkan**.
4. Atur ukuran frame/section agar nyaman dilihat. Publikasikan Google Sites.
5. Jika penyematan tidak tampil atau terlalu sempit, gunakan tombol/link di Google Sites menuju situs GitHub Pages. Situs GitHub Pages dapat tetap menjadi website utama.

## Catatan
- Ini adalah rancangan front-end statis, belum terhubung ke database, sistem pembayaran, atau inventaris.
- Tombol WhatsApp membuka aplikasi/WhatsApp Web dengan pesan yang sudah disusun. Pelanggan tetap perlu menekan tombol kirim di WhatsApp.
- Harga, nama brand, gambar, dan testimoni yang ada hanyalah contoh desain.
