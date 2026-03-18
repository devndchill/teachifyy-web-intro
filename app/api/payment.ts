import { useMutation, useQuery } from "@tanstack/react-query";
import { PaymentService, CreateOrderPayload } from "@/services/PaymentService";

export const useCreateCourseOrderMutation = () => {
    return useMutation({
        mutationFn: async (payload: CreateOrderPayload) => {
            return new PaymentService().createCourseOrder(payload);
        },
    });
};

export const useGetPaymentStatusQuery = (orderId: string | null) => {
    return useQuery({
        queryKey: ["paymentStatus", orderId],
        queryFn: async () => {
            if (!orderId) throw new Error("Order ID is required");
            return new PaymentService().getPaymentStatus(orderId);
        },
        enabled: !!orderId,
    });
};
