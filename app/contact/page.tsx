export default function Contact() {
  return (
    <main>
      <section style={{ background: '#DDF4FB' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ fontSize: '1.2rem' }}>Have a question? We'd love to hear from you.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Send us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Name</label>
                  <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.75rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email</label>
                  <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.75rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Organization</label>
                  <input type="text" placeholder="(optional)" style={{ width: '100%', padding: '0.75rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Topic</label>
                  <select style={{ width: '100%', padding: '0.75rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem' }}>
                    <option>Select a topic...</option>
                    <option>Partnership</option>
                    <option>Volunteering</option>
                    <option>Chapter</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Message</label>
                  <textarea placeholder="Your message..." rows={6} style={{ width: '100%', padding: '0.75rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem', resize: 'none', fontFamily: 'inherit' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>

            <div>
              <h3 style={{ marginBottom: '2rem' }}>Contact Info</h3>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.25rem' }}>EMAIL</p>
                <a href="mailto:contact@themochifoundation.org" style={{ color: '#6EC5E9', textDecoration: 'none', fontWeight: 600 }}>contact@themochifoundation.org</a>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.25rem' }}>INSTAGRAM</p>
                <a href="https://instagram.com/the_mochifoundation" style={{ color: '#6EC5E9', textDecoration: 'none', fontWeight: 600 }} target="_blank" rel="noopener noreferrer">@the_mochifoundation</a>
              </div>
              <div style={{ padding: '1.5rem', background: '#E5F3E3', borderRadius: '0.5rem', marginTop: '2rem' }}>
                <p style={{ fontSize: '0.9rem', margin: 0 }}><strong>Response Time:</strong> We typically respond within a few business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#F5F5F5' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>FAQs</h2>
          {[
            { q: 'How do I request pet support?', a: 'Visit our Get Support page to submit a request form.' },
            { q: 'How do I start a chapter?', a: 'Go to the Chapters page and apply to start a local chapter.' },
            { q: 'Can I volunteer?', a: 'Yes! Contact us with your volunteer inquiry and we'll get back to you.' },
            { q: 'Is Mochi a 501(c)(3)?', a: 'We are a youth-led community initiative. Contact us for more details.' },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
