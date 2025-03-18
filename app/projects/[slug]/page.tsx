import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const projectsData = {
  "techcorp-migration": {
    title: "Enterprise Cloud Migration",
    client: "TechCorp Inc.",
    industry: "Technology",
    description:
      "A comprehensive cloud migration for a leading technology corporation, moving their legacy systems to a modern cloud infrastructure.",
    challenge:
      "TechCorp was struggling with aging on-premises infrastructure that was becoming increasingly expensive to maintain and difficult to scale. They needed to migrate to a cloud platform without disrupting their 24/7 operations.",
    solution:
      "Atmosoft designed a phased migration strategy that allowed TechCorp to gradually move their systems to the cloud while maintaining business continuity. We implemented a hybrid cloud approach during the transition and provided extensive training for their IT staff.",
    results: [
      "40% reduction in infrastructure costs",
      "99.99% uptime during and after migration",
      "3x improvement in application performance",
      "Scalability to handle 10x their previous peak load",
    ],
    testimonial: {
      quote:
        "The Atmosoft team delivered a flawless migration that exceeded our expectations. Not only did they complete the project ahead of schedule, but they also helped us optimize our cloud infrastructure for better performance and cost efficiency.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp Inc.",
    },
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    gallery: [
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
    ],
  },
  "datasense-analytics": {
    title: "AI-Powered Analytics Platform",
    client: "DataSense",
    industry: "Data Analytics",
    description:
      "Development of a cutting-edge analytics platform that leverages artificial intelligence to provide actionable insights from complex data sets.",
    challenge:
      "DataSense wanted to create a next-generation analytics platform that could process and analyze massive amounts of data in real-time, while making the insights accessible to non-technical users.",
    solution:
      "Atmosoft built a scalable, AI-powered analytics platform using our cloud infrastructure and machine learning expertise. The solution includes natural language processing for query input, automated data visualization, and predictive analytics capabilities that adapt to user behavior over time.",
    results: [
      "85% reduction in time to generate business insights",
      "Accessible analytics for over 500 non-technical users",
      "Identification of $2.3M in cost-saving opportunities",
      "Successful integration with 12 different data sources",
    ],
    testimonial: {
      quote:
        "The platform Atmosoft developed has transformed how we make decisions. Our team can now access complex data insights without requiring a data science background, which has accelerated our ability to respond to market changes.",
      author: "Michael Chen",
      title: "CEO, DataSense",
    },
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    gallery: [
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
    ],
  },
  "paysecure-infrastructure": {
    title: "Secure Payment Infrastructure",
    client: "PaySecure",
    industry: "Financial Services",
    description:
      "Implementation of a highly secure, compliant payment processing infrastructure for a financial services provider.",
    challenge:
      "PaySecure needed to upgrade their payment processing infrastructure to meet stringent security requirements and compliance standards while handling increasing transaction volumes.",
    solution:
      "Atmosoft designed and implemented a secure payment infrastructure with end-to-end encryption, advanced fraud detection, and real-time monitoring. The solution was built to be fully compliant with PCI DSS, GDPR, and other relevant regulations.",
    results: [
      "Zero security breaches since implementation",
      "99.999% uptime for critical payment services",
      "200% increase in transaction processing capacity",
      "Full compliance with all relevant financial regulations",
    ],
    testimonial: {
      quote:
        "Security and reliability are non-negotiable in our industry. Atmosoft delivered an infrastructure that not only meets our strict requirements but also scales effortlessly as our business grows. Their expertise in financial services technology is unmatched.",
      author: "David Rodriguez",
      title: "Head of Technology, PaySecure",
    },
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=500&width=800",
    gallery: [
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
      "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=300&width=400",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return <div className="container mx-auto px-4 py-20 text-center">Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/projects" className="inline-flex items-center text-blue-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="text-sm text-blue-600 mb-2">Case Study</div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Client: {project.client}</div>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Industry: {project.industry}</div>
          </div>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        </div>
        <div>
          <img src={project.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"} alt={project.title} className="rounded-xl shadow-lg w-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-gray-700">{project.challenge}</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-700">{project.solution}</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.results.map((result, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <p className="font-medium">{result}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
              alt={`${project.title} - Image ${index + 1}`}
              className="rounded-xl shadow-md w-full h-48 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <blockquote className="text-xl italic text-gray-700 mb-4">"{project.testimonial.quote}"</blockquote>
            <div>
              <div className="font-bold">{project.testimonial.author}</div>
              <div className="text-gray-600">{project.testimonial.title}</div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl">
              {project.testimonial.author
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our team to discuss how we can help you achieve similar results.
        </p>
        <Button size="lg">Contact Us</Button>
      </div>
    </div>
  )
}

