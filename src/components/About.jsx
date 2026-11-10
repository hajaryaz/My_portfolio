import { STATS } from '../data/content'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className="section-label">About Me</div>
          <p>Hi, I'm Hajar! A final-year (5th-year) AI &amp; Digital Transformation engineering student at the <strong>National School of Applied Sciences of Al Hoceima (ENSAH)</strong>.</p>
          <p style={{ marginTop: '1rem' }}>I build AI-powered applications end to end, from LLM integration and data pipelines to full-stack web development, through internships, academic projects and hackathons.</p>
          <div className={styles.focus}>
            <span className={styles.focusHead}>// Current Focus:</span>
            <ul>
              <li>LLMs &amp; Generative AI applications</li>
              <li>RAG systems and AI agents</li>
              <li>Data pipelines that feed AI products</li>
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
