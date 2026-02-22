"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star, X } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { Course } from "@/data/courses";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";
import { useState } from "react";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  return (
    <>
      <Link
        href={`#`}
        className={cn("card card-hover group block relative", className)}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-zinc-800 h-[280px] w-[400px]">
          <Image
            src={course.thumbnail}
            alt={course.title}
            // width={300}
            // height={100}
            fill
            className=" group-hover:scale-105 transition-transform duration-300"
          />
          {course.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="default" className="bg-white/80 backdrop-blur-sm">
                {course.badge}
              </Badge>
            </div>
          )}

        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category & Duration */}
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
            <span className="text-primary font-medium">{course.category}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-sm mb-4">{course.description}</p>

          {/* Instructor */}
          {/* <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800">
            <div className="w-8 h-8 rounded-full bg-zinc-700 overflow-hidden relative">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-zinc-300">
              {course.instructor.name}
            </span>
          </div> */}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>

            {/* <div className="text-right">
              {course.originalPrice && (
                <span className="text-sm text-zinc-500 line-through mr-2">
                  ${course.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold text-primary">
                ${course.price}
              </span>
            </div> */}
          </div>{course.button && (
            <div className="absolute bottom-3 right-3 z-10">
              <Button
                onClick={handleButtonClick}
                className="bg-red-500/80 backdrop-blur-sm text-White"
              >
                BUY NOW
              </Button>
            </div>
          )}
        </div>
      </Link>

      {/* Popup Modal */}
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
