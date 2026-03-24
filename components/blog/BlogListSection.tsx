"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Blog } from "@/types/blog";

interface Props {
  blogs: Blog[];
}

export default function BlogListSection({ blogs }: Props) {
  if (!blogs || blogs.length === 0) return null;

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="py-12 pb-24 relative overflow-hidden">
      <div className="container-custom relative max-w-[1280px]">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors ${activeCategory === category
                  ? "bg-[#2E5478] text-white shadow-md"
                  : "bg-[#DEE7F0] text-gray-800 hover:bg-[#D0DDE8]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredBlogs.map((article) => (
            <Link
              href={`/blog/${article.id}`}
              key={article.id}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_24px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[1.5rem]">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>
              <div className="p-6 pt-3 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#EBF3FB] text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#FF4667] transition-colors tracking-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gray-900 group-hover:text-[#FF4667] transition-colors hover:underline underline-offset-4 decoration-2">
                    Read More <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrow button right */}
        <button className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-[52px] h-[52px] bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.12)] border border-gray-50 items-center justify-center text-gray-900 hover:text-[#FF4667] hover:scale-105 transition-all z-10">
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>
    </section>
  );
}
