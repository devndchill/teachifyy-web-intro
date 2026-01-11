"use client";

import Link from "next/link";
import { GraduationCap, MessageCircle, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const AboutHero = () => {
  return (
    <section className="relative py-6 md:py-10 lg:py-10 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-dark-100/20" />
        
        {/* Animated Orbs - Pushed back visually */}
        <div 
          className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-float-slow opacity-60"
          style={{ animationDuration: "25s" }}
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-dark-200/15 rounded-full blur-[140px] animate-float-slow opacity-60"
          style={{ animationDuration: "30s", animationDelay: "5s" }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Foreground Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.3)_100%)]" />
      </div>

      <div className="container-custom relative">
        {/* Asymmetric Layout with Layering */}
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge - Refined entrance */}
          {/* <div 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 shadow-sm animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="tracking-wide">UK-based. India-focused. Built with real schools in mind.</span>
          </div> */}

          {/* Main Headline - Line by line reveal effect */}
          <div className="mb-10 space-y-3">
            <h4
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight animate-slide-up"
              style={{ 
                animationDelay: "0.2s", 
                opacity: 0, 
                animationFillMode: "forwards",
                letterSpacing: "-0.02em"
              }}
            >
              <span className="block text-dark-900">A diploma for teachers</span>
              <span className="block text-dark-900 mt-2">
                who don't want to{" "}
                <span className="relative inline-block">
                  <span className="gradient-text relative z-10">get stuck</span>
                  {/* Animated underline emphasis */}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-3 bg-primary/10 -rotate-1 -z-10"
                    style={{
                      animation: "slideIn 0.6s ease-out 0.8s forwards",
                      opacity: 0,
                    }}
                  />
                </span>
              </span>
            </h4>
          </div>

          {/* Emotional Pause - Reality Check */}
          <div 
            className="mb-6 animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="inline-block">
              <p className="text-xl md:text-2xl lg:text-2xl text-gray-600 leading-relaxed mb-2">
                Most teachers get a <span className="font-bold text-dark-900">₹10–12k job</span>.
              </p>
              <p className="text-xl md:text-2xl lg:text-2xl text-gray-600 leading-relaxed">
                Few know how to move beyond it.
              </p>
            </div>
          </div>

          {/* Hope Statement - Visual Breathing Space */}
          <div 
            className="mb-12 animate-slide-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-dark-100/5 rounded-2xl blur-xl" />
              <p className="relative text-lg md:text-xl lg:text-xl text-dark-900 font-medium leading-relaxed">
                Teachifyy prepares you for{" "}
                <span className="font-bold gradient-text">growth</span>,{" "}
                <span className="font-bold gradient-text">respect</span>, and{" "}
                <span className="font-bold gradient-text">better opportunities</span> over time.
              </p>
            </div>
          </div>

          {/* Enhanced CTAs with Psychology */}
          <div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-2 animate-slide-up"
            style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* Primary CTA with context */}
            <div className="flex flex-col gap-2 group">
              <Link href="/courses">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Explore the Diploma</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <span className="text-xs text-gray-500 tracking-wide px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Curriculum · Career Path · Outcomes
              </span>
            </div>

            {/* Secondary CTA - Human touch */}
            <div className="flex flex-col gap-2 group">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Talk to a Counsellor</span>
                </Button>
              </Link>
              <span className="text-xs text-gray-500 tracking-wide px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Get personalized guidance
              </span>
            </div>
          </div>

          {/* Trust & Credibility Layer - Subtle reinforcement */}
          <div 
            className="flex flex-wrap gap-8 items-center justify-center sm:justify-start animate-fade-in"
            style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* Career-oriented indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-600 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Career-oriented diploma</span>
            </div>

            {/* School-validated */}
            <div className="flex items-center gap-2 text-sm text-gray-600 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dark-100/20 to-dark-100/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="w-4 h-4 text-dark-700" />
              </div>
              <span className="font-medium">Designed with real schools</span>
            </div>

            {/* Outcome focus */}
            <div className="flex items-center gap-2 text-sm text-gray-600 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-dark-100/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Practice-focused learning</span>
            </div>
          </div>
        </div>

        {/* Floating Career Path Card - Secondary Visual Anchor */}
        <div 
          className="absolute top-8 right-8 hidden xl:block animate-float"
          style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="w-64 p-5 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-xl">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-primary mb-1">YOUR PATH</p>
                <p className="text-sm font-bold text-dark-900 leading-tight">From classroom to leadership</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs text-gray-700">Security & Confidence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs text-gray-700">Growth & Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs text-gray-700">Leadership & Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes for Underline Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
