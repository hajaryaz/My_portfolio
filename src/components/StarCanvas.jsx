import { useEffect, useRef } from 'react'

export default function StarCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let raf
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      t: Math.random() * Math.PI * 2,
      sp: 0.003 + Math.random() * 0.006,
    }))
    function draw() {
      c.width = window.innerWidth
      c.height = window.innerHeight
      ctx.clearRect(0, 0, c.width, c.height)
      stars.forEach(s => {
        s.t += s.sp
        const a = 0.3 + 0.5 * Math.sin(s.t)
        ctx.beginPath()
        ctx.arc(s.x * c.width, s.y * c.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240,235,250,${a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])
  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
