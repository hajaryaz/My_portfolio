import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/content'
import { useLang } from '../i18n'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>H.Elyazri</div>
      <div className={styles.right}>
        <ul className={styles.links}>
          {NAV_LINKS.map(id => (
            <li key={id}><a href={`#${id}`}>{t.nav[id]}</a></li>
          ))}
        </ul>
        <div className={styles.lang} role="group" aria-label={t.switchTo}>
          {['en', 'fr'].map(l => (
            <button
              key={l}
              type="button"
              className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
