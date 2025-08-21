'use client';

import { motion } from 'framer-motion';
import { CodeSlash, Database, Tools } from 'react-bootstrap-icons';
import { FaServer } from 'react-icons/fa';

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
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-foreground mb-12 text-center">My Skills</motion.h2>
      <div className="space-y-10">
        {/* Frontend Skills */}
        <motion.div variants={containerVariants} className="bg-card-background p-6 rounded-lg shadow-lg">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-primary-color mb-6 flex items-center gap-2"><CodeSlash /> Frontend</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">React.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Next.js</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Angular</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Tailwind CSS</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">HTML5</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">CSS3</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">JavaScript</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">TypeScript</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={containerVariants} className="bg-card-background p-6 rounded-lg shadow-lg">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-primary-color mb-6 flex items-center gap-2"><FaServer /> Backend</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Golang</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Java</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Spring Boot</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Database Skills */}
        <motion.div variants={containerVariants} className="bg-card-background p-6 rounded-lg shadow-lg">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-primary-color mb-6 flex items-center gap-2"><Database /> Databases</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">MongoDB</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">PostgreSQL</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Other Tools & Platforms */}
        <motion.div variants={containerVariants} className="bg-card-background p-6 rounded-lg shadow-lg">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-primary-color mb-6 flex items-center gap-2"><Tools /> Tools & Platforms</motion.h3>
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Git</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">Docker</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white shadow-md">
              <span className="text-sm font-medium">AWS</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div >
    </motion.section>
  );
}
