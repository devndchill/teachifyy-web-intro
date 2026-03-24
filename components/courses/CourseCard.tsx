"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, X, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CourseCardProps {
  course: Course;
  className?: string;
  isFeatured?: boolean;
}

const CourseCard = ({
  course,
  className,
  isFeatured = false,
}: CourseCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Button text logic
  const buttonText = course.category?.includes("Diploma")
    ? "View Diploma"
    : course.category?.includes("Certification")
      ? "Get Certified"
      : isFeatured
        ? "View program"
        : "Explore Course";

  return (
    <>
      <Link
        href={`/courses/${course.slug}`}
        className={cn(
          "group flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden",
          className
        )}
      >
        {/* Thumbnail */}
        {/* 800*280 for populer thubmnail */}
        <div className="relative w-full aspect-[5/3] overflow-hidden">
          <Image
            src={course.image || "/assets/new test.png"}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* POPULAR badge */}
          {(isFeatured || course.badge) && (
            <div className="absolute top-5 right-5 z-10">
              <span className="bg-[#ff4d67] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {course.badge || "POPULAR"}
              </span>
            </div>
          )}

          {/* Category chip — bottom-left of image */}
          {course.category && (
            <div className="absolute bottom-4 left-4 z-10">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {course.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 lg:px-8 lg:pb-8 flex flex-col flex-grow">
          {/* Title */}
          <h3
            className={cn(
              "font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]",
              isFeatured ? "text-2xl lg:text-3xl" : "text-xl"
            )}
          >
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[40px]">
            {course.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-50/50">
            {/* Instructor */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative shrink-0">
                {course.instructor?.avatar && (
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name || "Instructor"}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-800 font-semibold whitespace-nowrap">
                  With {course.instructor?.name || "Instructor"}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-[11px] h-[11px]" />
                  {course.totalWeeks || "8"} Weeks
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-[#ff4d67] text-xs sm:text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform ml-2 shrink-0">
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </div>
          </div>
        </div>
      </Link>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsPopupOpen(false);
          }}
        >
          <div
            className="relative bg-zinc-900 rounded-xl overflow-hidden max-w-4xl w-full aspect-video border border-zinc-800 shadow-2xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              onClick={() => setIsPopupOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={"/assets/qrCode.jpeg"}
              alt={course.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;