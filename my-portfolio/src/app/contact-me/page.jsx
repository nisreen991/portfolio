import { EnvelopeAtFill, Github, Linkedin } from "react-bootstrap-icons";

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
          {/* <img src="/icons/email.svg" alt="Email" className="h-8 w-8" /> */}
          <EnvelopeAtFill className="h-8 w-8" />
          <a
            href="mailto:nisreensabir991@gmail.com"
            className="text-primary-color hover:underline text-xl"
          >
            nisreensabir991@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8" /> */}
          <Linkedin className="h-8 w-8" />
          <a
            href="https://www.linkedin.com/in/nisreen-sabir-6919b2160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-color hover:underline text-xl"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* <img src="/icons/github.svg" alt="GitHub" className="h-8 w-8" /> */}
          <Github className="h-8 w-8" />
          <a
            href="https://github.com/nisreen991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-color hover:underline text-xl"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <a
        href="mailto:nisreensabir991@gmail.com"
        className="px-6 py-3 rounded-lg shadow hover:opacity-90 transition duration-300 text-white inline-block"
        style={{ background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))' }}
      >
        Say Hello
      </a>

      <p className="text-md text-text-color mt-8">
        I'm always open to new opportunities and collaborations. Let's build something amazing together!
      </p>
    </section>
  );
}
