import { Footer, Navbar, Setup } from "@/components";
import "@/styles/globals.css";
import Provider from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Spinner from "@/components/common/Spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
