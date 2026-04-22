import React from 'react';
import { 
  Heart, 
  Share2, 
  HelpCircle, 
  Target, 
  ShieldCheck, 
  Hand, 
  PartyPopper, 
  Flag,
  Mail,
  Info
} from 'lucide-react';

export const metadata = {
  title: 'Community Guidelines | Teachifyy',
  description: 'Welcome to the Teachifyy Community — a space built by teachers, for teachers. Learn, share, ask, and grow alongside educators.',
};

const guidelines = [
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "1. Be Kind, Always",
    content: "Every teacher here is at a different stage of their journey. Encourage, don't criticise. If you disagree with something, do it respectfully. The way we speak to each other reflects the values we bring into our classrooms."
  },
  {
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: "2. Share Freely, Credit Honestly",
    content: "Have a lesson idea, activity, or resource that worked? Please share it — this community thrives on generosity. If you're sharing someone else's work or ideas, give them credit."
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
    title: "3. Ask Without Hesitation",
    content: "There are no silly questions here. Whether you're figuring out how to handle a difficult parent conversation or unsure about a concept in your course — ask. Someone here has been there."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "4. Keep It Relevant",
    content: "Posts, discussions, and comments should relate to teaching, professional growth, education, or your Teachifyy learning journey. This isn't the place for promotions, spam, or unrelated content."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "5. Protect Each Other's Privacy",
    content: "What's shared in this community stays here. Do not share other members' personal information, stories, or struggles outside this space without their permission."
  },
  {
    icon: <Hand className="w-6 h-6 text-primary" />,
    title: "6. No Selling or Soliciting",
    content: "This is a learning community, not a marketplace. Please do not promote external courses, services, or products — paid or free — without prior approval from the Teachifyy team."
  },
  {
    icon: <PartyPopper className="w-6 h-6 text-primary" />,
    title: "7. Celebrate Each Other",
    content: "Someone just completed their TEFL certification? Got a promotion? Had a breakthrough lesson? Cheer them on. Small wins deserve big recognition."
  },
  {
    icon: <Flag className="w-6 h-6 text-primary" />,
    title: "8. Report, Don't Retaliate",
    content: "If you see something that feels wrong — disrespectful behaviour, inappropriate content, or anything that makes this space feel unsafe — report it to us. Don't engage or escalate. We're here to handle it."
  }
];

const CommunityGuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-dark-900 overflow-hidden relative py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#EC4D52_0%,transparent_50%)]" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-6 animate-fade-in">
            🌱 Teachifyy Community Guidelines
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Welcome to the Teachifyy Community — a space built by teachers, for teachers.
            This is your corner to learn, share, ask, and grow alongside educators who understand exactly what you&apos;re going through.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <p className="text-dark-700 text-center text-lg italic max-w-4xl mx-auto">
            &quot;To keep this space safe, supportive, and valuable for everyone, we ask you to follow a few simple guidelines.&quot;
          </p>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {guidelines.map((guideline, index) => (
              <div 
                key={index}
                className="card card-hover p-8 flex flex-col h-full bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {guideline.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-dark-900">
                    {guideline.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {guideline.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Violation Policy */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-dark-50 rounded-2xl p-8 md:p-12 border border-dark-100">
            <div className="flex items-center gap-4 mb-6">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-dark-900 m-0">
                What happens if guidelines are violated?
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We&apos;ll always start with a gentle reminder. Repeated or serious violations may result in temporary or permanent removal from the community. Our goal is never to punish — it&apos;s to protect the space for everyone.
            </p>
            <div className="bg-white p-6 rounded-xl border border-dark-100 shadow-sm">
              <p className="text-gray-600 italic">
                The Teachifyy Community is moderated by our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bottom-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-8">
            Still have questions?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            For any concerns or feedback regarding these guidelines or the community, reach out to us directly through the app or email.
          </p>
          <a 
            href="mailto:support@teachifyy.com" 
            className="btn btn-primary px-8 py-4 text-lg inline-flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default CommunityGuidelinesPage;
