import "./globals.css";
import { montserrat } from "./fonts";

// Components
import NavBar from "./[components]/Header-and-Footer/NavBar";
import Footer from "./[components]/Header-and-Footer/Footer";
import HireMe from "./[components]/Header-and-Footer/HireMe";

// Providers
import Providers from "./providers/providers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${montserrat.className} `}>
      <body className="w-full h-screen bg-gradient-to-r from-purple-400 via-purple-100 bg-purple-300 animate-gradient-xy">
        <Providers>
          <NavBar />
          {children}
          <HireMe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
