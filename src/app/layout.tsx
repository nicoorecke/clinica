import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Clínica Serena | Medicina Integral",
  description: "Cuidado médico integral con un enfoque humano y personalizado. Especialistas comprometidos con tu bienestar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}