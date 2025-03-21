import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#fdfdfc] dark:bg-[#111110]">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
