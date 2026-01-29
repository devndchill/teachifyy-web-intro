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
        slug: 'Diploma in Early Childhood Education',
        title: 'Diploma in Early Childhood Education',
        description: 'Teachifyy is a career-focused diploma program designed for teachers who don’t want to remain stuck in low-paying, stagnant roles. Built around real classroom realities and long-term career growth, the program goes beyond theory to develop confident, employable educators with strong teaching skills, professional presence, and clear growth pathways. By combining practical pedagogy, modern teaching tools, mentorship, and career strategy, Teachifyy prepares teachers not just to get jobs—but to grow in them over time. UK-inspired in standards, India-focused in execution, and built with real schools, Teachifyy helps teachers build respect, stability, and sustainable income in the profession.',
        thumbnail: '/assets/1.png',
        category: 'Education',
        duration: '40+ hours',
        level: 'Intermediate',
        instructor: {
            name: '',
            avatar: '',
            bio: '',
        },
        rating: 4.8,
        students: 12500,
        price: 49.99,
        originalPrice: 99.99,
        badge: 'Bestseller',
        curriculum: [],
        whatYouLearn: [],
        requirements: [],
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
