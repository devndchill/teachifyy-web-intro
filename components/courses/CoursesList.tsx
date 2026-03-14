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

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {courses.map((course: any) => (
                <CourseCard
                    key={course.id || course._id}
                    course={course}
                    className="shadow-sm border border-gray-100"
                />
            ))}
        </div>
    );
}
