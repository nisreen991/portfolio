'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 mb-8 text-center">About Me</motion.h2>
      <motion.div variants={containerVariants} className="text-lg text-gray-700 leading-relaxed space-y-6">
        <motion.p variants={itemVariants}>
          Hello! I'm Nisreen, a passionate Full Stack Developer with 3.5 years of experience crafting robust and scalable web applications.
          My journey in software development has been driven by a curiosity for how things work and a desire to build solutions that make a real impact.
        </motion.p>
        <motion.p variants={itemVariants}>
          I specialize in bringing ideas to life across the entire stack, from dynamic frontends with <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, and <span className="font-semibold text-blue-600">Angular</span>,
          to powerful backends built with <span className="font-semibold text-blue-600">Golang</span> and <span className="font-semibold text-blue-600">Java Spring Boot</span>. I'm also proficient in database management with <span className="font-semibold text-blue-600">MongoDB</span> and <span className="font-semibold text-blue-600">PostgreSQL</span>.
        </motion.p>
        <motion.p variants={itemVariants}>
          I thrive in environments where I can continuously learn and apply new technologies to solve complex problems.
          My focus is always on writing clean, efficient, and maintainable code, while also ensuring a smooth and intuitive user experience.
        </motion.p>
        <motion.p variants={itemVariants}>
          Outside of coding, I enjoy [mention a couple of interests, e.g., hiking, reading, photography] which help me stay creative and bring a fresh perspective to my work.
          I'm always open to new challenges and collaborations. Feel free to explore my projects or get in touch!
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
