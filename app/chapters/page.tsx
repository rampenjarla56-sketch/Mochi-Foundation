export default function Chapters() {
  return (
    <main>
      <section style={{ background: '#6EC5E9', color: 'white' }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Bring Mochi to Your Community</h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>Mochi was started by students. Now we want to help you do the same in your area.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>What Is a Mochi Chapter?</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A Mochi chapter is a student-led local group that organizes animal-welfare projects, pet-supply drives, fundraisers, and community partnerships.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Chapters operate independently but stay connected to the larger Mochi Foundation mission and values.</p>
          <p style={{ lineHeight: 1.7 }}>You have the freedom to organize projects that make sense for your community.</p>
        </div>
      </section>

      <section style={{ background: '#E5F3E3' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>What You Need</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>✓ Requirements</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['2-3 motivated students', 'Access to your community', 'Willingness to follow Mochi values', 'Commitment to projects', 'Communication skills'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>🌟 You'll Get</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Official Mochi branding', 'Resource templates', 'Team support', 'Connection to other chapters', 'Recognition for impact'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>📋 Your Role</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Follow Mochi guidelines', 'Report on projects', 'Maintain communication', 'Align with our mission', 'Build local partnerships'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>How to Start a Chapter</h2>
          {[
            { num: '1', title: 'Apply', desc: 'Fill out our chapter application and tell us about your vision.' },
            { num: '2', title: 'Build Your Team', desc: 'Find a group of students who want to make a difference.' },
            { num: '3', title: 'Get Approved', desc: 'The Mochi team reviews your application and provides support.' },
            { num: '4', title: 'Create Impact', desc: 'Organize your first projects and build momentum.' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ width: '60px', height: '60px', background: '#6EC5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.5rem', flexShrink: 0 }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#245D75', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: 'white', marginBottom: '1.5rem' }}>Submit your chapter application today.</p>
          <a href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=[YOUR_CHAPTER_FORM_ID]" className="btn" style={{ background: 'white', color: '#245D75' }} target="_blank" rel="noopener noreferrer">
            Apply to Start a Chapter
          </a>
        </div>
      </section>
    </main>
  )
}
