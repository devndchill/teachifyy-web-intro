import { Client } from "@/lib/apiClient";

export class CourseService extends Client {
    async getPublicCourses() {
        const response = await this.api.get("/api/v1/courses/public");
        return response.data;
    }

    async getPublicCourseBySlug(slug: string) {
        const response = await this.api.get(`/api/v1/courses/public/${slug}`);
        return response.data;
    }

    async deleteAccount(payload: { email: string; phone: string }) {
        const response = await this.api.post("/api/v1/delete-account", payload);
        return response.data;
    }
}
