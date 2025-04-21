// hbabalduverse/components/Footer.tsx
'use client';

import { Facebook, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Kshoo</h3>
          <p className="text-sm">
            Building tomorrow’s infrastructure — identity, defense, and connectivity — 
            all in one powerful ecosystem.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#hero" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="#vision" className="hover:text-blue-600">Vision</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600">Projects</Link></li>
            <li><Link href="#cta" className="hover:text-blue-600">Join Us</Link></li>
          </ul>
        </div>

        {/* Handles */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/Hassan_babaldu" target="_blank">
              <Twitter className="hover:text-blue-500" />
            </Link>
            <Link href="https://facebook.com/engineer.babaldu" target="_blank">
              <Facebook className="hover:text-blue-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/hbabaldu/" target="_blank">
              <Linkedin className="hover:text-blue-700" />
            </Link>
            <Link href="https://github.com/Hassanbbd442" target="_blank">
              <Github className="hover:text-gray-700" />
            </Link>
            <Link href="https://hbabaldu.com" target="_blank">
              <Globe className="hover:text-green-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Kshoo. All rights reserved.
      </div>
    </footer>
  );
}
