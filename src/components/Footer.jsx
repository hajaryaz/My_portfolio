import { useLang } from '../i18n'
import styles from './Footer.module.css'
export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <span>© 2026 Hajar Elyazri</span>
      <span>{t.footer}</span>
    </footer>
  )
}
