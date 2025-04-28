import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Director',
    company: 'TechCorp',
    image: '/images/testimonial-1.jpg',
    quote: 'Noel transformed our design system from a collection of inconsistent components into a cohesive, scalable solution. The impact on our development velocity and design consistency has been remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UX Lead',
    company: 'StartupX',
    image: '/images/testimonial-2.jpg',
    quote: 'Working with Noel on our UX strategy was a game-changer. Their insights and recommendations helped us create a more intuitive and user-friendly product that our customers love.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Manager',
    company: 'Global Solutions',
    image: '/images/testimonial-3.jpg',
    quote: 'Noel\'s coaching and mentorship have been invaluable to our design team. They\'ve helped us establish better processes, improve our design quality, and grow as professionals.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'InnovateTech',
    image: '/images/testimonial-4.jpg',
    quote: 'The design system Noel helped us build has become a cornerstone of our product development. It\'s saved us countless hours and improved our product quality significantly.',
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to share your experience?</h2>
          <p className="text-gray-600 mb-8">
            If you've worked with me and would like to share your feedback, I'd love to hear from you.
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