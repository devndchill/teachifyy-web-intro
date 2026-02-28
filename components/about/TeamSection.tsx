import Image from 'next/image';

const teamMembers = [
    {
        name: 'Shivam Aggarwal',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        featured: true, // Specifically matched in the design as larger
    },
    {
        name: 'Team Member 2',
        role: 'Co-founder',
        image: '',
    },
    {
        name: 'Team Member 3',
        role: 'Operations',
        image: '',
    },
    {
        name: 'Team Member 4',
        role: 'Marketing',
        image: '',
    },
    {
        name: 'Team Member 5',
        role: 'Design',
        image: '',
    }
];

export default function TeamSection() {
    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Meet The People</h2>
                    <p className="text-lg text-slate-600">The minds and hearts behind the Teachifyy ecosystem.</p>
                </div>

                {/* Team Grid Layout based on the design screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">

                    {/* Main featured profile card (Shivam) spanning 2 rows / 1 col on desktop */}
                    <div className="md:col-span-1 md:row-span-2 relative h-[500px] md:h-[738px] rounded-3xl overflow-hidden bg-slate-200 aspect-[3/4] md:aspect-auto group shadow-sm transition-shadow hover:shadow-xl">
                        {teamMembers[0].image ? (
                            <Image
                                src={teamMembers[0].image}
                                alt={teamMembers[0].name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-200" />
                        )}
                        {/* Gradient overlay for text */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-24 text-white">
                            <h3 className="text-xl font-bold mb-1">{teamMembers[0].name}</h3>
                            <p className="text-white/80 text-sm font-medium">{teamMembers[0].role}</p>
                        </div>
                    </div>

                    {/* Grid of other team members (4 cards in right column spaces) */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-6 h-full">
                        {teamMembers.slice(1).map((member, idx) => (
                            <div key={idx} className="relative rounded-3xl overflow-hidden bg-[#E2E8F0] aspect-square group shadow-sm transition-shadow hover:shadow-xl">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 hover:grayscale-0"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <span className="sr-only">{member.name}</span>
                                    </div>
                                )}
                                {/* Optional: Add name/role overlay for other members, omitted in design screenshot intentionally but good for real usage */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h3 className="font-semibold text-sm">{member.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
