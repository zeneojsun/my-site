import Image from 'next/image';
import { notFound } from 'next/navigation';

const caseStudies = {
  'project-1': {
    title: 'Enterprise Design System',
    heroImage: '/images/project-1-hero.jpg',
    category: 'Design Systems',
    challenge: 'A Fortune 500 company was struggling with inconsistent design patterns across their digital products, leading to poor user experience and increased development time.',
    solution: 'Led the development of a comprehensive design system that included a component library, design tokens, and documentation. Implemented a governance model to ensure consistency and scalability.',
    outcome: 'Reduced development time by 40%, improved design consistency by 85%, and established a sustainable design system that continues to evolve with the company\'s needs.',
  },
  'project-2': {
    title: 'UX Strategy & Implementation',
    heroImage: '/images/project-2-hero.jpg',
    category: 'UX Strategy',
    challenge: 'A leading SaaS platform was experiencing high user churn due to complex navigation and unclear user flows.',
    solution: 'Conducted comprehensive user research and implemented a new information architecture. Redesigned key user flows with a focus on simplicity and efficiency.',
    outcome: 'Decreased user churn by 30%, improved task completion rates by 45%, and received positive feedback from both users and stakeholders.',
  },
  'project-3': {
    title: 'Design Leadership',
    heroImage: '/images/project-3-hero.jpg',
    category: 'Design Leadership',
    challenge: 'A growing tech company needed to scale their design team while maintaining quality and consistency.',
    solution: 'Implemented a structured mentorship program, established design principles, and created a framework for design critique and feedback.',
    outcome: 'Successfully scaled the design team from 5 to 20 members while improving design quality and team satisfaction scores.',
  },
};

export default function CaseStudy({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies];

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-sm font-medium text-indigo-300">{caseStudy.category}</span>
            <h1 className="mt-2 text-4xl font-bold">{caseStudy.title}</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Outcome</h2>
            <p className="text-gray-600 leading-relaxed">{caseStudy.outcome}</p>
          </section>
        </div>
      </div>
    </main>
  );
} 