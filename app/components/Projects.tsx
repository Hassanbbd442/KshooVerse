// hbabalduverse/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'NovaNet',
    description:
      'An independent communication network that delivers nearly-free internet and calls, empowering millions without reliance on traditional telcos.',
    image: '/images/novanet.png', // Replace with your image paths
    link: '#',
  },
  {
    title: 'U-ID',
    description:
      'A unified digital identity system that consolidates personal identifiers — from NIN to Passport — into one biometrically-secured code.',
    image: '/images/uid.png',
    link: '#',
  },
  {
    title: 'WDS',
    description:
      'The Wearable Defense System — a wrist-based personal security device integrating biometric verification and emergency protection.',
    image: '/images/wds.png',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 py-20 bg-white dark:bg-gray-950 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          Our Innovations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md text-left transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-xl mb-4 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-sm text-blue-500 hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
