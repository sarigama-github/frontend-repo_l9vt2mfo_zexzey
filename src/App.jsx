import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
        <footer className="py-10 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} WebForgeStudio. Alle rechten voorbehouden.</p>
            <div className="text-sm text-gray-500">Made with liefde voor design, code en AI.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
