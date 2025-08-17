export default function Contact() {
    return (
        <section className="max-w-2xl mx-auto py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
                Have a project in mind or want to collaborate? Let’s connect!
            </p>
            <a
                href="mailto:youremail@example.com"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            >
                Say Hello
            </a>
        </section>
    );
}
