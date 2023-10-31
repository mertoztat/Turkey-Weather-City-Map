import { Inter } from "next/font/google";
import { Providers } from "@/features/provider";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TURKEY WEATHER MAP",
  description: "Turkey Weather Map With Nextjs, Tailwind Css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#00204a] w-full min-h-screen`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
