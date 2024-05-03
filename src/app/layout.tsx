import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

export const metadata: Metadata = {
  title: "SurabayaDev",
  description: "Komunitas IT arek Suroboyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />

        <div className="min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
