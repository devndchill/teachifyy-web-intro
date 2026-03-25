"use client";

import { useRef, useState } from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Resource, ResourceCard } from "./ResourceCarousel";
import TeachersSpotlight from "./TeachersSpotlight";

const CATEGORIES = [
  "All",
  "Sensory and Application",
  "Art and Creativity",
  "Language and Literacy",
  "Maths and logical Thinking",
  "Movement and Gross Motor",
];

// One scrollable row per category with a right-arrow button
function CategoryRow({ items }: { items: Resource[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Fixed 4-card grid — hides overflow so no half-cards or scrollbar visible */}
      <div
        ref={scrollRef}
        className="grid overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          /* clip so cards never show partially */
          overflow: "hidden",
        }}
      >
        {/* Show only the current "page" — simple slice approach */}
        {items.slice(0, 4).map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {/* Right arrow — only shown when there are more than 4 cards */}
      {items.length > 4 && (
        <button
          onClick={scroll}
          aria-label="Next"
          className="absolute right-[-16px] top-[72px] -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

// Paginated row — shows 4 at a time, arrow advances to next 4
function PaginatedRow({ items }: { items: Resource[] }) {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="relative">
      {/* Left arrow — shown when past first page */}
      {page > 0 && (
        <button
          onClick={() => setPage((p) => p - 1)}
          aria-label="Previous"
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
      >
        {visible.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
        {Array.from({ length: perPage - visible.length }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
      </div>

      {/* Right arrow — shown when more pages remain */}
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
  );
}

interface Props {
  resources: Resource[];
}

export default function QuickBrowse({ resources }: Props) {
  const [active, setActive] = useState("All");

  const grouped =
    active === "All"
      ? CATEGORIES.filter((c) => c !== "All").reduce<Record<string, Resource[]>>(
          (acc, cat) => {
            const items = resources.filter((r) => r.category === cat);
            if (items.length) acc[cat] = items;
            return acc;
          },
          {}
        )
      : {
          [active]: resources.filter((r) => r.category === active),
        };

  return (
    <section className="pt-8 pb-16">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-gray-500 stroke-[1.8]" />
          <span className="text-[15px] font-semibold text-gray-800">Quick Browse</span>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2.5 overflow-x-auto hide-scrollbar pb-1 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-[13px] font-medium transition-colors flex-shrink-0 ${
                active === cat
                  ? "bg-[#2E5478] text-white shadow-sm"
                  : "bg-[#DDE6F2] text-gray-700 hover:bg-[#ccd9eb]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource sections — 4 cards per row, arrow to page through extras */}
        {Object.entries(grouped).map(([cat, items], index) => (
          <div key={cat}>
            <div className="mb-10">
              <h2 className="text-[1.35rem] font-bold text-gray-900 mb-5">{cat}</h2>
              <PaginatedRow items={items} />
            </div>
            
            {/* Show Spotlight after the first category when in "All" or if it's the middle of the list */}
            {((active === "All" && index === 0) || 
              (active !== "All" && items.length > 0 && index === 0)) && (
              <div className="my-16">
                <TeachersSpotlight />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
