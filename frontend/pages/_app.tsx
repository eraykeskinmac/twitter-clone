import '@/styles/globals.css';

import { Inter, Quicksand } from 'next/font/google';

import type { AppProps } from 'next/app';

import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] });
const quickSand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quickSand.className}>
      <GoogleOAuthProvider clientId="40193654909-40migta2a7s466o7e971dgreqqf8e8t4.apps.googleusercontent.com">
        <Component {...pageProps} />;
      </GoogleOAuthProvider>
    </div>
  );
}
