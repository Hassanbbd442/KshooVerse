
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
  
      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      setStatus('error');
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <section
      id="cta"
      className="w-full px-6 py-20 bg-blue-600 text-white text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto z-10 relative"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join the Future — Now
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Be part of the revolution. Whether you're an innovator, investor, developer, or visionary — 
          the <strong>HbabalduVerse</strong> is open to you.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
          </button>
        </form>

        {message && (
        <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
        )}

        <p className="text-sm mt-4 text-blue-100">
          We'll reach out with early access and partnership opportunities.
        </p>
      </motion.div>

      {/* Background glow or gradient visuals */}
      <div className="absolute top-0 left-1/2 w-[120%] h-[120%] -translate-x-1/2 bg-gradient-to-br from-white/10 to-blue-800 blur-3xl opacity-40"></div>
    </section>
  );
}
