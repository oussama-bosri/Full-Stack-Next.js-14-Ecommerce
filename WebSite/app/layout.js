import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_componenets/Header";
import Footer from "./_componenets/Footer";

const inter = Roboto({ subsets: ["latin"], weight:"700"});

export const metadata = {
  title: "Matjar",
  description: "Matjar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
