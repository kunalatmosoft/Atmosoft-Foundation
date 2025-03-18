import Link from "next/link"
import { ArrowRight, Code, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Powering the Future of Technology</h1>
              <p className="text-xl mb-8 text-blue-100">
                Atmosoft provides cutting-edge solutions for businesses looking to transform their digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=500"
                  alt="Atmosoft Platform"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how Atmosoft can help your organization thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure designed for modern applications.",
                slug: "cloud-solutions",
              },
              {
                icon: <Code className="h-10 w-10 text-blue-600" />,
                title: "Development Tools",
                description: "Professional development tools to accelerate your workflow.",
                slug: "development-tools",
              },
              {
                icon: <Users className="h-10 w-10 text-blue-600" />,
                title: "Enterprise Support",
                description: "24/7 support for your mission-critical applications.",
                slug: "enterprise-support",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  href={`/solutions/${feature.slug}`}
                  className="text-blue-600 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our most impactful work with leading organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Cloud Migration",
                client: "TechCorp Inc.",
                image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
                slug: "techcorp-migration",
              },
              {
                title: "AI-Powered Analytics Platform",
                client: "DataSense",
                image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
                slug: "datasense-analytics",
              },
              {
                title: "Secure Payment Infrastructure",
                client: "PaySecure",
                image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
                slug: "paysecure-infrastructure",
              },
            ].map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">Client: {project.client}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust Atmosoft for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

