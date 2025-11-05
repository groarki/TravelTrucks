import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import ReactClientProvider from "@/lib/services/ReactClientProvider";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export const metadata: Metadata = {
  title: "Travel Truck",
  description: "Aplication for campers renting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactClientProvider>
        <body className={`${InterSans.variable}`}>
          <Header/>
            <main>
              {children}
            </main>
        </body>
      </ReactClientProvider>
    </html>
  );
};
