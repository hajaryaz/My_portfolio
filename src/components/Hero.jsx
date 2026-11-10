import { useTypewriter } from '../hooks'
import { useLang } from '../i18n'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const typed = useTypewriter(t.hero.typed)
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span>{typed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <h1 className={styles.name}>Hajar<br /><em>Elyazri</em></h1>
        <p className={styles.subtitle}>
          {t.hero.subtitle}
        </p>
        <div className={styles.status}>
          <span className={styles.dot} />
          {t.hero.status}
        </div>
        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary">{t.hero.viewProjects}</a>
          <a href="#contact" className="btn-ghost">{t.hero.getInTouch}</a>
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
          {t.hero.badge}
        </div>
      </div>
    </section>
  )
}
