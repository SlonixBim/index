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
    id: 'full-stack-java',
    title: 'Full Stack Java Development',
    category: 'IT Programs',
    gradient: 'from-red-600 to-red-500',
    duration: '16 weeks',
    level: 'Beginner to Advanced',
    description: 'Build enterprise applications with Java, Spring Boot, and modern frameworks.',
    fullDescription: 'Become a full-stack Java developer with expertise in Spring Boot, Hibernate, React, and microservices architecture. Build production-ready enterprise applications.',
    rating: 4.7,
    students: 6340,
    instructor: 'Vikram Singh, Senior Java Architect',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    whatYouWillLearn: [
      'Master Java programming fundamentals',
      'Build REST APIs with Spring Boot',
      'Implement database operations with Hibernate',
      'Create responsive frontends with React',
      'Deploy microservices architecture',
      'Write unit and integration tests'
    ],
    curriculum: [
      {
        module: 'Module 1: Java Fundamentals',
        topics: ['OOP concepts', 'Collections framework', 'Exception handling', 'Multithreading']
      },
      {
        module: 'Module 2: Spring Framework',
        topics: ['Dependency injection', 'Spring Boot', 'Spring MVC', 'Spring Security']
      },
      {
        module: 'Module 3: Database & ORM',
        topics: ['SQL basics', 'JDBC', 'Hibernate', 'JPA repositories']
      },
      {
        module: 'Module 4: Frontend Development',
        topics: ['HTML/CSS/JavaScript', 'React basics', 'State management', 'API integration']
      },
      {
        module: 'Module 5: Microservices',
        topics: ['Service architecture', 'Spring Cloud', 'API gateway', 'Service discovery']
      },
      {
        module: 'Module 6: Testing & Deployment',
        topics: ['JUnit testing', 'Mockito', 'Docker', 'CI/CD pipelines']
      }
    ],
    prerequisites: ['Basic programming knowledge', 'Understanding of web technologies', 'Familiarity with databases helpful']
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    category: 'IT Programs',
    gradient: 'from-red-700 to-red-600',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    description: 'Master Python programming from basics to advanced applications.',
    fullDescription: 'Learn Python from scratch and build real-world applications. Cover web development, data analysis, automation, and more with hands-on projects.',
    rating: 4.9,
    students: 8920,
    instructor: 'Dr. Sarah Johnson, Python Developer',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    whatYouWillLearn: [
      'Write clean, efficient Python code',
      'Build web applications with Django/Flask',
      'Automate tasks and workflows',
      'Work with databases and APIs',
      'Analyze data with Pandas and NumPy',
      'Create data visualizations'
    ],
    curriculum: [
      {
        module: 'Module 1: Python Fundamentals',
        topics: ['Variables and data types', 'Control structures', 'Functions', 'Modules and packages']
      },
      {
        module: 'Module 2: Object-Oriented Programming',
        topics: ['Classes and objects', 'Inheritance', 'Polymorphism', 'Design patterns']
      },
      {
        module: 'Module 3: Web Development',
        topics: ['Flask basics', 'Django framework', 'REST APIs', 'Database integration']
      },
      {
        module: 'Module 4: Data Analysis',
        topics: ['Pandas library', 'NumPy arrays', 'Data cleaning', 'Statistical analysis']
      },
      {
        module: 'Module 5: Automation',
        topics: ['File operations', 'Web scraping', 'Task scheduling', 'Email automation']
      },
      {
        module: 'Module 6: Advanced Topics',
        topics: ['Async programming', 'Testing', 'Deployment', 'Best practices']
      }
    ],
    prerequisites: ['Basic programming concepts helpful but not required', 'Computer with Python installed']
  },
  {
    id: 'ai-machine-learning',
    title: 'AI Mastery Suite',
    category: 'IT Programs',
    gradient: 'from-red-600 to-red-500',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    description: 'Build intelligent systems with machine learning algorithms and neural networks.',
    fullDescription: 'Learn AI and machine learning from fundamentals to advanced deep learning. Work with TensorFlow, PyTorch, and build real AI applications.',
    rating: 4.9,
    students: 4890,
    instructor: 'Dr. Arun Kumar, AI Researcher',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    whatYouWillLearn: [
      'Understand machine learning fundamentals',
      'Build neural networks with TensorFlow',
      'Implement computer vision solutions',
      'Create NLP applications',
      'Train deep learning models',
      'Deploy AI models to production'
    ],
    curriculum: [
      {
        module: 'Module 1: ML Foundations',
        topics: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Feature engineering']
      },
      {
        module: 'Module 2: Classical ML',
        topics: ['Linear regression', 'Decision trees', 'SVM', 'Ensemble methods']
      },
      {
        module: 'Module 3: Neural Networks',
        topics: ['Perceptrons', 'Backpropagation', 'CNNs', 'RNNs']
      },
      {
        module: 'Module 4: Deep Learning',
        topics: ['TensorFlow', 'PyTorch', 'Transfer learning', 'Model optimization']
      },
      {
        module: 'Module 5: Computer Vision',
        topics: ['Image classification', 'Object detection', 'Image segmentation', 'GANs']
      },
      {
        module: 'Module 6: NLP & Deployment',
        topics: ['Text processing', 'Sentiment analysis', 'Transformers', 'Model serving']
      }
    ],
    prerequisites: ['Python programming', 'Mathematics (linear algebra, calculus)', 'Statistics basics']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'IT Programs',
    gradient: 'from-red-500 to-red-400',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    description: 'Analyze data and create insights using Python, SQL, and visualization tools.',
    fullDescription: 'Master data analytics with Python, SQL, Excel, and business intelligence tools. Learn to extract insights from data and create compelling visualizations.',
    rating: 4.7,
    students: 5640,
    instructor: 'Priya Menon, Data Analyst',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    whatYouWillLearn: [
      'Perform exploratory data analysis',
      'Write complex SQL queries',
      'Create interactive dashboards',
      'Apply statistical analysis techniques',
      'Build predictive models',
      'Present data-driven insights'
    ],
    curriculum: [
      {
        module: 'Module 1: Data Fundamentals',
        topics: ['Data types', 'Data cleaning', 'Excel advanced functions', 'Data quality']
      },
      {
        module: 'Module 2: SQL Mastery',
        topics: ['SELECT statements', 'JOINs', 'Subqueries', 'Window functions']
      },
      {
        module: 'Module 3: Python for Data',
        topics: ['Pandas', 'NumPy', 'Data manipulation', 'File handling']
      },
      {
        module: 'Module 4: Visualization',
        topics: ['Matplotlib', 'Seaborn', 'Tableau basics', 'Dashboard design']
      },
      {
        module: 'Module 5: Statistical Analysis',
        topics: ['Descriptive statistics', 'Hypothesis testing', 'Correlation', 'Regression']
      },
      {
        module: 'Module 6: Business Intelligence',
        topics: ['KPI development', 'Reporting', 'Business metrics', 'Data storytelling']
      }
    ],
    prerequisites: ['Basic Excel knowledge', 'Basic math skills', 'Analytical mindset']
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    category: 'IT Programs',
    gradient: 'from-red-500 to-red-400',
    duration: '14 weeks',
    level: 'Intermediate to Advanced',
    description: 'Build modern web applications with MongoDB, Express, React, and Node.js.',
    fullDescription: 'Master the MERN stack and build full-stack JavaScript applications. Learn MongoDB, Express.js, React, and Node.js with real-world projects.',
    rating: 4.8,
    students: 7560,
    instructor: 'Neha Desai, Full Stack Developer',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    whatYouWillLearn: [
      'Build complete web applications with MERN',
      'Create RESTful APIs with Node.js and Express',
      'Design NoSQL databases with MongoDB',
      'Develop dynamic UIs with React',
      'Implement authentication and authorization',
      'Deploy applications to the cloud'
    ],
    curriculum: [
      {
        module: 'Module 1: JavaScript Mastery',
        topics: ['ES6+ features', 'Async programming', 'Promises', 'Arrow functions']
      },
      {
        module: 'Module 2: Node.js & Express',
        topics: ['Node.js fundamentals', 'Express routing', 'Middleware', 'Error handling']
      },
      {
        module: 'Module 3: MongoDB',
        topics: ['NoSQL concepts', 'CRUD operations', 'Aggregation', 'Mongoose ODM']
      },
      {
        module: 'Module 4: React Development',
        topics: ['Components', 'Hooks', 'State management', 'React Router']
      },
      {
        module: 'Module 5: Full Stack Integration',
        topics: ['REST APIs', 'Authentication with JWT', 'File uploads', 'Real-time features']
      },
      {
        module: 'Module 6: Deployment',
        topics: ['Cloud platforms', 'Environment variables', 'Production builds', 'Monitoring']
      }
    ],
    prerequisites: ['HTML, CSS, JavaScript knowledge', 'Basic programming concepts', 'Command line familiarity']
  },
  {
    id: 'solidworks-mechanical-design',
    title: 'SolidWorks for Mechanical Design',
    category: 'Engineering Tools',
    gradient: 'from-red-600 to-red-500',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    description: 'Master 3D CAD design and engineering with industry-standard SolidWorks software.',
    fullDescription: 'Learn to design mechanical parts and assemblies using SolidWorks, the industry-leading CAD software. This comprehensive course covers everything from basic sketching to advanced surfacing and simulation.',
    rating: 4.7,
    students: 3250,
    instructor: 'Rajesh Kumar, Mechanical Design Expert',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    whatYouWillLearn: [
      'Create 3D parts and assemblies in SolidWorks',
      'Master parametric modeling and design intent',
      'Generate detailed engineering drawings',
      'Perform basic stress analysis and simulation',
      'Work with sheet metal and weldment design',
      'Create photorealistic renderings'
    ],
    curriculum: [
      {
        module: 'Module 1: Introduction to SolidWorks',
        topics: ['Interface overview', 'Sketch tools and constraints', 'Basic part modeling', 'File management']
      },
      {
        module: 'Module 2: Advanced Part Modeling',
        topics: ['Revolve, sweep, and loft features', 'Shell and draft operations', 'Patterns and mirroring', 'Equations and design tables']
      },
      {
        module: 'Module 3: Assembly Design',
        topics: ['Creating assemblies', 'Mates and constraints', 'Exploded views', 'Bill of materials']
      },
      {
        module: 'Module 4: Engineering Drawings',
        topics: ['Drawing templates', 'Standard views', 'Dimensions and annotations', 'GD&T symbols']
      },
      {
        module: 'Module 5: Sheet Metal & Weldments',
        topics: ['Sheet metal features', 'Flat patterns', 'Weldment structures', 'Cut lists']
      },
      {
        module: 'Module 6: Simulation & Rendering',
        topics: ['Static analysis', 'Thermal studies', 'PhotoView 360', 'Material properties']
      }
    ],
    prerequisites: ['Basic computer skills', 'Understanding of mechanical concepts', 'No prior CAD experience required']
  },
  {
    id: 'catia-product-engineering',
    title: 'CATIA for Product Engineering',
    category: 'Engineering Tools',
    gradient: 'from-red-700 to-red-600',
    duration: '10 weeks',
    level: 'Intermediate',
    description: 'Learn advanced product engineering and design with CATIA V5.',
    fullDescription: 'Master CATIA V5, the powerful CAD/CAM/CAE software used in automotive, aerospace, and industrial design. Learn surface modeling, assembly design, and advanced engineering techniques.',
    rating: 4.6,
    students: 2180,
    instructor: 'Priya Sharma, CATIA Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    whatYouWillLearn: [
      'Navigate CATIA V5 interface and workbenches',
      'Create complex surface models',
      'Design multi-part assemblies',
      'Generate manufacturing drawings',
      'Perform kinematic simulations',
      'Work with automotive design standards'
    ],
    curriculum: [
      {
        module: 'Module 1: CATIA Fundamentals',
        topics: ['Workbench overview', 'Part design basics', 'Sketcher tools', 'Feature-based modeling']
      },
      {
        module: 'Module 2: Surface Modeling',
        topics: ['Wireframe geometry', 'Surface creation', 'Blend and fillet operations', 'Surface analysis']
      },
      {
        module: 'Module 3: Assembly Design',
        topics: ['Product structure', 'Assembly constraints', 'DMU kinematics', 'Clash detection']
      },
      {
        module: 'Module 4: Drafting',
        topics: ['2D layout', 'View generation', 'Dimensioning standards', 'Title blocks']
      },
      {
        module: 'Module 5: Generative Shape Design',
        topics: ['Advanced surfacing', 'Hybrid design', 'Power copy', 'Publications']
      },
      {
        module: 'Module 6: Real Projects',
        topics: ['Automotive parts', 'Consumer products', 'Complex assemblies', 'Portfolio development']
      }
    ],
    prerequisites: ['Basic CAD knowledge', 'Understanding of engineering drawings', 'Mechanical aptitude']
  },
  {
    id: 'autocad-mastery',
    title: 'AutoCAD Mastery',
    category: 'Engineering Tools',
    gradient: 'from-red-600 to-red-500',
    duration: '6 weeks',
    level: 'Beginner to Advanced',
    description: 'Complete AutoCAD training from basic 2D drafting to advanced 3D modeling.',
    fullDescription: 'Become proficient in AutoCAD, the world\'s leading CAD software for 2D drafting and 3D modeling. Perfect for architects, engineers, and designers.',
    rating: 4.8,
    students: 5420,
    instructor: 'Amit Patel, AutoCAD Certified Professional',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    whatYouWillLearn: [
      'Master 2D drafting and annotation',
      'Create precise technical drawings',
      'Work with layers, blocks, and attributes',
      'Develop 3D solid models',
      'Generate section views and details',
      'Customize AutoCAD for productivity'
    ],
    curriculum: [
      {
        module: 'Module 1: AutoCAD Basics',
        topics: ['Interface navigation', 'Drawing commands', 'Modification tools', 'Object properties']
      },
      {
        module: 'Module 2: Precision Drawing',
        topics: ['Coordinate systems', 'Object snaps', 'Polar tracking', 'Dynamic input']
      },
      {
        module: 'Module 3: Advanced 2D',
        topics: ['Layers and linetypes', 'Blocks and attributes', 'Hatching patterns', 'Text and dimensions']
      },
      {
        module: 'Module 4: 3D Modeling',
        topics: ['3D workspace', 'Solid primitives', 'Boolean operations', 'Surface modeling']
      },
      {
        module: 'Module 5: Layout & Plotting',
        topics: ['Paper space layouts', 'Viewports', 'Plot styles', 'PDF export']
      },
      {
        module: 'Module 6: Productivity Tools',
        topics: ['Tool palettes', 'Quick select', 'Design center', 'Custom templates']
      }
    ],
    prerequisites: ['Basic computer skills', 'Windows operating system familiarity', 'No prior CAD experience needed']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Mastery',
    category: 'Design',
    gradient: 'from-red-500 to-red-400',
    duration: '10 weeks',
    level: 'Beginner to Advanced',
    description: 'Design beautiful and intuitive user experiences with Figma and design principles.',
    fullDescription: 'Master UI/UX design principles and tools. Learn user research, wireframing, prototyping, and visual design with Figma.',
    rating: 4.8,
    students: 5230,
    instructor: 'Kavya Reddy, UX Design Lead',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    whatYouWillLearn: [
      'Conduct user research and create personas',
      'Design wireframes and prototypes',
      'Master Figma design tool',
      'Apply visual design principles',
      'Create responsive designs',
      'Build design systems'
    ],
    curriculum: [
      {
        module: 'Module 1: UX Fundamentals',
        topics: ['Design thinking', 'User research methods', 'Personas', 'User journeys']
      },
      {
        module: 'Module 2: Information Architecture',
        topics: ['Site mapping', 'Navigation design', 'Content strategy', 'Card sorting']
      },
      {
        module: 'Module 3: Wireframing',
        topics: ['Low-fidelity wireframes', 'User flows', 'Interaction design', 'Usability testing']
      },
      {
        module: 'Module 4: Visual Design',
        topics: ['Color theory', 'Typography', 'Layout principles', 'Design systems']
      },
      {
        module: 'Module 5: Figma Mastery',
        topics: ['Components', 'Auto-layout', 'Variants', 'Prototyping']
      },
      {
        module: 'Module 6: Portfolio & Career',
        topics: ['Case studies', 'Presentation skills', 'Design critiques', 'Job preparation']
      }
    ],
    prerequisites: ['No prior design experience required', 'Basic computer skills', 'Creative mindset']
  }
];
