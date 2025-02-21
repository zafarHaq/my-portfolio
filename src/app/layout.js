import "./global.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Retro Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
