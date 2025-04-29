"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { Testimonials } from "@/components/testimonials"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"
import ResultsSection from "@/components/home/ResultsSection"
import FinalCTASection from "@/components/home/FinalCTASection"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-gsap")
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
      )
    }

    // Projects animation
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-card")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold hover-lift">
            DesignMentor
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="rounded-full hover-lift-sm">
              Free Consultation
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <FinalCTASection />

        {/* Client Logos Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-3">Trusted by designers</h2>
              <p className="text-muted-foreground text-lg">from some of the most innovative teams in the industry.</p>
            </div>
            <ClientLogos />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section ref={projectsRef} className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-3">Featured Projects</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A selection of design systems and mentorship outcomes that showcase my approach and results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all hover:-translate-y-1 hover:shadow-lg project-card">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="E-commerce Design System"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                    Design System
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">E-commerce Design System</h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive design system that helped streamline the product development process for a major
                    e-commerce platform.
                  </p>
                  <Link href="/projects/ecommerce" className="text-primary font-medium inline-flex items-center hover-lift">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all hover:-translate-y-1 hover:shadow-lg project-card">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fintech App Redesign"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                    UX/UI Design
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">Fintech App Redesign</h3>
                  <p className="text-muted-foreground mb-4">
                    A complete redesign of a financial technology application that improved user engagement by 45%.
                  </p>
                  <Link href="/projects/fintech" className="text-primary font-medium inline-flex items-center hover-lift">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all hover:-translate-y-1 hover:shadow-lg project-card">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Team Workshop Results"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                    Team Coaching
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">Design Team Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    A six-month coaching program that helped a design team improve collaboration and deliver higher
                    quality work.
                  </p>
                  <Link href="/projects/team-coaching" className="text-primary font-medium inline-flex items-center hover-lift">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-3">Success stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from designers who have transformed their careers and teams through our mentorship and coaching
              programs.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-3">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive design mentorship and coaching programs tailored to your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-background rounded-xl p-8 shadow-md hover-lift">
                <h3 className="text-xl font-display font-bold mb-4">1:1 Mentorship</h3>
                <p className="text-muted-foreground mb-6">
                  Personalized guidance and support to help you grow as a designer and advance your career.
                </p>
                <Button variant="outline" className="rounded-full hover-lift-sm">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Service Card 2 */}
              <div className="bg-background rounded-xl p-8 shadow-md hover-lift">
                <h3 className="text-xl font-display font-bold mb-4">Team Coaching</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your design team's collaboration, processes, and output quality.
                </p>
                <Button variant="outline" className="rounded-full hover-lift-sm">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Service Card 3 */}
              <div className="bg-background rounded-xl p-8 shadow-md hover-lift">
                <h3 className="text-xl font-display font-bold mb-4">Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Interactive sessions covering design systems, UX research, and more.
                </p>
                <Button variant="outline" className="rounded-full hover-lift-sm">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's work together</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free 30-minute discovery call to discuss your goals and how we can elevate your design career or team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full hover-lift" asChild>
                  <Link href="https://cal.com/noelcheung">
                    Book a discovery call
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full hover-lift" asChild>
                  <Link href="/services">
                    Explore services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="text-xl font-display font-bold hover-lift">
                  Noel Cheung
                </Link>
                <p className="text-muted-foreground mt-2">Elevating design careers through expert mentorship.</p>
              </div>
              <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/resources" className="text-sm hover:text-primary transition-colors">
                  Resources
                </Link>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © {new Date().getFullYear()} Noel Cheung. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

