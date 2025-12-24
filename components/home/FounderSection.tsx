import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="pt-10 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <Image
                src="https://placehold.co/800x800/1a1a1a/FFC107?text=Instructor&font=roboto"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your <span className="text-primary">Instructor</span>
            </h2>
            
            <p className="text-zinc-400 mb-4 leading-relaxed">
              Hi! I'm <span className="text-white font-semibold">John Doe</span>, a passionate full-stack developer with over 10 years of experience building scalable web applications for startups and Fortune 500 companies.
            </p>
            
            <p className="text-zinc-400 mb-4 leading-relaxed">
              I've helped thousands of students transition into successful tech careers through my comprehensive, project-based courses. My teaching philosophy focuses on practical, real-world skills that you can apply immediately.
            </p>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              When I'm not coding or teaching, you'll find me contributing to open-source projects, speaking at tech conferences, or exploring the latest web technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-dark-50 rounded-xl border border-zinc-800">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-zinc-400">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-zinc-400">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4.9</div>
                <div className="text-sm text-zinc-400">Rating</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 text-sm">Connect with me:</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
