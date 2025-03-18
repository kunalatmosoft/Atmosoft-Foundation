import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const departments = [
    {
      name: "Leadership",
      members: [
        {
          name: "Alex Johnson",
          title: "CEO & Founder",
          bio: "Alex has over 20 years of experience in technology leadership and has led multiple successful startups.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "alex-johnson",
        },
        {
          name: "Sarah Chen",
          title: "CTO",
          bio: "Sarah is an expert in cloud architecture and has previously worked at leading technology companies.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "sarah-chen",
        },
        {
          name: "Michael Rodriguez",
          title: "VP of Engineering",
          bio: "Michael leads our engineering team and has a background in building scalable enterprise systems.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "michael-rodriguez",
        },
        {
          name: "Emily Patel",
          title: "Head of Product",
          bio: "Emily ensures our products meet the highest standards of quality and user experience.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "emily-patel",
        },
      ],
    },
    {
      name: "Engineering",
      members: [
        {
          name: "David Kim",
          title: "Principal Engineer",
          bio: "David leads the architecture of our cloud platform and has expertise in distributed systems.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "david-kim",
        },
        {
          name: "Lisa Wang",
          title: "Senior Software Engineer",
          bio: "Lisa specializes in backend development and has contributed to our core infrastructure.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "lisa-wang",
        },
        {
          name: "James Wilson",
          title: "Frontend Lead",
          bio: "James oversees our frontend development and has expertise in modern JavaScript frameworks.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "james-wilson",
        },
        {
          name: "Priya Sharma",
          title: "DevOps Engineer",
          bio: "Priya manages our CI/CD pipelines and ensures smooth deployment of our applications.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "priya-sharma",
        },
      ],
    },
    {
      name: "Product & Design",
      members: [
        {
          name: "Carlos Mendez",
          title: "Product Manager",
          bio: "Carlos oversees our cloud solutions product line and works closely with customers.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "carlos-mendez",
        },
        {
          name: "Nina Jackson",
          title: "UX Designer",
          bio: "Nina creates intuitive user experiences for our products and leads user research.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "nina-jackson",
        },
        {
          name: "Thomas Lee",
          title: "Product Manager",
          bio: "Thomas manages our developer tools product line and has a background in software engineering.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "thomas-lee",
        },
        {
          name: "Sophia Martinez",
          title: "UI Designer",
          bio: "Sophia creates beautiful and functional interfaces for our products.",
          image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=300",
          slug: "sophia-martinez",
        },
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the talented individuals who make Atmosoft's success possible. Our diverse team brings together
            expertise from across the technology industry.
          </p>
        </div>
      </section>

      {/* Team Members by Department */}
      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={`py-20 ${deptIndex % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{department.name} Team</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {department.members.map((member, index) => (
                <Link key={index} href={`/about/team/${member.slug}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
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
          </div>
        </section>
      ))}

      {/* Join Our Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about technology and innovation. At
                Atmosoft, you'll work on challenging projects alongside some of the brightest minds in the industry.
              </p>
              <p className="text-gray-600 mb-8">
                We offer competitive compensation, excellent benefits, and a supportive work environment that encourages
                growth and creativity. Check out our current openings and join us in building the future of technology.
              </p>
              <Button size="lg" className="inline-flex items-center">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=600"
                alt="Atmosoft Office"
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Life at Atmosoft</h3>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=100&width=100"
                  alt="Office Life"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=100&width=100"
                  alt="Team Event"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=100&width=100"
                  alt="Work Environment"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            These core principles guide everything we do at Atmosoft, from how we develop our products to how we
            interact with our customers and each other.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

