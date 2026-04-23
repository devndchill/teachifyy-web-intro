import { Client } from "@/lib/apiClient";

export interface ResetPasswordPayload {
    token: string;
    password: string;
}

export class AuthService extends Client {
    async resetPassword(payload: ResetPasswordPayload) {
        // the user specified `auth/reset-password`. I assume base path includes `/api/v1` or we can just pass `/api/v1/auth/reset-password` just like other services
        const response = await this.api.post("/api/v1/auth/reset-password", payload);
        return response.data;
    }
}
