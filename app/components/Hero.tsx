
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Kshoo</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10">
          A visionary platform by <strong>Hassan Abdullahi (Hbabaldu)</strong> powering transformational systems like
          <span className="text-blue-500 font-semibold"> NovaNet</span>,{' '}
          <span className="text-blue-500 font-semibold">U-ID</span>, and{' '}
          <span className="text-blue-500 font-semibold">WDS</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="#projects">
            <Button className="text-white bg-blue-600 hover:bg-blue-700 transition">
              Explore Innovations
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Partner with Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
