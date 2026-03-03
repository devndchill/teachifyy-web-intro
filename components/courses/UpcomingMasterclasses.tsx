import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Video } from "lucide-react";
import Badge from "../ui/Badge";

const UpcomingMasterclasses = () => {
    return (
        <section className="py-16 md:py-24 bg-[#0E172B] border-t border-b border-dark-800">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left Column - Content */}
                    <div className="flex-1 w-full lg:max-w-xl">
                        <div className="mb-8">
                            <Badge variant="default" className="text-black border border-gray-700 mb-6 py-1.5 px-4 bg-white">
                                LIVE LEARNING
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                Upcoming Masterclasses
                            </h2>
                            <p className="text-white text-lg sm:text-lg mb-8 max-w-lg leading-relaxed">
                                Join our interactive webinars led by world-class educators and industry leaders. Stay ahead of the curve.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            {/* Card 1 */}
                            <Link href="#" className="flex p-4 rounded-xl border border-white/10 items-center justify-between group bg-[#CECECE] dark:bg-dark-800">
                                <div>
                                    <div className="text-black dark:text-gray-100 font-bold mb-2 text-xl">How to move from B.ed to Dubai Classrooms</div>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                                        <div className="flex items-center gap-1  text-black">
                                            <Video className="w-4 h-4" /> Virtual Event
                                        </div>
                                        <div className="flex items-center gap-1 text-black">
                                            <Copy className="w-4 h-4" /> 1 Hour
                                        </div>
                                    </div>
                                </div>
                                <div className="text-dark-900 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>

                            {/* Card 2 */}
                            {/* <Link href="#" className="flex transition-colors p-4 rounded-xl border border-white/10 items-center justify-between group bg-white">
                                <div>
                                    <div className="text-dark-900 dark:text-gray-100 font-bold mb-2 text-xl">Inclusive Pedagogy Masterclass</div>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Video className="w-4 h-4" /> Virtual Event
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Copy className="w-4 h-4" /> 2 Hours
                                        </div>
                                    </div>
                                </div>
                                <div className="text-dark-900 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link> */}
                        </div>

                    </div>

                    {/* Right Column - Image Placeholder */}
                    <div className="flex-1 w-full bg-blue-100 rounded-[2rem] h-[400px] lg:h-[500px] relative overflow-hidden hidden md:block">
                        {/* Keeping it as a large placeholder matching the blue light tone from the mockup */}
                        <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                            {/* Empty matching right side box */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UpcomingMasterclasses;
