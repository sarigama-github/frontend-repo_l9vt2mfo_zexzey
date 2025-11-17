import { LayoutPanelLeft, Blocks, Wand2, Gauge } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: LayoutPanelLeft,
      title: 'Strategie',
      desc: 'We starten met een korte sessie om doelen, doelgroep en KPI\'s scherp te krijgen.'
    },
    { icon: Blocks, title: 'Design & MVP', desc: 'Een first version die snel waarde levert. Feedback = richting.' },
    { icon: Wand2, title: 'Ontwikkeling', desc: 'Iteratief bouwen met kwaliteit, security en performance als basis.' },
    { icon: Gauge, title: 'Launch & Groei', desc: 'We meten, optimaliseren en schalen. Samen.' },
  ]

  return (
    <section id="aanpak" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Aanpak</h2>
          <p className="mt-3 text-gray-600">Snel naar resultaat, zonder in te leveren op kwaliteit.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
