import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { MockAuthProvider } from "@/utils/mockAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovate AI Robotics",
  description: "Empowering the next generation through AI and robotics education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MockAuthProvider>
          <Navigation />
          {children}
        </MockAuthProvider>
      </body>
    </html>
  );
} 