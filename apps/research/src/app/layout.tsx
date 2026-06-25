import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

import PlausibleProvider from "next-plausible";

import Script from "next/script";

import "@/styles/main.scss";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

import MediaProvider from "@/providers/MediaProvider"

export const metadata: Metadata = {
  title: SITE.SITE_NAME,
  description: SITE.SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="email=no, telephone=no, address=no"
        />
        {/* This script sets the plausible_ignore flag for Vercel deployments */}
        <Script id="disable-plausible" strategy="beforeInteractive">
          {`
            if (window.location.hostname.endsWith("vercel.app")) {
              localStorage.plausible_ignore = true;
            }
          `}
        </Script>
        {/* End of disable-plausible */}
        <PlausibleProvider />
      </head>
      <body data-theme="light">


             <MediaProvider>
        <Header />
        {children}
        <Footer />
             </MediaProvider>

      </body>
    </html>
  );
}
