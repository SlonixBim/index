export interface Course {
  id: string;
  title: string;
  category: string;
  gradient: string;
  duration: string;
  level: string;
  description: string;
  fullDescription: string;
  rating: number;
  students: number;
  instructor: string;
  whatYouWillLearn: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  prerequisites: string[];
  imageUrl: string;
}

export const courses: Course[] = [
  {
    id: "full-stack-webdev",
    title: "Full Stack Web Development",
    category: "IT Programs",
    gradient: "from-violet-600 to-purple-500",
    duration: "16 week's",
    level: "Beginner to Advanced",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js, and databases to build complete web applications from scratch.",
    fullDescription:
      "A comprehensive full stack web development course covering frontend (HTML5, CSS3, JavaScript ES6+, React), backend (Node.js, Express), databases (MySQL, MongoDB), REST APIs, and deployment. Build real-world projects and launch a professional portfolio.",
    rating: 4.8,
    students: 9240,
    instructor: "Karthik Rajan, Full Stack Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    whatYouWillLearn: [
      "Build responsive websites with HTML5 and CSS3",
      "Write modern JavaScript and ES6+ features",
      "Create dynamic UIs with React and hooks",
      "Build REST APIs with Node.js and Express",
      "Work with MySQL and MongoDB databases",
      "Deploy full stack apps to the cloud",
    ],
    curriculum: [
      {
        module: "Module 1: Frontend Basics",
        topics: [
          "HTML5 structure",
          "CSS3 & Flexbox/Grid",
          "Responsive design",
          "Bootstrap",
        ],
      },
      {
        module: "Module 2: JavaScript & React",
        topics: [
          "JS ES6+",
          "DOM manipulation",
          "React components",
          "Hooks & state management",
        ],
      },
      {
        module: "Module 3: Backend with Node.js",
        topics: [
          "Node.js basics",
          "Express framework",
          "REST API design",
          "Authentication & JWT",
        ],
      },
      {
        module: "Module 4: Databases & Deployment",
        topics: [
          "MySQL & MongoDB",
          "ORM/ODM",
          "Git & GitHub",
          "Deployment on Vercel/AWS",
        ],
      },
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience needed",
    ],
  },
  {
    id: "full-stack-java",
    title: "Full Stack Java Development",
    category: "IT Programs",
    gradient: "from-red-600 to-red-500",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    description:
      "Build enterprise applications with Java, Spring Boot, and modern frameworks.",
    fullDescription:
      "Become a full-stack Java developer with expertise in Spring Boot, Hibernate, React, and microservices architecture. Build production-ready enterprise applications.",
    rating: 4.7,
    students: 6340,
    instructor: "Vikram Singh, Senior Java Architect",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    whatYouWillLearn: [
      "Master Java programming fundamentals",
      "Build REST APIs with Spring Boot",
      "Implement database operations with Hibernate",
      "Create responsive frontends with React",
      "Deploy microservices architecture",
      "Write unit and integration tests",
    ],
    curriculum: [
      {
        module: "Module 1: Java Fundamentals",
        topics: [
          "OOP concepts",
          "Collections framework",
          "Exception handling",
          "Multithreading",
        ],
      },
      {
        module: "Module 2: Spring Framework",
        topics: [
          "Dependency injection",
          "Spring Boot",
          "Spring MVC",
          "Spring Security",
        ],
      },
      {
        module: "Module 3: Database & ORM",
        topics: ["SQL basics", "JDBC", "Hibernate", "JPA repositories"],
      },
      {
        module: "Module 4: Frontend Development",
        topics: [
          "HTML/CSS/JavaScript",
          "React basics",
          "State management",
          "API integration",
        ],
      },
      {
        module: "Module 5: Microservices",
        topics: [
          "Service architecture",
          "Spring Cloud",
          "API gateway",
          "Service discovery",
        ],
      },
      {
        module: "Module 6: Testing & Deployment",
        topics: ["JUnit testing", "Mockito", "Docker", "CI/CD pipelines"],
      },
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web technologies",
      "Familiarity with databases helpful",
    ],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    category: "IT Programs",
    gradient: "from-red-700 to-red-600",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description:
      "Master Python programming from basics to advanced applications.",
    fullDescription:
      "Learn Python from scratch and build real-world applications. Cover web development, data analysis, automation, and more with hands-on projects.",
    rating: 4.9,
    students: 8920,
    instructor: "Dr. Sarah Johnson, Python Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800&q=80",
    whatYouWillLearn: [
      "Write clean, efficient Python code",
      "Build web applications with Django/Flask",
      "Automate tasks and workflows",
      "Work with databases and APIs",
      "Analyze data with Pandas and NumPy",
      "Create data visualizations",
    ],
    curriculum: [
      {
        module: "Module 1: Python Fundamentals",
        topics: [
          "Variables and data types",
          "Control structures",
          "Functions",
          "Modules and packages",
        ],
      },
      {
        module: "Module 2: Object-Oriented Programming",
        topics: [
          "Classes and objects",
          "Inheritance",
          "Polymorphism",
          "Design patterns",
        ],
      },
      {
        module: "Module 3: Web Development",
        topics: [
          "Flask basics",
          "Django framework",
          "REST APIs",
          "Database integration",
        ],
      },
      {
        module: "Module 4: Data Analysis",
        topics: [
          "Pandas library",
          "NumPy arrays",
          "Data cleaning",
          "Statistical analysis",
        ],
      },
      {
        module: "Module 5: Automation",
        topics: [
          "File operations",
          "Web scraping",
          "Task scheduling",
          "Email automation",
        ],
      },
      {
        module: "Module 6: Advanced Topics",
        topics: [
          "Async programming",
          "Testing",
          "Deployment",
          "Best practices",
        ],
      },
    ],
    prerequisites: [
      "Basic programming concepts helpful but not required",
      "Computer with Python installed",
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI Mastery Suite",
    category: "IT Programs",
    gradient: "from-red-600 to-red-500",
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    description:
      "Build intelligent systems with machine learning algorithms and neural networks.",
    fullDescription:
      "Learn AI and machine learning from fundamentals to advanced deep learning. Work with TensorFlow, PyTorch, and build real AI applications.",
    rating: 4.9,
    students: 4890,
    instructor: "Dr. Arun Kumar, AI Researcher",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    whatYouWillLearn: [
      "Understand machine learning fundamentals",
      "Build neural networks with TensorFlow",
      "Implement computer vision solutions",
      "Create NLP applications",
      "Train deep learning models",
      "Deploy AI models to production",
    ],
    curriculum: [
      {
        module: "Module 1: ML Foundations",
        topics: [
          "Supervised learning",
          "Unsupervised learning",
          "Model evaluation",
          "Feature engineering",
        ],
      },
      {
        module: "Module 2: Classical ML",
        topics: [
          "Linear regression",
          "Decision trees",
          "SVM",
          "Ensemble methods",
        ],
      },
      {
        module: "Module 3: Neural Networks",
        topics: ["Perceptrons", "Backpropagation", "CNNs", "RNNs"],
      },
      {
        module: "Module 4: Deep Learning",
        topics: [
          "TensorFlow",
          "PyTorch",
          "Transfer learning",
          "Model optimization",
        ],
      },
      {
        module: "Module 5: Computer Vision",
        topics: [
          "Image classification",
          "Object detection",
          "Image segmentation",
          "GANs",
        ],
      },
      {
        module: "Module 6: NLP & Deployment",
        topics: [
          "Text processing",
          "Sentiment analysis",
          "Transformers",
          "Model serving",
        ],
      },
    ],
    prerequisites: [
      "Python programming",
      "Mathematics (linear algebra, calculus)",
      "Statistics basics",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "IT Programs",
    gradient: "from-red-500 to-red-400",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    description:
      "Analyze data and create insights using Python, SQL, and visualization tools.",
    fullDescription:
      "Master data analytics with Python, SQL, Excel, and business intelligence tools. Learn to extract insights from data and create compelling visualizations.",
    rating: 4.7,
    students: 5640,
    instructor: "Priya Menon, Data Analyst",
    imageUrl:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    whatYouWillLearn: [
      "Perform exploratory data analysis",
      "Write complex SQL queries",
      "Create interactive dashboards",
      "Apply statistical analysis techniques",
      "Build predictive models",
      "Present data-driven insights",
    ],
    curriculum: [
      {
        module: "Module 1: Data Fundamentals",
        topics: [
          "Data types",
          "Data cleaning",
          "Excel advanced functions",
          "Data quality",
        ],
      },
      {
        module: "Module 2: SQL Mastery",
        topics: [
          "SELECT statements",
          "JOINs",
          "Subqueries",
          "Window functions",
        ],
      },
      {
        module: "Module 3: Python for Data",
        topics: ["Pandas", "NumPy", "Data manipulation", "File handling"],
      },
      {
        module: "Module 4: Visualization",
        topics: ["Matplotlib", "Seaborn", "Tableau basics", "Dashboard design"],
      },
      {
        module: "Module 5: Statistical Analysis",
        topics: [
          "Descriptive statistics",
          "Hypothesis testing",
          "Correlation",
          "Regression",
        ],
      },
      {
        module: "Module 6: Business Intelligence",
        topics: [
          "KPI development",
          "Reporting",
          "Business metrics",
          "Data storytelling",
        ],
      },
    ],
    prerequisites: [
      "Basic Excel knowledge",
      "Basic math skills",
      "Analytical mindset",
    ],
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    category: "IT Programs",
    gradient: "from-red-500 to-red-400",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    description:
      "Build modern web applications with MongoDB, Express, React, and Node.js.",
    fullDescription:
      "Master the MERN stack and build full-stack JavaScript applications. Learn MongoDB, Express.js, React, and Node.js with real-world projects.",
    rating: 4.8,
    students: 7560,
    instructor: "Neha Desai, Full Stack Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    whatYouWillLearn: [
      "Build complete web applications with MERN",
      "Create RESTful APIs with Node.js and Express",
      "Design NoSQL databases with MongoDB",
      "Develop dynamic UIs with React",
      "Implement authentication and authorization",
      "Deploy applications to the cloud",
    ],
    curriculum: [
      {
        module: "Module 1: JavaScript Mastery",
        topics: [
          "ES6+ features",
          "Async programming",
          "Promises",
          "Arrow functions",
        ],
      },
      {
        module: "Module 2: Node.js & Express",
        topics: [
          "Node.js fundamentals",
          "Express routing",
          "Middleware",
          "Error handling",
        ],
      },
      {
        module: "Module 3: MongoDB",
        topics: [
          "NoSQL concepts",
          "CRUD operations",
          "Aggregation",
          "Mongoose ODM",
        ],
      },
      {
        module: "Module 4: React Development",
        topics: ["Components", "Hooks", "State management", "React Router"],
      },
      {
        module: "Module 5: Full Stack Integration",
        topics: [
          "REST APIs",
          "Authentication with JWT",
          "File uploads",
          "Real-time features",
        ],
      },
      {
        module: "Module 6: Deployment",
        topics: [
          "Cloud platforms",
          "Environment variables",
          "Production builds",
          "Monitoring",
        ],
      },
    ],
    prerequisites: [
      "HTML, CSS, JavaScript knowledge",
      "Basic programming concepts",
      "Command line familiarity",
    ],
  },
  {
    id: "solidworks-mechanical-design",
    title: "SolidWorks for Mechanical Design",
    category: "Engineering Tools",
    gradient: "from-red-600 to-red-500",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    description:
      "Master 3D CAD design and engineering with industry-standard SolidWorks software.",
    fullDescription:
      "Learn to design mechanical parts and assemblies using SolidWorks, the industry-leading CAD software. This comprehensive course covers everything from basic sketching to advanced surfacing and simulation.",
    rating: 4.7,
    students: 3250,
    instructor: "Rajesh Kumar, Mechanical Design Expert",
    imageUrl:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    whatYouWillLearn: [
      "Create 3D parts and assemblies in SolidWorks",
      "Master parametric modeling and design intent",
      "Generate detailed engineering drawings",
      "Perform basic stress analysis and simulation",
      "Work with sheet metal and weldment design",
      "Create photorealistic renderings",
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to SolidWorks",
        topics: [
          "Interface overview",
          "Sketch tools and constraints",
          "Basic part modeling",
          "File management",
        ],
      },
      {
        module: "Module 2: Advanced Part Modeling",
        topics: [
          "Revolve, sweep, and loft features",
          "Shell and draft operations",
          "Patterns and mirroring",
          "Equations and design tables",
        ],
      },
      {
        module: "Module 3: Assembly Design",
        topics: [
          "Creating assemblies",
          "Mates and constraints",
          "Exploded views",
          "Bill of materials",
        ],
      },
      {
        module: "Module 4: Engineering Drawings",
        topics: [
          "Drawing templates",
          "Standard views",
          "Dimensions and annotations",
          "GD&T symbols",
        ],
      },
      {
        module: "Module 5: Sheet Metal & Weldments",
        topics: [
          "Sheet metal features",
          "Flat patterns",
          "Weldment structures",
          "Cut lists",
        ],
      },
      {
        module: "Module 6: Simulation & Rendering",
        topics: [
          "Static analysis",
          "Thermal studies",
          "PhotoView 360",
          "Material properties",
        ],
      },
    ],
    prerequisites: [
      "Basic computer skills",
      "Understanding of mechanical concepts",
      "No prior CAD experience required",
    ],
  },
  {
    id: "catia-product-engineering",
    title: "CATIA for Product Engineering",
    category: "Engineering Tools",
    gradient: "from-red-700 to-red-600",
    duration: "10 weeks",
    level: "Intermediate",
    description: "Learn advanced product engineering and design with CATIA V5.",
    fullDescription:
      "Master CATIA V5, the powerful CAD/CAM/CAE software used in automotive, aerospace, and industrial design. Learn surface modeling, assembly design, and advanced engineering techniques.",
    rating: 4.6,
    students: 2180,
    instructor: "Priya Sharma, CATIA Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    whatYouWillLearn: [
      "Navigate CATIA V5 interface and workbenches",
      "Create complex surface models",
      "Design multi-part assemblies",
      "Generate manufacturing drawings",
      "Perform kinematic simulations",
      "Work with automotive design standards",
    ],
    curriculum: [
      {
        module: "Module 1: CATIA Fundamentals",
        topics: [
          "Workbench overview",
          "Part design basics",
          "Sketcher tools",
          "Feature-based modeling",
        ],
      },
      {
        module: "Module 2: Surface Modeling",
        topics: [
          "Wireframe geometry",
          "Surface creation",
          "Blend and fillet operations",
          "Surface analysis",
        ],
      },
      {
        module: "Module 3: Assembly Design",
        topics: [
          "Product structure",
          "Assembly constraints",
          "DMU kinematics",
          "Clash detection",
        ],
      },
      {
        module: "Module 4: Drafting",
        topics: [
          "2D layout",
          "View generation",
          "Dimensioning standards",
          "Title blocks",
        ],
      },
      {
        module: "Module 5: Generative Shape Design",
        topics: [
          "Advanced surfacing",
          "Hybrid design",
          "Power copy",
          "Publications",
        ],
      },
      {
        module: "Module 6: Real Projects",
        topics: [
          "Automotive parts",
          "Consumer products",
          "Complex assemblies",
          "Portfolio development",
        ],
      },
    ],
    prerequisites: [
      "Basic CAD knowledge",
      "Understanding of engineering drawings",
      "Mechanical aptitude",
    ],
  },
  {
    id: "autocad-mastery",
    title: "AutoCAD Mastery",
    category: "Engineering Tools",
    gradient: "from-red-600 to-red-500",
    duration: "6 weeks",
    level: "Beginner to Advanced",
    description:
      "Complete AutoCAD training from basic 2D drafting to advanced 3D modeling.",
    fullDescription:
      "Become proficient in AutoCAD, the world's leading CAD software for 2D drafting and 3D modeling. Perfect for architects, engineers, and designers.",
    rating: 4.8,
    students: 5420,
    instructor: "Amit Patel, AutoCAD Certified Professional",
    imageUrl:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    whatYouWillLearn: [
      "Master 2D drafting and annotation",
      "Create precise technical drawings",
      "Work with layers, blocks, and attributes",
      "Develop 3D solid models",
      "Generate section views and details",
      "Customize AutoCAD for productivity",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD Basics",
        topics: [
          "Interface navigation",
          "Drawing commands",
          "Modification tools",
          "Object properties",
        ],
      },
      {
        module: "Module 2: Precision Drawing",
        topics: [
          "Coordinate systems",
          "Object snaps",
          "Polar tracking",
          "Dynamic input",
        ],
      },
      {
        module: "Module 3: Advanced 2D",
        topics: [
          "Layers and linetypes",
          "Blocks and attributes",
          "Hatching patterns",
          "Text and dimensions",
        ],
      },
      {
        module: "Module 4: 3D Modeling",
        topics: [
          "3D workspace",
          "Solid primitives",
          "Boolean operations",
          "Surface modeling",
        ],
      },
      {
        module: "Module 5: Layout & Plotting",
        topics: [
          "Paper space layouts",
          "Viewports",
          "Plot styles",
          "PDF export",
        ],
      },
      {
        module: "Module 6: Productivity Tools",
        topics: [
          "Tool palettes",
          "Quick select",
          "Design center",
          "Custom templates",
        ],
      },
    ],
    prerequisites: [
      "Basic computer skills",
      "Windows operating system familiarity",
      "No prior CAD experience needed",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Mastery",
    category: "Design",
    gradient: "from-red-500 to-red-400",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    description:
      "Design beautiful and intuitive user experiences with Figma and design principles.",
    fullDescription:
      "Master UI/UX design principles and tools. Learn user research, wireframing, prototyping, and visual design with Figma.",
    rating: 4.8,
    students: 5230,
    instructor: "Kavya Reddy, UX Design Lead",
    imageUrl:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
    whatYouWillLearn: [
      "Conduct user research and create personas",
      "Design wireframes and prototypes",
      "Master Figma design tool",
      "Apply visual design principles",
      "Create responsive designs",
      "Build design systems",
    ],
    curriculum: [
      {
        module: "Module 1: UX Fundamentals",
        topics: [
          "Design thinking",
          "User research methods",
          "Personas",
          "User journeys",
        ],
      },
      {
        module: "Module 2: Information Architecture",
        topics: [
          "Site mapping",
          "Navigation design",
          "Content strategy",
          "Card sorting",
        ],
      },
      {
        module: "Module 3: Wireframing",
        topics: [
          "Low-fidelity wireframes",
          "User flows",
          "Interaction design",
          "Usability testing",
        ],
      },
      {
        module: "Module 4: Visual Design",
        topics: [
          "Color theory",
          "Typography",
          "Layout principles",
          "Design systems",
        ],
      },
      {
        module: "Module 5: Figma Mastery",
        topics: ["Components", "Auto-layout", "Variants", "Prototyping"],
      },
      {
        module: "Module 6: Portfolio & Career",
        topics: [
          "Case studies",
          "Presentation skills",
          "Design critiques",
          "Job preparation",
        ],
      },
    ],
    prerequisites: [
      "No prior design experience required",
      "Basic computer skills",
      "Creative mindset",
    ],
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering Basics",
    category: "Civil Engineering",
    gradient: "from-blue-600 to-blue-500",
    duration: "10 weeks",
    level: "Beginner",
    description:
      "Learn the fundamentals of structural analysis and design for buildings.",
    fullDescription:
      "Introduction to structural engineering, covering loads, stresses, and basic design principles for steel and concrete structures.",
    rating: 4.5,
    students: 1200,
    instructor: "David Miller, Structural Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    whatYouWillLearn: [
      "Understand types of structural loads",
      "Basic stress and strain analysis",
      "Introduction to building codes",
      "Simple frame and truss design",
    ],
    curriculum: [
      {
        module: "Module 1: Load Analysis",
        topics: ["Dead loads", "Live loads", "Wind loads", "Snow loads"],
      },
    ],
    prerequisites: ["Basic Physics", "Mathematics"],
  },
  {
    id: "hvac-design",
    title: "HVAC Systems Design",
    category: "Mechanical Engineering",
    gradient: "from-orange-600 to-orange-500",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Design efficient heating, ventilation, and air conditioning systems.",
    fullDescription:
      "Comprehensive guide to HVAC design, including psychrometrics, heat load calculation, and equipment selection.",
    rating: 4.6,
    students: 950,
    instructor: "Sarah Chen, HVAC Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3d07a7c5f8e8?w=800&q=80",
    whatYouWillLearn: [
      "Heat load calculations",
      "Psychrometric analysis",
      "Duct design principles",
      "System component selection",
    ],
    curriculum: [
      {
        module: "Module 1: Thermodynamics",
        topics: ["Heat transfer", "Cooling cycles", "Refrigerants"],
      },
    ],
    prerequisites: ["Mechanical Engineering degree or student status"],
  },

  // ── EEE / ECE Courses ──────────────────────────────────────────────────────

  {
    id: "autocad-eee-ece",
    title: "AutoCAD for EEE/ECE",
    category: "EEE/ECE",
    gradient: "from-yellow-600 to-orange-500",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn AutoCAD for electrical and electronics engineering — circuit diagrams, PCB layouts, and electrical schematics.",
    fullDescription:
      "This AutoCAD course is tailored for EEE/ECE students and professionals, focusing on drawing electrical schematics, wiring diagrams, panel layouts, and PCB design documentation using AutoCAD Electrical.",
    rating: 4.6,
    students: 3870,
    instructor: "Senthil Kumar, Electrical Design Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=800&q=80",
    whatYouWillLearn: [
      "Draw electrical schematics and wiring diagrams",
      "Create panel layouts and single-line diagrams",
      "Use AutoCAD Electrical symbol libraries",
      "Generate wire numbers and component tags",
      "Produce PCB layout documentation",
      "Create professional electrical reports",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD Basics",
        topics: [
          "Interface & navigation",
          "Drawing tools",
          "Layers & properties",
          "Blocks & attributes",
        ],
      },
      {
        module: "Module 2: Electrical Schematics",
        topics: [
          "Schematic symbols",
          "Wire routing",
          "Ladder diagrams",
          "Component tagging",
        ],
      },
      {
        module: "Module 3: Panel & Layout Design",
        topics: [
          "Panel layout drawing",
          "Single-line diagrams",
          "Terminal strips",
          "Cable schedules",
        ],
      },
      {
        module: "Module 4: Reports & Output",
        topics: [
          "Bill of materials",
          "Wire list reports",
          "PDF export",
          "Project documentation",
        ],
      },
    ],
    prerequisites: [
      "Basic electrical engineering knowledge",
      "No prior AutoCAD experience needed",
    ],
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    category: "EEE/ECE",
    gradient: "from-red-600 to-orange-500",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    description:
      "Design and program embedded systems using microcontrollers, sensors, and real-time OS concepts.",
    fullDescription:
      "Master embedded systems from hardware fundamentals to firmware development. Learn to program ARM microcontrollers, interface peripherals, and work with RTOS for real-world applications.",
    rating: 4.8,
    students: 3120,
    instructor: "Suresh Babu, Embedded Systems Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    whatYouWillLearn: [
      "Program ARM/AVR microcontrollers in C",
      "Interface sensors, actuators, and displays",
      "Implement UART, SPI, I2C communication protocols",
      "Understand interrupt-driven programming",
      "Work with RTOS scheduling",
      "Debug embedded systems with oscilloscope & logic analyser",
    ],
    curriculum: [
      {
        module: "Module 1: Microcontroller Basics",
        topics: [
          "Architecture overview",
          "GPIO programming",
          "Timers & counters",
          "ADC/DAC",
        ],
      },
      {
        module: "Module 2: Communication Protocols",
        topics: ["UART", "SPI", "I2C", "CAN bus basics"],
      },
      {
        module: "Module 3: Peripheral Interfacing",
        topics: [
          "LCD & OLED displays",
          "Keypad & switches",
          "Motor drivers",
          "Sensor integration",
        ],
      },
      {
        module: "Module 4: RTOS & Interrupts",
        topics: [
          "Interrupt handling",
          "FreeRTOS basics",
          "Task scheduling",
          "Semaphores & queues",
        ],
      },
      {
        module: "Module 5: Project Development",
        topics: [
          "PCB design basics",
          "Prototyping",
          "Debugging techniques",
          "Industry projects",
        ],
      },
    ],
    prerequisites: [
      "Basic electronics knowledge",
      "C programming fundamentals",
    ],
  },

  {
    id: "vlsi-design",
    title: "VLSI Design",
    category: "EEE/ECE",
    gradient: "from-purple-600 to-red-500",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    description:
      "Learn VLSI chip design, CMOS circuits, and HDL programming for semiconductor applications.",
    fullDescription:
      "Comprehensive VLSI design course covering digital logic, CMOS design, RTL coding in Verilog/VHDL, synthesis, and physical design flow used in semiconductor industry.",
    rating: 4.7,
    students: 1850,
    instructor: "Dr. Ramesh Naidu, VLSI Design Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    whatYouWillLearn: [
      "Design combinational and sequential circuits",
      "Write RTL code in Verilog/VHDL",
      "Perform logic synthesis and optimization",
      "Understand CMOS transistor-level design",
      "Simulate designs using industry EDA tools",
      "Learn physical design and timing analysis",
    ],
    curriculum: [
      {
        module: "Module 1: Digital Logic Design",
        topics: [
          "Boolean algebra",
          "Combinational circuits",
          "Sequential circuits",
          "State machines",
        ],
      },
      {
        module: "Module 2: Verilog HDL",
        topics: [
          "Data types & operators",
          "Behavioral modeling",
          "Structural modeling",
          "Testbenches",
        ],
      },
      {
        module: "Module 3: CMOS Design",
        topics: [
          "MOSFET characteristics",
          "CMOS inverter",
          "Logic gates",
          "Pass transistor logic",
        ],
      },
      {
        module: "Module 4: Synthesis & STA",
        topics: [
          "Logic synthesis",
          "Timing constraints",
          "Setup/hold analysis",
          "Clock domain crossing",
        ],
      },
      {
        module: "Module 5: Physical Design",
        topics: [
          "Floorplanning",
          "Placement & routing",
          "DRC & LVS",
          "Tape-out flow",
        ],
      },
    ],
    prerequisites: ["Basic electronics", "Digital electronics fundamentals"],
  },

  {
    id: "iot",
    title: "Internet of Things (IoT)",
    category: "EEE/ECE",
    gradient: "from-teal-600 to-red-500",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    description:
      "Build connected IoT devices using ESP32, Raspberry Pi, cloud platforms, and real-time dashboards.",
    fullDescription:
      "End-to-end IoT development covering hardware programming, wireless connectivity (WiFi, MQTT, BLE), cloud integration (AWS IoT, Firebase), and data visualization for smart applications.",
    rating: 4.9,
    students: 4250,
    instructor: "Karthik Subramanian, IoT Solutions Architect",
    imageUrl:
      "https://images.unsplash.com/photo-1558618048-fbd3b9c5f37c?w=800&q=80",
    whatYouWillLearn: [
      "Program ESP32/ESP8266 for IoT applications",
      "Implement MQTT, HTTP, and WebSocket protocols",
      "Connect devices to AWS IoT and Firebase",
      "Build real-time sensor dashboards",
      "Implement Bluetooth Low Energy (BLE)",
      "Design low-power IoT systems",
    ],
    curriculum: [
      {
        module: "Module 1: IoT Fundamentals",
        topics: [
          "IoT architecture",
          "Sensors & actuators",
          "ESP32 programming",
          "Arduino IDE",
        ],
      },
      {
        module: "Module 2: Wireless Connectivity",
        topics: [
          "WiFi protocols",
          "MQTT broker",
          "BLE basics",
          "LoRa & NB-IoT overview",
        ],
      },
      {
        module: "Module 3: Cloud Integration",
        topics: [
          "AWS IoT Core",
          "Firebase Realtime DB",
          "Node-RED",
          "ThingSpeak",
        ],
      },
      {
        module: "Module 4: Data & Dashboards",
        topics: [
          "Grafana dashboards",
          "Data logging",
          "Alerts & notifications",
          "Edge computing",
        ],
      },
      {
        module: "Module 5: Industry Projects",
        topics: [
          "Smart home system",
          "Industrial monitoring",
          "Agriculture IoT",
          "Wearable devices",
        ],
      },
    ],
    prerequisites: ["Basic programming knowledge", "Electronics fundamentals"],
  },

  {
    id: "robotics",
    title: "Robotics",
    category: "EEE/ECE",
    gradient: "from-red-700 to-orange-600",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description:
      "Design, build, and program robots using ROS, kinematics, and autonomous navigation systems.",
    fullDescription:
      "Hands-on robotics program covering mechanical design, motor control, sensor fusion, computer vision, and ROS (Robot Operating System) for building intelligent autonomous robots.",
    rating: 4.8,
    students: 2640,
    instructor: "Anand Krishnamurthy, Robotics Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&q=80",
    whatYouWillLearn: [
      "Understand robot kinematics and dynamics",
      "Program motor controllers and servo drives",
      "Integrate LIDAR, IMU, and camera sensors",
      "Use ROS for robot software development",
      "Implement autonomous navigation with SLAM",
      "Build computer vision pipelines for robots",
    ],
    curriculum: [
      {
        module: "Module 1: Robotics Fundamentals",
        topics: [
          "Kinematics",
          "Degrees of freedom",
          "Actuators & motors",
          "Robot types",
        ],
      },
      {
        module: "Module 2: Motor Control",
        topics: [
          "DC & stepper motors",
          "PID control",
          "Servo systems",
          "H-bridge drivers",
        ],
      },
      {
        module: "Module 3: ROS Programming",
        topics: [
          "ROS architecture",
          "Topics & services",
          "URDF models",
          "Gazebo simulation",
        ],
      },
      {
        module: "Module 4: Sensors & Perception",
        topics: [
          "LIDAR integration",
          "IMU & odometry",
          "Camera calibration",
          "Sensor fusion",
        ],
      },
      {
        module: "Module 5: Autonomous Navigation",
        topics: [
          "SLAM algorithms",
          "Path planning",
          "Obstacle avoidance",
          "ROS Nav Stack",
        ],
      },
    ],
    prerequisites: ["Python or C++ basics", "Basic electronics knowledge"],
  },

  {
    id: "plc-programming",
    title: "PLC Programming",
    category: "EEE/ECE",
    gradient: "from-blue-700 to-red-500",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master PLC programming with Ladder Logic, SCADA systems, and industrial automation for manufacturing.",
    fullDescription:
      "Comprehensive PLC programming course covering Ladder Logic, FBD, Structured Text, SCADA integration, and hands-on projects with Siemens/Allen-Bradley PLCs used in industrial automation.",
    rating: 4.7,
    students: 2100,
    instructor: "Vijay Prakash, Automation Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
    whatYouWillLearn: [
      "Program PLCs using Ladder Logic and FBD",
      "Configure Siemens S7 and Allen-Bradley PLCs",
      "Design SCADA HMI screens",
      "Implement industrial communication (Modbus, Profibus)",
      "Troubleshoot PLC hardware and software faults",
      "Automate real manufacturing processes",
    ],
    curriculum: [
      {
        module: "Module 1: PLC Fundamentals",
        topics: [
          "PLC architecture",
          "Input/output modules",
          "Scan cycle",
          "Wiring basics",
        ],
      },
      {
        module: "Module 2: Ladder Logic Programming",
        topics: [
          "Contacts & coils",
          "Timers & counters",
          "Math functions",
          "Comparison instructions",
        ],
      },
      {
        module: "Module 3: Advanced Programming",
        topics: [
          "Function block diagram",
          "Structured text",
          "Sequential function chart",
          "Subroutines",
        ],
      },
      {
        module: "Module 4: SCADA & HMI",
        topics: [
          "HMI design",
          "Tag configuration",
          "Alarm management",
          "Data logging",
        ],
      },
      {
        module: "Module 5: Industrial Protocols",
        topics: ["Modbus RTU/TCP", "Profibus", "EtherNet/IP", "OPC-UA basics"],
      },
    ],
    prerequisites: [
      "Basic electrical knowledge",
      "No prior PLC experience required",
    ],
  },

  {
    id: "e-tap",
    title: "E-TAP (Electrical Power Systems)",
    category: "EEE/ECE",
    gradient: "from-yellow-600 to-red-600",
    duration: "6 weeks",
    level: "Intermediate",
    description:
      "Analyse and design electrical power systems using ETAP software for load flow, short circuit, and protection studies.",
    fullDescription:
      "Industry-standard ETAP software training for power system analysis including load flow, short circuit analysis, motor starting, arc flash, and protection coordination used in power utilities and industries.",
    rating: 4.6,
    students: 980,
    instructor: "Deepak Rajan, Power Systems Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    whatYouWillLearn: [
      "Model power systems in ETAP",
      "Perform load flow analysis",
      "Conduct short circuit and fault studies",
      "Design protection coordination schemes",
      "Run arc flash hazard analysis",
      "Model motor starting and dynamic simulations",
    ],
    curriculum: [
      {
        module: "Module 1: ETAP Interface & Modelling",
        topics: [
          "One-line diagram",
          "Bus & branch modelling",
          "Equipment libraries",
          "Load data entry",
        ],
      },
      {
        module: "Module 2: Load Flow Analysis",
        topics: [
          "Newton-Raphson method",
          "Voltage profiles",
          "Power factor correction",
          "Reports",
        ],
      },
      {
        module: "Module 3: Short Circuit Studies",
        topics: [
          "ANSI & IEC methods",
          "Fault current calculation",
          "Equipment rating",
          "Protective device sizing",
        ],
      },
      {
        module: "Module 4: Protection Coordination",
        topics: [
          "Relay settings",
          "Time-current curves",
          "Selectivity analysis",
          "Arc flash study",
        ],
      },
    ],
    prerequisites: [
      "Electrical engineering fundamentals",
      "Basic power systems knowledge",
    ],
  },

  {
    id: "e-base",
    title: "E-BASE (Electrical Design Basics)",
    category: "EEE/ECE",
    gradient: "from-red-500 to-yellow-500",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Foundation course in electrical design covering panel design, single-line diagrams, and cable sizing.",
    fullDescription:
      "E-BASE is a practical electrical design foundation program covering wiring diagrams, single-line diagrams, panel layout, cable sizing, and electrical safety standards for aspiring electrical engineers.",
    rating: 4.5,
    students: 1450,
    instructor: "Muthu Kumar, Electrical Design Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45249ff78?w=800&q=80",
    whatYouWillLearn: [
      "Read and draw single-line diagrams",
      "Design electrical panels and switchboards",
      "Calculate cable sizing and voltage drops",
      "Understand IS/IEC electrical standards",
      "Create wiring and schematic diagrams",
      "Apply electrical safety regulations",
    ],
    curriculum: [
      {
        module: "Module 1: Electrical Drawing Basics",
        topics: [
          "SLD preparation",
          "Schematic symbols",
          "Wiring diagrams",
          "AutoCAD Electrical intro",
        ],
      },
      {
        module: "Module 2: Panel & Switchboard Design",
        topics: [
          "Busbar sizing",
          "Circuit breaker selection",
          "Panel layout",
          "Earthing systems",
        ],
      },
      {
        module: "Module 3: Cable Engineering",
        topics: [
          "Cable types",
          "Sizing calculations",
          "Voltage drop",
          "Conduit & tray design",
        ],
      },
      {
        module: "Module 4: Standards & Safety",
        topics: [
          "IS 732",
          "IEC 60364",
          "Electrical safety",
          "Inspection & testing",
        ],
      },
    ],
    prerequisites: [
      "Basic electrical concepts",
      "No design experience required",
    ],
  },

  {
    id: "dialux",
    title: "Dialux Lighting Design",
    category: "EEE/ECE",
    gradient: "from-amber-500 to-red-500",
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    description:
      "Design professional indoor and outdoor lighting schemes using Dialux software with lux calculations and 3D visualisation.",
    fullDescription:
      "Dialux is the industry-standard lighting design software. This course covers room modelling, luminaire selection, lux level calculations, emergency lighting, and generating professional reports for architects and electrical engineers.",
    rating: 4.6,
    students: 870,
    instructor: "Preethi Selvam, Lighting Design Consultant",
    imageUrl:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80",
    whatYouWillLearn: [
      "Model rooms and buildings in Dialux",
      "Select and place luminaires from manufacturer databases",
      "Calculate lux levels and uniformity ratios",
      "Design emergency and escape route lighting",
      "Generate professional lighting reports",
      "Apply IS/IEC lighting standards",
    ],
    curriculum: [
      {
        module: "Module 1: Dialux Interface",
        topics: [
          "Room creation",
          "Surface properties",
          "Import DWG plans",
          "Viewport navigation",
        ],
      },
      {
        module: "Module 2: Luminaire Placement",
        topics: [
          "Manufacturer plug-ins",
          "Array placement",
          "Spot & linear fixtures",
          "Outdoor luminaires",
        ],
      },
      {
        module: "Module 3: Calculations & Analysis",
        topics: [
          "Lux level calculation",
          "Uniformity",
          "Glare analysis",
          "False colour maps",
        ],
      },
      {
        module: "Module 4: Reporting & Standards",
        topics: [
          "Report generation",
          "IS 3646 standard",
          "Emergency lighting",
          "Energy efficiency",
        ],
      },
    ],
    prerequisites: ["No prior experience required", "Basic computer skills"],
  },

  // ── CSE / IT — Missing Courses ─────────────────────────────────────────────

  {
    id: "full-stack-python",
    title: "Full Stack Python Development",
    category: "IT Programs",
    gradient: "from-blue-600 to-red-500",
    duration: "14 weeks",
    level: "Beginner to Advanced",
    description:
      "Build end-to-end web applications using Python, Django/Flask, React, and PostgreSQL.",
    fullDescription:
      "Master full-stack development with Python. Learn Django REST Framework, Flask, React frontend integration, PostgreSQL databases, and deploy production-ready applications on the cloud.",
    rating: 4.8,
    students: 5120,
    instructor: "Arvind Nair, Full Stack Python Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    whatYouWillLearn: [
      "Build REST APIs with Django and Flask",
      "Create dynamic frontends with React",
      "Design PostgreSQL and MongoDB databases",
      "Implement JWT authentication",
      "Deploy apps with Docker and AWS",
      "Write unit and integration tests",
    ],
    curriculum: [
      {
        module: "Module 1: Python Advanced",
        topics: ["OOP", "Decorators", "Generators", "Async programming"],
      },
      {
        module: "Module 2: Django Framework",
        topics: [
          "Models & ORM",
          "Views & URLs",
          "Django REST Framework",
          "Authentication",
        ],
      },
      {
        module: "Module 3: Flask",
        topics: ["Blueprints", "SQLAlchemy", "Flask-JWT", "API design"],
      },
      {
        module: "Module 4: React Frontend",
        topics: [
          "Components & hooks",
          "Redux Toolkit",
          "Axios",
          "Tailwind CSS",
        ],
      },
      {
        module: "Module 5: Databases",
        topics: [
          "PostgreSQL",
          "Redis caching",
          "Migrations",
          "Query optimization",
        ],
      },
      {
        module: "Module 6: Deployment",
        topics: ["Docker", "AWS EC2/RDS", "Nginx", "CI/CD with GitHub Actions"],
      },
    ],
    prerequisites: ["Python basics", "Basic web development knowledge"],
  },

  {
    id: "full-stack-php",
    title: "Full Stack PHP Development",
    category: "IT Programs",
    gradient: "from-indigo-600 to-red-500",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description:
      "Build dynamic web applications with PHP, Laravel, MySQL, and Vue.js from scratch to deployment.",
    fullDescription:
      "Comprehensive PHP development course covering core PHP, Laravel framework, MySQL database design, Vue.js frontend, RESTful APIs, and full-stack deployment for enterprise web applications.",
    rating: 4.6,
    students: 3480,
    instructor: "Manoj Pillai, PHP Laravel Expert",
    imageUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    whatYouWillLearn: [
      "Master PHP fundamentals and OOP",
      "Build applications with Laravel framework",
      "Design and manage MySQL databases",
      "Create Vue.js frontends",
      "Build and consume REST APIs",
      "Deploy PHP apps on Linux servers",
    ],
    curriculum: [
      {
        module: "Module 1: PHP Core",
        topics: [
          "Syntax & data types",
          "OOP in PHP",
          "Sessions & cookies",
          "File handling",
        ],
      },
      {
        module: "Module 2: Laravel",
        topics: [
          "MVC architecture",
          "Eloquent ORM",
          "Blade templating",
          "Artisan CLI",
        ],
      },
      {
        module: "Module 3: MySQL",
        topics: [
          "Schema design",
          "Complex queries",
          "Joins & indexes",
          "Stored procedures",
        ],
      },
      {
        module: "Module 4: Vue.js",
        topics: [
          "Composition API",
          "Vuex/Pinia",
          "Vue Router",
          "Axios integration",
        ],
      },
      {
        module: "Module 5: APIs & Auth",
        topics: [
          "RESTful API design",
          "Laravel Sanctum",
          "OAuth 2.0",
          "API versioning",
        ],
      },
      {
        module: "Module 6: Deployment",
        topics: [
          "Apache/Nginx config",
          "cPanel hosting",
          "SSL setup",
          "Performance tuning",
        ],
      },
    ],
    prerequisites: ["Basic HTML/CSS", "Fundamental programming concepts"],
  },

  {
    id: "full-stack-dotnet",
    title: "Full Stack .NET Development",
    category: "IT Programs",
    gradient: "from-violet-600 to-red-500",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    description:
      "Build enterprise applications with C#, ASP.NET Core, Entity Framework, and Angular or React.",
    fullDescription:
      "Complete .NET full-stack course covering C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, Angular/React frontend, Azure deployment, and microservices architecture.",
    rating: 4.7,
    students: 4210,
    instructor: "Santhosh Raj, .NET Solutions Architect",
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    whatYouWillLearn: [
      "Master C# and object-oriented programming",
      "Build Web APIs with ASP.NET Core",
      "Use Entity Framework Core for data access",
      "Create frontends with Angular or React",
      "Implement Identity & JWT authentication",
      "Deploy on Microsoft Azure",
    ],
    curriculum: [
      {
        module: "Module 1: C# Fundamentals",
        topics: ["Syntax & types", "OOP principles", "LINQ", "Async/await"],
      },
      {
        module: "Module 2: ASP.NET Core",
        topics: [
          "MVC pattern",
          "Web API",
          "Middleware",
          "Dependency injection",
        ],
      },
      {
        module: "Module 3: Entity Framework Core",
        topics: [
          "Code-first migrations",
          "CRUD operations",
          "Relationships",
          "Query optimization",
        ],
      },
      {
        module: "Module 4: Frontend",
        topics: [
          "Angular components",
          "Services & RxJS",
          "HTTP client",
          "Material UI",
        ],
      },
      {
        module: "Module 5: Auth & Security",
        topics: [
          "ASP.NET Identity",
          "JWT tokens",
          "Role-based auth",
          "HTTPS & CORS",
        ],
      },
      {
        module: "Module 6: Azure Deployment",
        topics: [
          "App Service",
          "Azure SQL",
          "Azure DevOps",
          "Application Insights",
        ],
      },
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web concepts",
    ],
  },

  {
    id: "ai-tools",
    title: "AI Tools Mastery",
    category: "IT Programs",
    gradient: "from-red-500 to-pink-500",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Master the latest AI tools — ChatGPT, Midjourney, Copilot, Notion AI, and more for work and business.",
    fullDescription:
      "Practical AI tools course for professionals covering ChatGPT prompt engineering, image generation with Midjourney/DALL-E, AI coding with GitHub Copilot, Notion AI, and how to automate workflows using AI tools.",
    rating: 4.9,
    students: 7830,
    instructor: "Priya Chandran, AI Productivity Coach",
    imageUrl:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
    whatYouWillLearn: [
      "Write effective prompts for ChatGPT and Claude",
      "Generate images with Midjourney and DALL-E",
      "Accelerate coding with GitHub Copilot",
      "Automate tasks using Zapier and Make with AI",
      "Use Notion AI for documentation and planning",
      "Build AI-powered workflows for business",
    ],
    curriculum: [
      {
        module: "Module 1: Prompt Engineering",
        topics: [
          "Prompt structure",
          "Chain-of-thought",
          "Few-shot prompting",
          "System prompts",
        ],
      },
      {
        module: "Module 2: AI Image Generation",
        topics: [
          "Midjourney basics",
          "DALL-E 3",
          "Stable Diffusion",
          "Prompt styles",
        ],
      },
      {
        module: "Module 3: AI Coding Tools",
        topics: [
          "GitHub Copilot",
          "Cursor AI",
          "Code review with AI",
          "Debugging workflows",
        ],
      },
      {
        module: "Module 4: AI Productivity",
        topics: [
          "Notion AI",
          "Grammarly AI",
          "Otter.ai transcription",
          "AI research tools",
        ],
      },
      {
        module: "Module 5: Automation",
        topics: [
          "Zapier + ChatGPT",
          "Make.com flows",
          "n8n automation",
          "AI business workflows",
        ],
      },
    ],
    prerequisites: [
      "No technical background required",
      "Basic computer skills",
    ],
  },

  {
    id: "data-science",
    title: "Data Science",
    category: "IT Programs",
    gradient: "from-cyan-600 to-red-500",
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    description:
      "Master data science with Python, machine learning, statistical analysis, and real-world projects.",
    fullDescription:
      "End-to-end data science program covering Python, statistics, machine learning, deep learning, model deployment, and business intelligence to prepare you for data scientist roles.",
    rating: 4.9,
    students: 6540,
    instructor: "Dr. Ananya Krishnan, Data Scientist",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    whatYouWillLearn: [
      "Perform exploratory data analysis with Python",
      "Build and evaluate ML models",
      "Apply deep learning with TensorFlow",
      "Create compelling data visualizations",
      "Deploy ML models to production",
      "Work on end-to-end data science projects",
    ],
    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        topics: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      },
      {
        module: "Module 2: Statistics & Probability",
        topics: [
          "Descriptive stats",
          "Hypothesis testing",
          "Probability distributions",
          "Bayesian thinking",
        ],
      },
      {
        module: "Module 3: Machine Learning",
        topics: [
          "Supervised learning",
          "Unsupervised learning",
          "Model evaluation",
          "Feature engineering",
        ],
      },
      {
        module: "Module 4: Deep Learning",
        topics: ["Neural networks", "CNNs", "RNNs", "Transfer learning"],
      },
      {
        module: "Module 5: NLP",
        topics: [
          "Text preprocessing",
          "Sentiment analysis",
          "Transformers",
          "BERT & GPT",
        ],
      },
      {
        module: "Module 6: MLOps & Deployment",
        topics: ["Flask API", "Docker", "MLflow", "AWS SageMaker"],
      },
    ],
    prerequisites: ["Python programming basics", "Basic statistics knowledge"],
  },

  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    category: "IT Programs",
    gradient: "from-rose-600 to-orange-500",
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn to craft high-quality prompts for LLMs like GPT-4, Claude, and Gemini for real-world use cases.",
    fullDescription:
      "Master the science and art of prompt engineering for large language models. Learn zero-shot, few-shot, chain-of-thought, and RAG techniques to get the best results from AI systems.",
    rating: 4.8,
    students: 4920,
    instructor: "Rajan Mohan, AI Research Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1676299082001-b107e8a19448?w=800&q=80",
    whatYouWillLearn: [
      "Understand how LLMs process prompts",
      "Apply zero-shot and few-shot prompting",
      "Use chain-of-thought reasoning techniques",
      "Build RAG (Retrieval Augmented Generation) pipelines",
      "Fine-tune prompts for code, writing, and analysis",
      "Evaluate and iterate prompt quality",
    ],
    curriculum: [
      {
        module: "Module 1: LLM Fundamentals",
        topics: [
          "How LLMs work",
          "Tokenization",
          "Context windows",
          "Model comparison",
        ],
      },
      {
        module: "Module 2: Prompting Techniques",
        topics: [
          "Zero-shot",
          "Few-shot",
          "Chain-of-thought",
          "ReAct prompting",
        ],
      },
      {
        module: "Module 3: Advanced Techniques",
        topics: [
          "RAG pipelines",
          "Agent prompting",
          "Tool use",
          "Structured outputs",
        ],
      },
      {
        module: "Module 4: Real-World Applications",
        topics: [
          "Code generation",
          "Content writing",
          "Data extraction",
          "Evaluation frameworks",
        ],
      },
    ],
    prerequisites: ["Basic understanding of AI concepts", "No coding required"],
  },

  {
    id: "ai-full-stack",
    title: "AI Full Stack Development",
    category: "IT Programs",
    gradient: "from-red-600 to-purple-600",
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    description:
      "Build full-stack AI-powered applications with LLM APIs, vector databases, React, and cloud deployment.",
    fullDescription:
      "The complete AI application development course — integrate OpenAI/Claude APIs, build RAG applications with vector databases, create React frontends, deploy on AWS/GCP, and ship production AI products.",
    rating: 4.9,
    students: 3650,
    instructor: "Vikram Anand, AI Full Stack Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1685478237595-f452cb125f27?w=800&q=80",
    whatYouWillLearn: [
      "Integrate OpenAI, Claude, and Gemini APIs",
      "Build RAG applications with Pinecone/Weaviate",
      "Create AI-powered React frontends",
      "Build LangChain/LlamaIndex pipelines",
      "Deploy AI apps on AWS and GCP",
      "Ship production-ready AI SaaS products",
    ],
    curriculum: [
      {
        module: "Module 1: LLM APIs",
        topics: [
          "OpenAI API",
          "Claude API",
          "Streaming responses",
          "Function calling",
        ],
      },
      {
        module: "Module 2: Vector Databases & RAG",
        topics: [
          "Embeddings",
          "Pinecone setup",
          "RAG pipeline",
          "Semantic search",
        ],
      },
      {
        module: "Module 3: LangChain & LlamaIndex",
        topics: [
          "Chains & agents",
          "Memory modules",
          "Document loaders",
          "Custom tools",
        ],
      },
      {
        module: "Module 4: AI Frontend",
        topics: [
          "React + AI SDK",
          "Streaming UI",
          "Chat interfaces",
          "File upload & parsing",
        ],
      },
      {
        module: "Module 5: Backend & APIs",
        topics: [
          "FastAPI",
          "WebSockets",
          "Auth & rate limiting",
          "Database integration",
        ],
      },
      {
        module: "Module 6: Deployment & Scaling",
        topics: ["Docker", "AWS Lambda", "Monitoring", "Cost optimization"],
      },
    ],
    prerequisites: [
      "Python & JavaScript knowledge",
      "Basic web development experience",
    ],
  },

  {
    id: "c-programming",
    title: "C Programming",
    category: "IT Programs",
    gradient: "from-gray-700 to-red-500",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Master C programming fundamentals — the foundation of all modern programming languages.",
    fullDescription:
      "Complete C programming course covering syntax, data structures, pointers, memory management, and file handling. Ideal for engineering students and beginners building a strong programming foundation.",
    rating: 4.7,
    students: 8920,
    instructor: "Balaji Subramaniam, Systems Programmer",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    whatYouWillLearn: [
      "Write C programs from scratch",
      "Understand pointers and memory management",
      "Implement data structures in C",
      "Work with files and I/O operations",
      "Debug programs with GDB",
      "Build mini projects in C",
    ],
    curriculum: [
      {
        module: "Module 1: C Fundamentals",
        topics: ["Data types", "Operators", "Control flow", "Functions"],
      },
      {
        module: "Module 2: Arrays & Strings",
        topics: [
          "1D & 2D arrays",
          "String operations",
          "Searching & sorting",
          "String library",
        ],
      },
      {
        module: "Module 3: Pointers",
        topics: [
          "Pointer basics",
          "Pointer arithmetic",
          "Dynamic memory",
          "malloc & free",
        ],
      },
      {
        module: "Module 4: Structures & Unions",
        topics: ["struct definition", "Nested structures", "Unions", "Typedef"],
      },
      {
        module: "Module 5: File I/O & Projects",
        topics: [
          "File operations",
          "Binary files",
          "Mini projects",
          "Debugging with GDB",
        ],
      },
    ],
    prerequisites: [
      "No prior programming experience required",
      "Basic computer skills",
    ],
  },

  {
    id: "cpp-programming",
    title: "C++ Programming",
    category: "IT Programs",
    gradient: "from-blue-800 to-red-500",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn C++ from basics to object-oriented programming, STL, and competitive programming techniques.",
    fullDescription:
      "Comprehensive C++ course covering OOP, templates, STL containers, algorithms, memory management, and modern C++17/20 features for systems programming and competitive coding.",
    rating: 4.7,
    students: 6310,
    instructor: "Arun Selvakumar, Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    whatYouWillLearn: [
      "Master C++ syntax and OOP principles",
      "Use STL containers and algorithms",
      "Implement templates and generic programming",
      "Manage memory with smart pointers",
      "Apply modern C++17 features",
      "Solve competitive programming problems",
    ],
    curriculum: [
      {
        module: "Module 1: C++ Basics",
        topics: ["Syntax", "References", "Functions", "Namespaces"],
      },
      {
        module: "Module 2: OOP in C++",
        topics: [
          "Classes & objects",
          "Inheritance",
          "Polymorphism",
          "Operator overloading",
        ],
      },
      {
        module: "Module 3: STL",
        topics: ["Vectors", "Maps & sets", "Algorithms", "Iterators"],
      },
      {
        module: "Module 4: Templates & Advanced",
        topics: [
          "Function templates",
          "Class templates",
          "Smart pointers",
          "Move semantics",
        ],
      },
      {
        module: "Module 5: Projects",
        topics: [
          "Data structures implementation",
          "Mini game",
          "File system project",
          "Competitive problems",
        ],
      },
    ],
    prerequisites: [
      "C programming basics or equivalent",
      "Basic programming concepts",
    ],
  },

  {
    id: "java-programming",
    title: "JAVA Programming",
    category: "IT Programs",
    gradient: "from-orange-700 to-red-500",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn Java from scratch — OOP, collections, exception handling, and build real-world console and GUI apps.",
    fullDescription:
      "Core Java programming course covering Java syntax, OOP principles, Collections Framework, exception handling, multithreading, JDBC, and JavaFX for building desktop and console applications.",
    rating: 4.7,
    students: 7240,
    instructor: "Meena Raghavendra, Java Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    whatYouWillLearn: [
      "Write Java programs using OOP principles",
      "Use Java Collections Framework",
      "Handle exceptions and errors gracefully",
      "Implement multithreading and concurrency",
      "Connect to databases with JDBC",
      "Build simple GUI apps with JavaFX",
    ],
    curriculum: [
      {
        module: "Module 1: Java Fundamentals",
        topics: ["Syntax & data types", "Control flow", "Methods", "Arrays"],
      },
      {
        module: "Module 2: OOP in Java",
        topics: [
          "Classes & objects",
          "Inheritance",
          "Interfaces",
          "Abstract classes",
        ],
      },
      {
        module: "Module 3: Collections & Generics",
        topics: [
          "ArrayList & LinkedList",
          "HashMap & HashSet",
          "Generics",
          "Iterators",
        ],
      },
      {
        module: "Module 4: Advanced Java",
        topics: [
          "Exception handling",
          "Multithreading",
          "Lambda expressions",
          "Streams API",
        ],
      },
      {
        module: "Module 5: JDBC & Projects",
        topics: [
          "JDBC connection",
          "CRUD operations",
          "JavaFX basics",
          "Mini projects",
        ],
      },
    ],
    prerequisites: [
      "No prior Java experience required",
      "Basic programming concepts helpful",
    ],
  },
  // ─── MECH: AUTOCAD ────────────────────────────────────────────────────────
  {
    id: "autocad-mechanical",
    title: "AutoCAD for Mechanical Engineering",
    category: "Mechanical Engineering",
    gradient: "from-red-700 to-orange-500",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn AutoCAD for mechanical engineering — 2D drafting, part drawings, GD&T, and assembly documentation.",
    fullDescription:
      "This AutoCAD course is designed for mechanical engineering students and professionals. Master 2D mechanical drafting, orthographic projections, tolerance and GD&T annotations, and produce professional engineering drawing sets as per IS/ISO standards.",
    rating: 4.7,
    students: 5230,
    instructor: "Suresh Prabhu, Mechanical Design Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    whatYouWillLearn: [
      "Create precise 2D mechanical part drawings",
      "Apply orthographic and isometric projections",
      "Add GD&T symbols and tolerances",
      "Draw assembly and exploded view drawings",
      "Use blocks and attributes for standard parts",
      "Generate drawing sheets per IS/ISO standards",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD Foundations",
        topics: [
          "Interface & workspace",
          "Precision drawing tools",
          "Layers & linetypes",
          "Object snaps",
        ],
      },
      {
        module: "Module 2: Mechanical Drafting",
        topics: [
          "Orthographic views",
          "Section views",
          "Isometric drawing",
          "Auxiliary views",
        ],
      },
      {
        module: "Module 3: Tolerances & Annotation",
        topics: [
          "Dimensioning standards",
          "GD&T basics",
          "Surface finish symbols",
          "Title block",
        ],
      },
      {
        module: "Module 4: Assembly & Output",
        topics: [
          "Assembly drawings",
          "Exploded views",
          "BOM creation",
          "Plotting & PDF export",
        ],
      },
    ],
    prerequisites: [
      "Basic mechanical engineering knowledge",
      "No prior AutoCAD experience needed",
    ],
  },
  // ─── MECH: CREO ───────────────────────────────────────────────────────────
  {
    id: "creo-parametric",
    title: "CREO Parametric",
    category: "Mechanical Engineering",
    gradient: "from-blue-700 to-blue-500",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn CREO Parametric for 3D modeling, assembly design, and engineering drawings used in product manufacturing.",
    fullDescription:
      "CREO Parametric is a leading CAD software used across aerospace, automotive, and manufacturing industries. This course covers part modeling, assembly design, sheet metal, and drawing creation for real-world engineering applications.",
    rating: 4.6,
    students: 3120,
    instructor: "Arjun Mehta, Mechanical Design Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    whatYouWillLearn: [
      "Create 3D parametric part models in CREO",
      "Design and manage complex assemblies",
      "Generate 2D engineering drawings with GD&T",
      "Work with sheet metal components",
      "Apply design constraints and relations",
      "Use CREO simulation for basic analysis",
    ],
    curriculum: [
      {
        module: "Module 1: CREO Interface & Sketching",
        topics: ["UI overview", "Sketch tools", "Constraints", "Dimensions"],
      },
      {
        module: "Module 2: Part Modeling",
        topics: [
          "Extrude & revolve",
          "Sweep & blend",
          "Holes & chamfers",
          "Patterns",
        ],
      },
      {
        module: "Module 3: Assembly Design",
        topics: [
          "Assembly constraints",
          "Exploded views",
          "BOM creation",
          "Top-down design",
        ],
      },
      {
        module: "Module 4: Drawing & Sheet Metal",
        topics: [
          "Engineering drawings",
          "GD&T symbols",
          "Sheet metal bends",
          "Flat patterns",
        ],
      },
    ],
    prerequisites: [
      "Basic mechanical engineering knowledge",
      "No prior CREO experience needed",
    ],
  },
  // ─── MECH: STADD PRO ──────────────────────────────────────────────────────
  {
    id: "staad-pro",
    title: "STAAD Pro",
    category: "Mechanical Engineering",
    gradient: "from-indigo-700 to-indigo-500",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Master STAAD Pro for structural analysis and design of steel, concrete, and timber structures.",
    fullDescription:
      "STAAD Pro is the industry-standard structural analysis and design software used by civil and structural engineers worldwide. Learn to model, analyze, and design structures including buildings, bridges, and industrial frames.",
    rating: 4.5,
    students: 2740,
    instructor: "Deepak Nair, Structural Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    whatYouWillLearn: [
      "Model 2D and 3D structural frames in STAAD Pro",
      "Apply loads: dead, live, wind, seismic",
      "Run linear and dynamic analysis",
      "Design steel and RCC members",
      "Interpret analysis results and reports",
      "Generate professional structural reports",
    ],
    curriculum: [
      {
        module: "Module 1: STAAD Basics",
        topics: [
          "Interface overview",
          "Node & beam creation",
          "Material properties",
          "Section assignment",
        ],
      },
      {
        module: "Module 2: Load Cases",
        topics: [
          "Dead & live loads",
          "Wind load IS codes",
          "Seismic analysis",
          "Load combinations",
        ],
      },
      {
        module: "Module 3: Analysis",
        topics: [
          "Linear static analysis",
          "Dynamic analysis",
          "Result interpretation",
          "Displacement checks",
        ],
      },
      {
        module: "Module 4: Design & Reports",
        topics: [
          "Steel design IS 800",
          "RCC design IS 456",
          "Foundation design",
          "Report generation",
        ],
      },
    ],
    prerequisites: [
      "Basic structural engineering concepts",
      "Familiarity with IS codes helpful",
    ],
  },
  // ─── CIVIL: AUTOCAD ───────────────────────────────────────────────────────
  {
    id: "autocad-civil",
    title: "AutoCAD for Civil Engineering",
    category: "Civil Engineering",
    gradient: "from-red-600 to-orange-500",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn AutoCAD for civil engineering — site plans, road layouts, drainage, and construction drawings.",
    fullDescription:
      "This AutoCAD course is tailored for civil engineering students and professionals. Learn to create site layout plans, road cross-sections, contour drawings, drainage layouts, and full construction document sets using AutoCAD Civil tools.",
    rating: 4.6,
    students: 4120,
    instructor: "Ramesh Sundaram, Civil Design Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80",
    whatYouWillLearn: [
      "Draw site plans and layout drawings",
      "Create road cross-sections and alignments",
      "Design drainage and utility layouts",
      "Produce contour and grading plans",
      "Generate construction documentation sets",
      "Apply civil engineering standards to drawings",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD Basics",
        topics: [
          "Interface & navigation",
          "Drawing tools",
          "Layers & linetypes",
          "Blocks & references",
        ],
      },
      {
        module: "Module 2: Civil Drawing Types",
        topics: [
          "Site layout plans",
          "Road cross-sections",
          "Contour mapping",
          "North point & scales",
        ],
      },
      {
        module: "Module 3: Drainage & Utilities",
        topics: [
          "Drainage layout",
          "Utility line drawing",
          "Manhole symbols",
          "Pipe schedules",
        ],
      },
      {
        module: "Module 4: Documentation",
        topics: [
          "Title block setup",
          "Dimensioning & annotation",
          "Plot setup",
          "PDF & DWG export",
        ],
      },
    ],
    prerequisites: [
      "Basic civil engineering knowledge",
      "No prior AutoCAD experience needed",
    ],
  },
  // ─── CIVIL: SKETCHUP ──────────────────────────────────────────────────────
  {
    id: "sketchup",
    title: "SketchUp",
    category: "Civil Engineering",
    gradient: "from-teal-600 to-cyan-500",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Learn SketchUp for 3D architectural modeling, interior design, and presentation-ready visualizations.",
    fullDescription:
      "SketchUp is widely used by architects, interior designers, and civil engineers for quick 3D concept modeling and visualization. This course covers everything from basic modeling to rendering and presenting design ideas to clients.",
    rating: 4.6,
    students: 4210,
    instructor: "Priya Anand, Architectural Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    whatYouWillLearn: [
      "Build 3D models of buildings and interiors",
      "Use push/pull and follow-me tools effectively",
      "Import and apply textures and materials",
      "Create walkthroughs and scene animations",
      "Use the 3D Warehouse for components",
      "Export high-quality renders for presentations",
    ],
    curriculum: [
      {
        module: "Module 1: SketchUp Basics",
        topics: [
          "Interface & navigation",
          "Drawing tools",
          "Push/pull modeling",
          "Groups & components",
        ],
      },
      {
        module: "Module 2: Advanced Modeling",
        topics: [
          "Follow-me tool",
          "Solid tools",
          "Curved surfaces",
          "Complex geometry",
        ],
      },
      {
        module: "Module 3: Materials & Textures",
        topics: [
          "Applying materials",
          "Custom textures",
          "Lighting setup",
          "Shadow studies",
        ],
      },
      {
        module: "Module 4: Presentation",
        topics: [
          "Scenes & animations",
          "LayOut basics",
          "Export for rendering",
          "Client presentations",
        ],
      },
    ],
    prerequisites: [
      "No prior experience required",
      "Basic design interest helpful",
    ],
  },
  // ─── CIVIL: REVIT ARCH ────────────────────────────────────────────────────
  {
    id: "revit-arch",
    title: "Revit - ARCH",
    category: "BIM",
    gradient: "from-orange-600 to-amber-500",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master Autodesk Revit for BIM-based architectural design, documentation, and collaboration.",
    fullDescription:
      "Autodesk Revit is the leading BIM (Building Information Modeling) software for architects. This course covers architectural modeling, families, sheets, schedules, and collaborative workflows used in the AEC industry.",
    rating: 4.7,
    students: 3890,
    instructor: "Kavitha Rajan, BIM Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1481253127861-534498168948?w=800&q=80",
    whatYouWillLearn: [
      "Create complete architectural BIM models",
      "Design walls, floors, roofs, and staircases",
      "Build and customize Revit families",
      "Generate construction documentation and sheets",
      "Create schedules and quantity take-offs",
      "Collaborate using worksharing and linked models",
    ],
    curriculum: [
      {
        module: "Module 1: Revit Fundamentals",
        topics: [
          "BIM concepts",
          "Interface & views",
          "Levels & grids",
          "Walls & floors",
        ],
      },
      {
        module: "Module 2: Architectural Elements",
        topics: [
          "Doors & windows",
          "Roofs & ceilings",
          "Stairs & railings",
          "Curtain walls",
        ],
      },
      {
        module: "Module 3: Families & Schedules",
        topics: [
          "System families",
          "Loadable families",
          "Schedules",
          "Tags & annotations",
        ],
      },
      {
        module: "Module 4: Documentation & Sheets",
        topics: [
          "Floor plan sheets",
          "Sections & elevations",
          "Title blocks",
          "Printing & export",
        ],
      },
    ],
    prerequisites: [
      "Basic architectural knowledge helpful",
      "No prior Revit experience needed",
    ],
  },
  // ─── CIVIL: MICROSOFT PROJECT ─────────────────────────────────────────────
  {
    id: "microsoft-project",
    title: "Microsoft Project",
    category: "BIM",
    gradient: "from-green-700 to-emerald-500",
    duration: "4 weeks",
    level: "Beginner",
    description:
      "Learn Microsoft Project for construction project scheduling, resource management, and progress tracking.",
    fullDescription:
      "Microsoft Project is the go-to tool for project managers in the construction and engineering industry. This course covers creating project plans, Gantt charts, resource allocation, and tracking project progress effectively.",
    rating: 4.5,
    students: 2560,
    instructor: "Suresh Babu, Project Management Consultant",
    imageUrl:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
    whatYouWillLearn: [
      "Create and manage project schedules",
      "Build Gantt charts for construction timelines",
      "Assign and level resources efficiently",
      "Track project progress vs baseline",
      "Generate project status reports",
      "Manage project budgets and costs",
    ],
    curriculum: [
      {
        module: "Module 1: Project Setup",
        topics: [
          "Creating new project",
          "Calendar settings",
          "Work breakdown structure",
          "Task dependencies",
        ],
      },
      {
        module: "Module 2: Scheduling",
        topics: [
          "Gantt chart creation",
          "Critical path method",
          "Milestones",
          "Lag & lead time",
        ],
      },
      {
        module: "Module 3: Resources",
        topics: [
          "Resource sheet",
          "Resource assignment",
          "Resource leveling",
          "Cost tracking",
        ],
      },
      {
        module: "Module 4: Tracking & Reports",
        topics: [
          "Setting baseline",
          "Tracking progress",
          "Variance analysis",
          "Custom reports",
        ],
      },
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior project management software experience needed",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BIM (BUILDING INFORMATION MODELING)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "autocad-bim",
    title: "AutoCAD for BIM",
    category: "BIM",
    gradient: "from-red-600 to-rose-500",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master AutoCAD as a foundation for BIM workflows — 2D drafting, DWG coordination, and integration with Revit.",
    fullDescription:
      "AutoCAD is the backbone of BIM documentation. This course covers 2D drafting fundamentals, creating drawing sets for architectural and MEP disciplines, linking DWG files with Revit, and producing coordinated BIM deliverables using AutoCAD.",
    rating: 4.6,
    students: 4580,
    instructor: "Pradeep Mohan, BIM Drafting Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    whatYouWillLearn: [
      "Create accurate 2D architectural drawings in AutoCAD",
      "Set up drawing templates for BIM projects",
      "Link and reference DWG files across disciplines",
      "Use AutoCAD with Revit for BIM coordination",
      "Produce floor plans, sections, and elevations",
      "Generate professional drawing sets for construction",
    ],
    curriculum: [
      {
        module: "Module 1: AutoCAD for BIM Setup",
        topics: [
          "Interface & workspace",
          "Layer standards (AIA/ISO)",
          "Blocks & xrefs",
          "Template setup",
        ],
      },
      {
        module: "Module 2: Architectural Drawings",
        topics: [
          "Floor plans",
          "Sections & elevations",
          "Details & schedules",
          "Annotation standards",
        ],
      },
      {
        module: "Module 3: BIM Coordination",
        topics: [
          "DWG linking in Revit",
          "Xref management",
          "Clash coordination",
          "BIM drawing standards",
        ],
      },
      {
        module: "Module 4: Output & Deliverables",
        topics: [
          "Sheet setup",
          "Plot styles",
          "PDF/DWG deliverables",
          "BIM handover docs",
        ],
      },
    ],
    prerequisites: [
      "No prior AutoCAD experience needed",
      "Basic architectural or engineering knowledge helpful",
    ],
  },
  {
    id: "revit-mep",
    title: "Revit - MEP",
    category: "BIM",
    gradient: "from-cyan-700 to-teal-500",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Design mechanical, electrical, and plumbing systems using Autodesk Revit MEP for BIM-coordinated projects.",
    fullDescription:
      "Revit MEP enables engineers to design and document mechanical, electrical, and plumbing systems within a fully coordinated BIM environment. Learn duct routing, pipe systems, electrical panels, and clash detection workflows.",
    rating: 4.7,
    students: 2980,
    instructor: "Ramesh Iyer, MEP BIM Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    whatYouWillLearn: [
      "Model HVAC duct and pipe systems in Revit",
      "Design electrical lighting and power systems",
      "Create plumbing layouts and drainage systems",
      "Perform clash detection with architectural models",
      "Generate MEP coordination drawings",
      "Produce equipment schedules and load calculations",
    ],
    curriculum: [
      {
        module: "Module 1: Revit MEP Setup",
        topics: [
          "MEP templates",
          "Linking architectural model",
          "Levels & grids",
          "MEP worksets",
        ],
      },
      {
        module: "Module 2: HVAC & Piping",
        topics: [
          "Duct routing",
          "Pipe systems",
          "Fittings & accessories",
          "Mechanical equipment",
        ],
      },
      {
        module: "Module 3: Electrical Systems",
        topics: [
          "Lighting fixtures",
          "Power circuits",
          "Electrical panels",
          "Conduit routing",
        ],
      },
      {
        module: "Module 4: Coordination & Docs",
        topics: [
          "Clash detection",
          "Coordination views",
          "MEP sheets",
          "Schedules & reports",
        ],
      },
    ],
    prerequisites: [
      "Basic Revit or CAD knowledge helpful",
      "Understanding of MEP systems recommended",
    ],
  },
  {
    id: "navisworks",
    title: "Navisworks",
    category: "BIM",
    gradient: "from-blue-800 to-blue-600",
    duration: "6 weeks",
    level: "Intermediate",
    description:
      "Use Autodesk Navisworks for BIM coordination, clash detection, 4D simulation, and project review.",
    fullDescription:
      "Navisworks is the industry standard for BIM project review and coordination. This course covers model aggregation, clash detection, TimeLiner 4D scheduling, quantity takeoffs, and producing coordination reports for construction projects.",
    rating: 4.6,
    students: 2340,
    instructor: "Vinoth Kumar, BIM Coordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    whatYouWillLearn: [
      "Aggregate multi-discipline BIM models",
      "Run clash detection and manage clash reports",
      "Create 4D construction simulations with TimeLiner",
      "Perform quantity takeoffs with Quantification",
      "Navigate and mark up models for review",
      "Produce coordination and clash reports",
    ],
    curriculum: [
      {
        module: "Module 1: Navisworks Basics",
        topics: [
          "Interface & navigation",
          "Model aggregation",
          "File formats",
          "Section planes",
        ],
      },
      {
        module: "Module 2: Clash Detection",
        topics: [
          "Clash tests setup",
          "Clash types",
          "Managing results",
          "Clash reports",
        ],
      },
      {
        module: "Module 3: 4D Simulation",
        topics: [
          "TimeLiner tool",
          "Linking schedule",
          "Simulation settings",
          "Construction animation",
        ],
      },
      {
        module: "Module 4: Quantification & Review",
        topics: [
          "Quantity takeoff",
          "Markup tools",
          "Viewpoints",
          "Final reports",
        ],
      },
    ],
    prerequisites: [
      "Basic BIM or Revit knowledge helpful",
      "No prior Navisworks experience needed",
    ],
  },
  {
    id: "scan-to-bim",
    title: "Scan to BIM",
    category: "BIM",
    gradient: "from-violet-700 to-purple-500",
    duration: "6 weeks",
    level: "Intermediate",
    description:
      "Learn to convert point cloud data from 3D laser scans into accurate BIM models for renovation and as-built documentation.",
    fullDescription:
      "Scan to BIM is a growing field in the AEC industry where point cloud data captured by laser scanners is used to create precise BIM models. This course covers point cloud processing, registration, and modeling in Revit and AutoCAD.",
    rating: 4.5,
    students: 1870,
    instructor: "Nithya Subramaniam, BIM Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&q=80",
    whatYouWillLearn: [
      "Understand 3D laser scanning technology",
      "Process and register point cloud data",
      "Import point clouds into Revit and AutoCAD",
      "Model as-built conditions from scan data",
      "Perform deviation analysis",
      "Deliver LOD 200/300 as-built BIM models",
    ],
    curriculum: [
      {
        module: "Module 1: Scanning Fundamentals",
        topics: [
          "Laser scanning basics",
          "Scanner types",
          "Field data capture",
          "Registration",
        ],
      },
      {
        module: "Module 2: Point Cloud Processing",
        topics: [
          "ReCap Pro workflow",
          "Noise filtering",
          "Coordinate systems",
          "Export formats",
        ],
      },
      {
        module: "Module 3: Modeling in Revit",
        topics: [
          "Linking point cloud",
          "Tracing walls & floors",
          "MEP elements",
          "LOD standards",
        ],
      },
      {
        module: "Module 4: Quality & Delivery",
        topics: [
          "Deviation analysis",
          "QA/QC checks",
          "Client deliverables",
          "Project workflows",
        ],
      },
    ],
    prerequisites: [
      "Basic Revit or AutoCAD knowledge",
      "Interest in as-built documentation",
    ],
  },
  {
    id: "bim-360",
    title: "BIM 360",
    category: "BIM",
    gradient: "from-sky-700 to-cyan-500",
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master Autodesk BIM 360 for cloud-based project management, document control, and team collaboration.",
    fullDescription:
      "BIM 360 (now Autodesk Construction Cloud) is the platform for managing construction projects in the cloud. This course covers document management, design collaboration, field management, and project reporting using BIM 360.",
    rating: 4.6,
    students: 2150,
    instructor: "Arun Prakash, Construction Technology Consultant",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    whatYouWillLearn: [
      "Set up and manage BIM 360 projects",
      "Control document workflows and approvals",
      "Collaborate on design models in the cloud",
      "Manage RFIs, submittals, and issues",
      "Track project progress with dashboards",
      "Coordinate field teams with mobile apps",
    ],
    curriculum: [
      {
        module: "Module 1: BIM 360 Setup",
        topics: [
          "Account & project setup",
          "Member roles",
          "Document folders",
          "Permission control",
        ],
      },
      {
        module: "Module 2: Design Collaboration",
        topics: [
          "Model coordination",
          "Clash review",
          "Design packages",
          "Version control",
        ],
      },
      {
        module: "Module 3: Field Management",
        topics: [
          "Issues & RFIs",
          "Submittals",
          "Daily logs",
          "Photo documentation",
        ],
      },
      {
        module: "Module 4: Reporting & Handover",
        topics: [
          "Project dashboards",
          "Analytics reports",
          "Asset management",
          "Project closeout",
        ],
      },
    ],
    prerequisites: [
      "Basic computer skills",
      "Familiarity with Revit or AutoCAD helpful",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "hr-management",
    title: "Human Resources Management (HR)",
    category: "Management",
    gradient: "from-rose-600 to-pink-500",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master HR fundamentals including recruitment, payroll, performance management, and labor laws.",
    fullDescription:
      "This comprehensive HR course equips you with the skills to manage human capital effectively. Learn talent acquisition, onboarding, performance appraisal, payroll processing, and Indian labor law compliance for corporate HR roles.",
    rating: 4.6,
    students: 4120,
    instructor: "Meenakshi Raj, HR Business Partner",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    whatYouWillLearn: [
      "Manage end-to-end recruitment and onboarding",
      "Process payroll and manage employee benefits",
      "Conduct performance appraisals and reviews",
      "Handle employee relations and grievances",
      "Understand Indian labor laws and compliance",
      "Use HRMS software for day-to-day operations",
    ],
    curriculum: [
      {
        module: "Module 1: HR Fundamentals",
        topics: [
          "HR roles & functions",
          "Org structure",
          "Job analysis",
          "HR policies",
        ],
      },
      {
        module: "Module 2: Recruitment & Onboarding",
        topics: [
          "Sourcing strategies",
          "Interview techniques",
          "Offer management",
          "Onboarding process",
        ],
      },
      {
        module: "Module 3: Payroll & Benefits",
        topics: [
          "Salary structure",
          "PF & ESI",
          "Income tax basics",
          "Leave management",
        ],
      },
      {
        module: "Module 4: Performance & Compliance",
        topics: [
          "KRA/KPI setting",
          "Appraisal methods",
          "Labor laws",
          "HRMS tools",
        ],
      },
    ],
    prerequisites: [
      "No prior HR experience required",
      "Basic English communication skills",
    ],
  },
  {
    id: "finance-tally",
    title: "Finance & Tally",
    category: "Management",
    gradient: "from-emerald-700 to-green-500",
    duration: "8 weeks",
    level: "Beginner",
    description:
      "Learn accounting fundamentals, GST, and Tally ERP 9/TallyPrime for finance and accounting roles.",
    fullDescription:
      "This course covers core accounting principles, financial statements, GST filing, and hands-on Tally ERP 9 / TallyPrime operations. Ideal for commerce students and professionals pursuing accounting, finance, and taxation careers.",
    rating: 4.7,
    students: 5840,
    instructor: "Subramaniam Pillai, CA & Finance Trainer",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    whatYouWillLearn: [
      "Apply accounting fundamentals and double-entry system",
      "Create financial statements: P&L, Balance Sheet",
      "Manage GST returns and e-filing",
      "Operate Tally ERP 9 and TallyPrime",
      "Handle accounts payable and receivable",
      "Generate MIS reports and audit trails",
    ],
    curriculum: [
      {
        module: "Module 1: Accounting Basics",
        topics: [
          "Accounting principles",
          "Journal entries",
          "Ledger accounts",
          "Trial balance",
        ],
      },
      {
        module: "Module 2: Financial Statements",
        topics: [
          "P&L statement",
          "Balance sheet",
          "Cash flow",
          "Ratio analysis",
        ],
      },
      {
        module: "Module 3: GST & Taxation",
        topics: [
          "GST concepts",
          "GSTR filing",
          "TDS basics",
          "Income tax overview",
        ],
      },
      {
        module: "Module 4: Tally Operations",
        topics: [
          "Company setup",
          "Voucher entry",
          "Bank reconciliation",
          "MIS reports",
        ],
      },
    ],
    prerequisites: [
      "Basic math skills",
      "Commerce background helpful but not required",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Management",
    gradient: "from-orange-600 to-yellow-500",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    description:
      "Master SEO, social media marketing, Google Ads, email marketing, and analytics to grow businesses online.",
    fullDescription:
      "A complete digital marketing course covering search engine optimization, social media strategy, Google Ads, Meta Ads, email marketing, content marketing, and web analytics. Build a strong portfolio and prepare for Google certifications.",
    rating: 4.8,
    students: 6730,
    instructor: "Kavya Krishnan, Digital Marketing Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    whatYouWillLearn: [
      "Optimize websites for search engines (SEO)",
      "Run Google Ads and Meta Ads campaigns",
      "Build and manage social media strategies",
      "Create email marketing campaigns",
      "Analyze performance with Google Analytics",
      "Build a digital marketing portfolio",
    ],
    curriculum: [
      {
        module: "Module 1: SEO & Content",
        topics: [
          "Keyword research",
          "On-page SEO",
          "Off-page & link building",
          "Content strategy",
        ],
      },
      {
        module: "Module 2: Paid Advertising",
        topics: [
          "Google Ads setup",
          "Meta Ads manager",
          "Campaign optimization",
          "Budget management",
        ],
      },
      {
        module: "Module 3: Social Media & Email",
        topics: [
          "Social media strategy",
          "Content calendar",
          "Email campaigns",
          "Automation tools",
        ],
      },
      {
        module: "Module 4: Analytics & Portfolio",
        topics: [
          "Google Analytics 4",
          "Conversion tracking",
          "Reporting dashboards",
          "Portfolio projects",
        ],
      },
    ],
    prerequisites: [
      "Basic internet and computer skills",
      "No prior marketing experience needed",
    ],
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    category: "Management",
    gradient: "from-indigo-600 to-blue-500",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn to analyze business data using Excel, Power BI, and SQL to drive data-driven decisions.",
    fullDescription:
      "Business Analytics bridges the gap between data and decision-making. This course covers data analysis with Excel, dashboard creation in Power BI, SQL for data querying, and statistical techniques to solve real business problems.",
    rating: 4.7,
    students: 4560,
    instructor: "Harish Chandran, Business Intelligence Analyst",
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    whatYouWillLearn: [
      "Analyze business data using advanced Excel",
      "Build interactive dashboards in Power BI",
      "Write SQL queries to extract business insights",
      "Apply statistical analysis to business problems",
      "Create business reports and presentations",
      "Develop data-driven decision-making skills",
    ],
    curriculum: [
      {
        module: "Module 1: Excel for Analytics",
        topics: [
          "Pivot tables",
          "VLOOKUP & INDEX-MATCH",
          "Data cleaning",
          "Charts & dashboards",
        ],
      },
      {
        module: "Module 2: Power BI",
        topics: [
          "Data modeling",
          "DAX basics",
          "Interactive visuals",
          "Publishing reports",
        ],
      },
      {
        module: "Module 3: SQL for Business",
        topics: [
          "SELECT & joins",
          "Aggregations",
          "Subqueries",
          "Business case queries",
        ],
      },
      {
        module: "Module 4: Statistics & Insights",
        topics: [
          "Descriptive statistics",
          "Regression basics",
          "KPI frameworks",
          "Storytelling with data",
        ],
      },
    ],
    prerequisites: [
      "Basic Excel knowledge",
      "No programming experience required",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNICATION LANGUAGES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "french",
    title: "French Language",
    category: "Communication Languages",
    gradient: "from-blue-600 to-indigo-500",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn French from scratch — speaking, reading, writing, and grammar for everyday and professional use.",
    fullDescription:
      "This French language course takes you from absolute beginner to conversational fluency (A1–B1 level). Covers pronunciation, grammar, vocabulary, reading comprehension, and spoken French for travel, work, and higher education abroad.",
    rating: 4.7,
    students: 3240,
    instructor: "Sophie Dubois, Certified French Language Trainer",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    whatYouWillLearn: [
      "Speak French confidently in everyday situations",
      "Read and write in French accurately",
      "Master French grammar and sentence structure",
      "Build a vocabulary of 2000+ French words",
      "Understand French culture and etiquette",
      "Prepare for DELF A1/A2 certification",
    ],
    curriculum: [
      {
        module: "Module 1: Foundations (A1)",
        topics: [
          "Alphabet & pronunciation",
          "Greetings & introductions",
          "Numbers & colors",
          "Basic sentences",
        ],
      },
      {
        module: "Module 2: Everyday French (A2)",
        topics: [
          "Family & relationships",
          "Shopping & food",
          "Time & dates",
          "Past tense basics",
        ],
      },
      {
        module: "Module 3: Intermediate (B1)",
        topics: [
          "Future & conditional",
          "Professional vocabulary",
          "Reading passages",
          "Writing emails",
        ],
      },
      {
        module: "Module 4: Fluency Building",
        topics: [
          "Conversation practice",
          "Listening exercises",
          "Cultural context",
          "DELF exam prep",
        ],
      },
    ],
    prerequisites: [
      "No prior French knowledge required",
      "Basic English literacy helpful",
    ],
  },
  {
    id: "german",
    title: "German Language",
    category: "Communication Languages",
    gradient: "from-yellow-600 to-amber-500",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn German for travel, work, and study in Germany — grammar, vocabulary, and conversational skills.",
    fullDescription:
      "This German course covers A1 to B1 levels, teaching you to communicate confidently in German for personal, academic, and professional settings. Ideal for those planning to work or study in Germany, Austria, or Switzerland.",
    rating: 4.6,
    students: 2870,
    instructor: "Klaus Werner, Certified Goethe Institute Trainer",
    imageUrl:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    whatYouWillLearn: [
      "Speak and understand German in daily situations",
      "Master German grammar including cases and genders",
      "Read German texts and newspapers",
      "Write professional emails and letters in German",
      "Build a vocabulary of 2000+ German words",
      "Prepare for Goethe-Zertifikat A1/A2 exam",
    ],
    curriculum: [
      {
        module: "Module 1: German Basics (A1)",
        topics: [
          "Pronunciation",
          "Articles & genders",
          "Basic verbs",
          "Everyday phrases",
        ],
      },
      {
        module: "Module 2: Grammar Foundations (A2)",
        topics: [
          "Cases: Nominative & Accusative",
          "Prepositions",
          "Modal verbs",
          "Past tense (Perfekt)",
        ],
      },
      {
        module: "Module 3: Intermediate (B1)",
        topics: [
          "Dative & Genitive",
          "Subordinate clauses",
          "Passive voice",
          "Professional vocabulary",
        ],
      },
      {
        module: "Module 4: Communication Skills",
        topics: [
          "Conversation practice",
          "Listening exercises",
          "Writing tasks",
          "Goethe exam prep",
        ],
      },
    ],
    prerequisites: [
      "No prior German knowledge required",
      "Basic literacy in any language",
    ],
  },
  {
    id: "english",
    title: "English Communication",
    category: "Communication Languages",
    gradient: "from-green-600 to-teal-500",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    description:
      "Build confident spoken and written English skills for professional, academic, and everyday communication.",
    fullDescription:
      "This English communication course focuses on developing fluency, grammar accuracy, professional writing, and presentation skills. Covers business English, interview preparation, group discussions, and email etiquette for career readiness.",
    rating: 4.8,
    students: 8920,
    instructor: "Ananya Krishnan, English Language & Soft Skills Trainer",
    imageUrl:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    whatYouWillLearn: [
      "Speak fluent English with confidence",
      "Write professional emails, reports, and letters",
      "Master English grammar and vocabulary",
      "Perform well in interviews and group discussions",
      "Develop public speaking and presentation skills",
      "Understand American and British English accents",
    ],
    curriculum: [
      {
        module: "Module 1: Grammar & Vocabulary",
        topics: [
          "Tenses & verb forms",
          "Articles & prepositions",
          "Word building",
          "Common errors",
        ],
      },
      {
        module: "Module 2: Spoken English",
        topics: [
          "Pronunciation & accent",
          "Conversation skills",
          "Active listening",
          "Telephone English",
        ],
      },
      {
        module: "Module 3: Business Writing",
        topics: [
          "Email writing",
          "Report writing",
          "Resume & cover letter",
          "Meeting minutes",
        ],
      },
      {
        module: "Module 4: Professional Skills",
        topics: [
          "Interview preparation",
          "Group discussion",
          "Presentation skills",
          "Public speaking",
        ],
      },
    ],
    prerequisites: [
      "Basic understanding of English alphabets",
      "Suitable for all levels",
    ],
  },
  {
    id: "japanese",
    title: "Japanese Language",
    category: "Communication Languages",
    gradient: "from-red-600 to-rose-500",
    duration: "12 weeks",
    level: "Beginner",
    description:
      "Learn Japanese from scratch — Hiragana, Katakana, basic Kanji, grammar, and conversational Japanese.",
    fullDescription:
      "This beginner Japanese course takes you from zero to JLPT N5/N4 level. Learn Hiragana and Katakana scripts, essential Kanji, Japanese grammar patterns, and build conversational skills for travel, work, and Japanese culture enthusiasts.",
    rating: 4.7,
    students: 2430,
    instructor: "Yuki Tanaka, Certified JLPT Trainer",
    imageUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    whatYouWillLearn: [
      "Read and write Hiragana and Katakana scripts",
      "Learn 100+ essential Kanji characters",
      "Construct basic Japanese sentences",
      "Hold simple conversations in Japanese",
      "Understand Japanese grammar patterns",
      "Prepare for JLPT N5 certification",
    ],
    curriculum: [
      {
        module: "Module 1: Scripts (N5)",
        topics: [
          "Hiragana",
          "Katakana",
          "Basic Kanji 50",
          "Pronunciation rules",
        ],
      },
      {
        module: "Module 2: Grammar Basics",
        topics: [
          "Sentence structure",
          "Particles は/が/を",
          "Verb conjugation",
          "Adjectives",
        ],
      },
      {
        module: "Module 3: Conversations",
        topics: [
          "Greetings",
          "Shopping & directions",
          "Time & numbers",
          "Daily routines",
        ],
      },
      {
        module: "Module 4: JLPT Prep",
        topics: [
          "N5 vocabulary list",
          "Reading practice",
          "Listening drills",
          "Mock tests",
        ],
      },
    ],
    prerequisites: [
      "No prior Japanese knowledge required",
      "Patience for learning a new script system",
    ],
  },
];
