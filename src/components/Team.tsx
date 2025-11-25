import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Team() {
  const teamMembers = [
    {
      name: 'Team Member Name',
      position: 'Founder & CEO',
      description: 'Visionary leader dedicated to transforming education in Nepal through innovative non-academic learning programs, inspiring volunteers and students to achieve holistic development and sustainable community impact.',
      color: 'from-[#5B8A8D] to-[#4a7174]',
    },
    {
      name: 'Team Member Name',
      position: 'Chief Operating Officer',
      description: 'Strategic operations expert ensuring seamless program execution across Nepal, coordinating partnerships, managing resources efficiently, and driving organizational growth to maximize student impact and volunteer engagement.',
      color: 'from-[#EA8166] to-[#d97359]',
    },
    {
      name: 'Team Member Name',
      position: 'Chief Technology Officer',
      description: 'Tech innovator leveraging digital solutions to streamline volunteer coordination, enhance learning platforms, and expand educational reach, making quality non-academic learning accessible to underserved communities nationwide.',
      color: 'from-[#F0C78A] to-[#e0b77a]',
    },
    {
      name: 'Team Member Name',
      position: 'Chief of Curriculum Development',
      description: 'Education specialist designing comprehensive, engaging non-academic curricula that foster creativity, critical thinking, and holistic growth, ensuring every student receives transformative learning experiences tailored to their needs.',
      color: 'from-[#5B8A8D] to-[#4a7174]',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">OUR TEAM</h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Meet the Leaders Behind Vidhata
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our dedicated leadership team brings together expertise in education, operations, 
            technology, and curriculum development to create lasting impact across Nepal.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.position}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <User className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">
                      {member.name}
                    </CardTitle>
                    <div className="text-[#5B8A8D] mb-3">
                      {member.position}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {member.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#5B8A8D] to-[#4a7174] rounded-2xl p-10 sm:p-12 shadow-xl">
          <h4 className="text-3xl text-white mb-4">
            Join Our Team
          </h4>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference 
            in education. If you're interested in joining our mission, we'd love to hear from you.
          </p>
          <button className="bg-[#EA8166] hover:bg-[#d97359] text-white px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
