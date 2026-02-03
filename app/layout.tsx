import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brittiSans = localFont({
  src: [
    {
      path: "./fonts/BrittiSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/BrittiSans-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/BrittiSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BrittiSans-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/BrittiSans-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/BrittiSans-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/BrittiSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/BrittiSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-britti-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Dinn - Inteligência de Dados para Farmácias",
    template: "%s | Dinn"
  },
  description: "Transforme dados em decisões estratégicas para sua farmácia. Gestão de estoque, monitoramento de preços, localização de produtos e muito mais.",
  keywords: ["farmácia", "gestão de estoque", "monitoramento de preços", "inteligência de dados", "dinn"],
  authors: [{ name: "DiWE Ventures Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dinn.com.br",
    siteName: "Dinn",
    title: "Dinn - Inteligência de Dados para Farmácias",
    description: "Transforme dados em decisões estratégicas para sua farmácia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinn - Inteligência de Dados para Farmácias",
    description: "Transforme dados em decisões estratégicas para sua farmácia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={brittiSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dinn",
              "description": "Inteligência de Dados para Farmácias",
              "url": "https://dinn.com.br",
              "logo": "https://dinn.com.br/logo.png",
              "foundingDate": "2023",
              "founders": [{
                "@type": "Organization",
                "name": "DiWE Ventures Studio"
              }]
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
