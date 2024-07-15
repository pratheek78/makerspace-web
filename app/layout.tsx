import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CFAL MakerSpace",
  description: "At the CFAL Makerspace, students can dive into diverse projects spanning electronics, robotics, woodworking, 3D printing, and more. Whether tackling personal projects, academic work, or extracurricular activities, the makerspace provides a nurturing environment where ideas can thrive and practical skills are honed. Emphasizing collaborative learning, CFAL Makerspace allows students to work with peers, receive mentor guidance, and join workshops and events that foster innovation and problem-solving. By promoting exploration and experimentation, the makerspace cultivates curiosity and hands-on discovery, preparing students for academic success and future STEM careers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
