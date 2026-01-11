import { Lock, Rocket, Crown } from "lucide-react";

const ProfessionalJourney = () => {
  const stages = [
    {
      number: "1",
      title: "Security",
      description: "I know how to handle a real classroom.",
      icon: Lock,
      color: "primary",
    },
    {
      number: "2",
      title: "Growth",
      description: "I understand what better schools expect.",
      icon: Rocket,
      color: "dark-700",
    },
    {
      number: "3",
      title: "Leadership",
      description: "I am trusted, valued, and considered for more.",
      icon: Crown,
      color: "primary",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-primary-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div 
          className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float-slow"
          style={{ animationDuration: "20s" }}
        />
        <div 
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-dark-100/20 rounded-full blur-[100px] animate-float-slow"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark-900">
              Same starting job.<br />
              <span className="gradient-text">Different future.</span>
            </h2>
            <p className="text-xl text-gray-700">A clear professional journey</p>
          </div>

          {/* Journey Steps */}
          <div className="space-y-8 mb-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 items-start animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Number Badge */}
                  {/* <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-2xl font-bold shadow-lg text-white">
                      {stage.number}
                    </div>
                  </div> */}

                  {/* Content Card */}
                  <div className="flex-1 card card-hover p-6 md:p-8 bg-white shadow-md">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${stage.color} to-${stage.color === 'primary' ? 'primary-600' : 'dark-900'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-dark-900">
                          {stage.title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                          "{stage.description}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center p-8 card bg-gradient-to-br from-primary-50 to-dark-50 shadow-lg animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              No timelines. No salary promises.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-dark-900">
              Only progression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
