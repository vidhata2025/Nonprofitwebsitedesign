import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HandHeart, Users, Building2, Share2, Mail } from "lucide-react";

export function GetInvolved() {
  const opportunities = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description:
        "Join our community of 125+ passionate volunteers making a real difference in students' lives.",
      cta: "Apply to Volunteer",
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
    {
      icon: HandHeart,
      title: "Donate",
      description:
        "Your financial support helps us expand our reach and provide quality learning experiences to more students.",
      cta: "Make a Donation",
      color: "bg-[#EA8166]",
      hoverColor: "hover:bg-[#d97359]",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description:
        "Join our network of 18 partner organizations to create sustainable impact across Nepal.",
      cta: "Become a Partner",
      color: "bg-[#F0C78A]",
      hoverColor: "hover:bg-[#e0b77a]",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description:
        "Help us reach more students and volunteers by sharing our mission with your network.",
      cta: "Share Our Mission",
      color: "bg-[#5B8A8D]",
      hoverColor: "hover:bg-[#4a7174]",
    },
  ];

  // FUNCTION TO OPEN EMAIL
  const sendEmail = () => {
    window.location.href =
      "mailto:contact.vidhata@gmail.com?subject=Inquiry%20from%20Vidhata%20Website&body=Hello%20Vidhata%20Team,%0D%0A%0D%0AI%20would%20like%20to%20get%20involved.%20Please%20contact%20me.%0D%0A%0D%0AThank%20you!";
  };

  return (
    <section
      id="get-involved"
      className="py-20 bg-gradient-to-b from-[#F0F9F9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            GET INVOLVED
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Be Part of the Change
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            There are many ways to support our mission and help empower
            underserved students across Nepal. Every contribution makes a
            meaningful difference.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card
                key={opportunity.title}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#EA8166] overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 ${opportunity.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-3">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className={`${opportunity.color} ${opportunity.hoverColor} text-white w-full sm:w-auto px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all`}
                  >
                    {opportunity.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-10 sm:p-16 border-t-4 border-[#EA8166] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl text-gray-900 mb-6">
                Your Impact Matters
              </h4>
              <p className="text-gray-600 text-lg mb-4">
                Every volunteer hour, every donation, and every partnership
                helps us reach more students and create lasting change in
                communities across Nepal.
              </p>
              <p className="text-gray-600 text-lg">
                With your support, we can continue to provide quality
                non-academic learning experiences that transform lives and build
                stronger, more resilient communities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-xl p-6 text-white text-center shadow-lg">
                <div className="text-3xl mb-2">450+</div>
                <div className="text-sm">Hours of Learning Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-[#EA8166] to-[#d97359] rounded-xl p-6 text-white text-center shadow-lg">
                <div className="text-3xl mb-2">5600+</div>
                <div className="text-sm">Students Reached</div>
              </div>
              <div className="bg-gradient-to-br from-[#F0C78A] to-[#e0b77a] rounded-xl p-6 text-white text-center shadow-lg">
                <div className="text-3xl mb-2">125+</div>
                <div className="text-sm">Active Volunteers</div>
              </div>
              <div className="bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-xl p-6 text-white text-center shadow-lg">
                <div className="text-3xl mb-2">18</div>
                <div className="text-sm">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>

        {/* SEND MESSAGE BUTTON */}
        <div className="text-center">
          <Button
            onClick={sendEmail}
            className="bg-[#5B8A8D] hover:bg-[#4a7174] text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
          >
            <Mail className="w-6 h-6" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
