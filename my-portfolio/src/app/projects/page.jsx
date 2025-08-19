export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-foreground mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project Card 1 */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project1.jpeg" alt="Employee Transport Management Using Cloud" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Employee Transport Management Using Cloud</h3>
            <p className="text-text-color mb-4">Developed an employee transport service application and stored all project related files and database files in Azure Cloud.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Angular</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Java Spring Boot</span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">MySQL</span>
            </div>
            {/* <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a> */}
          </div>
        </div>

        {/* Example Project Card 2 */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project2.jpeg" alt="Linux CFS Algorithm Implementation, guided by Prof. D. A. Mehta" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Linux CFS Algorithm</h3>
            <p className="text-text-color mb-4">Implementated Completely Fair Scheduling (CFS) Algorithm for Linux multicore processor. Analyzed simulation results using MCRTsim, gained insights into the Load Balancing policy in Linux Kernel.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Operating Systems</span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">Scheduling Algorithms</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">Java</span>
            </div>
            {/* <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a> */}
          </div>
        </div>

        {/* Example Project Card 3 */}
        <div className="bg-card-background shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="/images/project3.jpeg" alt="Dimensionality Reduction in Multiple View Datasets" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Dimensionality Reduction in Multiple View Datasets</h3>
            <p className="text-text-color mb-4">Studied canonical correlation analysis for multi view datasets and implemented a specialized case wherein Probabilistic CCA was implemented to deal with extremely large number of dimensions. Implemented and developed a library in python for PCCA.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-0.5 rounded">Data Science</span>
            </div>
            {/* <a href="#" className="text-primary-color hover:text-secondary-color font-semibold">View Details &rarr;</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
