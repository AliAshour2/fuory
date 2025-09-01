import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center h-20 w-20 md:h-20 md:w-20 flex-shrink-0">
          <img src="src/assets/images/logos/fuory-logo.png" className="w-full h-full" alt="fuory logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <a
            href="#"
            className="text-white/80 hover:text-white text-xl font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-xl font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-xl font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Docs
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm transition-all duration-200 hover:bg-emerald-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <>
              MENU
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </>
          ) : (
            <>
              MENU
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </>
          )}
        </button>

        {/* Desktop Login Button Group with Arrow */}
        <div
          id="gooey-btn"
          className="hidden md:flex relative items-center group"
          style={{ filter: "url(#gooey-filter)" }}
        >
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
            Login
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Background overlay with deeper purple gradient */}
        <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('src/assets/images/patterns/pattern.png')" }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm transition-all duration-200 hover:bg-emerald-700"
          >
            MENU
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Restructured menu content with larger text and proper spacing */}
          <div className="flex flex-col justify-center h-full px-12 py-20">
            <div className="space-y-8">
              <h2 className="text-lime-400 text-lg font-light mb-12">Range</h2>

              <nav className="space-y-6">
                <a
                  href="#"
                  className="flex items-center justify-between text-lime-400 hover:text-lime-300 text-3xl font-light transition-all duration-200 group py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Let everyone enjoy healthy food</span>
                  <svg
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between text-lime-400 hover:text-lime-300 text-3xl font-light transition-all duration-200 group py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Care for people and nature</span>
                  <svg
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between text-lime-400 hover:text-lime-300 text-3xl font-light transition-all duration-200 group py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>The progressive partner</span>
                  <svg
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between text-lime-400 hover:text-lime-300 text-3xl font-light transition-all duration-200 group py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>About us</span>
                  <svg
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between text-lime-400 hover:text-lime-300 text-3xl font-light transition-all duration-200 group py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>News</span>
                  <svg
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </nav>
            </div>

            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex justify-between items-center text-white text-lg font-light">
                <a href="#" className="hover:text-lime-400 transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="hover:text-lime-400 transition-colors duration-200">
                  Contact
                </a>
                <a href="#" className="hover:text-lime-400 transition-colors duration-200">
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
