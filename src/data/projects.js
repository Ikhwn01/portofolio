export const projectsData = [
  {
    id: "employee-attendance-system",
    index: "01",
    title: "Employee Attendance Management System",
    subtitle: "Full-stack Next.js web application for employee clock-in, HR admin control, and attendance analytics",
    description: "A modern web-based attendance platform built with Next.js App Router and TypeScript. Features separate Admin & Employee dashboards, automated clock-in/clock-out tracking, employee records management, and real-time attendance analytics.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/ikhwan01/website-absensi-karyawan",
    demo: "https://absensi-karyawan.example.com",
    featured: true,
    caseStudy: {
      overview: "The Employee Attendance Management System streamlines corporate HR attendance logging. It replaces paper sign-in sheets with a secure digital portal accessible by employees and HR administrators.",
      problem: "Manual attendance logs are susceptible to buddy punching, inaccurate time recording, cumbersome monthly HR audits, and lack of instant attendance visibility for department managers.",
      solution: "Developed an enterprise-grade Next.js App Router application with server actions, secure authentication, dedicated Admin and Employee dashboards, database seeding scripts, and automated attendance reporting.",
      keyFeatures: [
        "Dedicated Admin Dashboard & Employee Portal interfaces",
        "Real-time Clock-In / Clock-Out attendance logging",
        "Employee records management (CRUD employee data & departments)",
        "Automated database seeding & migration infrastructure",
        "Monthly HR attendance report generation & PDF export",
        "Secure authentication & role-based route authorization"
      ],
      process: "Designed Next.js App Router architecture, implemented server-side action handlers for employee CRUD operations, built responsive dashboard layouts with Tailwind CSS, and optimized database queries.",
      challenges: "Ensuring strict server-side authorization so employees can only view and modify their own attendance logs while HR admins maintain full organizational oversight.",
      results: "Eliminated paper attendance records entirely, reduced HR monthly attendance auditing time by 85%, and provided instant attendance tracking."
    }
  },
  {
    id: "inventory-management-system",
    index: "02",
    title: "Inventory Management System",
    subtitle: "Enterprise-grade web application for real-time stock control and warehouse tracking",
    description: "A comprehensive web-based inventory management system designed for tracking products, monitoring stock thresholds in real time, generating automated reorder alerts, and analyzing inventory movement trends.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/ikhwanmuarif/inventory-management-system",
    demo: "https://inventory-demo.example.com",
    featured: true,
    caseStudy: {
      overview: "The Inventory Management System addresses the critical operational challenge of manual stock counting and untracked inventory leaks. It offers a centralized dashboard to automate stock management across multiple locations.",
      problem: "Small to medium enterprises often rely on fragmented spreadsheets or paper logs, leading to stockout risks, over-purchasing, human data entry errors, and lack of real-time visibility into inventory levels.",
      solution: "Built a custom PHP & MySQL backend with an intuitive JavaScript dashboard. The platform features automated stock alerts, barcode scanning compatibility, batch processing, and multi-user role management.",
      keyFeatures: [
        "Real-time stock tracking with automated low-stock notifications",
        "Role-based access control (Admin, Warehouse Staff, Manager)",
        "Barcode / QR code scanning integration for fast item check-in/out",
        "Detailed audit trail and movement history logs",
        "Comprehensive PDF & Excel exportable analytics reports"
      ],
      process: "Conducted user workflow mapping, designed database ERD schemas, created wireframes, implemented secure PHP REST APIs, and integrated responsive frontend views with real-time chart visualizations.",
      challenges: "Ensuring database consistency during simultaneous concurrent stock deductions from multiple staff members while maintaining fast query responses on large product catalogs.",
      results: "Reduced manual audit time by 65%, eliminated stockout incidents by 80% with automated alerts, and streamlined daily warehouse checkouts."
    }
  },
  {
    id: "stock-prediction-system",
    index: "03",
    title: "Stock Prediction System",
    subtitle: "Data-driven web application to predict future inventory demand and optimize stock levels",
    description: "An intelligent analytics application designed to process historical inventory data and calculate predictive trends for upcoming stock requirements, helping businesses prevent overstocking and stockouts.",
    category: "DESKTOP",
    categories: ["WEB", "DESKTOP", "ACADEMIC"],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/ikhwanmuarif/stock-prediction-system",
    demo: "https://stock-predict.example.com",
    featured: true,
    caseStudy: {
      overview: "Stock Prediction System utilizes time-series forecasting algorithm models based on historical sales logs to forecast future product demand with visual chart indicators.",
      problem: "Unpredictable market demand leads to tied-up capital in slow-moving items and lost revenue from depleted high-demand items.",
      solution: "Developed a predictive module integrated with PHP/MySQL backend using Moving Average and Trend Linear algorithms visualized in responsive interactive charts.",
      keyFeatures: [
        "Historical sales data import & automatic statistical analysis",
        "Moving Average algorithm forecasting engine",
        "Interactive demand trend charts & seasonal pattern highlights",
        "Restock recommendation engine based on safety stock thresholds",
        "Exportable forecasting reports for purchasing managers"
      ],
      process: "Analyzed mathematical forecasting models, created optimized SQL queries for data aggregation, built frontend charts with Chart.js, and validated prediction accuracy against real historical datasets.",
      challenges: "Handling anomalous sales spikes (e.g. promotional events) to ensure baseline forecasting models weren't skewed artificially.",
      results: "Achieved an average of 88% prediction accuracy for fast-moving items, improving procurement planning efficiency by 50%."
    }
  },
  {
    id: "sales-management-system",
    index: "04",
    title: "Sales Management System",
    subtitle: "High-performance POS and transactions platform with real-time financial reporting",
    description: "A sleek web-based Point of Sale (POS) and sales transaction management platform. Streamlines product checkout, invoice generation, customer tracking, and daily financial summaries.",
    category: "WEB",
    categories: ["WEB", "PERSONAL"],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0a6756da99fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/ikhwanmuarif/sales-management-system",
    demo: "https://sales-demo.example.com",
    featured: true,
    caseStudy: {
      overview: "Designed to provide retail businesses with a reliable, ultra-fast transaction desk interface paired with robust backend financial analytics.",
      problem: "Traditional cashier setups were slow, required expensive hardware licenses, and made end-of-day revenue calculation error-prone.",
      solution: "Created a lightweight web POS system accessible on desktop and tablet browsers, featuring instant receipt generation, discount calculators, and automated revenue reconciliation.",
      keyFeatures: [
        "Rapid cashier POS layout with hotkey shortcuts",
        "Instant thermal receipt formatting & digital PDF invoices",
        "Customer profile tracking & transaction history",
        "Daily, weekly, and monthly revenue analytics dashboard",
        "Multi-payment method support (Cash, QRIS, Transfer)"
      ],
      process: "Focused heavily on UI response speed, created a client-side transaction state cache to prevent checkout latency, and engineered backend transactional database integrity.",
      challenges: "Minimizing DOM rendering latency during fast product searches and maintaining sub-second cashier checkout performance.",
      results: "Accelerated transaction processing time to under 10 seconds per customer, with 100% accurate automated daily bookkeeping."
    }
  },
  {
    id: "portfolio-website",
    index: "05",
    title: "Light Futuristic Developer Portfolio",
    subtitle: "2026 state-of-the-art interactive personal web application showcase",
    description: "A modern, light futuristic personal portfolio website built with React, Tailwind CSS, and Framer Motion. Built to impress with smooth animations, custom interactive elements, and responsive case study displays.",
    category: "UI/UX",
    categories: ["UI/UX", "WEB", "PERSONAL"],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    github: "https://github.com/ikhwanmuarif/portfolio-2026",
    demo: "https://ikhwanmuarif.dev",
    featured: true,
    caseStudy: {
      overview: "A flagship developer portfolio engineered to break away from generic templates, demonstrating 2026 visual excellence, light futuristic aesthetic, glassmorphism, and seamless interactivity.",
      problem: "Standard developer portfolios often look generic, lack interactive depth, or fail to effectively highlight project case studies and engineering processes.",
      solution: "Engineered a custom React application with tailored glassmorphic design system tokens, Framer Motion spring micro-animations, theme toggles, and rich interactive modal case studies.",
      keyFeatures: [
        "Light Futuristic visual aesthetic with Electric Blue & Violet accents",
        "Dual custom magnetic cursor with interactive state morphing",
        "Interactive 3D Abstract Orb with floating technology nodes",
        "Project filter tabs and real-time instant search engine",
        "Rich Case Study modal viewer with fullscreen photo gallery",
        "Scroll-driven animated timeline & stats counters"
      ],
      process: "Designed complete color token system, crafted high-performance reusable UI components, implemented theme context, optimized Framer Motion render cycles, and tuned accessibility contrast.",
      challenges: "Maintaining 60 FPS animation performance across desktop and mobile browsers while keeping asset payload lightweight.",
      results: "Delivered a 100/100 Lighthouse performance-oriented developer showcase with memorable brand identity."
    }
  }
];
