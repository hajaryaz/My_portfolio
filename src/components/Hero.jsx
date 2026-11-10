import { useTypewriter } from '../hooks'
import styles from './Hero.module.css'

export default function Hero() {
  const typed = useTypewriter([
    'AI & Digital Transformation',
    'GenAI & LLM Apps',
    'Hackathon Winner 🏆',
    'Full-Stack Builder',
  ])
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span>{typed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <h1 className={styles.name}>Hajar<br /><em>Elyazri</em></h1>
        <p className={styles.subtitle}>
          I've always needed to understand how things work, and AI is where that curiosity found its purpose. With AI, you can build real things and adapt them to almost any field, from space to recruitment to air quality.
        </p>
        <div className={styles.status}>
          <span className={styles.dot} />
          Seeking a 6-month PFE internship • Jan 2027 • AI / GenAI / LLMs
        </div>
        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.photoFrame}>
          <img src="/assets/hh1.png" alt="Hajar Elyazri" className={styles.photo}
            onError={e => { e.target.style.opacity = '0' }} />
          <div className={styles.photoOverlay} />
          <div className={styles.initials}>HE</div>
        </div>
        <div className={styles.availBadge}>
          <span className={styles.availDot} />
          AVAILABLE FOR PFE · JAN 2027
        </div>
      </div>
    </section>
  )
}
