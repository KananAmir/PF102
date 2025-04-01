import "./globals.css";
import Header from "@/components/layout/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        {children}
        <footer>
          I am Footer
        </footer>
      </body>
    </html>
  );
}
