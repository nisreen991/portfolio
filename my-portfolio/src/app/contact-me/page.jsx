export default function ContactMe() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-4xl font-extrabold text-foreground mb-8">Get In Touch</h2>
      <p className="text-lg text-text-color mb-8">
        Have a project in mind, a question, or just want to say hello? I'd love to hear from you!
        Feel free to reach out through any of the following channels:
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex items-center justify-center space-x-4">
          <img src="/icons/email.svg" alt="Email" className="h-8 w-8" />
          <a
            href="mailto:nisreensabir@example.com"
            className="text-primary-color hover:underline text-xl"
          >
            nisreensabir@example.com
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
          <a
            href="https://www.linkedin.com/in/nisreensabir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-color hover:underline text-xl"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img src="/icons/github.svg" alt="GitHub" className="h-8 w-8" />
          <a
            href="https://github.com/nisreensabir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-color hover:underline text-xl"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <p className="text-md text-text-color">
        I'm always open to new opportunities and collaborations. Let's build something amazing together!
      </p>
    </section>
  );
}
