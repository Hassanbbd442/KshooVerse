// hbabalduverse/components/Vision.tsx
'use client';

import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section
      id="vision"
      className="w-full px-6 py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Our Vision
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>HbabalduVerse</strong> is more than a platform — it’s a movement. 
          We're building a self-sustaining digital ecosystem where bold ideas thrive, 
          innovation shapes society, and sovereignty is powered by technology.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Empower</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We empower individuals to take control of their identity, communication, and future
              through sovereign technology.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-600">Connect</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bridging the digital divide with platforms like <strong>NovaNet</strong> that make internet and voice access universal.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Innovate</h3>
            <p className="text-gray-700 dark:text-gray-300">
              From <strong>U-ID</strong> to the <strong>Wearable Defense System</strong>, we create solutions that solve real problems and redefine infrastructure.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
