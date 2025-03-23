import "./globals.css";
import Navbar from "../Components/Navbar";
export const metadata = {
  title: "Pragye Nawani | Full Stack MERN Web Developer",
  description: "Full Stack MERN Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
