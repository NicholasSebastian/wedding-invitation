import './globals.css';
import AuthProvider from '@/components/authentication';
import MusicProvider from '@/components/music';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Levin and Nicola',
  description: 'Nicola the Levantine Bride and Levin the Fitting Prince. Let their love story on the Eastern shore of the Mediterranian Sea begin.',
  openGraph: {
    title: "Levin and Nicola's Wedding",
    description: 'You are invited to the greatest wedding ceremony in the history of mankind.',
    images: ['/landscape3.jpg']
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
      </body>
    </html>
  );
}

export { metadata };
export default Layout;
