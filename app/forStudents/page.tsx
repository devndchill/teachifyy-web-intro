"use client";
import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCarousel from "@/components/resources/ResourceCarousel";
import QuickBrowse from "@/components/resources/QuickBrowse";
import TeachersSpotlight from "@/components/resources/TeachersSpotlight";
import { Resource } from "@/components/resources/ResourceCarousel";

import { useGetResourcesQuery } from "@/app/api/resource";

export default function ResourcesPage() {
  const { data: apiResponse } = useGetResourcesQuery();
  const resources = apiResponse?.data;
  const trending = resources ? [...resources].reverse() : [];
  if (resources?.length === 0) {
    return <div>not found</div>;
  }

  const spotlightResource = resources?.find((r: any) => r.isSpotlight);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <ResourceHero />
      {/* Spotlight section here */}
      {spotlightResource && (
        <div className="max-w-[1248px] mx-auto px-6 lg:px-12 my-6">
          <TeachersSpotlight resource={spotlightResource} />
        </div>
      )}

      {/* New and Trending horizontal carousel */}
      <div className="pt-6 sm:pt-10">
        <ResourceCarousel title="Class V to X programs" resources={trending} />
      </div>

      {/* Quick Browse with category filter + grouped sections */}
      <QuickBrowse resources={resources} />
    </div>
  );
}
