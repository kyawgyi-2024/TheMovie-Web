import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Meta />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
