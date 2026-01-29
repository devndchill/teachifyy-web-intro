import { Metadata } from "next";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Courses - EduPro Academy",
  description:
    "Browse our comprehensive collection of web development courses. Learn React, Next.js, TypeScript, and more.",
});

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-10">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-primary">Courses</span>
            </h1>
            {/* <p className="text-lg text-zinc-400">
              Master modern web development with our comprehensive, project-based courses designed for all skill levels.
            </p> */}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
