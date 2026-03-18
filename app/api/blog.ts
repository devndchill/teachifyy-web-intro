import { useQuery } from "@tanstack/react-query";
import { BlogService } from "@/services/BlogService";

export const GET_BLOGS_KEY = ["blogs", "public"];

export const getBlogsQuery = async () => {
    return new BlogService().getBlogs();
};

export const useGetBlogsQuery = () => {
    return useQuery({
        queryKey: GET_BLOGS_KEY,
        queryFn: () => getBlogsQuery(),
    });
};

export const GET_BLOG_BY_ID_KEY = (id: string) => ["blogs", "public", id];

export const getBlogByIdQuery = async (id: string) => {
    return new BlogService().getBlogById(id);
};

export const useGetBlogByIdQuery = (id: string) => {
    return useQuery({
        queryKey: GET_BLOG_BY_ID_KEY(id),
        queryFn: () => getBlogByIdQuery(id),
        enabled: !!id,
    });
};
