import { Outfit, Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({  // Font #1
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ovo = Ovo({   // Font #2
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {      // Tab name
  title: "Portfolio Website",
  description: "A prohect to learn Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
