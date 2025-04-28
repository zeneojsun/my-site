import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    id: 'project-1',
    title: 'Enterprise Design System',
    description: 'Building a scalable design system for a Fortune 500 company',
    image: '/images/project-1.jpg',
    category: 'Design Systems',
  },
  {
    id: 'project-2',
    title: 'UX Strategy & Implementation',
    description: 'Transforming user experience for a leading SaaS platform',
    image: '/images/project-2.jpg',
    category: 'UX Strategy',
  },
  {
    id: 'project-3',
    title: 'Design Leadership',
    description: 'Coaching and mentoring design teams to excellence',
    image: '/images/project-3.jpg',
    category: 'Design Leadership',
  },
];

export default function CaseStudyListing() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/case-study/${project.id}`}
              className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-indigo-600">{project.category}</span>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 