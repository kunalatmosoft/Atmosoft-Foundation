import { ArrowLeft, Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const teamMembersData = {
  "alex-johnson": {
    name: "Alex Johnson",
    title: "CEO & Founder",
    bio: "Alex has over 20 years of experience in technology leadership and has led multiple successful startups. Before founding Atmosoft, Alex was the CTO of TechGlobal, where he oversaw the development of their cloud platform. Alex holds an MBA from Stanford and a Computer Science degree from MIT.",
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=400",
    expertise: ["Cloud Architecture", "Business Strategy", "Product Development", "Team Leadership"],
    longBio: `
      <p>Alex Johnson founded Atmosoft in 2010 with a vision to make enterprise technology more accessible and powerful for businesses of all sizes. Under his leadership, the company has grown from a small startup to a global technology provider with offices in San Francisco, London, and Singapore.</p>
      <p>Prior to Atmosoft, Alex served as the CTO of TechGlobal, where he led the development of their cloud platform that is now used by thousands of enterprises worldwide. His experience also includes leadership roles at several successful startups, two of which were acquired by major technology companies.</p>
      <p>Alex is passionate about innovation and believes that technology should solve real business problems rather than creating new ones. This philosophy has shaped Atmosoft's product development approach and customer-centric culture.</p>
      <p>Outside of work, Alex is an active mentor for technology startups and serves on the board of several non-profit organizations focused on technology education. He's also an avid mountain biker and participates in several races each year.</p>
    `,
    education: [
      { degree: "MBA", institution: "Stanford University", year: "2005" },
      { degree: "BS in Computer Science", institution: "Massachusetts Institute of Technology", year: "2001" },
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      github: "https://github.com/alexjohnson",
    },
    achievements: [
      "Named in Forbes 40 Under 40 in Technology (2018)",
      "Received the Technology Leadership Award from the Cloud Computing Association (2020)",
      "Author of 'Cloud Transformation: A Leader's Guide' (2019)",
      "Speaker at Web Summit, TechCrunch Disrupt, and AWS re:Invent",
    ],
    projects: [
      { name: "Enterprise Cloud Migration for TechCorp", slug: "techcorp-migration" },
      { name: "AI-Powered Analytics Platform for DataSense", slug: "datasense-analytics" },
    ],
  },
  "sarah-chen": {
    name: "Sarah Chen",
    title: "CTO",
    bio: "Sarah is an expert in cloud architecture and has previously worked at leading technology companies including Amazon Web Services and Microsoft. She leads Atmosoft's technical strategy and oversees all engineering teams. Sarah holds a Ph.D. in Computer Science from Stanford University.",
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=400",
    expertise: ["Cloud Infrastructure", "Distributed Systems", "Machine Learning", "Security"],
    longBio: `
      <p>Sarah Chen joined Atmosoft in 2012 as the Chief Technology Officer, bringing with her extensive experience in cloud computing and distributed systems. She leads the company's technical strategy and oversees all engineering teams.</p>
      <p>Before joining Atmosoft, Sarah spent five years at Amazon Web Services, where she was a principal engineer working on the core infrastructure of EC2 and S3. Prior to AWS, she was a senior software engineer at Microsoft, contributing to the development of Azure's early architecture.</p>
      <p>Sarah is known for her deep technical expertise and her ability to translate complex technical concepts into business value. Under her leadership, Atmosoft has developed a reputation for building highly scalable, reliable, and secure cloud solutions.</p>
      <p>Sarah is a frequent speaker at technology conferences and has published several papers on distributed systems and cloud architecture. She's also committed to increasing diversity in technology and mentors women pursuing careers in engineering.</p>
    `,
    education: [
      { degree: "Ph.D. in Computer Science", institution: "Stanford University", year: "2007" },
      { degree: "MS in Computer Science", institution: "Stanford University", year: "2004" },
      { degree: "BS in Computer Engineering", institution: "University of California, Berkeley", year: "2002" },
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      github: "https://github.com/sarahchen",
    },
    achievements: [
      "Patent holder for 'Distributed System for Efficient Resource Allocation' (2015)",
      "Author of 'Building Resilient Cloud Systems' (2018)",
      "Named one of the 'Top Women in Cloud Computing' by Cloud Magazine (2019)",
      "Keynote speaker at Google Cloud Next and Microsoft Build",
    ],
    projects: [
      { name: "Secure Payment Infrastructure for PaySecure", slug: "paysecure-infrastructure" },
      { name: "Supply Chain Optimization for LogisticsPro", slug: "logisticspro-supply-chain" },
    ],
  },
  "michael-rodriguez": {
    name: "Michael Rodriguez",
    title: "VP of Engineering",
    bio: "Michael leads our engineering team and has a background in building scalable enterprise systems. Before joining Atmosoft, he was the Director of Engineering at Salesforce, where he led the development of their analytics platform. Michael holds a Master's degree in Software Engineering from UC Berkeley.",
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=400",
    expertise: ["Software Architecture", "Agile Methodologies", "DevOps", "Enterprise Systems"],
    longBio: `
      <p>Michael Rodriguez serves as the Vice President of Engineering at Atmosoft, where he leads a team of over 100 engineers across three global offices. He joined the company in 2014 and has been instrumental in scaling the engineering organization while maintaining a culture of innovation and quality.</p>
      <p>Prior to Atmosoft, Michael was the Director of Engineering at Salesforce, where he led the development of their analytics platform. His experience also includes engineering leadership roles at Oracle and several enterprise software startups.</p>
      <p>Michael is passionate about building high-performing engineering teams and creating processes that enable rapid, high-quality software delivery. He has implemented DevOps practices across Atmosoft, resulting in a 70% reduction in deployment time and a significant improvement in system reliability.</p>
      <p>Outside of work, Michael is an active contributor to open-source projects and regularly speaks at engineering leadership conferences. He also enjoys teaching software engineering courses as an adjunct professor at UC Berkeley.</p>
    `,
    education: [
      { degree: "MS in Software Engineering", institution: "University of California, Berkeley", year: "2008" },
      { degree: "BS in Computer Science", institution: "University of Texas at Austin", year: "2004" },
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      github: "https://github.com/michaelrodriguez",
    },
    achievements: [
      "Led the development of Salesforce's analytics platform, used by over 100,000 businesses",
      "Implemented DevOps practices at Atmosoft, reducing deployment time by 70%",
      "Author of 'Scaling Engineering Teams: From Startup to Enterprise' (2020)",
      "Contributor to several open-source projects including Kubernetes and Terraform",
    ],
    projects: [
      { name: "Mobile Banking Application for FirstBank", slug: "firstbank-mobile" },
      { name: "E-Commerce Platform Redesign for ShopGlobal", slug: "shopglobal-redesign" },
    ],
  },
  "emily-patel": {
    name: "Emily Patel",
    title: "Head of Product",
    bio: "Emily ensures our products meet the highest standards of quality and user experience. She has a background in product management at Google and Dropbox. Emily holds an MBA from Harvard Business School and a degree in Human-Computer Interaction from Carnegie Mellon University.",
    image: "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=400&width=400",
    expertise: ["Product Strategy", "UX Design", "Market Research", "Agile Product Management"],
    longBio: `
      <p>Emily Patel is the Head of Product at Atmosoft, where she leads the product management team and oversees the company's product strategy and roadmap. She joined Atmosoft in 2015 and has been instrumental in transforming the company's product development process to be more user-centered and data-driven.</p>
      <p>Before joining Atmosoft, Emily was a Senior Product Manager at Google, where she worked on Google Cloud Platform products. Prior to Google, she was a Product Manager at Dropbox, where she helped develop their enterprise offering.</p>
      <p>Emily is known for her deep understanding of user needs and her ability to translate those needs into product features that deliver real value. Under her leadership, Atmosoft has significantly improved user satisfaction scores and reduced the time to market for new features.</p>
      <p>Emily is a frequent speaker on product management and user experience design. She's also an advocate for women in technology and mentors aspiring product managers through various industry programs.</p>
    `,
    education: [
      { degree: "MBA", institution: "Harvard Business School", year: "2012" },
      { degree: "BS in Human-Computer Interaction", institution: "Carnegie Mellon University", year: "2008" },
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/emilypatel",
      twitter: "https://twitter.com/emilypatel",
    },
    achievements: [
      "Led the development of Google Cloud Platform's data analytics products",
      "Transformed Atmosoft's product development process, reducing time to market by 40%",
      "Named one of the 'Top 25 Women in Product' by Product Management Magazine (2021)",
      "Speaker at ProductCon, Mind the Product, and Women in Product conferences",
    ],
    projects: [
      { name: "AI-Powered Analytics Platform for DataSense", slug: "datasense-analytics" },
      { name: "E-Commerce Platform Redesign for ShopGlobal", slug: "shopglobal-redesign" },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(teamMembersData).map((slug) => ({ slug }))
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const member = teamMembersData[slug as keyof typeof teamMembersData]

  if (!member) {
    return <div className="container mx-auto px-4 py-20 text-center">Team member not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/about/team" className="inline-flex items-center text-blue-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
      </Link>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gray-100 rounded-xl p-6 mb-8">
              <img
                src={member.image || "https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png"}
                alt={member.name}
                className="w-full aspect-square object-cover rounded-lg mb-6"
              />
              <h1 className="text-2xl font-bold mb-1">{member.name}</h1>
              <p className="text-blue-600 mb-4">{member.title}</p>

              <div className="flex space-x-3 mb-6">
                {member.socialMedia.linkedin && (
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.socialMedia.twitter && (
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {"github" in member.socialMedia && (
                  <a
                    href={member.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@atmosoft.com`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <ul className="space-y-2">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-gray-600">
                        {edu.institution}, {edu.year}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button className="w-full">Contact {member.name.split(" ")[0]}</Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="prose prose-blue max-w-none mb-12" dangerouslySetInnerHTML={{ __html: member.longBio }} />

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {member.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-green-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {member.projects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {member.projects.map((project, index) => (
                  <Link
                    key={index}
                    href={`/projects/${project.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 bg-gray-100 flex items-center justify-center">
                      <img
                        src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG.png?height=200&width=300"
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                          View Project <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

