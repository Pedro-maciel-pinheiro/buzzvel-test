import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NavigationBar } from "@/components/navigation/navigation";
import ActiveSectionProvider from "@/context/active-section-context";

const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro | Buzzvel test",
  description: "my test",
};

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
          </NextIntlClientProvider>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
