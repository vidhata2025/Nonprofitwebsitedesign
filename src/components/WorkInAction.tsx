import { Play, Users, BookOpen, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WorkInAction() {
  const galleryItems = [
    {
      type: 'image',
      title: 'Interactive Learning Sessions',
      description: 'Students engaged in hands-on activities',
      icon: BookOpen,
    },
    {
      type: 'video',
      title: 'Volunteer Training Programs',
      description: 'Preparing volunteers for impactful teaching',
      icon: Users,
    },
    {
      type: 'image',
      title: 'Community Workshops',
      description: 'Building skills through collaborative learning',
      icon: Heart,
    },
    {
      type: 'image',
      title: 'Creative Arts Programs',
      description: 'Fostering creativity and self-expression',
      icon: BookOpen,
    },
    {
      type: 'video',
      title: 'Student Success Stories',
      description: 'Celebrating achievements and growth',
      icon: Heart,
    },
    {
      type: 'image',
      title: 'Outdoor Learning Activities',
      description: 'Learning beyond the classroom walls',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">WORK IN ACTION</h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            See Our Impact in Communities
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the transformative power of holistic education through real stories 
            and moments from our programs across Nepal.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174]">
                  <ImageWithFallback
                    src=""
                    alt={item.title}
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>

                {/* Video Play Button Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-[#5B8A8D] ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#EA8166] rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-xl">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/90 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Static Icon when not hovering */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:opacity-0 transition-opacity">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#EA8166] hover:bg-[#d97359] text-white px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
}
