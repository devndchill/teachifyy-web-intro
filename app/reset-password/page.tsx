"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useResetPasswordMutation } from "@/app/api/auth";
import { Eye, EyeOff } from "lucide-react";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { mutate: resetPassword, isPending } = useResetPasswordMutation();

  const validatePassword = (pass: string) => {
    if (pass.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(pass)) return "Password must contain at least 1 uppercase letter";
    if (!/[a-z]/.test(pass)) return "Password must contain at least 1 lowercase letter";
    if (!/[0-9]/.test(pass)) return "Password must contain at least 1 number";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!token) {
      setError("Invalid or missing reset token.");
      return;
    }

    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    resetPassword(
      { token, password },
      {
        onSuccess: () => {
          setSuccessMessage("Your password has been reset successfully. You can now login in the mobile app.");
          setPassword("");
        },
        onError: (err: any) => {
          const apiMessage = err?.response?.data?.message || err?.message || "Failed to reset password. Please try again.";
          setError(apiMessage);
        },
      }
    );
  };

  const inputClasses = "w-full border border-gray-200 rounded-[10px] px-4 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#FF4667]/20 focus:border-[#FF4667] transition-all bg-white text-gray-800 placeholder:text-gray-400";
  const labelClasses = "block text-[14px] font-semibold text-gray-700 mb-2.5";

  return (
    <div className="w-full flex-grow bg-white rounded-[2rem] shadow-[0_15px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-50/50 max-w-md mx-auto">
      {successMessage && (
        <div className="mb-6 p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-xl text-center font-medium">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50/80 border border-red-200 text-red-700 rounded-xl text-center font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="password" className={labelClasses}>New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your new password"
              className={inputClasses}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            isLoading={isPending}
            className="w-full bg-[#FF4667] hover:bg-[#E03A56] text-white rounded-[12px] py-4 text-[16px] font-semibold border-none shadow-[0_4px_14px_rgba(255,70,103,0.3)] hover:shadow-[0_6px_20px_rgba(255,70,103,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#ffebe6] via-white to-[#e6f0ff] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A202C] tracking-tight">
            Reset <span className="text-[#FF4667]">Password</span>
          </h2>
          <p className="text-gray-500 mt-2">Enter your new password to restore access</p>
        </div>
        <Suspense fallback={
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FF4667]"></div>
          </div>
        }>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
