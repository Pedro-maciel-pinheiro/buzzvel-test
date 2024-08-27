import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NavigationBar } from "@/components/navigation/navigation";
import ActiveSectionProvider from "@/context/active-section-context";
import Footer from "@/components/footer/footer";
import { siteMetadata } from "@/constants/open-graph";


const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata
 

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`bg-black ${anek.className}`}>
        <ActiveSectionProvider>
          <NextIntlClientProvider messages={messages}>
            <NavigationBar />
            {children}
            <Footer/>
          </NextIntlClientProvider>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
