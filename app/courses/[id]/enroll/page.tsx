"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { useGetPublicCourseBySlugQuery } from "@/app/api/course";
import { useCreateCourseOrderMutation } from "@/app/api/payment";
import { load } from "@cashfreepayments/cashfree-js";

export default function EnrollPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.id;
  const router = useRouter();

  const { data: apiResponse, isLoading: isLoadingCourse, error } = useGetPublicCourseBySlugQuery(slug);
  const data = apiResponse?.data;

  const createOrderMutation = useCreateCourseOrderMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });

  const [formError, setFormError] = useState("");

  if (isLoadingCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h1>
          <p className="text-gray-600 mb-6">The course you are looking for does not exist.</p>
          <Link href="/courses">
            <button className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
              Browse Courses
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-IN").format(
    data.pricing?.originalPrice || 0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError("");
  };

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobileNumber) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      // 1. Call Backend to create order and get paymentSessionId
      const response = await createOrderMutation.mutateAsync({
        courseId: data.courseId,
        guestName: formData.name,
        guestEmail: formData.email,
        guestPhone: formData.mobileNumber,
        purchaseType: "FULL_COURSE"
      });

      const paymentSessionId = response?.data?.paymentSessionId;

      if (!paymentSessionId) {
        throw new Error("Failed to receive payment session ID.");
      }

      // 2. Initialize Cashfree SDK
      const mode = process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT === "production" ? "production" : "sandbox";
      const cashfree = await load({ mode: mode as "production" | "sandbox" });

      if (!cashfree) {
        throw new Error("Failed to initialize Cashfree SDK.");
      }

      // 3. Trigger Checkout
      await cashfree.checkout({
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self" // Default behavior for redirection
      });

    } catch (err: any) {
      console.error("Payment error:", err);
      setFormError(err.message || "An error occurred during payment initialization. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 md:static z-20">
        <div className="container-custom py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </button>
        </div>
      </div>

      <div className="container-custom mt-8 md:mt-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Checkout Details</h1>
                <p className="text-gray-500 text-sm mb-8">Please enter your details to complete the enrollment.</p>

                {formError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">
                    {formError}
                  </div>
                )}

                <form onSubmit={handleEnrollment} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={createOrderMutation.isPending}
                      className="w-full bg-primary hover:bg-primary-600 text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {createOrderMutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Proceed to Payment (₹{formattedPrice})
                        </>
                      )}
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      Payments are secure and encrypted
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden lg:sticky lg:top-8">
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

                {/* Course Info */}
                <div className="flex gap-4 pb-6 border-b border-gray-100">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative bg-gray-100">
                    {data.course?.image && (
                      <Image
                        src={data.course.image}
                        alt={data.course.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px] leading-snug line-clamp-2 mb-1">
                      {data.course.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {data.mentor?.name}
                    </p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-6 space-y-3">
                  <div className="flex justify-between items-center text-[15px] text-gray-600">
                    <span>Course Fee</span>
                    <span className="font-medium text-gray-900">₹{formattedPrice}</span>
                  </div>
                  {/* Additional breakdown can go here like taxes etc. if needed */}

                  <div className="pt-3 mt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-base">Total Amount</span>
                    <span className="font-bold text-primary text-xl">₹{formattedPrice}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-center">
                {/* Made-up Cashfree badge / trust indicators */}
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  Secured by Cashfree
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
