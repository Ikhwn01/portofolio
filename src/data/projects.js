export const projectsData = [
  {
    id: "website-absensi-karyawan",
    index: "01",
    title: "Website Absensi Karyawan",
    subtitle: "Sistem manajemen absensi online berbasis Next.js App Router dengan dashboard HR & karyawan",
    description: "Aplikasi web absensi karyawan full-stack berbasis Next.js dan TypeScript. Dilengkapi dashboard terpisah untuk Admin HRD dan Karyawan, sistem pencatatan clock-in/out real-time, manajemen data karyawan, dan laporan kehadiran.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/website-absensi-karyawan",
    demo: "https://absensi-karyawan.example.com",
    featured: true,
    caseStudy: {
      overview: "Sistem Absensi Karyawan memodernisasi pencatatan kehadiran perusahaan dari metode manual menjadi portal digital yang cepat, terstruktur, dan aman.",
      problem: "Pencatatan absensi manual berisiko terjadi kecurangan titip absen, lambat saat kalkulasi laporan bulanan HRD, dan tidak adanya visibilitas real-time.",
      solution: "Membangun platform Next.js App Router dengan server actions, autentikasi terproteksi, dashboard khusus HR & Karyawan, serta export laporan absensi bulanan.",
      keyFeatures: [
        "Dashboard terpisah untuk Admin HRD dan Portal Karyawan",
        "Pencatatan Clock-In & Clock-Out absensi real-time",
        "Manajemen data karyawan dan departemen perusahaan (CRUD)",
        "Infrastruktur automated database seeding & migration",
        "Export laporan rekapitulasi kehadiran bulanan ke PDF & Excel",
        "Autentikasi aman dengan verifikasi role user"
      ],
      process: "Merancang arsitektur Next.js App Router, mengimplementasikan action handlers untuk data karyawan, membangun layout dashboard dengan Tailwind CSS, dan mengoptimalkan query database.",
      challenges: "Memastikan hak akses halaman terisolasi dengan aman antara portal karyawan biasa dan dashboard admin HRD.",
      results: "Mengeliminasi pencatatan fisik 100%, memangkas waktu audit absensi HRD hingga 85%, dan menyediakan pelaporan kehadiran yang akurat."
    }
  },
  {
    id: "project-booking-bengkel",
    index: "02",
    title: "Project Booking Bengkel",
    subtitle: "Sistem reservasi dan booking servis kendaraan otomatis berbasis web",
    description: "Platform web pemesanan dan penjadwalan servis kendaraan berbasis TypeScript. Memudahkan pelanggan melakukan reservasi teknisi, memilih jam layanan, dan memantau status pengerjaan servis secara online.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/project-booking-bengkel",
    demo: "https://booking-bengkel.example.com",
    featured: true,
    caseStudy: {
      overview: "Project Booking Bengkel adalah solusi digital untuk memfasilitasi penjadwalan perawatan dan perbaikan kendaraan secara efisien tanpa antrean panjang.",
      problem: "Antrean bengkel manual sering menyebabkan penumpukan kendaraan, alokasi mekanik yang tidak teratur, dan ketidakpastian waktu tunggu bagi pelanggan.",
      solution: "Mengembangkan aplikasi booking online di mana pelanggan dapat memilih jenis layanan, memilih slot waktu bebas, dan menerima konfirmasi jadwal servis otomatis.",
      keyFeatures: [
        "Formulir reservasi layanan servis kendaraan interaktif",
        "Pemilihan slot waktu & penugasan mekanik otomatis",
        "Dashboard pemantauan status pengerjaan servis",
        "Riwayat pemeliharaan dan rekomendasi penggantian suku cadang",
        "Notifikasi pengingat servis berkala"
      ],
      process: "Mendesain skema alur reservasi, membangun antarmuka UI dengan Tailwind CSS, serta mengintegrasikan validasi form jadwal tanpa bentrok jam kerja.",
      challenges: "Mencegah bentrok jadwal booking (double-booking) pada slot waktu dan mekanik yang sama.",
      results: "Meningkatkan efisiensi alokasi mekanik bengkel dan mengurangi waktu tunggu antrean pelanggan hingga 60%."
    }
  },
  {
    id: "smartpos-demo",
    index: "03",
    title: "SmartPOS System",
    subtitle: "Aplikasi Point of Sale (POS) dan kasir digital cerdas berbasis Laravel",
    description: "Sistem Kasir (POS) dan manajemen penjualan modern berbasis Laravel. Menyediakan antarmuka checkout kasir cepat, manajemen stok otomatis, pencetakan struk digital, dan analisis laporan transaksi bulanan.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0a6756da99fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/smartpos-demo",
    demo: "https://smartpos-demo.example.com",
    featured: true,
    caseStudy: {
      overview: "SmartPOS menyediakan sistem Kasir digital terintegrasi untuk bisnis retail dan UMKM guna mempercepat proses transaksi dagang.",
      problem: "Proses kalkulasi transaksi manual rawan kesalahan hitung, pembuatan struk fisik yang lambat, dan tidak adanya pembukuan laba-rugi otomatis.",
      solution: "Membangun sistem Point of Sale berbasis Laravel dengan antarmuka kasir cepat, perhitungan kembalian/diskon otomatis, dan pencetakan struk transaksi.",
      keyFeatures: [
        "Layout meja kasir POS responsif dengan pencarian cepat produk",
        "Pencetakan struk transaksi thermal & faktur digital PDF",
        "Pemotongan stok barang otomatis saat transaksi selesai",
        "Dashboard laporan penjualan harian, mingguan, dan bulanan",
        "Dukungan berbagai metode pembayaran (Tunai, QRIS, Transfer)"
      ],
      process: "Mendesain arsitektur MVC Laravel, membuat relasi database transaksi, serta mengoptimalkan respon antarmuka kasir agar cepat saat proses scan/input barang.",
      challenges: "Menjaga kecepatan pemrosesan transaksi di bawah 2 detik per transaksi kasir.",
      results: "Mempercepat waktu pelayanan kasir dan memberikan laporan keuangan harian yang 100% akurat."
    }
  },
  {
    id: "toko-ikhwan-grogol",
    index: "04",
    title: "Toko Ikhwan Grogol",
    subtitle: "Platform toko online e-commerce untuk manajemen produk dan transaksi retail",
    description: "Aplikasi web toko online berbasis PHP & Laravel. Dilengkapi fitur katalog produk digital, keranjang belanja, kalkulasi pesanan, dan sistem manajemen persediaan produk toko.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0a6756da99fc?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0a6756da99fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/Toko-Ikhwan-Grogol",
    demo: "https://toko-grogol.example.com",
    featured: true,
    caseStudy: {
      overview: "Platform E-Commerce Toko Ikhwan Grogol dibangun untuk memperluas jangkauan pemasaran produk toko secara online.",
      problem: "Keterbatasan jangkauan pelanggan fisik toko lokal dan tidak adanya katalog produk digital yang bisa diakses pelanggan 24/7.",
      solution: "Membangun toko online berbasis web lengkap dengan manajemen produk, kategori barang, keranjang belanja (shopping cart), dan formulir checkout pesanan.",
      keyFeatures: [
        "Katalog produk interaktif dengan pencarian dan filter kategori",
        "Keranjang belanja (Shopping Cart) & ringkasan pesanan",
        "Dashboard admin manajemen stok dan pesanan masuk",
        "Tampilan web responsif yang ramah pengguna smartphone"
      ],
      process: "Mengembangkan skema database MySQL produk, membangun fitur keranjang belanja berbasis session/database, dan merancang antarmuka UI e-commerce.",
      challenges: "Mengelola konsistensi data stok produk saat terjadi pemesanan simultan.",
      results: "Meningkatkan visibilitas produk toko secara digital dan mempermudah pemesanan bagi pelanggan dari luar daerah."
    }
  },
  {
    id: "katalog-foto",
    index: "05",
    title: "Katalog Foto Web App",
    subtitle: "Sistem manajemen galeri foto digital dan portofolio produk visual",
    description: "Aplikasi web manajemen katalog foto dan aset visual berbasis Laravel Blade. Memungkinkan pengguna mengunggah, mengategorikan, dan menampilkan katalog foto resolusi tinggi secara responsif.",
    category: "UI/UX",
    categories: ["UI/UX", "WEB", "PERSONAL"],
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/katalog-foto",
    demo: "https://katalog-foto.example.com",
    featured: true,
    caseStudy: {
      overview: "Katalog Foto Web App dirancang khusus untuk manajemen aset visual, galeri produk, dan pengorganisasian karya dokumentasi foto.",
      problem: "Aset foto berukuran besar sering berantakan di penyimpanan biasa, lambat dimuat di web, dan sulit dikategorikan berdasarkan album/event.",
      solution: "Menciptakan platform galeri foto terstruktur dengan kompresi thumbnail otomatis, kategori album, dan fitur pengorganisasian tag foto.",
      keyFeatures: [
        "Upload foto dengan pembuatan thumbnail otomatis",
        "Pengelompokan foto berdasarkan Album & Kategori",
        "Modal lightbox tampilan foto fullscreen",
        "Fitur pencarian foto berdasarkan judul dan deskripsi"
      ],
      process: "Mengintegrasikan library pemroses gambar Laravel, merancang layout grid galeri responsif, dan menyusun antarmuka lightbox visual.",
      challenges: "Mengoptimalkan kompresi ukuran gambar tanpa mengurangi kualitas visual saat ditampilkan.",
      results: "Menyediakan repositori aset visual yang rapi, cepat, dan mudah diakses dari perangkat desktop maupun seluler."
    }
  },
  {
    id: "braftdev",
    index: "06",
    title: "BraftDev Studio Website",
    subtitle: "Website profil studio pengembang web interaktif & layanan digital",
    description: "Platform landing page modern untuk studio pengembangan software dan digital agency. Menampilkan portofolio layanan web, animasi UI interaktif, dan layout responsif.",
    category: "UI/UX",
    categories: ["UI/UX", "WEB", "PERSONAL"],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/braftdev",
    demo: "https://braftdev.example.com",
    featured: true,
    caseStudy: {
      overview: "BraftDev Studio Website dibuat sebagai profil digital studio pengembang perangkat lunak untuk menampilkan keahlian dan portofolio proyek.",
      problem: "Kebutuhan akan branding web agency yang profesional dan dinamis untuk menarik minat klien potensial.",
      solution: "Merancang landing page dengan arsitektur UI/UX bersih, animasi scroll halus, daftar layanan software development, dan formulir konsultasi proyek.",
      keyFeatures: [
        "Desain antarmuka modern dengan komponen UI responsif",
        "Showcase daftar layanan pembuatan website & aplikasi",
        "Section portofolio hasil karya studio",
        "Formulir kontak & pengajuan ide proyek"
      ],
      process: "Merancang wireframe visual, menulis kode struktur HTML5 dan stylesheet CSS3 yang bersih, serta menerapkan animasi interaksi JavaScript.",
      challenges: "Membuat tata letak yang konsisten dan tampak elegan pada berbagai ukuran resolusi layar.",
      results: "Menyediakan profil identitas digital yang profesional bagi studio pengembang."
    }
  },
  {
    id: "portfolio-website",
    index: "07",
    title: "Light Futuristic Developer Portfolio",
    subtitle: "2026 state-of-the-art interactive personal web application showcase",
    description: "Website portofolio pribadi modern berbasis React, Tailwind CSS, dan Framer Motion dengan estetika Light Futuristic, custom dual cursor, dan case study modal interaktif.",
    category: "UI/UX",
    categories: ["UI/UX", "WEB", "PERSONAL"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/Ikhwn01/portofolio",
    demo: "https://ikhwanmuarif.dev",
    featured: true,
    caseStudy: {
      overview: "Portofolio developer unggulan yang dirancang untuk menampilkan standar estetika visual 2026, konsep Light Futuristic, glassmorphism, dan interaktivitas tinggi.",
      problem: "Portofolio standar sering kali tampak biasa, kurang interaktif, atau tidak menonjolkan proses engineering proyek secara mendalam.",
      solution: "Mengembangkan aplikasi React kustom dengan sistem desain glassmorphic, micro-animation Framer Motion, switcher tema, dan modal case study interaktif.",
      keyFeatures: [
        "Estetika visual Light Futuristic dengan aksen Electric Blue & Violet",
        "Dual custom magnetic cursor dengan animasi morphing interaktif",
        "3D Abstract Orb interaktif dengan floating node teknologi",
        "Tab filter project dan sistem pencarian real-time",
        "Modal Case Study lengkap dengan galeri foto fullscreen",
        "Timeline perjalanan karier & statistik counter animasi"
      ],
      process: "Mendesain sistem token warna, membangun komponen UI reusable, mengimplementasikan context tema, dan mengoptimalkan render cycle.",
      challenges: "Menjaga performa animasi tetap berada di 60 FPS pada berbagai perangkat.",
      results: "Menghasilkan portofolio developer berkinerja tinggi dengan identitas visual yang kuat."
    }
  }
];
