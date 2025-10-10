import { Geist, Geist_Mono, Bruno_Ace_SC, Bruno_Ace, Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import AudioManager from "./components/AudioManager";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LayoutWrapper from "./components/LayoutWrapper";
import ShaderWrapper from "./ui/ShaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brunoAceSC = Bruno_Ace_SC({
  variable: "--font-bruno-ace-sc",
  subsets: ["latin"],
  weight: "400",
});

const brunoAce = Bruno_Ace({
  variable: "--font-bruno-ace",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const centuryGothic = localFont({
  src: [
    {
      path: '../public/fonts/Century Gothic.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-century-gothic',
  fallback: ['Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
});

export const metadata = {
  title: "Collective AEC",
  description: "Design More, Manage Less",
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
    other: [
      { rel: 'android-chrome', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome', url: '/favicon/android-chrome-512x512.png' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="facebook-domain-verification" content="ett5x35wy1mymnw748tdl158fc7n1e" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </head>
      <body className={`${geistSans.variable} bg-white ${geistMono.variable} ${brunoAceSC.variable} ${brunoAce.variable} ${centuryGothic.variable} ${poppins.variable}`}>
        <ShaderWrapper />
        {/* <CustomCursor /> */}
        <AudioManager />
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
