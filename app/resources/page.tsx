"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-6">Design Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A curated collection of tools, articles, and resources to help you grow as a designer.
        </p>

        <div className="space-y-12">
          {/* Articles Section */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6">Featured Articles</h2>
            <div className="grid gap-6">
              <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                <h3 className="text-xl font-display font-bold mb-2">The Future of Design Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Exploring the latest trends and best practices in design system development.
                </p>
                <Link href="#" className="text-primary font-medium inline-flex items-center hover-lift">
                  Read article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                <h3 className="text-xl font-display font-bold mb-2">UX Research Methods</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to conducting effective user research.
                </p>
                <Link href="#" className="text-primary font-medium inline-flex items-center hover-lift">
                  Read article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6">Recommended Tools</h2>
            <div className="grid gap-6">
              <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                <h3 className="text-xl font-display font-bold mb-2">Design Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Figma - UI/UX design and prototyping</li>
                  <li>• Adobe XD - Interface design and prototyping</li>
                  <li>• Sketch - Digital design toolkit</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                <h3 className="text-xl font-display font-bold mb-2">Research Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• UserTesting - Remote user testing</li>
                  <li>• Hotjar - User behavior analytics</li>
                  <li>• Optimal Workshop - Information architecture testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="text-2xl font-display font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest design insights and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-input bg-background"
              />
              <Button className="rounded-full">Subscribe</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 