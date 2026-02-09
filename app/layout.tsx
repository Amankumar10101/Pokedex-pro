// "use client";
// import { usePathname } from "next/navigation";
// import Navbar from "./landingPage/Navbar";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   const hideNavbar =
//     pathname.startsWith("/auth/login") ||
//     pathname.startsWith("/auth/signup") || 
//     pathname.startsWith("/dashboard");

//   return (
//     <html lang="en">
//       <body>
//         {!hideNavbar && <Navbar />}
//         {children}
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html>
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}

