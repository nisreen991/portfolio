import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Nisreen Sabir Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}