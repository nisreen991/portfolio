'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m Nisreen 👋
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700">
          Software Engineer specializing in Golang, React, and Next.js, Angular, Java Springboot, MongoDB, and PostgreSQL.
        </p>
        <a href="/projects" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}
