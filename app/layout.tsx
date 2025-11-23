import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Agrofolilkimun',
  description: 'Innovación y sustentabilidad para la agricultura del futuro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="light">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* This body structure creates a sticky footer */}
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        {/* The main content area grows to fill available space */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
