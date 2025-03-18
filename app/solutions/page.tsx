import Link from "next/link"
import { ArrowRight, Code, Globe, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure designed for modern applications.",
      features: [
        "Elastic scaling for variable workloads",
        "Global content delivery network",
        "Managed database services",
        "Automated backup and recovery",
      ],
      slug: "cloud-solutions",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Development Tools",
      description: "Professional development tools to accelerate your workflow.",
      features: [
        "Integrated development environment",
        "Continuous integration and deployment",
        "Code quality and security analysis",
        "Package and dependency management",
      ],
      slug: "development-tools",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Enterprise Support",
      description: "24/7 support for your mission-critical applications.",
      features: [
        "Priority response for critical issues",
        "Dedicated support team",
        "Proactive monitoring and alerts",
        "Regular system health checks",
      ],
      slug: "enterprise-support",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Security",
      description: "Comprehensive security solutions to protect your data and applications.",
      features: [
        "Threat detection and prevention",
        "Compliance management",
        "Identity and access control",
        "Data encryption and protection",
      ],
      slug: "security",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how Atmosoft's comprehensive suite of solutions can help your organization thrive in the digital
            landscape.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="mb-4">{solution.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{solution.description}</p>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-3 mt-1 text-green-500">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/solutions/${solution.slug}`}>
                    <Button className="inline-flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`bg-gray-100 rounded-xl p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={solution.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which solution is right for you?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you identify the best solutions for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Schedule a Consultation</Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

