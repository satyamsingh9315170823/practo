import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "MediCare+ | Online Doctor Consultation Platform",
    template: "%s | MediCare+"
  },

  description:
    "Book doctor appointments, consult specialists online, order medicines, and manage health records securely with MediCare+ healthcare platform.",

  keywords:[
    "healthcare platform",
    "doctor booking",
    "telemedicine",
    "practo clone",
    "online consultation"
  ],

  authors:[
    {
      name:"MediCare+"
    }
  ],

  creator:"MediCare+",
  publisher:"MediCare+",

  category:"Healthcare",

  robots:{
    index:true,
    follow:true,
    googleBot:{
      index:true,
      follow:true,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1
    }
  },

  alternates:{
    canonical:"/"
  },

  icons:{
    icon:"/favicon.ico",
    shortcut:"/favicon.ico",
    apple:"/apple-icon.png"
  },

  manifest:"/site.webmanifest",

  openGraph:{
    title:"MediCare+ Healthcare Platform",

    description:
    "Smart healthcare platform for booking doctors and managing your health.",

    url:"/",

    siteName:"MediCare+",

    images:[
      {
        url:"/og-image.png",
        width:1200,
        height:630,
        alt:"MediCare+"
      }
    ],

    locale:"en_US",

    type:"website"
  },

  twitter:{
    card:"summary_large_image",

    title:"MediCare+",

    description:"Book doctors online instantly",

    images:["/og-image.png"]
  }

};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}