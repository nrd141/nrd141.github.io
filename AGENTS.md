# AGENTS.md

Panduan untuk AI agent / kontributor yang bekerja di repo ini.

## Ringkasan

Repo `nrd141.github.io` adalah situs portofolio pribadi **Naufaldi Rahmatullah Dwihartantyo** (Technical Consultant, Microsoft Dynamics 365 Business Central, Surabaya) yang di-host di **GitHub Pages**. Situs murni statis: tanpa build step, tanpa package manager, tanpa framework JS. Deploy otomatis dari branch utama.

## Struktur

```
/
├── index.html                     # Halaman utama (portofolio/CV); markup saja
├── pp.jpg                         # Foto profil (avatar hero)
├── assets/
│   ├── style.css                  # Semua CSS halaman utama (termasuk @media print untuk "Download CV")
│   ├── main.js                    # Semua JS halaman utama (i18n, menu, scrollspy, reveal, dll.)
│   ├── low-poly-bg.svg            # Background hero
│   └── low-poly-footer.svg        # Background footer
├── portfolio/
│   ├── Robocamp-App/              # Demo: web platform kursus & marketplace robotika
│   │   ├── robocamp.html, browse-videos.html, styles.css, stylesvid.css
│   │   └── ArduinoNano.webp, LCDDisplay.jpg, LM35.JPG
│   └── BootstrapWeb/              # Demo: website "GameCompany" (Bootstrap 5.3.2)
│       ├── index.html, style.css, assets/*.jpg
└── .gitattributes                 # text=auto (normalisasi LF)
```

README di kedua subproject hanya berisi judul kosong; README Robocamp masih berjudul "Roboverse-App" (nama lama).

## index.html (halaman utama)

