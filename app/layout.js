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
        <img
          className="flex absolute min-h-full min-w-full"
          style={{
            backgroundImage: 'url("/skyline.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5) blur(2px)",
          }}
        />
        <main className="z-10 flex absolute min-h-full min-w-full items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
