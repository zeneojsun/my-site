"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = {
  "ecommerce": {
    title: "E-commerce Design System",
    category: "Design System",
    overview: "A comprehensive design system that helped streamline the product development process for a major e-commerce platform.",
    challenge: "The client was facing inconsistencies in their product design, leading to poor user experience and increased development time.",
    solution: "We developed a comprehensive design system that included a component library, design tokens, and documentation. The system was built to be scalable and maintainable.",
    results: [
      "45% reduction in development time",
      "30% improvement in design consistency",
      "25% increase in user satisfaction"
    ],
    image: "/placeholder.svg?height=600&width=1200"
  },
  "fintech": {
    title: "Fintech App Redesign",
    category: "UX/UI Design",
    overview: "A complete redesign of a financial technology application that improved user engagement by 45%.",
    challenge: "Users were struggling with complex financial workflows and unclear navigation.",
    solution: "We conducted extensive user research and implemented a user-centered design approach, focusing on simplifying complex financial processes.",
    results: [
      "45% increase in user engagement",
      "60% reduction in support tickets",
      "35% improvement in task completion rate"
    ],
    image: "/placeholder.svg?height=600&width=1200"
  },
  "team-coaching": {
    title: "Design Team Transformation",
    category: "Team Coaching",
    overview: "A six-month coaching program that helped a design team improve collaboration and deliver higher quality work.",
    challenge: "The design team was struggling with collaboration, consistency, and meeting deadlines.",
    solution: "We implemented a structured coaching program focusing on design processes, collaboration tools, and team dynamics.",
    results: [
      "40% improvement in project delivery time",
      "50% increase in team satisfaction",
      "35% reduction in design revisions"
    ],
    image: "/placeholder.svg?height=600&width=1200"
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            {caseStudy.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-muted-foreground">{caseStudy.overview}</p>
        </div>

        <div className="aspect-video w-full mb-12 rounded-xl overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold mb-6">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-primary/5 p-6 rounded-xl">
                <p className="text-muted-foreground">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 