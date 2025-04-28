import { CheckCircleIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Design System Consulting',
    description: 'Comprehensive design system development and implementation services',
    features: [
      'Component library development',
      'Design token architecture',
      'Documentation and governance',
      'Implementation support',
      'Team training and adoption',
    ],
  },
  {
    title: 'UX Strategy',
    description: 'Strategic UX planning and implementation for digital products',
    features: [
      'User research and analysis',
      'Information architecture',
      'User journey mapping',
      'Interaction design',
      'Usability testing',
    ],
  },
  {
    title: 'Design Leadership',
    description: 'Coaching and mentoring for design teams and individuals',
    features: [
      'Team building and structure',
      'Process optimization',
      'Design critique framework',
      'Career development',
      'Stakeholder management',
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive design consulting services to help you build better products
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can work together to improve your product's design and user experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
} 