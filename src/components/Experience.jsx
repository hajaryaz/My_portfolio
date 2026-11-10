import { EXPERIENCE } from '../data/content'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label reveal">Experience</div>
        <div className={styles.list}>
          {EXPERIENCE.map((x, i) => (
            <article
              key={x.company}
              className={`${styles.item} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.meta}>
                <div className={styles.period}>{x.period}</div>
                <div className={styles.place}>{x.place}</div>
              </div>

              <div className={styles.body}>
                <div className={styles.head}>
                  <div className={styles.logo}>
                    <img src={x.logo} alt={`${x.company} logo`} loading="lazy" />
                  </div>
                  <div>
                    <h3 className={styles.role}>{x.role}</h3>
                    <div className={styles.company}>{x.company}</div>
                  </div>
                </div>

                <ul className={styles.points}>
                  {x.points.map(p => <li key={p}>{p}</li>)}
                </ul>

                <div className={styles.tech}>
                  {x.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
