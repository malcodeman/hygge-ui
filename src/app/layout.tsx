import type { Metadata } from "next";
import { Toaster } from "./components/toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
