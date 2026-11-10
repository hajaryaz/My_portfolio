import { useState } from 'react'
import { PROJECTS } from '../data/content'
import { useLang } from '../i18n'
import styles from './Projects.module.css'

function ProjectCard({ p, index }) {
  const { t, tr } = useLang()
  const [hovered, setHovered] = useState(false)
  const pipeline = tr(p.pipeline)
  return (
    <div
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.topBar} />
      <div className={styles.header}>
        <div className={styles.num}>{p.num}</div>
        <div className={styles.badges}>
          {p.wip    && <span className={`${styles.badge} ${styles.wip}`}>{t.projects.wip}</span>}
        </div>
      </div>
      <div className={styles.type}>{tr(p.type)}</div>
      <div className={styles.title}>{tr(p.title)}</div>
      <p className={styles.desc}>{tr(p.desc)}</p>

      {/* Pipeline: hidden by default, reveals on hover */}
      <div className={`${styles.pipeline} ${hovered ? styles.pipelineVisible : ''}`}>
        {pipeline.map((step, i) => (
          <span key={i}>
            <span className={styles.step}>{step}</span>
            {i < pipeline.length - 1 && <span className={styles.arrow}>→</span>}
          </span>
        ))}
      </div>

      <div className={styles.tech}>
        {p.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <a href={p.github} className={styles.link} target="_blank" rel="noopener noreferrer">
        {t.projects.github}
      </a>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label reveal">{t.projects.label}</div>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
