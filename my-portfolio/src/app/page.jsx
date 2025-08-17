export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Nisreen 👋</h1>
      <p className="text-xl text-gray-600 mb-8">
        Software Engineer specializing in Golang, React, and Next.js, Angular, Java Springboot, MongoDB, and PostgreSQL.
      </p>
      <a
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
}