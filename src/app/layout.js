import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/themecontext";
import ThemeSetter from "@/components/ThemeSetter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Julius Asher P. Austria Portfolio",
  description: "Hi! I am Julius Asher P. Austria, feel free to explore my works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemeSetter />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
