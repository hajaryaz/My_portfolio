import { STATS } from '../data/content'
import { useLang } from '../i18n'
import styles from './About.module.css'

export default function About() {
  const { t, tr } = useLang()
  const a = t.about
  return (
    <section id="about" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className="section-label">{a.label}</div>
          <p>{a.hi}<strong>{a.school}</strong>{a.end}</p>
          <p style={{ marginTop: '1rem' }}>{a.p2}</p>
          <div className={styles.focus}>
            <span className={styles.focusHead}>{a.focusHead}</span>
            <ul>
              {a.focus.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
        <div className={styles.stats}>
          {STATS.map(s => (
            <div key={s.num + tr(s.label)} className={styles.statCell}>
              <div className={`${styles.statNum} ${s.small ? styles.statSm : ''}`}>{tr(s.num)}</div>
              <div className={styles.statLabel}>{tr(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
