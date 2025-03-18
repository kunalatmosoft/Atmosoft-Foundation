import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "TechCorp Inc.",
      description:
        "A comprehensive cloud migration for a leading technology corporation, moving their legacy systems to a modern cloud infrastructure.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "techcorp-migration",
      category: "Cloud Infrastructure",
    },
    {
      title: "AI-Powered Analytics Platform",
      client: "DataSense",
      description:
        "Development of a cutting-edge analytics platform that leverages artificial intelligence to provide actionable insights from complex data sets.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "datasense-analytics",
      category: "Data & Analytics",
    },
    {
      title: "Secure Payment Infrastructure",
      client: "PaySecure",
      description:
        "Implementation of a highly secure, compliant payment processing infrastructure for a financial services provider.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "paysecure-infrastructure",
      category: "Security",
    },
    {
      title: "E-Commerce Platform Redesign",
      client: "ShopGlobal",
      description:
        "Complete redesign and optimization of an e-commerce platform to improve user experience and increase conversion rates.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "shopglobal-redesign",
      category: "Web Development",
    },
    {
      title: "Mobile Banking Application",
      client: "FirstBank",
      description:
        "Development of a secure, feature-rich mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "firstbank-mobile",
      category: "Mobile Development",
    },
    {
      title: "Supply Chain Optimization",
      client: "LogisticsPro",
      description:
        "Implementation of an IoT-based supply chain monitoring and optimization system to improve efficiency and reduce costs.",
      image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      slug: "logisticspro-supply-chain",
      category: "IoT Solutions",
    },
  ]

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped organizations across industries
            achieve their technology goals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full">
              All Projects
            </Button>
            {categories.map((category, index) => (
              <Button key={index} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-medium">Client: {project.client}</span>
                      <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Atmosoft can help you achieve your technology goals.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}

