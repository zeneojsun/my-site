import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Noel Cheung</h1>
          <p className="text-xl text-gray-600">Product Design Consultant & Design Systems Expert</p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              With over a decade of experience in product design and user experience, I've dedicated my career to helping companies create better digital products. My journey began in traditional graphic design, but I quickly found my passion in the intersection of design and technology.
            </p>
            <p>
              Throughout my career, I've worked with startups and Fortune 500 companies alike, always focusing on creating meaningful user experiences and scalable design systems. My approach combines strategic thinking with hands-on design expertise, ensuring that every project delivers both immediate impact and long-term value.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Centered Design</h3>
              <p className="text-gray-600">Every design decision should be rooted in user needs and validated through research and testing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Systematic Thinking</h3>
              <p className="text-gray-600">Creating scalable solutions that maintain consistency while allowing for flexibility and growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">Design is never done. We should always be learning, iterating, and evolving our solutions.</p>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience Highlights</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UX Design</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>User research and testing methodologies</li>
                <li>Information architecture and user flows</li>
                <li>Interaction design and prototyping</li>
                <li>Accessibility and inclusive design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Design</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>End-to-end product design process</li>
                <li>Design systems and component libraries</li>
                <li>Design tokens and theming</li>
                <li>Cross-platform design consistency</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Leadership</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Team building and mentorship</li>
                <li>Design process optimization</li>
                <li>Stakeholder management</li>
                <li>Design strategy and vision</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 