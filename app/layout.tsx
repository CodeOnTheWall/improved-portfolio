import "./globals.css";
import { montserrat } from "./fonts";
import NavBar from "./[components]/Header-and-Footer/NavBar";
import Footer from "./[components]/Header-and-Footer/Footer";
import HireMe from "./[components]/Header-and-Footer/HireMe";

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} w-full h-screen bg-gradient-to-r from-purple-400 via-purple-100 bg-purple-300 animate-gradient-xy`}
    >
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
        <NavBar />
        {children}
        <HireMe />
        <Footer />
      </body>
    </html>
  );
}
