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
        {/* Example Work Experience Entry 1 */}
        <motion.div variants={itemVariants} className="bg-card-background shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-primary-color mb-2">Full Stack Developer</h3>
          <p className="text-xl text-text-color mb-1">Tech Solutions Inc. - New York, NY</p>
          <p className="text-text-color text-sm mb-4">January 2022 - Present</p>
          <ul className="list-disc list-inside text-text-color space-y-2">
            <li>Led the development of a real-time analytics dashboard using React and Node.js, improving data visualization by 40%.</li>
            <li>Designed and implemented RESTful APIs with Golang, handling over 10,000 requests per minute with low latency.</li>
            <li>Managed MongoDB databases, optimizing query performance and ensuring data integrity for critical applications.</li>
            <li>Collaborated with product and design teams to translate requirements into technical specifications and deliver high-quality features.</li>
            <li>Mentored junior developers and conducted code reviews, fostering a culture of best practices and continuous improvement.</li>
          </ul>
        </motion.div>

        {/* Example Work Experience Entry 2 */}
        <motion.div variants={itemVariants} className="bg-card-background shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-semibold text-primary-color mb-2">Software Engineer Intern</h3>
          <p className="text-xl text-text-color mb-1">Innovate Corp. - San Francisco, CA</p>
          <p className="text-text-color text-sm mb-4">June 2021 - December 2021</p>
          <ul className="list-disc list-inside text-text-color space-y-2">
            <li>Developed a new feature for their Angular application, improving user engagement by 15%.</li>
            <li>Assisted in the migration of legacy systems to a modern Java Spring Boot microservices architecture.</li>
            <li>Wrote unit and integration tests for new functionalities, contributing to a 20% reduction in reported bugs.</li>
            <li>Participated in daily stand-ups and sprint planning, gaining exposure to Agile development methodologies.</li>
          </ul>
        </motion.div>

      </div>
    </motion.section>
  );
}
