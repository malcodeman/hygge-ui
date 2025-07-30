import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "./components/toast";
import { TextLink } from "./components/text-link";
import { SIDEBAR_LINKS } from "./sidebar-links";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#fdfdfc] dark:bg-[#111110] ${inter.className}`}>
        <ThemeProvider>
          <div className="mx-auto max-w-6xl px-8">
            <aside className="fixed top-0 bottom-0 hidden w-2xs overflow-auto py-8 lg:block">
              <ul>
                {SIDEBAR_LINKS.map((link) => (
                  <li key={link.href}>
                    <TextLink
                      href={link.href}
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </aside>
            <main className="py-8 lg:pl-72">{children}</main>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
