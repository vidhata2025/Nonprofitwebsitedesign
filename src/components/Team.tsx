import { Card } from "./ui/card";

export function Team() {
  const teamMembers = [
    {
      name: "Aryan Basnet",
      position: "Founder & CEO",
      image: "/images/aryan_basnet.png",
      description:
        "Visionary leader dedicated to transforming education in Nepal through innovative non-academic learning programs, inspiring volunteers and students to achieve holistic development and sustainable community impact.",
    },
    {
      name: "Team Member Name",
      position: "Chief Operating Officer",
      image: "/images/member2.jpg",
      description:
        "Strategic operations expert ensuring seamless program execution across Nepal, coordinating partnerships, managing resources efficiently, and driving organizational growth to maximize student impact and volunteer engagement.",
    },
    {
      name: "Team Member Name",
      position: "Chief Technology Officer",
      image: "/images/member3.jpg",
      description:
        "Tech innovator leveraging digital solutions to streamline volunteer coordination, enhance learning platforms, and expand educational reach, making quality non-academic learning accessible to underserved communities nationwide.",
    },
    {
      name: "Team Member Name",
      position: "Chief of Curriculum Development",
      image: "/images/member4.jpg",
      description:
        "Education specialist designing comprehensive, engaging non-academic curricula that foster creativity, critical thinking, and holistic growth, ensuring every student receives transformative learning experiences tailored to their needs.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#5B8A8D] text-base sm:text-lg mb-3 tracking-wide font-semibold">
            OUR TEAM
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet the Leaders Behind Vidhata
          </h3>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Our dedicated leadership team brings together expertise in
            education, operations, technology, and curriculum development to
            create lasting impact across Nepal.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="
                rounded-[9px]
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition-all
                p-10
                flex
                flex-col
                items-center
                text-center
                bg-white
                border border-gray-100
              "
            >
              {/* Image */}
              <div className="w-full flex justify-center mb-6">
                <div
                  className="
                    h-40
                    w-40
                    rounded-2xl
                    overflow-hidden
                    shadow-sm
                    bg-gray-50
                    border border-gray-200
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>

              <p className="text-[#5B8A8D] font-medium text-lg mb-5">
                {member.position}
              </p>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {member.description}
              </p>
            </Card>
          ))}
        </div>

        {/* EXTRA WHITE SPACE BELOW GRID */}
        <div className="mt-32"></div>

        {/* CTA Section (add your CTA inside this div) */}
        <div className="text-center">
          {/* Example placeholder */}
          {/* <h3 className="text-3xl font-bold">Join Our Team</h3> */}
          {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Be part of something impactful.</p> */}
        </div>
      </div>
    </section>
  );
}
