import type { Metadata } from 'next';
import { Inter, Great_Vibes } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-signature',
});

export const metadata: Metadata = {
  title: 'Bharat Bikash Abhijan - Empowering Communities',
  description: 'Join the movement for national development and community empowerment',
  keywords: ['Bharat Bikash Abhijan', 'community development', 'social empowerment', 'India development'],
  openGraph: {
    title: 'Bharat Bikash Abhijan - Empowering Communities',
    description: 'Join Bharat Bikash Abhijan for national development, community empowerment and social welfare initiatives across India.',
    url: 'https://www.bbaindia.in',
    siteName: 'Bharat Bikash Abhijan',
    images: [
      {
        url: '/bva_logo.jpeg', // या आपका OG इमेज URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN', // या 'hi_IN' अगर हिंदी प्राथमिक
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Bikash Abhijan',
    description: '...',
    images: ['/bva_logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${greatVibes.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Odia:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-saffron-50 via-white-50 to-green-50 min-h-screen flex flex-col">
        {/* Tiranga Color Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-r from-saffron-500/5 via-white/5 to-green-500/5 -z-10" />
        
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// import type { Metadata } from 'next';
// import { Inter, Great_Vibes } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });
// const greatVibes = Great_Vibes({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-signature',
// });

// export const metadata: Metadata = {
//   title: 'Bharat Bikash Abhijan - Empowering Communities',
//   description: 'Join the movement for national development and community empowerment',
//   keywords: ['Bharat Bikash Abhijan', 'community development', 'social empowerment', 'India development'],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${inter.className} ${greatVibes.variable}`}>
//       <head>
//         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Odia:wght@400;500;600;700&display=swap" rel="stylesheet" />
//       </head>
//       <body className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow pt-20">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
