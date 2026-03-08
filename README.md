# PRISMA SLR Generator 📊

Aplikasi web interaktif untuk menghasilkan dan mengelola **Diagram Alir PRISMA 2020** yang dikhususkan untuk keperluan penelitian _Systematic Literature Review_ (SLR) atau skripsi. Aplikasi ini memungkinkan pengguna untuk memasukkan data skrining literatur secara langsung dan mengekspor hasilnya menjadi file PDF atau PNG berkualitas tinggi.

Proyek ini menggunakan **SolidJS**, kerangka kerja UI reaktif modern yang menawarkan performa luar biasa, dipadukan dengan **Tailwind CSS v4** untuk styling yang cepat dan responsif.

## Fitur Utama ✨
- **Formulir PRISMA Interaktif**: Masukkan angka dan teks alasan eksklusi, diagram akan langsung diperbarui (*real-time*).
- **Export ke PDF**: Cetak diagram langsung menggunakan fitur bawaan peramban (browser).
- **Export ke PNG**: Unduh diagram sebagai gambar PNG beresolusi tinggi dengan satu klik.
- **Desain Bersih & Responsif**: Antarmuka pengguna (UI) modern menggunakan Tailwind CSS.

## Teknologi yang Digunakan 🛠️
- [SolidJS](https://www.solidjs.com/) - Library UI reaktif berkinerja tinggi (sebelumnya React).
- [Vite](https://vitejs.dev/) - Tooling front-end generasi terbaru yang sangat cepat.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS *utility-first* untuk styling modern.
- [html-to-image](https://github.com/bubkoo/html-to-image) - Library modern handal untuk konversi elemen HTML ke dalam format gambar.
- [Lucide Solid](https://lucide.dev/) - Ikon SVG modern dan indah.

## Cara Menjalankan Aplikasi Lokal 🚀

### Persyaratan Sistem
Pastikan Anda sudah menginstal **Node.js** (rekomendasi v18+) dan manajer paket **pnpm**.

### Instalasi & Menjalankan Mode Pengembangan
1. Klon repositori ini atau masuk ke direktori proyek Anda.
2. Instal semua dependensi:
   ```bash
   pnpm install
   ```
3. Jalankan *development server*:
   ```bash
   pnpm run dev
   ```
   > **Catatan:** Jika server lokal Anda sudah berjalan sebelumnya dan terdapat error konfigurasi, silakan **restart** terminal/server Anda dengan mematikan proses (`Ctrl+C`) lalu jalankan `pnpm run dev` kembali.
4. Buka tautan lokal yang diberikan di terminal (umumnya `http://localhost:5173` atau `5174`) di peramban web Anda.

## Struktur Komponen (Refactored) 📂
Kode utama telah dipecah menjadi komponen modular menggunakan SolidJS, demi kemudahan pengelolaan:
* `src/main.jsx`: Entri utama aplikasi SolidJS dan impor CSS.
* `src/App.jsx`: State global dan logika export (PNG & PDF).
* `src/components/Sidebar.jsx`: Komponen formulir parameter skrining.
* `src/components/Diagram.jsx`: Komponen pratinjau canvas visual PRISMA 2020. 

## Lisensi 📄
Proyek ini dibuat untuk keperluan akademis & bebas digunakan oleh mahasiswa serta peneliti.
