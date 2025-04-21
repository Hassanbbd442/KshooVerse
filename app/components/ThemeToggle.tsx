
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   return (
//     <button
//       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//       className="absolute top-4 right-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition"
//     >
//       {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
//     </button>
//   )
// }
