import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "CityData",
  description: "Get information about cities around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Header />
        <main className="pt-12 pb-12">{children}</main>
      </body>
    </html>
  );
}
