
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from './components/ThemeProvider'; // Optional: for dark/light mode toggle
// import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HbabalduVerse – Build. Innovate. Influence.',
  description: 'A visionary hub by Hassan Abdullahi (Hbabaldu) to empower ideas, systems, and people through transformative technologies.',
  keywords: [
    'Hbabaldu',
    'HbabalduVerse',
    'NovaNet',
    'U-ID',
    'WDS',
    'Next.js',
    'Innovative Platform',
    'Visionary',
    'Nigeria Tech Future',
  ],
  authors: [{ name: 'Hassan Abdullahi', url: 'https://hbabaldu.com' }],
  creator: 'Hbabaldu',
  metadataBase: new URL('https://hbabaldu.com'),
  openGraph: {
    title: 'HbabalduVerse',
    description: 'Where innovation meets transformation.',
    url: 'https://hbabaldu.com',
    siteName: 'HbabalduVerse',
    images: [
      {
        url: 'https://tenor.com/bMLNT.gif',
        width: 800,
        height: 600,
        alt: 'HbabalduVerse Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <main className="min-h-screen flex flex-col">
            {children}
            {/* <Footer /> */}
          </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
