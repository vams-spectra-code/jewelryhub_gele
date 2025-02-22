import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"], // Choose weights you need
  style: ["normal"],
  display: "swap",
});

export const metadata = {
  title: "Jewelryhub Gele",
  description:
    "We train and style excellently realistic ready to wear (auto) geles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
