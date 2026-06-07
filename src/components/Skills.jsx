import { useState } from 'react'
import { TECH_GROUPS, PROOF_CARDS } from '../data/content'
import styles from './Skills.module.css'

function TechPill({ item, color }) {
  return (
    <div className={`${styles.pill} ${color ? styles[color] : ''}`}>
      {item.svg && !item.bi ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#9280c0" strokeWidth="1.5" />
          <path d="M8 12h8M12 8v8" stroke="#9280c0" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : item.bi ? (
        <span style={{ fontSize: '12px' }}>📊</span>
      ) : (
        <img src={item.icon} alt={item.name} width={14} height={14} />
      )}
      {item.name}
    </div>
  )
}

function ProofCard({ c }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`${styles.proofCard} ${hovered ? styles.proofHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.proofImgWrap}>
        <div className={styles.proofImgs}>
          <img src={c.img} alt={c.title} className={styles.proofImg} />
          <img src={c.img2 ? c.img2 : c.img} alt={c.title + ' 2'} className={styles.proofImg} />
        </div>
        <div className={styles.proofImgOverlay} />
      </div>
      <div className={styles.proofBody}>
        <div>
          <div className={styles.proofSkill}>{c.skill}</div>
          <div className={styles.proofTitle}>{c.title}</div>
          <div className={styles.proofDesc}>{c.desc}</div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label reveal">Skills</div>
        <div className={styles.layout}>
          {/* Technical stack */}
          <div className="reveal">
            <div className={styles.subtitle}>Technical Stack</div>
            <div className={styles.groups}>
              {TECH_GROUPS.map(g => (
                <div key={g.title}>
                  <div className={styles.groupTitle}>{g.title}</div>
                  <div className={styles.pillGrid}>
                    {g.items.map(item => (
                      <TechPill key={item.name} item={item} color={g.color} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Human skills */}
          <div className="reveal">
            <div className={styles.subtitle}>Human Skills — proven in action</div>
            <div className={styles.proofGrid}>
              {PROOF_CARDS.map(c => <ProofCard key={c.title} c={c} />)}
            </div>
            <p className={styles.proofHint}>→ hover each card to reveal the moment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
