// constants/metadata.ts
import type { Metadata } from "next";




export const siteMetadata: Metadata = {

  title: "Pedro | Buzzvel Test",
  description: "This is a test page for Buzzvel-test, created by Pedro Maciel.",
  openGraph: {
    title: "Pedro | Buzzvel Test",
    description: "Discover Pedro's test page for Buzzvel.",
    url: "https://buzzvel-test-five.vercel.app/pt", 
    type: "website",
    images: [
      {
        url: "/img/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Pedro | Buzzvel Test Image",
      },
    ],
    siteName: "Pedro | Buzzvel Test",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro | Buzzvel Test",
    description: "Discover Pedro's test page for Buzzvel.",
    images: "/img/opengraph-image.png", 
  },

  
};
