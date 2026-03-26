"use client";

import { useGetPublicCoursesQuery } from "@/app/api/course";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesList() {
    const { data: coursesData, isLoading, error } = useGetPublicCoursesQuery();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                <p>Course Coming Soon</p>
            </div>
        );
    }

    const courses = coursesData?.data || [];
    console.log(courses);

    if (!courses.length) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>Courses Coming Soon.</p>
            </div>
        );
    }

    const featuredCourse = courses.find((c: any) => c.isMain === true) || courses[0];
    const nonFeaturedCourses = courses.filter((c: any) => c !== featuredCourse);
    const [secondCourse, ...restCourses] = nonFeaturedCourses;

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top row: Featured (2/3) + second course (1/3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
                <div className="md:col-span-2 md:h-[500px] md:w-full">
                    <CourseCard
                        key={featuredCourse.courseId || 0}
                        course={featuredCourse}
                        isFeatured={true}
                        className="shadow-sm border border-gray-100"
                    />
                </div>
                {secondCourse && (
                    <CourseCard
                        key={secondCourse.courseId || 1}
                        course={secondCourse}
                        isFeatured={false}
                        className="shadow-sm border border-gray-100 h-full"
                    />
                )}
            </div>

            {/* Remaining courses in 3-col grid */}
            {restCourses.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {restCourses.map((course: any, index: number) => (
                        <CourseCard
                            key={course.courseId || index + 2}
                            course={course}
                            isFeatured={false}
                            className="shadow-sm border border-gray-100"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
