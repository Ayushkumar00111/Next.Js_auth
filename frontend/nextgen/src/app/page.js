export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">DevSpace</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
        
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-6">
            Build Modern Websites with Next.js
          </h2>

          <p className="text-gray-600 mb-6">
            Create fast, scalable and beautiful web applications using
            Next.js and Tailwind CSS.
          </p>

          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Start Building
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="w-full md:w-1/2 rounded-xl shadow-lg mt-10 md:mt-0"
        />
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-10">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Fast Performance</h4>
            <p className="text-gray-600">
              Next.js provides server-side rendering and static generation for
              blazing fast websites.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Modern UI</h4>
            <p className="text-gray-600">
              Tailwind CSS makes it easy to create beautiful and responsive
              designs quickly.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Easy Development</h4>
            <p className="text-gray-600">
              Developer-friendly features like routing, API routes and
              optimized builds.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-10">
        <h3 className="text-3xl font-bold mb-6">
          Ready to build something amazing?
        </h3>

        <p className="mb-6">
          Start your journey with Next.js today.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2026 DevSpace. All rights reserved.</p>
      </footer>

    </main>
  );
}