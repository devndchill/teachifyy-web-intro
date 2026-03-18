import { Client } from "@/lib/apiClient";

export interface CreateOrderPayload {
    courseId: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    purchaseType: string;
}

export class PaymentService extends Client {
    async createCourseOrder(payload: CreateOrderPayload) {
        // We're assuming the backend structure based on traditional setups
        // You might need to adjust this endpoint URL later based on the actual backend route
        const response = await this.api.post("/api/v1/payments/create-order", payload);
        return response.data;
    }

    async getPaymentStatus(orderId: string) {
        const response = await this.api.get(`/api/v1/payments/orders/${orderId}`);
        return response.data;
    }
}
