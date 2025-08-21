'use client';

import { motion } from 'framer-motion';

export default function Interests() {
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
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-foreground mb-12 text-center">My Interests</motion.h2>
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example Interest 1 */}
        <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-md flex items-start space-x-4">
          <img src="/icons/reading.png" alt="Reading" className="h-10 w-10 text-primary-color" />
          <div>
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Reading & Learning</h3>
            <p className="text-text-color">
              I love delving into non-fiction books, especially those on technology, history, and personal development.
              Staying updated with the latest trends and deepening my knowledge across various domains is a constant pursuit.
            </p>
          </div>
        </motion.div>

        {/* Example Interest 2 */}
        <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-md flex items-start space-x-4">
          <img src="/icons/hiking.png" alt="Hiking" className="h-10 w-10 text-primary-color" />
          <div>
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Hiking & Outdoors</h3>
            <p className="text-text-color">
              Exploring nature through hiking and spending time outdoors helps me clear my mind and recharge.
              It's a perfect balance to the analytical demands of software development.
            </p>
          </div>
        </motion.div>

        {/* Example Interest 3 */}
        <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-md flex items-start space-x-4">
          <img src="/icons/camera.png" alt="Photography" className="h-10 w-10 text-primary-color" />
          <div>
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Photography</h3>
            <p className="text-text-color">
              Photography is a creative outlet where I enjoy capturing moments and perspectives.
              It allows me to see the world from different angles and appreciate its beauty.
            </p>
          </div>
        </motion.div>

        {/* Example Interest 4 */}
        <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-md flex items-start space-x-4">
          <img src="/icons/cooking.png" alt="Cooking" className="h-10 w-10 text-primary-color" />
          <div>
            <h3 className="text-2xl font-semibold text-primary-color mb-2">Cooking & Culinary Arts</h3>
            <p className="text-text-color">
              Experimenting with new recipes and exploring different cuisines is something I truly enjoy.
              It's a delightful way to unwind and share experiences with friends and family.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
