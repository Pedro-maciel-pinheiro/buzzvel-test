// constants/metadata.ts
import type { Metadata } from "next";




export const siteMetadata: Metadata = {

  title: "Pedro | Buzzvel Test",
  description: "This is a test page for Buzzvel, created by Pedro Maciel.",
  openGraph: {
    title: "Pedro | Buzzvel Test",
    description: "Discover Pedro's test page for Buzzvel, showcasing expertise in modern web development.",
    url: "https://your-domain.com", 
    type: "website",
    images: [
      {
        url: "public/img/op-image.png", 
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
    description: "Discover Pedro's test page for Buzzvel, showcasing expertise in modern web development.",
    images: "public/img/op-image.png", 
  },

  
};
