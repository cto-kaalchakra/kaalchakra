import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kaalchakra | Celestial Guidance for Modern Lives",
  description: "Modern spiritual guidance for a meaningful life. Personalized insights delivered with care via WhatsApp.",
  icons: {
    icon: "/kaalchakra.svg",
    appleIcon: "/kaalchakra.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-sans antialiased`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#531d2d',
              color: '#f5d9ae',
              border: '2px solid #6d3e8f',
              borderRadius: '8px',
              padding: '16px',
              fontWeight: '500',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#eca345',
                secondary: '#361e50',
              },
              style: {
                background: '#563171',
                color: '#f5d9ae',
                border: '2px solid #eca345',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#eca345',
                secondary: '#923837',
              },
              style: {
                background: '#923837',
                color: '#f5d9ae',
                border: '2px solid #531d2d',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
