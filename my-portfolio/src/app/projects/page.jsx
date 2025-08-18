export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-foreground mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Example Project Card */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Project Title One</h3>
            <p className="text-text-color mb-4">A brief description of Project One, highlighting its purpose and key features.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">MongoDB</span>
            </div>
            <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a>
          </div>
        </div>

        {/* Example Project Card 2 */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Project Title Two</h3>
            <p className="text-text-color mb-4">A brief description of Project Two, highlighting its purpose and key features.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Angular</span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">Spring Boot</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">PostgreSQL</span>
            </div>
            <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a>
          </div>
        </div>

        {/* Example Project Card 3 */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Project Title Three</h3>
            <p className="text-text-color mb-4">A brief description of Project Three, highlighting its purpose and key features.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded">Next.js</span>
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">Golang</span>
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-0.5 rounded">Docker</span>
            </div>
            <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
