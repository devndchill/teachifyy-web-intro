export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    instructor: {
        name: string;
        avatar: string;
        bio: string;
    };
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    badge?: 'Bestseller' | 'New' | 'Popular';
    curriculum: {
        module: string;
        lessons: string[];
    }[];
    whatYouLearn: string[];
    requirements: string[];
}

export const courses: Course[] = [
    {
        id: '1',
        slug: 'fullstack-mern-bootcamp',
        title: 'Complete MERN Stack Development Bootcamp',
        description: 'Master MongoDB, Express, React, and Node.js to build production-ready full-stack applications from scratch.',
        thumbnail: '/assets/1.png',
        category: 'Web Development',
        duration: '40+ hours',
        level: 'Intermediate',
        instructor: {
            name: 'John Doe',
            avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=400&background=FFC107&color=0A0A0A&bold=true',
            bio: 'Senior Full-Stack Developer with 10+ years of experience building scalable web applications.',
        },
        rating: 4.8,
        students: 12500,
        price: 49.99,
        originalPrice: 99.99,
        badge: 'Bestseller',
        curriculum: [
            {
                module: 'Introduction to MERN Stack',
                lessons: ['What is MERN?', 'Setting up development environment', 'Understanding the architecture'],
            },
            {
                module: 'MongoDB Fundamentals',
                lessons: ['NoSQL databases', 'CRUD operations', 'Data modeling', 'Mongoose ODM'],
            },
            {
                module: 'Express.js Backend',
                lessons: ['RESTful API design', 'Middleware', 'Authentication & Authorization', 'Error handling'],
            },
            {
                module: 'React Frontend',
                lessons: ['Components & Props', 'State management', 'React Hooks', 'React Router'],
            },
            {
                module: 'Full-Stack Integration',
                lessons: ['Connecting frontend to backend', 'State management with Redux', 'Deployment'],
            },
        ],
        whatYouLearn: [
            'Build full-stack web applications using MERN stack',
            'Create RESTful APIs with Express.js and Node.js',
            'Design and implement MongoDB databases',
            'Build modern React applications with hooks',
            'Implement authentication and authorization',
            'Deploy applications to production',
        ],
        requirements: [
            'Basic JavaScript knowledge',
            'Understanding of HTML and CSS',
            'Familiarity with command line',
        ],
    },
    {
        id: '2',
        slug: 'nextjs-typescript-masterclass',
        title: 'Next.js 15 & TypeScript Masterclass',
        description: 'Learn to build blazing-fast, SEO-optimized web applications with Next.js 15, TypeScript, and modern best practices.',
        thumbnail: '/assets/2.png',
        category: 'Web Development',
        duration: '35+ hours',
        level: 'Advanced',
        instructor: {
            name: 'Jane Smith',
            avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&size=400&background=3B82F6&color=fff&bold=true',
            bio: 'Frontend architect specializing in React and Next.js with a passion for performance optimization.',
        },
        rating: 4.9,
        students: 8900,
        price: 59.99,
        originalPrice: 119.99,
        badge: 'New',
        curriculum: [
            {
                module: 'Next.js Fundamentals',
                lessons: ['App Router vs Pages Router', 'Server Components', 'Client Components', 'Routing'],
            },
            {
                module: 'TypeScript Integration',
                lessons: ['TypeScript basics', 'Type-safe components', 'Advanced types', 'Generics'],
            },
            {
                module: 'Data Fetching',
                lessons: ['Server-side rendering', 'Static generation', 'Incremental static regeneration', 'API routes'],
            },
            {
                module: 'Performance & SEO',
                lessons: ['Image optimization', 'Metadata API', 'Core Web Vitals', 'Analytics'],
            },
        ],
        whatYouLearn: [
            'Master Next.js 15 App Router',
            'Write type-safe code with TypeScript',
            'Optimize for performance and SEO',
            'Implement server and client components',
            'Build production-ready applications',
        ],
        requirements: [
            'Strong React knowledge',
            'JavaScript ES6+ proficiency',
            'Basic TypeScript understanding',
        ],
    },
    {
        id: '3',
        slug: 'tailwind-css-design-system',
        title: 'Tailwind CSS: Build a Professional Design System',
        description: 'Create beautiful, responsive, and maintainable user interfaces with Tailwind CSS and modern design principles.',
        thumbnail: '/assets/3.png', category: 'UI/UX Design',
        duration: '20+ hours',
        level: 'Beginner',
        instructor: {
            name: 'Mike Johnson',
            avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&size=400&background=06B6D4&color=fff&bold=true',
            bio: 'UI/UX designer and frontend developer with expertise in design systems and component libraries.',
        },
        rating: 4.7,
        students: 15200,
        price: 39.99,
        badge: 'Popular',
        curriculum: [
            {
                module: 'Tailwind Basics',
                lessons: ['Utility-first CSS', 'Configuration', 'Responsive design', 'Dark mode'],
            },
            {
                module: 'Building Components',
                lessons: ['Buttons', 'Forms', 'Cards', 'Navigation', 'Modals'],
            },
            {
                module: 'Design System',
                lessons: ['Color palette', 'Typography', 'Spacing', 'Animations'],
            },
        ],
        whatYouLearn: [
            'Master Tailwind CSS utility classes',
            'Build responsive layouts',
            'Create reusable components',
            'Implement dark mode',
            'Design consistent UI systems',
        ],
        requirements: [
            'HTML and CSS basics',
            'Understanding of responsive design',
        ],
    },
    {
        id: '4',
        slug: 'react-advanced-patterns',
        title: 'Advanced React Patterns & Best Practices',
        description: 'Deep dive into advanced React patterns, performance optimization, and architectural best practices for scalable applications.',
        thumbnail: 'https://placehold.co/1200x675/1a1a1a/61DAFB?text=Advanced+React&font=roboto',
        category: 'Web Development',
        duration: '30+ hours',
        level: 'Advanced',
        instructor: {
            name: 'Sarah Williams',
            avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&size=400&background=61DAFB&color=000&bold=true',
            bio: 'React core contributor and consultant helping teams build enterprise-scale applications.',
        },
        rating: 4.9,
        students: 6700,
        price: 69.99,
        originalPrice: 139.99,
        badge: 'Bestseller',
        curriculum: [
            {
                module: 'Advanced Patterns',
                lessons: ['Compound components', 'Render props', 'Higher-order components', 'Custom hooks'],
            },
            {
                module: 'Performance Optimization',
                lessons: ['React.memo', 'useMemo & useCallback', 'Code splitting', 'Lazy loading'],
            },
            {
                module: 'State Management',
                lessons: ['Context API', 'Redux Toolkit', 'Zustand', 'React Query'],
            },
        ],
        whatYouLearn: [
            'Implement advanced React patterns',
            'Optimize application performance',
            'Master state management solutions',
            'Build scalable architectures',
            'Write clean, maintainable code',
        ],
        requirements: [
            'Solid React fundamentals',
            'Experience building React apps',
            'JavaScript ES6+ proficiency',
        ],
    },
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category: string): Course[] {
    return courses.filter((course) => course.category === category);
}

export function getFeaturedCourses(limit: number = 3): Course[] {
    return courses.slice(0, limit);
}
