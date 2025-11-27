import { Button } from "./ui/button";
import heroImage from "/image/bg_image_home.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vidhata students and volunteers"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          style={{ objectPosition: "center 35%" }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3638]/85 via-[#2c4f52]/75 to-[#5B8A8D]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f21]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-32">
          <h1
            className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6"
            style={{
              textShadow:
                "0 6px 20px rgba(0, 0, 0, 0.6), 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            Empowering Students Through
            <span
              className="block text-[#FFB199] mt-2"
              style={{
                textShadow:
                  "0 6px 20px rgba(0, 0, 0, 0.7), 0 3px 8px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              Holistic Learning
            </span>
          </h1>

          <p
            className="text-white text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow:
                "0 4px 12px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            We provide structured non-academic and skill-based learning to
            foster holistic development among underserved students through a
            streamlined volunteering network across Nepal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Get Involved Button — unchanged */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#EA8166] hover:bg-[#d4653f] text-white text-lg px-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(234,129,102,0.4)] transition-all hover:scale-105"
              >
                Get Involved
              </Button>
            </a>

            {/* Learn More Button — enhanced with beautiful hover */}
            <a href="#about">
              <button
                className="
                  h-10
                  px-8
                  rounded-xl
                  bg-white
                  border border-gray-300
                  text-gray-700
                  text-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2

                  transition-all
                  duration-300
                  hover:bg-[#f0f0f0]
                  hover:border-gray-400
                  hover:text-gray-900
                  hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]
                  hover:scale-105
                  hover:-translate-y-[3px]
                "
              >
                Learn more ↓
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
