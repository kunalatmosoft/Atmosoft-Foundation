import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "CEO & Founder",
      bio: "Alex has over 20 years of experience in technology leadership and has led multiple successful startups.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      title: "CTO",
      bio: "Sarah is an expert in cloud architecture and has previously worked at leading technology companies.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Engineering",
      bio: "Michael leads our engineering team and has a background in building scalable enterprise systems.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
    },
    {
      name: "Emily Patel",
      title: "Head of Product",
      bio: "Emily ensures our products meet the highest standards of quality and user experience.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in technology.",
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do.",
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from working together.",
    },
    {
      title: "Integrity",
      description: "We are honest, transparent, and ethical in all our interactions.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-xl mb-8 text-blue-100">
                Founded in 2010, Atmosoft has grown from a small startup to a leading technology provider trusted by
                organizations worldwide.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                <img src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=500" alt="Atmosoft Team" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                At Atmosoft, our mission is to empower organizations with innovative technology solutions that drive
                growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that technology should be an enabler, not a barrier. That's why we focus on creating
                solutions that are powerful yet accessible, sophisticated yet intuitive.
              </p>
              <p className="text-gray-600">
                Our team of experts works closely with each client to understand their unique challenges and goals,
                ensuring that our solutions deliver real, measurable value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's vision and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Link key={index} href={`/about/team/${member.name.toLowerCase().replace(" ", "-")}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 mb-3">{member.title}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                      View Profile <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about/team">
              <Button variant="outline" size="lg">
                Meet Our Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to where we are today, explore the key milestones in our company's history.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            {[
              {
                year: "2010",
                title: "Founded in San Francisco",
                description: "Atmosoft was founded with a vision to make enterprise technology more accessible.",
              },
              {
                year: "2013",
                title: "First Enterprise Client",
                description: "Secured our first major enterprise client and expanded our team to 25 employees.",
              },
              {
                year: "2016",
                title: "International Expansion",
                description: "Opened offices in London and Singapore to better serve our global clients.",
              },
              {
                year: "2019",
                title: "Cloud Platform Launch",
                description: "Launched our flagship cloud platform, serving over 100 enterprise clients.",
              },
              {
                year: "2022",
                title: "AI Initiative",
                description: "Began integrating AI capabilities across our product portfolio.",
              },
              {
                year: "Today",
                title: "Industry Leader",
                description: "Recognized as an industry leader with over 500 employees worldwide.",
              },
            ].map((milestone, index) => (
              <div key={index} className={`relative mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-blue-600 font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

