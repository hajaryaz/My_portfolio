import { createContext, useContext, useEffect, useState } from 'react'
import { UI } from './data/ui'

const STORAGE_KEY = 'portfolio-lang'
const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
  } catch { /* storage unavailable */ }
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
  }, [lang])

  // Picks the right language from a { en, fr } value; plain values pass through.
  const tr = v =>
    v && typeof v === 'object' && !Array.isArray(v) && 'en' in v ? v[lang] : v

  return (
    <LangContext.Provider value={{ lang, setLang, t: UI[lang], tr }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
