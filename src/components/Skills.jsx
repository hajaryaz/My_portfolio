import { useState } from 'react'
import { TECH_GROUPS, PROOF_CARDS } from '../data/content'
import { useLang } from '../i18n'
import styles from './Skills.module.css'

function TechPill({ item, color }) {
  const { tr } = useLang()
  const name = tr(item.name)
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
        <img src={item.icon} alt={name} width={14} height={14}
          style={item.invert ? { filter: 'invert(1)' } : undefined} />
      )}
      {name}
    </div>
  )
}

function ProofCard({ c }) {
  const { tr } = useLang()
  const title = tr(c.title)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`${styles.proofCard} ${hovered ? styles.proofHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.proofImgWrap}>
        <div className={styles.proofImgs}>
          <img src={c.img} alt={title} className={styles.proofImg} />
          <img src={c.img2 ? c.img2 : c.img} alt={title + ' 2'} className={styles.proofImg} />
        </div>
        <div className={styles.proofImgOverlay} />
      </div>
      <div className={styles.proofBody}>
        <div>
          <div className={styles.proofSkill}>{tr(c.skill)}</div>
          <div className={styles.proofTitle}>{title}</div>
          <div className={styles.proofDesc}>{tr(c.desc)}</div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { t, tr } = useLang()
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label reveal">{t.skills.label}</div>
        <div className={styles.layout}>
          {/* Technical stack */}
          <div className={`${styles.techCol} reveal`}>
            <div className={styles.subtitle}>{t.skills.technical}</div>
            <div className={styles.groups}>
              {TECH_GROUPS.map(g => (
                <div key={g.title.en || g.title}>
                  <div className={styles.groupTitle}>{tr(g.title)}</div>
                  <div className={styles.pillGrid}>
                    {g.items.map(item => (
                      <TechPill key={item.name.en || item.name} item={item} color={g.color} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Human skills */}
          <div className={`${styles.proofCol} reveal`}>
            <div className={styles.subtitle}>{t.skills.human}</div>
            <div className={styles.proofGrid}>
              {PROOF_CARDS.map(c => <ProofCard key={c.img} c={c} />)}
            </div>
            <p className={styles.proofHint}>{t.skills.hint}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
