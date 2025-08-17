'use client';

import { motion } from 'framer-motion';

export default function Skills() {
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
      <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 mb-12 text-center">My Skills</motion.h2>
      <div className="space-y-10">
        {/* Frontend Skills */}
        <motion.div variants={containerVariants}>
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-600 mb-6">Frontend</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/react.svg" alt="React" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">React.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/nextjs.svg" alt="Next.js" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Next.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/angular.svg" alt="Angular" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Angular</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/tailwind.svg" alt="Tailwind CSS" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Tailwind CSS</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/html.svg" alt="HTML5" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">HTML5</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/css.svg" alt="CSS3" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">CSS3</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/javascript.svg" alt="JavaScript" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">JavaScript</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/typescript.svg" alt="TypeScript" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">TypeScript</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={containerVariants}>
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-600 mb-6">Backend</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/golang.svg" alt="Golang" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Golang</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/java.svg" alt="Java" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Java</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/springboot.svg" alt="Spring Boot" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Spring Boot</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Database Skills */}
        <motion.div variants={containerVariants}>
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-600 mb-6">Databases</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/mongodb.svg" alt="MongoDB" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">MongoDB</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/postgresql.svg" alt="PostgreSQL" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">PostgreSQL</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Other Tools & Platforms */}
        <motion.div variants={containerVariants}>
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-600 mb-6">Tools & Platforms</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/git.svg" alt="Git" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Git</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/docker.svg" alt="Docker" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">Docker</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <img src="/icons/aws.svg" alt="AWS" className="h-8 w-8" />
              <span className="text-lg text-gray-800 font-medium">AWS</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div >
    </motion.section>
  );
}
