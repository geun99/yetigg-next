import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import { GlobalStyle } from "./style/global";
import ReduxProvider from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yeti.GG",
  description: "메이플랜드 정보 사이트",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <GlobalStyle />
      </head>
      <body className={inter.className}>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
