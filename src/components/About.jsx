import { STATS } from '../data/content'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className="section-label">About Me</div>
          <p>Hi, I'm Hajar! A 4th-year AI &amp; Digital Transformation engineering student at the <strong>National School of Applied Sciences of Al Hoceima (ENSAH)</strong>.</p>
          <p style={{ marginTop: '1rem' }}>I'm currently strengthening my expertise in deep learning, Java &amp; Spring Boot, and data engineering while building hands-on projects focused on AI, cloud technologies, and scalable data pipelines.</p>
          <div className={styles.focus}>
            <span className={styles.focusHead}>// Current Focus:</span>
            <ul>
              <li>Deep learning &amp; Java/Spring Boot development</li>
              <li>Designing ETL and data pipeline systems</li>
              <li>Applying data engineering concepts to real-world problems</li>
            </ul>
          </div>
        </div>
        <div className={styles.stats}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statCell}>
              <div className={`${styles.statNum} ${s.small ? styles.statSm : ''}`}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
