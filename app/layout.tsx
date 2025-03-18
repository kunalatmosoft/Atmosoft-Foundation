import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Initialize Inter font with recommended settings
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
  variable: "--font-inter", // Optional: for custom CSS usage
});

// Metadata for SEO and browser
export const metadata = {
  title: "Atmosoft - Powering the Future of Technology",
  description: "Professional technology solutions for modern businesses",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1", // Ensures proper mobile rendering
  keywords: "technology, business solutions, Atmosoft", // Optional: for SEO
};

// Root Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}