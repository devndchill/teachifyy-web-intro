import { Search } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="pt-20 pb-12">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="bg-[#DDE6F2] text-[10px] sm:text-xs px-4 py-1.5 rounded-full mb-6 uppercase">
            TEACHER RESOURCES
          </span>
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 leading-[1.15]">
            Insights for Teachers<br />Who Want to <span className="text-[#FF4667] font-bold">Grow</span>
          </h1>
          <p className="text-base md:text-[17px] text-gray-600 max-w-2xl text-balance leading-relaxed">
            Articles and insights on teaching practice, early childhood education, career growth,
            and building meaningful learning environments.
          </p>

          {/* <div className="relative w-full max-w-[480px] mb-8">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Topics, Articles, Authors..."
              className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-[2rem] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
