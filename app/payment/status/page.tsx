"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, BookOpen, XCircle, Loader2 } from "lucide-react";
import { useGetPaymentStatusQuery } from "@/app/api/payment";

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  const { data, isLoading, isError } = useGetPaymentStatusQuery(orderId);

  // We consider it successful if the API successfully returns and the data status is PAID
  // (adjust this based on your actual backend response structure)
  const isSuccess = data?.success === true && data?.data?.status === "PAID";
  const isFailed = isError || (data && (!data.success || data.data?.status !== "PAID"));

  const courseData = data?.data?.course;
  const courseName = courseData?.title || "Course Name";
  const courseLevel = courseData?.level || "All Levels";
  const courseDuration = courseData?.totalWeeks ? `${courseData.totalWeeks} Weeks` : "Self-paced";

  if (isLoading || !orderId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-gray-50 text-center px-4">
        <Loader2 className="w-12 h-12 text-[#ff4f6a] animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying your payment...</h2>
        <p className="text-gray-500">Please wait while we confirm your enrollment.</p>
      </div>
    );
  }

  if (isFailed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-gray-50 text-center px-4">
        <XCircle className="w-16 h-16 text-red-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed or Cancelled</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          We couldn&apos;t process your payment. You haven&apos;t been charged. If money was deducted, it will be refunded automatically.
        </p>
        <Link href="/">
          <button className="bg-[#ff4f6a] hover:bg-[#e0435c] text-white font-medium px-8 py-3 rounded-full transition-colors">
            Return to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Section - White Background */}
      <section className="bg-white relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle decorative blob */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 w-full max-w-xl">
              {/* Payment Successful Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#dcfce7] text-[#16a34a] px-3 py-1.5 rounded-full mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase">PAYMENT SUCCESSFUL</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-[#000000] leading-[1.1] mb-6 tracking-tight">
                You&apos;re officially<br />
                <span className="text-[#ff4f6a]">enrolled.</span>
              </h1>

              {/* Description Texts */}
              <p className="text-[#333333] text-[15px] mb-12 leading-relaxed">
                Your payment was successful and you are now enrolled in the course.
              </p>

              <p className="text-[#333333] text-[15px] mb-5 leading-relaxed">
                Your learning journey starts now. Access your lessons easily through the{" "}
                <strong className="font-bold text-black">Teachifyy mobile app.</strong>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/download" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#ff4f6a] hover:bg-[#e0435c] text-white font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-lg shadow-red-500/20">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    Download the Teachifyy app
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center border border-[#ff4f6a] text-[#ff4f6a] hover:bg-red-50 font-medium text-sm px-8 py-3 rounded-full transition-colors">
                    Continue on Home
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end relative">
              <div className="relative rounded-[40px] overflow-hidden w-full max-w-[480px] aspect-[4/3] shadow-2xl">
                <Image
                  src="/assets/careerHero.jpg"
                  alt="Build the Future of Education"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Enrollment Active Floating Card */}
              <div className="absolute -bottom-8 lg:-bottom-6 lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 bg-white rounded-xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-start gap-0.5 z-20 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-bold text-black text-[13px]">Enrollment Active</span>
                </div>
                <p className="text-gray-400 text-[10px] pl-4">Access Granted Immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gray Section */}
      <section className="bg-[#f4f4f4] flex-1 py-16 md:py-24 relative z-20">
        <div className="container-custom flex justify-center">
          <div className="bg-white rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] w-full max-w-3xl overflow-hidden p-8 md:p-12 border border-black/5">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-xl shrink-0 border border-gray-100">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-[17px] font-bold text-black mb-0.5">Your Course Access</h2>
                <p className="text-[#a1a1aa] text-[13px]">Enrollment confirmed & active</p>
              </div>
            </div>

            <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

            {/* Card Body - List */}
            <div className="space-y-0">
              {[
                { label: "Course", value: courseName },
                { label: "Format", value: "Video Learning" },
                { label: "Duration", value: courseDuration },
                { label: "Level", value: courseLevel },
                { label: "Certificate", value: "Yes, after completion" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-5 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#22c55e] fill-[#dcfce7] shrink-0" />
                    <span className="text-[#71717a] text-[15px]">{item.label}</span>
                  </div>
                  <span className="text-black font-bold text-[15px] text-right">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="mt-8 bg-gray-50/50 rounded-2xl p-6 text-center border border-gray-100">
              <p className="text-[#3f3f46] text-[13px] leading-relaxed max-w-lg mx-auto">
                Your course is now available in your <strong className="font-bold text-black">Teachifyy account</strong>. Register in the app using your email to access the course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff4f6a]"></div>
      </div>
    }>
      <PaymentStatusContent />
    </Suspense>
  );
}
