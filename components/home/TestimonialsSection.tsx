import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer at Google',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=200&background=10B981&color=fff&bold=true',
    content: 'The courses are incredibly well-structured and practical. I landed my dream job at Google within 3 months of completing the MERN stack bootcamp!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Full-Stack Engineer at Meta',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&size=200&background=3B82F6&color=fff&bold=true',
    content: 'Best investment in my career. The instructor explains complex concepts in a way that\'s easy to understand. Highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Software Engineer at Amazon',
    avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&size=200&background=F59E0B&color=fff&bold=true',
    content: 'The project-based approach helped me build a strong portfolio. The support from the community is amazing. Thank you!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="p-10 bg-dark-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with our courses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card p-6 relative"
            >
              

              {/* Content */}
              <p className="text-zinc-300 mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 pt-12 border-t border-zinc-800">         
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-100">
            <span className="text-2xl font-bold text-zinc-600">Google</span>
            <span className="text-2xl font-bold text-zinc-600">Meta</span>
            <span className="text-2xl font-bold text-zinc-600">Amazon</span>
            <span className="text-2xl font-bold text-zinc-600">Microsoft</span>
            <span className="text-2xl font-bold text-zinc-600">Netflix</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
