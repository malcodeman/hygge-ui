import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/toast";
import { NavLink } from "@/components/nav-link";
import { Heading } from "@/components/heading";
import { NAVIGATION_GROUPS } from "./navigation-groups";
import { Header } from "./components/header";
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
    <html className="overscroll-y-none" lang="en" suppressHydrationWarning>
      <body className={`bg-[#fdfdfc] dark:bg-[#111110] ${inter.className}`}>
        <ThemeProvider>
          <Header />
          <div className="mx-auto max-w-6xl px-8">
            <aside className="fixed top-[65px] bottom-0 hidden w-2xs overflow-y-auto py-8 lg:block">
              <ul>
                {NAVIGATION_GROUPS.map((link) => (
                  <div key={link.group} className="mb-6">
                    <Heading level={5} size="sm" className="mb-2">
                      {link.group}
                    </Heading>
                    {link.pages.map((content) => (
                      <li key={content.href}>
                        <NavLink
                          href={content.href}
                          className="flex items-center gap-2"
                        >
                          {"icon" in content ? content.icon : null}
                          {content.label}
                        </NavLink>
                      </li>
                    ))}
                  </div>
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
