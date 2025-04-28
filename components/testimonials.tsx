"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Working with DesignMentor transformed my approach to design systems. The personalized coaching helped me implement strategies that increased my team's efficiency by 40%.",
    author: "Alex Johnson",
    role: "Senior Product Designer",
    company: "TechCorp",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    content:
      "The mentorship program provided exactly what I needed to advance my career. Within 6 months of working together, I secured a leadership position and feel confident managing my design team.",
    author: "Samantha Lee",
    role: "Design Lead",
    company: "InnovateCo",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    content:
      "The workshops delivered to our team were game-changing. We now have a shared design language and collaborative workflow that has dramatically improved our product development process.",
    author: "Michael Chen",
    role: "UX Director",
    company: "FutureLabs",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 4,
    content:
      "As someone transitioning into design from another field, the structured guidance and practical exercises gave me the confidence and portfolio I needed to land my first design role.",
    author: "Jamie Rivera",
    role: "UI Designer",
    company: "CreativeStudio",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 md:p-12">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">{currentTestimonial.content}</p>
          <div className="flex items-center">
            <Image
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.author}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">{currentTestimonial.author}</h4>
              <p className="text-muted-foreground">
                {currentTestimonial.role}, {currentTestimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

