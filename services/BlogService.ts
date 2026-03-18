import { Client } from "@/lib/apiClient";

export class BlogService extends Client {
    async getBlogs() {
        const response = await this.api.get("/api/v1/blogs");
        return response.data;
    }

    async getBlogById(id: string) {
        const response = await this.api.get(`/api/v1/blogs/${id}`);
        return response.data;
    }
}
