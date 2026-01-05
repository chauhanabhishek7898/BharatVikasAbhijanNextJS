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
      <body className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col">
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
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

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
//     <html lang="en">
//       <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-grow pt-20">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Bharat Bikas Abhijan - Empowering Communities',
//   description: 'Join the movement for national development and community empowerment',
//   keywords: ['Bharat Bikas Abhijan', 'community development', 'social empowerment', 'India development'],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-grow pt-20">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }