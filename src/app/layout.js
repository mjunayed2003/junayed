export const revalidate = 0; 
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-quill/dist/quill.snow.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Junayed | Full Stack Developer | Md Junayed",
  description: "Portfolio of Md Junayed, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "junayed", 
    "full stack developer", 
    "md junayed", 
    "frontend developer", 
    "backend developer", 
    "react developer", 
    "next.js developer", 
    "node.js developer", 
    "web developer dhaka", 
    "software engineer", 
    "javascript developer", 
    "MERN stack developer",
    "web designer",
    "freelance developer",
    "nestJS developer",
    "nestjs developer"
  ],
  authors: [{ name: "Md Junayed" }],
  creator: "Md Junayed",
  publisher: "Md Junayed",
  openGraph: {
    title: "Junayed | Full Stack Developer | Md Junayed",
    description: "Portfolio of Md Junayed, a passionate Full Stack Developer. Let's build something amazing together.",
    siteName: "Md Junayed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junayed | Full Stack Developer | Md Junayed",
    description: "Portfolio of Md Junayed, a passionate Full Stack Developer. Let's build something amazing together.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
