import type { Metadata } from 'next';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import Anchors from '@/components/anchors';
import './globals.css';

export const metadata: Metadata = {
  title: '9days.dev',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="">
        <div className="flex flex-col items-center">
          <div className="w-3/5">
            <Header />
            <div className="flex">
              <Navigation />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
