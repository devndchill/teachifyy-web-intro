export default function AboutBottomCta() {
    return (
        <section className="bg-[#0E172B] py-24 text-center px-4 relative overflow-hidden">

            {/* Decorative top pill badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 shadow-sm mb-6">
                <span className="text-sm font-semibold text-slate-800">VISION</span>
            </div>
            <div className="container mx-auto max-w-4xl relative z-20 flex justify-center items-center flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10 max-w-5xl leading-tight">
                    Creating an ecosystem where teachers trust themselves, their craft, and their impact, becoming unstoppable at every step.
                </h2>
                {/* Small descriptive text below */}
                <p className="text-blue-100/70 text-sm max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-4">
                    We're building the future of education, one empowered teacher at a time.
                    Join us in redesigning the teaching experience to be more rewarding, respected, and relevant in the 21st century.
                </p>
            </div>
        </section>
    );
}
