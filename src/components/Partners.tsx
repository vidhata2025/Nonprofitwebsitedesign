export function Partners() {

  // Partner names - unchanged
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

      {/* Removed: Featured partner logos section */}

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
