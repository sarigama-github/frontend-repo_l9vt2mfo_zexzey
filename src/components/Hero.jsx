import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
              <Zap size={14} className="text-amber-500" />
              Digitale innovatie voor groei
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Websites, AI-integraties en maatwerk SaaS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500"> die resultaat leveren</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              WebForgeStudio helpt bedrijven versnellen met moderne technologie. Van converterende websites tot slimme AI-oplossingen en schaalbare SaaS-platformen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800">
                Plan een gratis strategiecall
                <ArrowRight size={16} />
              </a>
              <a href="#werk" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow border border-black/10 hover:bg-gray-50">
                Bekijk cases
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-500">
              <div>
                <p className="text-2xl font-bold text-gray-900">+120</p>
                <p>Projecten afgerond</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                <p>Klanttevredenheid</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900"><span className="align-top text-base">~</span>3x</p>
                <p>Sneller live</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-black/10 bg-white p-4 shadow-lg">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-400" />
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-indigo-300 via-fuchsia-300 to-cyan-300" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/40 backdrop-blur border border-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
