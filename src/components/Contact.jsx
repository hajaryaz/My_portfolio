import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const mailto = `mailto:hajarelyazri10@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={`${styles.intro} reveal`}>
          <div className="section-label">Contact</div>
          <p className={styles.badge} style={{ marginTop: '1.25rem' }}>
            <span className={styles.tag}>&lt;</span>GET_IN_TOUCH<span className={styles.tag}> /&gt;</span>
          </p>
          <p className={styles.blurb} style={{ marginTop: '.75rem' }}>
            Open to collaboration, hackathons, and technical challenges — feel free to reach out.
          </p>
          <p className={styles.blurb}>
            Currently seeking an internship in AI, data engineering, or web development.
          </p>

          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/elyazrihajar" className={styles.link} target="_blank" rel="noopener noreferrer">
              <em className={styles.icon}>in</em> linkedin.com/in/elyazrihajar
            </a>
            <a href="mailto:hajarelyazri10@gmail.com" className={styles.link}>
              <em className={styles.icon}>@</em> hajarelyazri10@gmail.com
            </a>
            <a href="https://github.com/hajaryaz" className={styles.link} target="_blank" rel="noopener noreferrer">
              <em className={styles.icon}>gh</em> github.com/hajaryaz
            </a>
          </div>

          <div className={styles.locationBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Fès, Morocco · Available for internship &amp; full-time · Remote OK
          </div>
        </div>

        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} placeholder="Your name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" placeholder="your@email.com" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea}
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className={styles.submit}>
            {sent ? '✓ Opening Mail...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}
