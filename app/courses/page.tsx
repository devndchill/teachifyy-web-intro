import { Metadata } from "next";
import CoursesList from "@/components/courses/CoursesList";
import { constructMetadata } from "@/lib/metadata";
import CourseHero from "@/components/courses/CourseHero";
import UserJourney from "@/components/courses/UserJourney";
import UpcomingMasterclasses from "@/components/courses/UpcomingMasterclasses";

export const metadata: Metadata = constructMetadata({
  title: "Courses",
  description:
    "Define your teaching career with online courses and certification from Teachifyy. Learn Pedagogy, Classroom Management, IB/International Teaching interview, Professional Communication & Interview Mastery, TEFL/TESOL.",
});

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CourseHero />
      <UserJourney />
      {/* <UpcomingMasterclasses /> */}

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Explore <span className="text-primary">Our Courses</span>
            </h2>
            <p className="text-gray-600 font-medium">
              Comprehensive courses tailored for every career stage.
            </p>
          </div>

          <CoursesList />
        </div>
      </section>
    </div>
  );
}
