import { useState } from "react";

// Component for partner circle with image fallback
function PartnerCircle({ name, image }: { name: string; image?: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-16 h-16 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
      {image && !imageError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-white text-2xl">{name.charAt(0)}</span>
      )}
    </div>
  );
}

export function Partners() {
  // Partners with optional image paths
  // Add image paths to /image/partners/ folder and reference them here
  // If no image is provided, it will show the first letter
  const partners = [
    { name: "ArtBeat Nepal", image: "/images/artbeat_nepal.jpg" },
    { name: "OFG Nepal", image: "/images/OFG_Nepal.png" },
    {
      name: "Matri Nepal Bal Griha",
      image: "/images/matri_nepal_bal_griha.png",
    },
    { name: "Rising Star School", image: "/images/rising_star_school.png" },
    { name: "Bigyan School", image: "/images/bigyan_school.webp" },
    {
      name: "Minnath Aadarsha Shikshya Sadan",
      image: "/images/minnath_aadarsha_shikshya_sadan.png",
    },
    { name: "Gaga Nepal", image: "/images/gaga_nepal.jpg" },
    { name: "Hamro Mutu", image: "/images/hamro_mutu.webp" },
    {
      name: "Disabled Care Nepal",
      image: "/images/disabled_care_center_nepal.jpeg",
    },
    { name: "JANTRA", image: "/image/partners/jantra.png" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F0F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            OUR PARTNERS
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We collaborate with 18 partner organizations across Nepal to
            maximize our impact
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
                <PartnerCircle name={partner.name} image={partner.image} />
                <p className="text-gray-800 text-sm line-clamp-2">
                  {partner.name}
                </p>
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
                <PartnerCircle name={partner.name} image={partner.image} />
                <p className="text-gray-800 text-sm line-clamp-2">
                  {partner.name}
                </p>
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
