import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SocialShare from '@/components/ui/SocialShare';
import CourseCard from '@/components/courses/CourseCard';
import { getCourseById, courses } from '@/data/courses';
import { constructMetadata } from '@/lib/metadata';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    return constructMetadata({});
  }

  return constructMetadata({
    title: `${course.title} - Teachifyy`,
    description: course.description,
  });
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter((c) => c.id !== course.id && c.category === course.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className=" border-b border-zinc-800">
        <div className="container-custom py-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 ">
                <Badge variant="default">{course.category}</Badge>
                <Badge variant="default">{course.level}</Badge>
                {course.badge && <Badge variant="default">{course.badge}</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-zinc-400 mb-6">{course.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="font-semibold text-white">{course.rating}</span>
                  <span className="text-zinc-400">rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-zinc-300">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-zinc-300">{course.duration}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl border border-zinc-800">
                <div className="w-16 h-16 rounded-full bg-zinc-700 overflow-hidden relative">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Instructor</p>
                  <p className="font-semibold text-white text-lg">{course.instructor.name}</p>
                  <p className="text-sm text-zinc-400">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Enrollment Card */}
            <div>
              <div className="card p-6 sticky top-24">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-zinc-800">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold text-primary">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-zinc-500 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <p className="text-sm text-green-500 font-medium">
                      Save ${(course.originalPrice - course.price).toFixed(2)}
                    </p>
                  )}
                </div>

                <Button variant="primary" size="lg" className="w-full mb-4">
                  Enroll Now
                </Button>

                <Button variant="outline" size="md" className="w-full">
                  Add to Wishlist
                </Button>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <SocialShare
                    url={`#`}
                    title={course.title}
                    description={course.description}
                    className="justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* What You will Learn */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What You will <span className="text-primary">Learn</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Course <span className="text-primary">Curriculum</span>
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {index + 1}. {module.module}
                    </h3>
                    <ul className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center gap-2 text-zinc-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-primary">Requirements</span>
              </h2>
              <ul className="space-y-3">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="text-zinc-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-12 md:py-16 bg-dark-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Related <span className="text-primary">Courses</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
