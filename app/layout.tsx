import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Valued News",
  description: "Premium Global News Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* ===== NAVBAR ===== */}
        <header className="navbar">
          <div className="logo">
            <Link href="/">VALUED NEWS</Link>
          </div>

          <nav className="nav-links">
            <Link href="/category/general">General</Link>
            <Link href="/category/business">Business</Link>
            <Link href="/category/technology">Technology</Link>
            <Link href="/category/sports">Sports</Link>
            <Link href="/category/health">Health</Link>
          </nav>
        </header>

        {children}

        {/* ===== FOOTER ===== */}
        <footer className="premium-footer">
          <div className="footer-container">
            
            <div className="footer-brand">
              <h2>VALUED NEWS</h2>
              <p>Trusted global journalism. Fast. Reliable. Independent.</p>
            </div>

            <div className="footer-column">
              <h4>Categories</h4>
              <ul>
                <li><a href="/category/general">General</a></li>
                <li><a href="/category/business">Business</a></li>
                <li><a href="/category/technology">Technology</a></li>
                <li><a href="/category/sports">Sports</a></li>
                <li><a href="/category/health">Health</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Valued News. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
