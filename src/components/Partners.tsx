import vidhataLogo from 'figma:asset/25b3cb45a9ea19bb8f252c76e5550f3008379dad.png';
import artbeatLogo from 'figma:asset/88fe25acdff6dffd9668a3bfce01908d6c6da995.png';
import ofgLogo from 'figma:asset/a78b1046baa5257398ec4644b64ece3ddaa0fd4c.png';

export function Partners() {
  // Featured partners with logos
  const featuredPartners = [
    { name: 'Vidhata', logo: vidhataLogo },
    { name: 'ArtBeat Nepal', logo: artbeatLogo },
    { name: 'OFG Nepal', logo: ofgLogo },
  ];

  // Placeholder partner names - replace with actual partner organizations
  const partners = [
    'Nepal Education Foundation',
    'Teach For Nepal',
    'Community Learning Center',
    'Youth Development Forum',
    'Education Without Borders',
    'Skills Development Institute',
    'Rural Education Network',
    'Student Empowerment Hub',
    'Learning Champions Nepal',
    'Future Leaders Academy',
    'Knowledge Bridge Foundation',
    'Hope & Education Society',
    'Innovation Hub Nepal',
    'Creative Arts Foundation',
    'Social Impact Collective',
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F0F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">OUR PARTNERS</h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We collaborate with 18 partner organizations across Nepal to maximize our impact
          </p>
        </div>
      </div>

      {/* Featured Partners with Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {featuredPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex items-center justify-center group-hover:scale-110">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 mt-4 text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling logos container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F0F9F9] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F0F9F9] to-transparent z-10" />
        
        {/* Scrolling content - duplicated for seamless loop */}
        <div className="flex animate-scroll">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`partner-1-${index}`}
              className="flex-shrink-0 mx-6 w-64 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl">{partner.charAt(0)}</span>
                </div>
                <p className="text-gray-800 text-sm line-clamp-2">{partner}</p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`partner-2-${index}`}
              className="flex-shrink-0 mx-6 w-64 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-2xl">{partner.charAt(0)}</span>
                </div>
                <p className="text-gray-800 text-sm line-clamp-2">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}