"use client";

import { useEffect, useState, useRef } from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Resource, ResourceCard } from "./ResourceCarousel";

const CATEGORIES = [
  "All",
  "Sensory and Application",
  "Art and Creativity",
  "Language and Literacy",
  "Maths and logical Thinking",
  "Movement and Gross Motor",
];

// Paginated row — responsive number of items
function PaginatedRow({ items }: { items: Resource[] }) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else if (window.innerWidth < 1280) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const visible = items.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  // If page becomes invalid after resize, reset it
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [itemsPerPage, page, totalPages]);

  return (
    <div className="relative">
      {/* Left arrow — shown when past first page */}
      {page > 0 && (
        <button
          onClick={() => setPage((p) => p - 1)}
          aria-label="Previous"
          className="absolute left-[-12px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
          gap: "1.25rem",
        }}
      >
        {visible.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
        {Array.from({ length: itemsPerPage - visible.length }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden sm:block" />
        ))}
      </div>

      {/* Right arrow — shown when more pages remain */}
      {page < totalPages - 1 && (
        <button
          onClick={() => setPage((p) => p + 1)}
          aria-label="Next"
          className="absolute right-[-12px] sm:right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

import { useGetResourcesQuery } from "@/app/api/resource";

interface Props {
  resources: Resource[];
}

export default function QuickBrowse({ resources }: Props) {
  const [active, setActive] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftActive, setShowLeftActive] = useState(false);
  const [showRightActive, setShowRightActive] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftActive(scrollLeft > 0);
      setShowRightActive(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    // Initial check after render
    const timeoutId = setTimeout(handleScroll, 100);
    window.addEventListener("resize", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleScroll);
    };
  }, [resources]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Derive dynamic categories from the resources data
  const dynamicCategories = [
    "All",
    ...Array.from(new Set(resources?.map((r) => r.category.trim()))).filter(
      Boolean,
    ),
  ];

  // Call the API with the active category (passing undefined for "All")
  const { data: categoryData } = useGetResourcesQuery(
    active === "All" ? undefined : active,
  );

  const grouped =
    active === "All"
      ? dynamicCategories
        .filter((c) => c !== "All")
        .reduce<Record<string, Resource[]>>((acc, cat) => {
          const items = resources?.filter((r) => r.category.trim() === cat);
          if (items.length) acc[cat] = items;
          return acc;
        }, {})
      : {
        [active]: resources?.filter((r) => r.category.trim() === active),
      };

  return (
    <section className="pt-8 pb-16">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 ">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-gray-500 stroke-[1.8]" />
          <span className="text-[14px] sm:text-[15px] font-semibold text-gray-800">
            Quick Browse
          </span>
        </div>

        {/* Filter pills */}
        <div className="relative mb-8 group">
          {/* Left Arrow */}
          {showLeftActive && (
            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-2.5 overflow-x-auto hide-scrollbar pb-1 -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-colors flex-shrink-0 ${
                  active === cat
                    ? "bg-[#2E5478] text-white shadow-sm"
                    : "bg-[#DDE6F2] text-gray-700 hover:bg-[#ccd9eb]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightActive && (
            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>

        {/* Resource sections — responsive row, arrow to page through extras */}
        {Object.entries(grouped).map(([cat, items]) => {
          return (
            <div key={cat}>
              <div className="mb-10 sm:mb-14">
                <h2 className="text-[1.1rem] sm:text-[1.35rem] font-bold text-gray-900 mb-4 sm:mb-5">
                  {cat}
                </h2>
                <PaginatedRow items={items} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
