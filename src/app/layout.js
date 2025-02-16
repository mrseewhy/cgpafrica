import { Mulish, Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({
  subsets: ['latin'], // You can specify subsets here
  weight: ['400', '700'], // Add weights as per your design needs
  variable: '--font-mulish', // Optional: Add a custom variable name
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  // General SEO Metadata
  title: "Capricon Global Properties | Home",
  description: "Capricorn Global Properties, your trusted partner for luxurious yet affordable homes. Experience the art of living with with us. ",
  keywords: "real estate, properties, global, Capricon, buy, rent",
  author: "Capricon Global Properties",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonical: "https://cgpafrica.com",
  language: "en",

  // Open Graph Metadata
  "og:title": "Capricon Global Properties",
  "og:description": "Capricorn Global Properties, your trusted partner for luxurious yet affordable homes. Experience the art of living with with us. ",
  "og:image": "https://cgpafrica.com/images/favicon.png",
  "og:url": "https://cgpafrica.com",
  "og:type": "website",
  "og:site_name": "Capricon Global Properties",
  "og:locale": "en_US",

  // Twitter Card Metadata
  "twitter:card": "summary_large_image",
  "twitter:title": "Capricon Global Properties",
  "twitter:description": "Capricorn Global Properties, your trusted partner for luxurious yet affordable homes. Experience the art of living with with us. ",
  "twitter:image": "https://cgpafrica.com/images/favicon.png",
  "twitter:domain": "cgpafrica.com",

 

  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Capricon Global Properties",
    "url": "https://cgpafrica.com",
    "description": "Capricorn Global Properties, your trusted partner for luxurious yet affordable homes. Experience the art of living with with us.",
    "telephone": "+1234567890"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= {`${mulish.variable} ${poppins.className}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
