import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
