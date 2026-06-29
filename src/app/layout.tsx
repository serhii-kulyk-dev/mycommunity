import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#ffffff",
};
import { Inter } from "next/font/google";
import "./globals.css";
import { SWRegister } from "@/components/shared/sw-register";
import { ModalProvider } from "@/components/shared/modal-context";
import DemoModal from "@/components/shared/demo-modal";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://mycommunity-erp.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "My Community — Єдина система управління бізнесом",
    template: "%s | My Community",
  },
  description:
    "My Community об'єднує продажі, комунікації, задачі, команди, виробництво, фінанси та аналітику в одному зручному просторі. Без хаосу. Без десятків сервісів.",
  keywords: ["CRM", "ERP", "система управління бізнесом", "CRM Україна", "автоматизація бізнесу", "My Community"],
  authors: [{ name: "My Community" }],
  creator: "My Community",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: BASE_URL,
    siteName: "My Community",
    title: "My Community — Єдина система управління бізнесом",
    description:
      "My Community об'єднує продажі, комунікації, задачі, команди, виробництво, фінанси та аналітику в одному зручному просторі.",
    images: [{ url: "/logo.png", width: 210, height: 36, alt: "My Community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Community — Єдина система управління бізнесом",
    description:
      "My Community об'єднує продажі, комунікації, задачі, команди, виробництво, фінанси та аналітику в одному зручному просторі.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} antialiased`}>
      <body className="min-h-full">
        <ModalProvider>
          {children}
          <DemoModal />
        </ModalProvider>
        <SWRegister />
      </body>
    </html>
  );
}
