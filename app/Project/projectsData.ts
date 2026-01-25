export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  img: string;
  link: string;
  duration: string;
  techStack: string[];
  features: string[];
  projectStructure: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    apis?: string[];
    integrations?: string[];
  };
  challenges: string[];
  solutions: string[];
  role: string;
  teamSize?: string;
  status: "completed" | "ongoing" | "upcoming";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Villagepepro",
    description:
      "A fintech platform for seamless payments, wallet integration, and transaction management.",
    longDescription:
      "VillagepePro is a comprehensive fintech platform designed to bring digital payment services to every corner of India. It enables retailers and agents to offer essential financial services including mobile recharge, bill payments, DTH recharge, and AEPS (Aadhaar-enabled banking services).",
    img: "/gmax-fintech.jpg",
    link: "https://villagepepro.com/",
    duration: "4 months",
    techStack: ["React.js", "JavaScript", "CSS3", "Axios", "React Router"],
    features: [
      "Mobile Recharge (Prepaid & Postpaid)",
      "DTH Recharge",
      "Bill Payments (Electricity, Water, Gas)",
      "AEPS (Aadhaar-enabled Payment System)",
      "Wallet Integration",
      "Transaction History",
      "Real-time Payment Status",
      "Multi-operator Support",
    ],
    projectStructure: {
      frontend: [
        "React.js for UI components",
        "React Router for navigation",
        "Axios for API calls",
        "CSS3 for styling",
        "Responsive design for mobile/desktop",
        "Payment flow UI implementation",
        "Transaction status handling",
      ],
      apis: [
        "Payment gateway API integration",
        "Recharge API integration",
        "Bill payment API integration",
        "AEPS API integration",
      ],
    },
    challenges: [
      "Handling multiple payment gateway integrations",
      "Managing real-time transaction status",
      "Ensuring secure payment processing",
      "Mobile responsiveness across devices",
    ],
    solutions: [
      "Implemented robust error handling for API calls",
      "Created status polling mechanism for transactions",
      "Added encryption for sensitive data",
      "Used responsive CSS and mobile-first approach",
    ],
    role: "Frontend Developer",
    teamSize: "6 members",
    status: "completed",
  },
  {
    id: 2,
    title: "Neuva Life Sciences",
    description:
      "Website for a baby care products company, showcasing their product range and e-commerce features.",
    longDescription:
      "A comprehensive e-commerce website for Neuva Life Sciences, specializing in baby care products. The platform features product catalog, shopping cart, user authentication, and order management system.",
    img: "/baby_image.jpg",
    link: "https://www.neuvalifesciences.com/",
    duration: "1 month",
    techStack: ["React.js", "JavaScript", "CSS3"],
    features: [
      "Product Catalog & Search",
      "Shopping Cart",
      "User Authentication",
      "Order Management",
      "Product Reviews",
      "Admin Dashboard",
      "Payment Integration",
    ],
    projectStructure: {
      frontend: [
        "React.js components",
        "Product listing pages",
        "Shopping cart functionality",
        "User dashboard",
        "Responsive design implementation",
      ],
      apis: [
        "WhatsApp Integration API",
        "EmailJS for email sending",
      ],
    },
    challenges: [
      "Managing large product catalog",
      "Shopping cart state management",
      "Secure payment processing",
    ],
    solutions: [
      "Implemented pagination for products",
      "Used React Context for cart state",
      "Integrated secure payment gateway",
    ],
    role: "Frontend Developer",
    teamSize: "3 members",
    status: "completed",
  },
  {
    id: 3,
    title: "CCIE Labs",
    description:
      "Training center website for networking certifications with course details and enrollment features.",
    longDescription:
      "A training center website for CCIE Labs, offering networking certification courses. Features include course catalog, student enrollment, progress tracking, and certification management.",
    img: "/training-center.jpeg",
    link: "https://ccielab.net/",
    duration: "2 months",
    techStack: ["React.js", "JavaScript", "CSS3", "Hubspot"],
    features: [
      "Course Catalog",
      "Student Enrollment",
      "Progress Tracking",
      "Certification Management",
      "Instructor Dashboard",
      "Payment Integration",
    ],
    projectStructure: {
      frontend: [
        "React.js components",
        "Course listing pages",
        "Student dashboard",
        "Enrollment forms",
        "Progress visualization",
      ],
      integrations: [
        "Hubspot CRM integration",
        "Hubspot forms integration",
        "Hubspot tracking and analytics",
      ],
    },
    challenges: [
      "Complex course structure",
      "Student progress tracking",
      "Hubspot integration",
    ],
    solutions: [
      "Hierarchical course structure",
      "Automated progress calculation",
      "Seamless Hubspot API integration",
    ],
    role: "Frontend Developer",
    teamSize: "4 members",
    status: "completed",
  },
  {
    id: 4,
    title: "Home Pitara",
    description:
      "A real estate project that helps users discover, compare, and connect with property listings.",
    longDescription:
      "Home Pitara is a real estate platform that helps users discover, compare, and connect with property listings. Features include property search, filters, virtual tours, and agent contact.",
    img: "/Home-image.jpeg",
    link: "https://homepitara.com/",
    duration: "1 month",
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Property Search & Filters",
      "Virtual Tours",
      "Property Comparison",
      "Agent Contact",
      "Favorites List",
      "Map Integration",
    ],
    projectStructure: {
      frontend: [
        "Next.js pages and routing",
        "React.js components",
        "Property listing components",
        "Search & filter functionality",
        "Map integration",
        "Responsive design with Tailwind CSS",
      ],
    },
    challenges: [
      "Large property database",
      "Image optimization",
      "Map integration",
    ],
    solutions: [
      "Efficient database queries",
      "Image compression & CDN",
      "Google Maps API integration",
    ],
    role: "Frontend Developer",
    teamSize: "4 members",
    status: "completed",
  },
  {
    id: 5,
    title: "Samgamam Banking Solutions",
    description:
      "A cooperative banking web platform enabling digital account, deposit, and fund management.",
    longDescription:
      "A comprehensive cooperative banking web platform that enables digital account management, deposits, loans, and fund transfers. Built with security and user experience in mind.",
    img: "/cooperative_bank.jpg",
    link: "#",
    duration: "4 months",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Swagger UI", "TypeScript"],
    features: [
      "Account Management",
      "Digital Deposits",
      "Loan Applications",
      "Fund Transfers",
      "Transaction History",
      "Secure Authentication",
    ],
    projectStructure: {
      frontend: [
        "Next.js App Router implementation",
        "Creating pages from scratch",
        "React.js components development",
        "Tailwind CSS for styling",
        "Responsive design implementation",
      ],
      apis: [
        "API Integration using Swagger UI",
        "RESTful API consumption",
        "API documentation reference",
      ],
    },
    challenges: [
      "API Integration complexity",
      "Creating pages from scratch",
      "Understanding banking workflows",
    ],
    solutions: [
      "Used Swagger UI for API documentation",
      "Systematic page-by-page development",
      "Close collaboration with backend team",
    ],
    role: "Frontend Developer",
    status: "ongoing",
  },
  {
    id: 6,
    title: "Coming Soon",
    description:
      "Another upcoming project in progress. Details will be revealed shortly.",
    longDescription:
      "A new exciting project is currently in development. More details will be available soon.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&w=1000&q=80",
    link: "https://www.pexels.com/search/website%20background/",
    duration: "TBD",
    techStack: [],
    features: [],
    projectStructure: {},
    challenges: [],
    solutions: [],
    role: "Developer",
    teamSize: "12 members",
    status: "upcoming",
  },
];

