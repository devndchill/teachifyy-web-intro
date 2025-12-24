import Link from "next/link";
import { ArrowRight, Star, Users, PlayCircle, BookOpen, Award, TrendingUp, Clock, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-5 overflow-hidden">
      {/* Modern Minimal Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        {/* Animated Orbs - Subtle and Slow */}
        <div 
          className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] animate-float-slow"
          style={{ animationDuration: "20s" }}
        />
        <div 
          className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[100px] animate-float-slow"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        />
        <div 
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/4 rounded-full blur-[80px] animate-float-slow"
          style={{ animationDuration: "30s", animationDelay: "10s" }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-primary text-xs font-semibold mb-6 animate-fade-in backdrop-blur-sm">
              <Award className="w-3.5 h-3.5" />
              <span>🎉 Join 50,000+ Successful Learners</span>
            </div>

            {/* Heading */}
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 animate-slide-up leading-tight">
              Transform Your Career with{" "}
              <span className="gradient-text">Expert-Led Courses</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              Master in-demand skills through interactive lessons, real-world projects, and personalized mentorship. Start learning today and land your dream job.
            </p>

            {/* Key Features */}
            <div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Certificate of Completion</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Expert Support</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/courses">
                <Button variant="primary" size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* <Link href="#preview">
                <Button variant="outline" size="lg" className="group">
                  <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link> */}
            </div>

            {/* Student Avatars & Social Proof */}
            <div
              className="flex items-center justify-center lg:justify-start gap-6 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-400 border-2 border-dark flex items-center justify-center text-xs font-bold">A</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-dark flex items-center justify-center text-xs font-bold">B</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-dark flex items-center justify-center text-xs font-bold">C</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 border-2 border-dark flex items-center justify-center text-xs font-bold">D</div>
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-dark flex items-center justify-center text-xs font-semibold text-primary">+5k</div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                  <span className="text-sm font-bold text-white ml-1">4.9</span>
                </div>
                <p className="text-xs text-zinc-400">from 12,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Preview */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Image Preview Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 shadow-2xl group hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                {/* App Mockup Image */}
                <img 
                  src="/assets/appMockup.png" 
                  alt="LMS Platform Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Course Info Overlay */}
              <div className="p-4 bg-dark-50/80 backdrop-blur-sm border-t border-zinc-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">150+ Courses</span>
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">500+ Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 -left-4 bg-dark-50 border border-zinc-700 rounded-lg p-2 shadow-lg backdrop-blur-sm animate-float hidden md:block">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-md bg-blue-200 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-dark" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">95%</p>
                  <p className="text-[10px] text-zinc-400">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-dark-50 border border-zinc-700 rounded-lg p-2 shadow-lg backdrop-blur-sm animate-float hidden md:block" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-md bg-blue-200 flex items-center justify-center">
                  <Users className="w-4 h-4 text-dark" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">50k+</p>
                  <p className="text-[10px] text-zinc-400">Active Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
