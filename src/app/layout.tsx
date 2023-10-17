import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import AuthProvider from '@/components/authentication';
import MusicProvider from '@/components/music';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Levin and Nicola',
  description: 'Levin and Nicola invites you to share the joy when they exchange marriage vows and begin their new life together...',
  openGraph: {
    title: "The Wedding of Levin and Nicola",
    description: 'It is our pleasure to invite you to share the joy when we exchange marriage vows and begin our new life together...',
    images: ['/og-image.jpg']
  }
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AuthProvider>
          <MusicProvider>
            {children}
          </MusicProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}

export { metadata };
export default Layout;
