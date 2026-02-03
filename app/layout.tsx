"use client";
import { usePathname } from "next/navigation";
import Navbar from "./landingPage/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/signup");

  return (
    <html lang="en">
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
