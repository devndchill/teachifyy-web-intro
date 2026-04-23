import { useMutation } from "@tanstack/react-query";
import { AuthService, ResetPasswordPayload } from "@/services/AuthService";

export const useResetPasswordMutation = () => {
    return useMutation({
        mutationFn: async (payload: ResetPasswordPayload) => {
            return new AuthService().resetPassword(payload);
        },
    });
};
