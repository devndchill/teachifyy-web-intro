import { useQuery, useMutation } from "@tanstack/react-query";
import { CourseService } from "@/services/CourseService";

export const GET_PUBLIC_COURSES_KEY = ["courses", "public"];

export const getPublicCoursesQuery = async () => {
    return new CourseService().getPublicCourses();
};

export const useGetPublicCoursesQuery = () => {
    return useQuery({
        queryKey: GET_PUBLIC_COURSES_KEY,
        queryFn: () => getPublicCoursesQuery(),
    });
};

export const GET_PUBLIC_COURSE_BY_SLUG_KEY = (slug: string) => ["courses", "public", slug];

export const getPublicCourseBySlugQuery = async (slug: string) => {
    return new CourseService().getPublicCourseBySlug(slug);
};

export const useGetPublicCourseBySlugQuery = (slug: string) => {
    return useQuery({
        queryKey: GET_PUBLIC_COURSE_BY_SLUG_KEY(slug),
        queryFn: () => getPublicCourseBySlugQuery(slug),
        enabled: !!slug,
    });
};

export const useDeleteAccountMutation = () => {
    return useMutation({
        mutationFn: async (payload: { email: string; phone: string }) => {
            return new CourseService().deleteAccount(payload);
        },
    });
};
