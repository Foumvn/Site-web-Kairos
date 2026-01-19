import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { DynamicMetadata } from "@/components/dynamic-metadata";

export const metadata: Metadata = {
  title: "Kairos - Solutions Numériques pour l'Excellence",
  description: "Kairos conçoit et met en œuvre des systèmes d'information numériques complets pour transformer votre organisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <DynamicMetadata />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
