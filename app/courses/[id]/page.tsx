"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronDown, ChevronUp, Share2, ShieldCheck } from "lucide-react";
import CtaSection from "@/components/home/CtaSection";
import { useGetPublicCourseBySlugQuery } from "@/app/api/course";

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.id;

  const { data: apiResponse, isLoading, error } = useGetPublicCourseBySlugQuery(slug);

  const data = apiResponse?.data;

  const [openLevel, setOpenLevel] = useState<string | null>(null);

  React.useEffect(() => {
    if (data?.curriculum?.levels?.[0]?.levelId && !openLevel) {
      setOpenLevel(data.curriculum.levels[0].levelId);
    }
  }, [data, openLevel]);

  const toggleLevel = (levelId: string) => {
    setOpenLevel((prev) => (prev === levelId ? null : levelId));
  };

  if (isLoading) {
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
          <p className="text-gray-600 mb-6">The course you are looking for does not exist or an error occurred.</p>
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

  return (
    <div className="min-h-screen bg-white">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative overflow-hidden">
        {/* Subtle decorative blob */}
        {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" /> */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
        </div>
        <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left – Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#000000] leading-tight tracking-tight mb-5">
                {data.course.title}
              </h1>
              <p className="text-[#000000]/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                {data.course.description}
              </p>

              {/* Course Features Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 mt-8">
                <span className="border border-gray-200 rounded-full px-3 py-1 text-[#111827] text-[12px] font-light bg-white">
                  Video lessons
                </span>
                <span className="border border-gray-200 rounded-full px-3 py-1 text-[#111827] text-[12px] font-light bg-white">
                  {data.curriculum?.totalWeeks ? `${data.curriculum.totalWeeks * 10}+ hours` : '220+ hours'}
                </span>
                <span className="border border-gray-200 rounded-full px-3 py-1 text-[#111827] text-[12px] font-light bg-white">
                  Beginner Level
                </span>
                <span className="bg-[#325A86] text-white rounded-full px-3 py-1 text-[12px] font-light flex items-center gap-2">
                  <CheckCircle className="w-[18px] h-[18px] fill-white text-[#325A86]" />
                  Certification Included
                </span>
              </div>

              {/* <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <button className="bg-primary hover:bg-primary-600 text-white font-semibold text-[15px] px-8 py-3 rounded-lg transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto">
                    Enroll Now
                  </button>
                </Link>
                <button className="border-2 border-white/30 text-white font-medium text-[15px] px-8 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                  Explore Curriculum
                </button>
              </div> */}
            </div>

            {/* Right – Image */}
            {/* 1120px Width × 840px Height */}
            <div className="flex-shrink-0 w-full max-w-[450px]">
              <div className="relative w-full h-[450px] max-w-full rounded-[50px] overflow-hidden shadow-2xl shadow-black/40">
                {data.course?.image && (
                  <Image
                    src={data.course.secondImage}
                    alt={data.course.title || "Course thumbnail"}
                    fill
                    sizes="(max-width: 640px) 320px,
               (max-width: 768px) 400px,
               (max-width: 1024px) 500px,
               560px"
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== ABOUT + PRICING SECTION ======================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Left Column – About + What You'll Learn */}
            <div className="flex-1 min-w-0">
              {/* About This Course */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  About This Course
                </h2>
                <div className="space-y-4">
                  {data.aboutCourse?.description?.map((para: string, i: number) => (
                    <p
                      key={i}
                      className="text-gray-600 text-[15px] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">What You will Learn</h2>
                <ul className="space-y-3">
                  {data.whatYouWillLearn?.points?.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-[15px] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column – Pricing Card */}
            {/* Right Column – Pricing Card */}
            <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-[40px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 border border-gray-100 flex flex-col">
                  {/* Price Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[44px] md:text-[52px] font-bold text-[#111827] leading-none tracking-tight">
                        ₹{formattedPrice}
                      </span>
                      <span className="text-xl md:text-2xl text-[#9ca3af] line-through font-bold">
                        ₹100000
                      </span>
                    </div>
                    <p className="text-[#34A853] font-bold text-[13px] md:text-[14px]">
                      Limited time early bird pricing
                    </p>
                  </div>

                  {/* What's included */}
                  <div className="mb-10 flex-1">
                    <p className="text-[#9ca3af] font-bold text-[15px] mb-5">
                      What&apos;s included
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Recorded Lessons",
                        "Practice Test",
                        "Certification",
                        "On-Demand Live Classes",
                        "Mentorship",
                        "Career and Placement Support",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-[20px] h-[20px] fill-[#34A853] text-white shrink-0" />
                          <span className="text-[#111827] text-[16px] font-normal tracking-wide">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4 w-full">
                    <Link href={`/courses/${slug}/enroll`} className="block w-full">
                      <button className="w-full bg-[#FF4667] hover:bg-[#E53858] text-white font-normal text-[17px] py-[14px] transition-colors border border-[#FF4667]">
                        Enroll Now
                      </button>
                    </Link>
                    <Link href="/contact" className="block w-full">
                      <button className="w-full border border-[#FF4667] text-[#111827] bg-white hover:bg-gray-50 font-normal text-[17px] py-[14px] transition-colors">
                        Talk to an Advisor
                      </button>
                    </Link>
                  </div>

                  {/* Secure Checkout */}
                  <div className="mt-8 flex items-center justify-center gap-2 text-[#9ca3af]">
                    <ShieldCheck className="w-[18px] h-[18px] stroke-2" />
                    <span className="text-sm font-bold">Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CURRICULUM SECTION ======================== */}
      <section className="section-padding bg-gray-50/60">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Course Curriculum
          </h2>

          <div className="space-y-3 max-w-3xl">
            {data.curriculum?.levels?.length > 0 ? (
              data.curriculum.levels.map((level: any) => {
                const isOpen = openLevel === level.levelId;
                return (
                  <div
                    key={level.levelId}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleLevel(level.levelId)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none group"
                    >
                      <span className="font-semibold text-gray-900 text-[15px] md:text-base group-hover:text-primary transition-colors">
                        {level.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0">
                        <div className="text-gray-600 text-[15px] border-t border-gray-100 pt-4 leading-relaxed">
                          {level.description || "No description available for this level."}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">No curriculum available for this course.</p>
            )}
          </div>
        </div>
      </section>

      {/* ======================== MENTOR SECTION ======================== */}
      <section className="section-padding flex flex-col items-start justify-start">
        <div className="container-custom  w-full flex justify-start">

          <div className="bg-[#DDE6F28A] w-fit rounded-2xl p-6 sm:p-8 md:p-10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Mentor
            </h2>

            {/* Content */}
            <div className="flex flex-col sm:flex-row items-start gap-5 max-w-2xl">
              {/* Mentor Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border-2 border-gray-100 relative overflow-hidden text-2xl font-bold text-gray-400">
                {data.mentor?.imageUrl ? (
                  <Image
                    src={data.mentor.imageUrl}
                    alt={data.mentor?.name || "Mentor"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  data.mentor?.name?.charAt(0)?.toUpperCase() || "M"
                )}
              </div>

              {/* Mentor Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">
                  {data.mentor?.name}
                </h3>

                <p className="text-primary text-sm font-medium mb-3">
                  {data.mentor?.designation}
                </p>

                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                  {data.mentor?.bio}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================== CTA SECTION ======================== */}
      <CtaSection />
    </div>
  );
}
