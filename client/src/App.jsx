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
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
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
              <a onClick={handleNavClick} href="#cta" className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-600 text-white px-4 py-2 font-medium hover:bg-brand-700">Get Started</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Section id="home" className="bg-gradient-to-b from-white to-sky-50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Travel safer. Get help faster.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Smart Tourist Safety gives every traveler a simple digital ID and a one-tap SOS—so local help can find you quickly when it matters most.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#cta" className="inline-flex items-center rounded-lg bg-brand-600 text-white px-5 py-2.5 font-medium hover:bg-brand-700">Get Your Safety ID</a>
                <a href="#screenshots" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50">See the app</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500"></span> Real-time alerts</span>
                <span>Works offline for ID access</span>
                <span>Share location in a tap</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-xl ring-1 ring-gray-200 bg-white grid place-items-center text-gray-500">
                Add a hero screenshot here
              </div>
            </div>
          </div>
        </Section>

        <Section id="benefits">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Why travelers love it</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Feature title="One-tap SOS" desc="Alert nearby help and share your location instantly when you feel unsafe." />
            <Feature title="Your safety ID" desc="Carry a simple digital ID with trip info and emergency contacts at hand." />
            <Feature title="Peace of mind" desc="Friends and officials can be notified faster so you’re never truly alone." />
          </div>
        </Section>

        <Section id="how" className="bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">1) Create your ID</h3>
              <p className="mt-2 text-gray-600">Add your basic details and a contact we can notify in case of emergency.</p>
            </div>
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">2) Travel confidently</h3>
              <p className="mt-2 text-gray-600">Keep your ID handy in the app. If anything feels off, tap SOS.</p>
            </div>
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">3) Get help faster</h3>
              <p className="mt-2 text-gray-600">We share the right info to get you assistance quickly and safely.</p>
            </div>
          </div>
        </Section>

        <Section id="screenshots" className="bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">App Screenshots</h2>
          <p className="mt-2 text-gray-600">A quick peek at the experience. Add your app screenshots here.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-white rounded-lg ring-1 ring-gray-200 overflow-hidden">
                <div className="aspect-video bg-gray-100 grid place-items-center text-gray-500 text-sm">
                  Screenshot {i}
                </div>
                <div className="px-3 py-2 text-xs text-gray-500">Caption {i}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">FAQs</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-5">
              <h4 className="font-semibold text-gray-900">Is it free?</h4>
              <p className="mt-2 text-gray-600">Yes, this demo is free to use during the hackathon.</p>
            </div>
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-5">
              <h4 className="font-semibold text-gray-900">Do I need internet?</h4>
              <p className="mt-2 text-gray-600">Your ID is always accessible. SOS and updates work when online.</p>
            </div>
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-5">
              <h4 className="font-semibold text-gray-900">Who sees my info?</h4>
              <p className="mt-2 text-gray-600">Only what’s needed is shared to get you help quickly and safely.</p>
            </div>
            <div className="bg-white rounded-lg ring-1 ring-gray-200 p-5">
              <h4 className="font-semibold text-gray-900">Can I remove my data?</h4>
              <p className="mt-2 text-gray-600">You can delete your info anytime from the app.</p>
            </div>
          </div>
        </Section>

        <Section id="cta">
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-6 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Ready to feel safer on your trip?</h3>
            <p className="mt-2 text-gray-600">Create your free Safety ID in under a minute.</p>
            <div className="mt-6">
              <a href="#home" className="inline-flex items-center rounded-lg bg-brand-600 text-white px-6 py-3 font-medium hover:bg-brand-700">Get Started</a>
            </div>
          </div>
          <div className="pt-6 mt-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
            <span>Built for demo purposes</span>
            <span className="mt-2 md:mt-0">Your safety matters</span>
          </div>
        </Section>
      </main>
    </div>
  )
}
