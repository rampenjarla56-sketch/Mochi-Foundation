import './globals.css'

export const metadata = {
  title: 'The Mochi Foundation',
  description: 'Youth-led pet support and community initiatives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ background: 'white', borderBottom: '1px solid #DDF4FB', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', color: '#245D75', margin: 0 }}>MOCHI 🐾</h1>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#15252E' }}>Home</a>
              <a href="/get-support" style={{ textDecoration: 'none', color: '#15252E' }}>Get Support</a>
              <a href="/chapters" style={{ textDecoration: 'none', color: '#15252E' }}>Chapters</a>
              <a href="/contact" style={{ textDecoration: 'none', color: '#15252E' }}>Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer style={{ background: '#245D75', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p>&copy; 2024 The Mochi Foundation</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Youth-led. Pet-focused. Community-driven.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
