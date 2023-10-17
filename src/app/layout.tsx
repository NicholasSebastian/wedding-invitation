import './globals.css';
import AuthProvider from '@/components/authentication';
import MusicProvider from '@/components/music';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Levin and Nicola',
  description: '',
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
      </body>
    </html>
  );
}

export { metadata };
export default Layout;
