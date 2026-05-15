import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    const addHover = () => cursor.classList.add('hovering')
    const removeHover = () => cursor.classList.remove('hovering')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor" ref={cursorRef} />
}
