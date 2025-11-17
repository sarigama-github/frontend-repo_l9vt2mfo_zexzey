import { Globe, Bot, Boxes, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Globe,
      title: 'Websites die converteren',
      desc: 'Snel, veilig en SEO-vriendelijk. Pixel-perfect design met een focus op resultaat.'
    },
    {
      icon: Bot,
      title: 'AI-integraties',
      desc: 'Chatbots, workflow-automatisering en slimme aanbevelingen op maat van jouw processen.'
    },
    {
      icon: Boxes,
      title: 'Maatwerk SaaS',
      desc: 'Van MVP tot schaalbaar platform met multi-tenant architectuur en moderne stacks.'
    },
  ]

  const highlights = [
    'UX-gedreven aanpak',
    'Snelle doorlooptijd',
    'Meetbare KPI\'s',
    'Robuuste security',
  ]

  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            Diensten
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Van idee naar impact</h2>
          <p className="mt-3 text-gray-600">We bouwen digitale ervaringen die jouw business vooruit stuwen.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-indigo-50 to-cyan-50">
            <h4 className="font-semibold text-gray-900">Waarom klanten voor ons kiezen</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2"><CheckCircle2 className="text-green-600 mt-0.5" size={18} /> {h}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <h4 className="font-semibold text-gray-900">Tech stack</h4>
            <p className="mt-2 text-sm text-gray-600">React, Next.js, FastAPI, Node, Python, TypeScript, Tailwind, Postgres/Mongo, Vercel/Cloud.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
