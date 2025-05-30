"use client"

import Image from "next/image"

const designers = [
  {
    name: "Sarah Chen",
    title: "Senior Product Designer",
    company: "Google",
    image: "/image-1.jpg"
  },
  {
    name: "Michael Rodriguez",
    title: "UX Design Lead",
    company: "Apple",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Emma Wilson",
    title: "Design Director",
    company: "Microsoft",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "David Kim",
    title: "Product Design Manager",
    company: "Amazon",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Lisa Thompson",
    title: "Senior UX Designer",
    company: "Meta",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "James Wilson",
    title: "Design Lead",
    company: "Netflix",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {designers.map((designer, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
            <Image
              src={designer.image}
              alt={designer.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-display font-bold mb-1">{designer.name}</h3>
          <p className="text-sm text-muted-foreground mb-1">{designer.title}</p>
          <p className="text-sm font-medium text-primary">{designer.company}</p>
          </div>
        ))}
    </div>
  )
}

