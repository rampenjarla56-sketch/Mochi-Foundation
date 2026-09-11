export default function GetSupport() {
  return (
    <main>
      <section style={{ background: '#DDF4FB' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>We're Here to Help</h1>
          <p style={{ fontSize: '1.2rem' }}>The Mochi Foundation believes financial challenges should not make it harder to care for a pet you love.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>What We Can Help With</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Pet food', 'Treats', 'Bowls', 'Toys', 'Leashes & collars', 'Bedding'].map((item, i) => (
                  <div key={i} style={{ padding: '1rem', background: '#DDF4FB', borderRadius: '0.5rem' }}>
                    <p style={{ margin: 0 }}>🐾 {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>How It Works</h2>
              {[
                { num: '1', title: 'Submit Request', desc: 'Tell us what you need' },
                { num: '2', title: 'We Review', desc: 'Check available inventory' },
                { num: '3', title: 'Get Support', desc: 'Receive your supplies' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', background: '#6EC5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.25rem' }}>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#E5F3E3' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Request Pet Support</h2>
          <p style={{ marginBottom: '1.5rem' }}>Fill out a request form to tell us what you need. We'll respond as soon as possible.</p>
          <a href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=[YOUR_FORM_ID]" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Open Support Request Form
          </a>
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderLeft: '4px solid #6EC5E9', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '0.9rem', margin: 0 }}><strong>Note:</strong> Support depends on available supplies, geographic location, and current resources. Submitting a request does not guarantee assistance.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Questions?</h2>
          {[
            { q: 'Who can request?', a: 'Anyone who needs help providing pet supplies for their animals can submit a request.' },
            { q: 'How long does it take?', a: 'Response times vary based on demand and inventory. We typically respond within a few business days.' },
            { q: 'What if I need something else?', a: 'Feel free to mention other supplies in your request. We may be able to help!' },
            { q: 'Can I request multiple times?', a: 'Yes, you can request multiple times. If you need ongoing support, let us know.' },
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
