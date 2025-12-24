import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { Course } from '@/data/courses';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn('card card-hover group block', className)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {course.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="default" className="bg-white/80 backdrop-blur-sm">{course.badge}</Badge>
          </div>
        )}
        
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Duration */}
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
          <span className="text-primary font-medium">{course.category}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800">
          <div className="w-8 h-8 rounded-full bg-zinc-700 overflow-hidden relative">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-zinc-300">{course.instructor.name}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-400">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>

          <div className="text-right">
            {course.originalPrice && (
              <span className="text-sm text-zinc-500 line-through mr-2">
                ${course.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-primary">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
