import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CourseCard from '@/components/courses/CourseCard';
import Button from '@/components/ui/Button';
import { getFeaturedCourses } from '@/data/courses';

const FeaturedCourses = () => {
  const courses = getFeaturedCourses(3);

  return (
    <section className="pt-10 p-10 bg-dark-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Courses</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Handpicked courses to help you master modern web development and advance your career.
            </p>
          </div>
          <Link href="/courses" className="hidden md:block">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/courses">
            <Button variant="outline" className="group">
              View All Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
