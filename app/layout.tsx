import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'Glyen - Tech Services & Products',
  description: 'Computer repair, website development, and digital & physical products',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
      </Head>
      <body className="bg-gradient-to-b from-blue-50 to-white text-gray-900">
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}