(function () {
    'use strict';

    /* ---------- i18n ----------
       English is the source of truth in index.html (elements carry data-i18n="key").
       Only Indonesian strings live here; English is captured from the DOM on load. */
    var ID = {
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.education': 'Pendidikan',
        'nav.skills': 'Keahlian',
        'nav.work': 'Karya',
        'nav.contact': 'Kontak',
        'menu.aria': 'Buka menu navigasi',
        'totop.aria': 'Kembali ke atas',

        'hero.role': 'Microsoft Dynamics 365 Business Central — Pengembangan & Konsultasi ERP',
        'hero.loc': 'Surabaya, Jawa Timur, Indonesia',
        'hero.cta.contact': 'Hubungi Saya',
        'hero.cta.work': 'Lihat Karya',
        'hero.cta.cv': 'Unduh CV',

        'about.title': 'Tentang',
        'about.lead': 'Technical Consultant dengan pengalaman dua tahun di bidang ERP Microsoft Dynamics 365 Business Central. Terlibat dalam berbagai proyek yang mencakup pembuatan laporan kustom, perancangan proses bisnis, dan migrasi on-premise ke cloud — mahir menggunakan Microsoft AL dengan fokus pada kustomisasi dan alur kerja ERP yang praktis.',

        'exp.title': 'Pengalaman',
        'exp.sub.projects': 'Proyek — Dynamics 365 Business Central',
        'exp.sub.courses': 'Kursus',
        'p.aug24': 'Agustus 2024 — Sekarang',
        'p.jun26': 'Juni 2026 — Sekarang',
        'p.feb25': 'Februari 2025 — Sekarang',
        'p.may26': 'Mei 2026 — Sekarang',
        'p.subur': 'Agustus 2024 — Desember 2025',
        'p.ykk': 'Juni 2025 — Agustus 2025',
        'p.lautindo': 'April 2025 — Juli 2025',
        'p.ds': 'Februari 2024 — April 2024',
        'p.cloud': 'Agustus 2023 — Desember 2023',
        'e.migration': 'Migrasi ERP',
        'e.implsupport': 'Implementasi dan Dukungan ERP',
        'e.impl': 'Implementasi ERP',
        'e.support': 'Dukungan ERP',
        'd.wahana': 'Memberikan konsultasi teknis, pengembangan, dan dukungan untuk sistem Microsoft Dynamics 365 Business Central. Mahir menggunakan AL dan pengembangan extension untuk menyesuaikan sistem ERP.',
        'd.toshiba': 'Memimpin migrasi teknis dari Dynamics NAV lama ke Business Central cloud — mengelola migrasi data, merefaktor kode C/AL lama menjadi extension AL modern, dan merancang ulang integrasi yang sudah usang pada modul Sales & Purchasing, Supply Chain, dan Finance.',
        'd.hasil': 'Bergabung di tengah proyek untuk membuat laporan kustom pada modul Finance dan Supply Chain. Bertugas onsite selama dua minggu saat go-live untuk menyelesaikan kendala teknis, dan hingga kini memberikan dukungan harian serta perbaikan bug.',
        'd.calvary': 'Mengembangkan laporan keuangan dan operasional baru serta menyesuaikan laporan standar di Business Central, dengan dukungan berkelanjutan seiring perubahan kebutuhan bisnis.',
        'd.subur': 'Terlibat pada fase pengembangan untuk membangun proses bisnis dan laporan kustom, dengan fokus pada modul Finance dan Supply Chain.',
        'd.ykk': 'Bergabung di tengah proyek sebagai dukungan cadangan, bekerja onsite di pabrik klien selama dua bulan untuk menyesuaikan laporan dan memperbaiki bug pada modul Manufacturing dan Production.',
        'd.lautindo': 'Bergabung pada fase dukungan untuk mengembangkan pembaruan modul HR, dengan fokus pada pencatatan absensi dan sistem penggajian.',
        'd.ds': 'Kursus tiga bulan yang mencakup SQL, analisis dan visualisasi data, machine learning, serta studi kasus terapan.',
        'd.cloud': 'Peringkat Top 50 untuk proyek capstone "Turtlify" sebagai backend developer — membangun REST API dengan Node.js, aplikasi Flask untuk model machine learning, dan men-deploy ke Google Cloud Platform.',

        'edu.title': 'Pendidikan',
        'edu.org': 'Teknik Komputer · IPK 3,40 / 4,00',
        'edu.period': 'Surabaya, Jawa Timur, Indonesia — Lulus 2024',
        'edu.desc': 'Mengambil peminatan pengembangan Software dan IoT. Tugas akhir: game edukasi penanganan kelistrikan kapal yang dibangun dengan Unreal Engine 5.',

        'skills.title': 'Keahlian',
        'skills.erp': 'ERP & Microsoft',
        'skills.add': 'Tambahan',

        'work.title': 'Karya Pilihan',
        'case.context': 'Konteks',
        'case.did': 'Kontribusi',
        'case.modules': 'Modul',
        'case1.title': 'Migrasi NAV → Business Central Cloud',
        'case1.context': 'Dynamics NAV lama dengan kode C/AL kustom dan integrasi yang sudah usang.',
        'case1.did': 'Memimpin migrasi teknis: migrasi data, refaktor C/AL menjadi extension AL, dan perancangan ulang integrasi.',
        'case2.title': 'Dukungan Go-live & Laporan Kustom',
        'case2.context': 'Proyek sudah berjalan; kebutuhan laporan pada modul Finance dan Supply Chain.',
        'case2.did': 'Membuat laporan kustom, bertugas onsite dua minggu saat go-live untuk menyelesaikan kendala teknis, serta memberikan dukungan harian dan perbaikan bug.',
        'case3.title': 'Dukungan Onsite di Pabrik',
        'case3.context': 'Dukungan cadangan untuk implementasi ERP klien manufaktur.',
        'case3.did': 'Dua bulan onsite di pabrik untuk menyesuaikan laporan dan memperbaiki bug.',
        'work.side': 'Proyek Sampingan',
        'proj.robocamp.sub': 'Aplikasi web interaktif',
        'proj.game.sub': 'Website Bootstrap',
        'proj.view': 'Lihat Proyek →',

        'contact.title': 'Kontak',
        'contact.location': 'Lokasi',
        'contact.loc.value': 'Surabaya, Indonesia',
        'contact.phone': 'Telepon',
        'contact.show': 'Tampilkan nomor',
        'footer.rights': 'Hak cipta dilindungi.'
    };

    var MORE = {
        en: { more: 'Show 3 more projects', less: 'Show fewer projects' },
        id: { more: 'Tampilkan 3 proyek lainnya', less: 'Tampilkan lebih sedikit' }
    };

    var YEARS = {
        en: function (n) { return n + '+ Years Experience'; },
        id: function (n) { return n + '+ Tahun Pengalaman'; }
    };

    var lang = 'en';
    var moreOpen = false;

    function store(key, value) {
        try {
            if (value === undefined) { return localStorage.getItem(key); }
            localStorage.setItem(key, value);
        } catch (e) { /* storage unavailable */ }
        return null;
    }

    // Remember the English source text before anything is replaced.
    var i18nEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
    i18nEls.forEach(function (el) { el.dataset.en = el.innerHTML; });
    var ariaEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-aria]'));
    ariaEls.forEach(function (el) { el.dataset.enAria = el.getAttribute('aria-label') || ''; });

    var moreBtn = document.getElementById('more-btn');
    var moreBox = document.getElementById('more-exp');
    var yearsEl = document.getElementById('exp-years');
    var START = new Date('2024-08-01');

    function updateYears() {
        var years = (new Date() - START) / (1000 * 60 * 60 * 24 * 365.25);
        if (!yearsEl) { return; }
        yearsEl.textContent = years >= 1 ? YEARS[lang](Math.floor(years)) : 'Technical Consultant';
    }

    function updateMoreBtn() {
        if (moreBtn) { moreBtn.textContent = MORE[lang][moreOpen ? 'less' : 'more']; }
    }

    function applyLang(next) {
        lang = next;
        document.documentElement.lang = next;

        i18nEls.forEach(function (el) {
            if (!el.hasAttribute('data-i18n')) { return; } // e.g. revealed phone link
            var key = el.getAttribute('data-i18n');
            el.innerHTML = (next === 'id' && ID[key] !== undefined) ? ID[key] : el.dataset.en;
        });

        ariaEls.forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', (next === 'id' && ID[key]) ? ID[key] : el.dataset.enAria);
        });

        Array.prototype.forEach.call(document.querySelectorAll('.lang-btn'), function (btn) {
            btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === next ? 'true' : 'false');
        });

        updateYears();
        updateMoreBtn();
    }

    Array.prototype.forEach.call(document.querySelectorAll('.lang-btn'), function (btn) {
        btn.addEventListener('click', function () {
            var chosen = btn.getAttribute('data-lang');
            store('lang', chosen);
            applyLang(chosen);
        });
    });

    var saved = store('lang');
    var initial = saved || ((navigator.language || '').toLowerCase().indexOf('id') === 0 ? 'id' : 'en');
    applyLang(initial === 'id' ? 'id' : 'en');

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    /* ---------- Experience: show more / fewer ---------- */
    function setMore(open) {
        moreOpen = open;
        if (moreBox) { moreBox.hidden = !open; }
        if (moreBtn) { moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
        updateMoreBtn();
    }

    if (moreBtn) {
        moreBtn.addEventListener('click', function () { setMore(!moreOpen); });
    }

    /* ---------- Download CV (print stylesheet -> Save as PDF) ---------- */
    var cvBtn = document.getElementById('cv-btn');
    if (cvBtn) {
        cvBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.print();
        });
    }

    /* ---------- Phone: revealed on click, not present in the HTML ---------- */
    var phone = document.getElementById('phone-link');
    if (phone) {
        phone.addEventListener('click', function (e) {
            if (phone.getAttribute('data-revealed')) { return; }
            e.preventDefault();
            var parts = ['62', '856', '3600', '067'];
            phone.removeAttribute('data-i18n');
            phone.removeAttribute('role');
            phone.setAttribute('data-revealed', '1');
            phone.href = 'https://wa.me/' + parts.join('');
            phone.target = '_blank';
            phone.rel = 'noopener';
            phone.textContent = '+' + parts[0] + ' ' + parts[1] + ' ' + parts[2] + ' ' + parts[3];
        });
    }

    /* ---------- Mobile menu ---------- */
    var menuBtn = document.getElementById('menu-btn');
    var navLinks = document.getElementById('nav-links');

    function closeMenu() {
        if (!navLinks) { return; }
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        navLinks.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') { closeMenu(); }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeMenu(); }
        });
    }

    /* ---------- Active nav link on scroll ---------- */
    var sections = Array.prototype.slice.call(document.querySelectorAll('section.block[id]'));
    var linkMap = {};
    Array.prototype.forEach.call(document.querySelectorAll('nav.links a[href^="#"]'), function (a) {
        linkMap[a.getAttribute('href').slice(1)] = a;
    });

    if ('IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) { return; }
                Object.keys(linkMap).forEach(function (id) { linkMap[id].classList.remove('active'); });
                var link = linkMap[entry.target.id];
                if (link) { link.classList.add('active'); }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        sections.forEach(function (s) { spy.observe(s); });

        /* ---------- Scroll reveal ---------- */
        var reveal = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    reveal.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { reveal.observe(el); });
    } else {
        Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
    }

    /* ---------- Back to top ---------- */
    var toTop = document.getElementById('to-top');
    if (toTop) {
        window.addEventListener('scroll', function () {
            toTop.classList.toggle('show', window.scrollY > 600);
        }, { passive: true });
        toTop.addEventListener('click', function () {
            var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        });
    }
})();
