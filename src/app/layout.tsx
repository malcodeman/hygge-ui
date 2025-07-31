import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "./components/toast";
import { TextLink } from "./components/text-link";
import { NAVIGATION_GROUPS } from "./navigation-groups";
import { Heading } from "./components/heading";
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
                {NAVIGATION_GROUPS.map((link) => (
                  <div key={link.group} className="mb-6">
                    <Heading level={4} className="mb-2">
                      {link.group}
                    </Heading>
                    {link.pages.map((content) => (
                      <li key={content.href}>
                        <TextLink
                          href={content.href}
                          className="flex items-center gap-2"
                        >
                          {"icon" in content ? content.icon : null}
                          {content.label}
                        </TextLink>
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
