import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bugattiDisplay = Bebas_Neue({
  variable: "--font-bugatti-display",
  subsets: ["latin"],
  weight: ["400"],
});

const bugattiMono = Space_Mono({
  variable: "--font-bugatti-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const bugattiText = DM_Sans({
  variable: "--font-bugatti-text",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AnbiDev | AI Builder Hub",
  description: "AnbiDev is an AI-first learning and builder hub for Indonesian creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bugattiDisplay.variable} ${bugattiMono.variable} ${bugattiText.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('anbidev-theme');document.documentElement.dataset.theme=(t==='light'?'light':'dark');}catch(e){document.documentElement.dataset.theme='dark';}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
