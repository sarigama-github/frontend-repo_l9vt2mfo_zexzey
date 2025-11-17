import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Diensten', href: '#diensten' },
    { label: 'Aanpak', href: '#aanpak' },
    { label: 'Werk', href: '#werk' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-400 flex items-center justify-center text-white shadow-lg">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-gray-900">WebForgeStudio</p>
              <p className="text-[11px] text-gray-500 -mt-0.5 flex items-center gap-1">
                Digitale innovatie
                <Sparkles size={12} className="text-amber-500" />
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 shadow hover:bg-gray-800">
              Offerte aanvragen
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded-md bg-gray-900 text-white text-sm text-center">
                Offerte aanvragen
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
