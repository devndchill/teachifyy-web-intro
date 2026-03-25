"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  thumbnail: string;
  pdfUrl: string;
  category?: string;
}

// ── Single card ───────────────────────────────────────────────────────────────
export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white rounded-[38px] border border-gray-50/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col group hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all h-full ">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[1.5/1] rounded-[38px] overflow-hidden mb-5">
        <Image
          src={resource.thumbnail}
          alt={resource.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          unoptimized
        />
        {/* White pill age badge */}
        <span className="absolute top-3.5 left-3.5 bg-white text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
          {resource.ageGroup} Yrs
        </span>
      </div>

      {/* Content */}
      <div className="px-7 pb-7 flex flex-col flex-1">
        <h3 className="text-[17px] font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
          {resource.title}
        </h3>
        <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2 mb-6 flex-1">
          {resource.description}
        </p>

        <a
          href={resource.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-gray-900 hover:text-[#FF4D67] transition-colors group/link"
        >
          Download Pdf
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// ── Paginated carousel (4 cards at a time, right-arrow to advance) ────────────
interface Props {
  title: string;
  resources: Resource[];
}

const PER_PAGE = 4;

export default function ResourceCarousel({ title, resources }: Props) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(resources.length / PER_PAGE);
  const visible = resources.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="pt-8 pb-4">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12">
        <h2 className="text-[1.35rem] font-bold text-gray-900 mb-5">{title}</h2>

        <div className="relative">
          {/* Left arrow — appears after first page */}
          {page > 0 && (
            <button
              onClick={() => setPage((p) => p - 1)}
              aria-label="Previous"
              className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          {/* Fixed 4-column grid — no overflow, no half-cards */}
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
          >
            {visible.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
            {Array.from({ length: PER_PAGE - visible.length }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
          </div>

          {/* Right arrow — only when more pages remain */}
          {page < totalPages - 1 && (
            <button
              onClick={() => setPage((p) => p + 1)}
              aria-label="Next"
              className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
