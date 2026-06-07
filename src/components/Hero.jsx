import { useTypewriter } from '../hooks'
import styles from './Hero.module.css'

export default function Hero() {
  const typed = useTypewriter([
    'AI & Digital Transformation',
    'Data Engineer in Progress',
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
          Driven by curiosity about AI, data engineering, and software development, I enjoy collaborating to transform ideas into practical solutions while continuously learning through projects, hackathons, and teamwork.
        </p>
        <div className={styles.status}>
          <span className={styles.dot} />
          Open to Internships • AI • Data Engineering • Software Development
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
          AVAILABLE FOR COLLABORATION
        </div>
      </div>
    </section>
  )
}
