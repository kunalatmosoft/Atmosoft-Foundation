import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const solutionsData = {
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure designed for modern applications.",
    content: `
      <p>Our cloud solutions provide businesses with the flexibility and scalability they need to grow in today's digital landscape. With Atmosoft's cloud infrastructure, you can:</p>
      <ul>
        <li>Scale your applications seamlessly</li>
        <li>Reduce operational costs</li>
        <li>Improve reliability and uptime</li>
        <li>Enhance security and compliance</li>
      </ul>
      <p>We offer a range of cloud services including public, private, and hybrid cloud solutions tailored to your specific business needs.</p>
    `,
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    features: [
      { title: "Elastic Scaling", description: "Automatically scale resources up or down based on demand." },
      { title: "Global CDN", description: "Deliver content quickly to users anywhere in the world." },
      { title: "Managed Services", description: "Focus on your applications while we manage the infrastructure." },
      { title: "Disaster Recovery", description: "Protect your data with automated backup and recovery solutions." },
    ],
  },
  "development-tools": {
    title: "Development Tools",
    description: "Professional development tools to accelerate your workflow.",
    content: `
      <p>Atmosoft provides a comprehensive suite of development tools designed to help your team build better software faster. Our tools support:</p>
      <ul>
        <li>Collaborative coding environments</li>
        <li>Automated testing and deployment</li>
        <li>Code quality and security analysis</li>
        <li>Performance optimization</li>
      </ul>
      <p>Whether you're building web applications, mobile apps, or enterprise software, our development tools will streamline your workflow.</p>
    `,
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    features: [
      { title: "Integrated IDE", description: "A powerful development environment with built-in debugging tools." },
      { title: "CI/CD Pipeline", description: "Automate your build, test, and deployment processes." },
      { title: "Code Analysis", description: "Identify and fix issues before they reach production." },
      { title: "Package Management", description: "Easily manage dependencies and versions." },
    ],
  },
  "enterprise-support": {
    title: "Enterprise Support",
    description: "24/7 support for your mission-critical applications.",
    content: `
      <p>Our enterprise support services ensure your business-critical applications are always running smoothly. With Atmosoft's support team, you get:</p>
      <ul>
        <li>24/7 technical assistance</li>
        <li>Proactive monitoring and issue resolution</li>
        <li>Regular maintenance and updates</li>
        <li>Dedicated account management</li>
      </ul>
      <p>We understand that downtime is not an option for enterprise applications, which is why our support team is always ready to help.</p>
    `,
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    features: [
      { title: "Priority Response", description: "Get immediate assistance for critical issues." },
      { title: "Dedicated Support Team", description: "Work with engineers who understand your specific environment." },
      { title: "Proactive Monitoring", description: "Identify and resolve issues before they impact your business." },
      { title: "Regular Health Checks", description: "Ensure your systems are optimized and secure." },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }))
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const solution = solutionsData[slug as keyof typeof solutionsData]

  if (!solution) {
    return <div className="container mx-auto px-4 py-20 text-center">Solution not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/solutions" className="inline-flex items-center text-blue-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Solutions
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">{solution.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{solution.description}</p>
          <div className="prose prose-blue max-w-none mb-8" dangerouslySetInnerHTML={{ __html: solution.content }} />
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Request Demo</Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
        <div>
          <img
            src={solution.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
            alt={solution.title}
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solution.features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 my-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to get started with {solution.title}?</h2>
          <p className="text-gray-600 mb-8">
            Talk to our experts today and discover how Atmosoft can transform your business.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
      </div>
    </div>
  )
}

