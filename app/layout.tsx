import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "证书核验教学演示",
  description: "非官方、非真实核验系统的教学演示页面。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
