import { Button } from './ui/button';
import { ArrowRight, Users, Building2, Heart, Clock } from 'lucide-react';
import heroImage from 'figma:asset/bfe401bb3751f16e841fe5994af33d539f14cd8f.png';

export function Hero() {
  const metrics = [
    {
      icon: Users,
      value: '5000+',
      label: 'Students Impacted',
      color: 'bg-[#EA8166]',
    },
    {
      icon: Building2,
      value: '12',
      label: 'Partner Organizations',
      color: 'bg-[#5B8A8D]',
    },
    {
      icon: Heart,
      value: '128',
      label: 'Volunteers Engaged',
      color: 'bg-[#F0C78A]',
    },
    {
      icon: Clock,
      value: '450+',
      label: 'Lecture Hours',
      color: 'bg-[#EA8166]',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vidhata students and volunteers"
          className="w-full h-full object-cover object-center brightness-90"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c4f52]/75 via-[#3d6366]/65 to-[#5B8A8D]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3638]/60 via-transparent to-transparent" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-32">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Empowering Students Through
            <span className="block text-[#FF9A82]" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4)' }}>Holistic Learning</span>
          </h1>
          <p className="text-white text-xl sm:text-2xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4)' }}>
            Providing structured non-academic learning to foster holistic development 
            among underserved students across Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4653f] hover:bg-[#c24d2a] text-white text-lg px-8 shadow-xl hover:shadow-2xl transition-all">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-2 border-white/90 hover:bg-white/15 backdrop-blur-sm text-lg px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Impact Metrics - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className={`w-10 h-10 ${metric.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl text-[#5B8A8D]">
                      {metric.value}
                    </div>
                    <div className="text-gray-700 text-xs">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}