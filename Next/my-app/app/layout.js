import "./globals.css";
import Header from "@/components/layout/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        <div className="container mx-auto">
         {children}
        </div>
        <footer  className='container mx-auto'>
          I am Footer
        </footer>
      </body>
    </html>
  );
}
