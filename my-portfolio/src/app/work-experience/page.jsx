'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
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
      className="py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Work Experience</motion.h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Work Experience Entry 1 */}
        <motion.div variants={itemVariants} className="bg-card shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-primary-color mb-2">Senior Software Developement Engineer</h3>
          <p className="text-xl text-text-color mb-1">Techdome Solutions - Indore, M.P.</p>
          <p className="text-text-color text-sm mb-4">April 2025 - Present</p>
          <ul className="list-disc list-inside text-text-color space-y-2">
            <li>Contributing to the end-to-end design and development of a full-stack B2B marketplace platform, building scalable backend services and responsive frontend components.</li>
            <li>Developed scalable frontend modules using React, Next.js and Bootstrap, ensuring responsive, user-friendly interfaces.</li>
            <li>Designed and implemented robust RESTful APIs using Java Spring Boot, enabling secure transactions, user authentication, and order workflows.</li>
            <li>Managed backend data using PostgreSQL, optimizing queries and ensuring efficient data flow across services.</li>
            <li>Built dynamic dashboards, and filters to empower real-time analytics and content management.</li>
            <li>Followed agile methodologies, contributing to sprints, code reviews, and CI/CD processes using Github and Jira.</li>
            <li>Focused on system reliability, security, and performance with thorough testing, debugging, and integration practices</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-primary-color mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">React</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Next.js</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Java Spring Boot</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">PostgreSQL</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Tailwind CSS</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">REST API</span>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Entry 2 */}
        <motion.div variants={itemVariants} className="bg-card shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-primary-color mb-2">Senior Systems Engineer</h3>
          <p className="text-xl text-text-color mb-1">Infosys - Indore, M.P.</p>
          <p className="text-text-color text-sm mb-4">July 2021 - December 2024</p>
          <ul className="list-disc list-inside text-text-color space-y-2">
            <li>Contributed towards full-stack development of web-based platform that derives actionable insights from various engineering tools.</li>
            <li>-	Developed key features for the platform with multiple JIRA, SONAR, Github, Gitlab plugins and micro-frontends using Angular & Golang respectively.</li>
            <li>Led full-feature development, including design, REST APIs, frontend and backend implementation, comprehensive testing and delivery; customizing the architectural components to meet client regulations & standards.</li>
            <li>Participated in daily stand-ups and sprint planning, gaining exposure to Agile development methodologies.</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-primary-color mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Golang</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Angular</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Typescript</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">MongoDB</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">GraphQL</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">REST API</span>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Entry 3 */}
        <motion.div variants={itemVariants} className="bg-card shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-primary-color mb-2">Systems Engineer Trainee</h3>
          <p className="text-xl text-text-color mb-1">Infosys - Mysore, KA</p>
          <p className="text-text-color text-sm mb-4">February 2021 - April 2021</p>
          <ul className="list-disc list-inside text-text-color space-y-2">
            <li>Trained in Java, Springboot & Angular.</li>
            <li>Gained hands-on experience of technologies learned as part of training while working on assigned project.</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-primary-color mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Java</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Spring Boot</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">MySQL</span>
              <span className="bg-pill text-pill-text px-3 py-1 rounded-full text-sm shadow-sm">Angular</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
