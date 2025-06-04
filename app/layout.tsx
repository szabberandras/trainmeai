// app/layout.tsx
import './globals.css';
import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';
import LayoutClientWrapper from './components/LayoutClientWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'My Fitness App',
  description: 'Your personal AI-powered fitness companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-gray-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}