- **Tema:** dark premium dengan aksen emas, gaya low-poly.
- **Design tokens (`:root` di `assets/style.css`):** `--bg`, `--bg-alt`, `--panel`, `--text`, `--text-dim`, `--text-faint` (#8a92a6, sudah dinaikkan agar lolos kontras AA), `--heading`, `--gold`, `--gold-soft`, `--panel-border`, `--line`. Selalu pakai variabel ini, jangan hardcode warna.
- **Font (Google Fonts):** Cormorant Garamond (heading, brand) dan Inter (body).
- **Layout:** `.wrap` max-width 880px; nav sticky; breakpoint mobile 640px.
- **Section (id → nomor):** `about` 01, `experience` 02, `education` 03, `skills` 04, `work` 05, `contact` 06. Nomor ditulis manual di `.block-num`; perbarui bila section ditambah/dihapus.
- **Komponen CSS yang dipakai ulang:** `.entry` (timeline), `.sub-heading`, `.skill-group` + `.chip`, `.case-card` (studi kasus), `.proj-card` di `.grid-2`, `.contact-item`, `.toggle-btn`.

### Fitur interaktif (semua di `assets/main.js`, vanilla JS, tanpa dependensi)

- **i18n EN/ID:** teks Inggris adalah sumber kebenaran di `index.html` (atribut `data-i18n="kunci"`; `data-i18n-aria` untuk `aria-label`). Hanya terjemahan Indonesia yang disimpan di objek `ID` pada `main.js`. Teks Inggris diambil dari DOM saat load. Pilihan bahasa disimpan di `localStorage` (`lang`), default mengikuti `navigator.language`. **Saat menambah teks baru:** beri `data-i18n`, lalu tambahkan kunci yang sama di `ID`. Teks nama orang/perusahaan/teknologi sengaja tidak diterjemahkan.
- **Teks dinamis non-i18n:** `#exp-years` (dihitung dari `2024-08-01`, format di `YEARS`) dan tombol `#more-btn` (label di `MORE`).
- **Experience "show more":** 3 proyek terakhir ada di `#more-exp` (atribut `hidden`), dibuka oleh `#more-btn`. Saat print, CSS memaksa semuanya tampil.
- **Download CV:** `#cv-btn` memanggil `window.print()`; `@media print` di `style.css` membuat tampilan CV bersih (terang, tanpa nav/hero bg/work/tombol). Pengguna memilih "Save as PDF". Bila nanti ada file PDF resmi, arahkan `href` ke file itu dan hapus handler `cvBtn` di `main.js`.
- **Nomor telepon:** tidak ada di HTML. `#phone-link` baru merakit nomor (`+62 856 3600 067`) dan link `wa.me` di JS setelah diklik. Jangan menaruh nomor kembali sebagai teks statis.
- **Menu mobile:** `#menu-btn` (hamburger, ≤640px) men-toggle `.open` pada `#nav-links`; tutup dengan klik link atau Esc.
- **Scrollspy:** `IntersectionObserver` memberi `.active` pada link nav sesuai section.
- **Scroll reveal:** section `.reveal` fade-in; hanya aktif bila class `js` terpasang di `<html>` (skrip inline di `<head>`), dan dimatikan oleh `prefers-reduced-motion`.
- **Back to top:** `#to-top` muncul setelah scroll > 600px.

### Konten (mengikuti CV terbaru)

- Pengalaman: Technical Consultant di PT. Wahana Ciptasinatria sejak Agustus 2024.
- Proyek Business Central: Toshiba Asia Pacific Indonesia (migrasi NAV → BC cloud), Hasil Fastindo, Calvary Abadi, Subur Buana Raya, YKK AP Indonesia, Lautindo Synergy Sejahtera.
- **Selected Work** berisi 3 studi kasus BC (Toshiba, Hasil Fastindo, YKK AP) yang disusun dari fakta di Experience (tanpa angka karangan); demo Robocamp dan GameCompany dipindah ke sub-bagian "Side Projects".
- Kursus: Fresh Graduate Academy (Data Science), Bangkit Academy (Cloud Computing, proyek "Turtlify").
- Pendidikan: ITS, Teknik Komputer, GPA 3.40, lulus 2024.
- Kontak: email, LinkedIn `naufaldird`, GitHub `nrd141`, telepon (disembunyikan), lokasi Surabaya. Data pribadi asli; jangan diubah atau dihapus tanpa diminta.

## Subproject

- **Robocamp-App:** HTML + CSS biasa (font Open Sans). Sebagian besar link masih placeholder (`href="#"`).
- **BootstrapWeb:** Bootstrap 5.3.2 via CDN, font Rubik, animate.css 4.1.1 dan WOW.js 1.1.2 (CDN).

Keduanya proyek demo/arsip lama dengan gaya sendiri, terpisah dari tema halaman utama. Jangan menyatukan style-nya kecuali diminta.

## Konvensi saat mengubah

- Tetap statis: jangan menambah bundler, npm, atau dependensi build. Library hanya lewat CDN.
- Gunakan path relatif agar jalan di GitHub Pages (`assets/...`, `portfolio/...`).
- Entitas HTML (`&mdash;`, `&amp;`, `&middot;`) dipakai untuk karakter khusus di markup; ikuti gaya itu.
- Indentasi 4 spasi di `index.html`, `style.css`, `main.js`; 2 spasi di Robocamp-App.
- Tidak ada test atau linter. Verifikasi manual di browser (desktop dan lebar ≤ 640px), cek kedua bahasa, dan coba Print preview.
- Jangan mengarang angka/hasil proyek di studi kasus; hanya pakai fakta yang sudah ada di CV.

## Git

- Branch utama menerima merge lewat PR (contoh: PR #1 dari `claude/fix-portfolio-education-6br1kn`).
- Pesan commit singkat dan deskriptif (contoh: "Redesign portfolio with premium low-poly dark theme").
- `.gitattributes` memakai `text=auto`, jadi peringatan LF/CRLF di Windows wajar.

## Backlog ide perbaikan (belum dikerjakan)

Dari review sebelumnya; kerjakan nanti bila diminta.

- **Angka terukur di Experience:** tambahkan hasil kuantitatif (jumlah report, modul, user, waktu yang dihemat) di deskripsi pengalaman. Butuh data dari pemilik; jangan ditebak.
- **Sertifikasi:** section atau chip khusus bila ada (mis. MB-800, AZ-900).
- **Open Graph & Twitter card:** `og:title`, `og:description`, `og:image`, `twitter:card` supaya preview link di LinkedIn/WhatsApp tidak kosong.
- **SEO tambahan:** JSON-LD `Person`, `canonical`, `robots.txt`, `sitemap.xml`.
- **Gambar lanjutan:** `pp.jpg` sudah dikecilkan (384px, ±20 KB); opsional konversi ke WebP/AVIF dan `<picture>`.
- **README subproject:** isi README Robocamp-App (ganti judul "Roboverse-App") dan BootstrapWeb dengan screenshot, tech stack, dan tautan live.
- **Link placeholder Robocamp:** rapikan `href="#"` (isi atau tandai sebagai demo).

## Hasil Lighthouse (lokal, 2026-11-24)

Mobile: Performance 95, Accessibility 100, Best Practices 100, SEO 100. Desktop: 99/100/100/100.
Perbaikan yang sudah dilakukan: foto profil dikecilkan, favicon SVG inline (monogram NRD), Google Fonts dimuat non-blocking (`media="print"` + `onload`, dengan `<noscript>` fallback).
Sisa temuan kecil: minify CSS/JS (±4 KiB dan ±3 KiB) dan cache header, yang tidak bisa diatur di GitHub Pages. Jalankan ulang di `https://nrd141.github.io` setelah merge untuk angka sebenarnya.
