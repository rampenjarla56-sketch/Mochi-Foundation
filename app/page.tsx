export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'white', paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6EC5E9', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>YOUTH-LED. PET-FOCUSED. COMMUNITY-DRIVEN.</p>
              <h1 style={{ marginBottom: '1.5rem' }}>Helping pets. Supporting people. Strengthening communities.</h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>The Mochi Foundation is a youth-led community initiative working with local businesses, nonprofits, and volunteers to provide pet supplies, organize fundraisers, and support families.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/get-support" className="btn btn-primary">Explore Our Work</a>
                <a href="/chapters" className="btn btn-secondary">Partner With Mochi</a>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(to bottom right, #DDF4FB, #E5F3E3)', aspectRatio: '1', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15252E', textAlign: 'center', padding: '2rem' }}>
              <p>🐕 Hero Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Strip */}
      <section style={{ background: '#DDF4FB', borderTop: '1px solid #6EC5E9', borderBottom: '1px solid #6EC5E9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6EC5E9', margin: '0 0 0.5rem 0' }}>1,000+</p>
              <p style={{ color: '#15252E', fontWeight: 600 }}>Community Members</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6EC5E9', margin: '0 0 0.5rem 0' }}>$10,000+</p>
              <p style={{ color: '#15252E', fontWeight: 600 }}>Raised</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6EC5E9', margin: '0 0 0.5rem 0' }}>[ADD]</p>
              <p style={{ color: '#15252E', fontWeight: 600 }}>Items Donated</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6EC5E9', margin: '0 0 0.5rem 0' }}>[ADD]</p>
              <p style={{ color: '#15252E', fontWeight: 600 }}>Youth Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#E5F3E3' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Built by students who wanted to help.</h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The Mochi Foundation was created by a group of high school students who wanted to make a meaningful difference in their community.</p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>What started as an interest in dogs and pet health grew into a larger effort focused on animal welfare, donation drives, fundraising, and volunteering.</p>
              <p style={{ fontWeight: 600 }}>We believe young people do not have to wait until adulthood to make an impact.</p>
            </div>
            <div style={{ background: 'linear-gradient(to bottom right, #E5F3E3, #DDF4FB)', aspectRatio: '1', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15252E', textAlign: 'center' }}>
              <p>📸 About Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>What We Do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Pet Supply Support', desc: 'Help connect donated pet food and supplies with families in need.' },
              { title: 'Donation Drives', desc: 'Organize community donation drives to collect pet supplies.' },
              { title: 'Community Fundraisers', desc: 'Partner with businesses to raise money for pet-related causes.' },
              { title: 'Youth Volunteering', desc: 'Create opportunities for students to participate in community service.' },
              { title: 'Community Partnerships', desc: 'Collaborate with local organizations and nonprofits.' },
              { title: 'Technology Support', desc: 'Use digital tools to help organizations operate more effectively.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '2px solid #DDF4FB', borderRadius: '0.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#15252E' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Support */}
      <section style={{ background: '#DDF4FB' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Need Help With Pet Supplies?</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>We believe financial challenges should not make it harder to care for a pet. We work to connect donated supplies with families who need them.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {['Pet food', 'Treats', 'Bowls', 'Toys', 'Leashes', 'Bedding'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🐾</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="/get-support" className="btn btn-primary">Request Support</a>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#245D75', fontStyle: 'italic' }}>Support depends on available supplies and geographic location.</p>
        </div>
      </section>

      {/* Start a Chapter */}
      <section style={{ background: '#E5F3E3' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Bring Mochi to Your Community</h2>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Mochi chapters are student-led local groups that organize animal-welfare projects in their communities. Want to start one?</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {[
              { num: '1', title: 'Apply', desc: 'Submit your chapter application' },
              { num: '2', title: 'Build Team', desc: 'Find students who share your passion' },
              { num: '3', title: 'Create Impact', desc: 'Organize projects in your community' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#6EC5E9', marginBottom: '0.5rem' }}>{step.num}</div>
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/chapters" className="btn btn-primary">Start a Chapter</a>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section>
        <div className="container">
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Ways to Help</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Volunteer', 'Start a Chapter', 'Partner With Mochi', 'Donate Supplies', 'Host a Fundraiser'].map((way, i) => (
              <div key={i} style={{ padding: '2rem', background: '#E5F3E3', borderRadius: '0.5rem', borderTop: '3px solid #6EC5E9' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{way}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#245D75', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Make a Difference?</h2>
          <p style={{ color: 'white', marginBottom: '2rem', fontSize: '1.1rem' }}>Join the Mochi community today.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/get-support" className="btn" style={{ background: 'white', color: '#245D75' }}>Get Support</a>
            <a href="/chapters" className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>Start a Chapter</a>
            <a href="/contact" className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}
