import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import StructuredData from "@/components/common/StructuredData";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamicsictservices.com"),

  title: {
    default: "Dynamics ICT Services",
    template: "%s | Dynamics ICT Services",
  },

  description:
    "Dynamics ICT Services provides enterprise software development, networking, cybersecurity, CCTV installation, cloud computing, solar energy, automation and digital transformation solutions across Nigeria.",

  keywords: [
    "Dynamics ICT Services",
    "ICT Company Nigeria",
    "Software Development",
    "Web Development",
    "Website Design",
    "Cybersecurity",
    "Networking",
    "Cloud Computing",
    "Solar Installation",
    "CCTV Installation",
    "Access Control",
    "Automation",
    "Digital Marketing",
    "UI UX Design",
    "Data Analytics",
    "Enterprise ICT",
  ],

  authors: [
    {
      name: "Dynamics ICT Services",
    },
  ],

  creator: "Dynamics ICT Services",

  publisher: "Dynamics ICT Services",

  applicationName: "Dynamics ICT Services",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dynamics ICT Services",

    description:
      "Enterprise ICT, Software Development, Networking, Cybersecurity, Renewable Energy and Digital Transformation Solutions.",

    url: "https://www.dynamicsictservices.com",

    siteName: "Dynamics ICT Services",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamics ICT Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dynamics ICT Services",

    description:
      "Enterprise ICT, Software Development, Networking, Cybersecurity, Renewable Energy and Digital Transformation Solutions.",

    images: ["/og-image.jpg"],

    creator: "@DynamicsICT",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content="#0B5FFF"
        />

        <meta
          name="color-scheme"
          content="light"
        />
      </head>

      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          min-h-screen
          bg-white
          font-sans
          text-slate-900
          antialiased
        `}
      >
        <StructuredData />

        <ReactQueryProvider>
          {children}

          <ToastProvider />
        </ReactQueryProvider>
      </body>
    </html>
  );
}