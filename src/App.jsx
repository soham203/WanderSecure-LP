import { useEffect, useState } from 'react'

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setMobileOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-2xl text-brand-700 hover:text-brand-800 transition-colors">WanderSecure</a>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" /></svg>
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#benefits" className="hover:text-gray-900">Benefits</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#screenshots" className="hover:text-gray-900">Screenshots</a>
            <a href="#faq" className="hover:text-gray-900">FAQs</a>
          </nav>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
              <a onClick={handleNavClick} href="#benefits" className="py-2 text-gray-700 hover:text-gray-900">Benefits</a>
              <a onClick={handleNavClick} href="#how" className="py-2 text-gray-700 hover:text-gray-900">How it works</a>
              <a onClick={handleNavClick} href="#screenshots" className="py-2 text-gray-700 hover:text-gray-900">Screenshots</a>
              <a onClick={handleNavClick} href="#faq" className="py-2 text-gray-700 hover:text-gray-900">FAQs</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Section id="home" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Travel safer. Get help faster.
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                WanderSecure gives every traveler a simple digital ID and a one-tap SOS—so local help can find you quickly when it matters most.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#screenshots" className="inline-flex items-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 font-semibold hover:from-brand-700 hover:to-brand-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">See the app</a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700"><span className="size-2 rounded-full bg-emerald-500"></span> Real-time alerts</span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">📱 Works offline</span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700">📍 Share location</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="benefits" className="bg-gradient-to-b from-white to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Why travelers love it</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover the features that make WanderSecure the trusted choice for safe travels</p>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-tap SOS</h3>
              <p className="text-gray-600 leading-relaxed">Alert nearby help and share your location instantly when you feel unsafe.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🆔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your safety ID</h3>
              <p className="text-gray-600 leading-relaxed">Carry a simple digital ID with trip info and emergency contacts at hand.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peace of mind</h3>
              <p className="text-gray-600 leading-relaxed">Friends and officials can be notified faster so you're never truly alone.</p>
            </div>
          </div>
        </Section>

        <Section id="how" className="bg-gradient-to-br from-gray-50 to-blue-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">How it works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Get started in three simple steps</p>
          <div className="mt-6 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register yourself and get your temporary travel ID</h3>
              <p className="text-gray-600 leading-relaxed">Add your basic details and a contact we can notify in case of emergency.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Travel confidently</h3>
              <p className="text-gray-600 leading-relaxed">Keep your ID handy in the app. If anything feels off, tap SOS.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get help faster</h3>
              <p className="text-gray-600 leading-relaxed">We share the right info to get you assistance quickly and safely.</p>
            </div>
          </div>
        </Section>

        <Section id="screenshots" className="bg-gradient-to-b from-white to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">A quick peek at the WanderSecure experience</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="bg-white rounded-3xl ring-1 ring-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={`/assets/${i}.jpg`} 
                  alt={`WanderSecure screenshot ${i}`}
                  className="aspect-[9/19.5] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" className="bg-gradient-to-br from-gray-50 to-blue-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Everything you need to know about WanderSecure</p>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Is it free?</h4>
              <p className="text-gray-600 leading-relaxed">Yes, this demo is free to use during the hackathon.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Do I need internet?</h4>
              <p className="text-gray-600 leading-relaxed">Your ID is always accessible. SOS and updates work when online.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Who sees my info?</h4>
              <p className="text-gray-600 leading-relaxed">Only what's needed is shared to get you help quickly and safely.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Can I remove my data?</h4>
              <p className="text-gray-600 leading-relaxed">You can delete your info anytime from the app.</p>
            </div>
          </div>
        </Section>

        <Section className="!py-6">
          <div className="mt-2 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
            <span>Built for demo purposes</span>
            <span className="mt-2 md:mt-0">Your safety matters</span>
          </div>
        </Section>
      </main>
    </div>
  )
}
