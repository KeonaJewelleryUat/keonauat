import Header from "./components/Header/header";
import Marquee from "./components/Marquee/marquee";
import "./globals.css";

export const metadata = {
  title: "Keona Jewellery",
  description: "A Next.js Project",
  icons: {
    icon: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Marquee />
        {children}
      </body>
    </html>
  );
}
