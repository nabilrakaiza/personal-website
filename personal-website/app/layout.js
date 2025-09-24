import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = { 
  title: "Nabil Rakaiza Abror",
  description: "Nabil Rakaiza Abror's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header /> 
        {children}
      </body>
    </html>
  );
}
