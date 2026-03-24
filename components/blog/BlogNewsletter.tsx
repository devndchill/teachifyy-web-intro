export default function BlogNewsletter() {
  return (
    <section className="py-10 md:py-16 bg-white flex justify-center w-full">
      <div className="container-custom max-w-[1100px] p-4 w-full">
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">

          {/* Left Side */}
          <div className="flex-1 max-w-[500px]">
            <h3 className="font-bold text-black tracking-tight mb-4 text-[20px] sm:text-[24px]">
              Stay Updated with Teacher Insights
            </h3>
            <p className="text-[12px] sm:text-[16px]">
              Receive new articles, teaching strategies, and educator resources directly in your inbox. No spam, just pure pedagogical value
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-auto flex flex-col">
            <div className="relative w-full max-w-[420px] bg-white rounded-full border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-14 sm:h-[60px] flex items-center p-1.5 focus-within:ring-2 focus-within:ring-[#2E5478]/20 focus-within:border-[#2E5478]/40 transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 w-full bg-transparent border-none outline-none pl-5 sm:pl-6 pr-4 text-[14px] sm:text-[15px] text-gray-800 placeholder:text-[#B0B0B0]"
              />
              <button className="h-full bg-[#2E5478] hover:bg-[#254663] text-white px-7 sm:px-9 rounded-full text-[14px] sm:text-[15px] font-medium transition-colors shadow-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#A0A0A0] mt-3 sm:ml-6 text-center sm:text-left tracking-wide">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
