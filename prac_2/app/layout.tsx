import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], 
  display: 'swap',       
});


export const metadata: Metadata = {
  title: "Dunder Mifflin",
  description: "Dunder Mifflin Company Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased `}
      >
        <main className="w-100% h-screen flex flex-col items-center gap-5">
          <Header/>

          {children}

          <Footer/>
        </main>
        
      </body>
    </html>
  );
}
