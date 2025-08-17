export default function Projects() {
    const projects = [
        {
            title: "Polystox Marketplace",
            description: "Online marketplace for polymers built with Spring Boot + React.",
            link: "https://polystox.com",
        },
        {
            title: "E-commerce App",
            description: "Full-stack app with Golang (Gin) backend & MongoDB.",
            link: "#",
        },
    ];

    return (
        <section className="max-w-4xl mx-auto py-16">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, i) => (
                    <div key={i} className="border p-6 rounded-lg shadow hover:shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
