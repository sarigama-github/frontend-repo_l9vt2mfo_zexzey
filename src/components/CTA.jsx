import { Send } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold">Klaar voor digitale innovatie?</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Plan een vrijblijvende strategiecall. We denken mee, schetsen kansen en geven een concreet plan voor de volgende stap.</p>
          </div>
          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <input className="sm:col-span-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Naam" />
              <input type="email" className="sm:col-span-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
              <input className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Bedrijf" />
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold shadow hover:bg-gray-100">
                Verstuur
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
