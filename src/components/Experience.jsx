import { EXPERIENCE } from '../data/content'
import { useLang } from '../i18n'
import styles from './Experience.module.css'

export default function Experience() {
  const { t, tr } = useLang()
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label reveal">{t.experience.label}</div>
        <div className={styles.list}>
          {EXPERIENCE.map((x, i) => (
            <article
              key={x.company}
              className={`${styles.item} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.meta}>
                <div className={styles.period}>{tr(x.period)}</div>
                <div className={styles.place}>{tr(x.place)}</div>
              </div>

              <div className={styles.body}>
                <div className={styles.head}>
                  <div className={styles.logo}>
                    <img src={x.logo} alt={`${x.company} logo`} loading="lazy" />
                  </div>
                  <div>
                    <h3 className={styles.role}>{tr(x.role)}</h3>
                    <div className={styles.company}>{x.company}</div>
                  </div>
                </div>

                <ul className={styles.points}>
                  {tr(x.points).map(p => <li key={p}>{p}</li>)}
                </ul>

                <div className={styles.tech}>
                  {tr(x.tech).map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
