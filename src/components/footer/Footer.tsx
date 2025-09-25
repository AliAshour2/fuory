import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "../ui/button"


const Footer = () => {
  return (
    <footer className="text-white bg-[url('../src/assets/images/patterns/pattern.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up [animation-delay:0ms]">
            <div className="flex items-center h-20 w-20 transform hover:scale-110 transition-transform duration-300">
              <img src="src/assets/images/logos/fuory-logo.webp" className="w-full h-full object-contain" alt="fuory logo" />
            </div>
            <p className="font-sans text-base text-gray-100 leading-relaxed">
              Fuory Company has been established in the Egyptian market since{" "}
              <span className="text-lime-400 font-semibold animate-pulse">2015</span>.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-lime-400/40 hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-lime-400/50"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-lime-400/30">
              Our story
            </Button>
          </div>

          {/* Links */}
          <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide border-b border-gray-600 pb-2 hover:border-lime-400 transition-colors duration-300">
              Links
            </h3>
            <ul className="space-y-3">
              {["About", "Packing & Shipping", "Gallery"].map((link, i) => (
                <li key={i} className="animate-fade-in-left" style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-lime-400 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="text-lime-400 group-hover:animate-bounce">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-6 animate-fade-in-up [animation-delay:400ms]">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide border-b border-gray-600 pb-2 hover:border-lime-400 transition-colors duration-300">
              Direct Contact?
            </h3>
            <ul className="space-y-3">
              {["Send an email", "Call +201010101972", "Contact form", "Alexandria - Egypt"].map((contact, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 animate-fade-in-left group hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${600 + i * 100}ms` }}
                >
                  <span className="text-lime-400 group-hover:animate-bounce">→</span>
                  <p className="text-gray-100 hover:text-lime-400 transition-colors cursor-pointer">{contact}</p>
                </li>
              ))}
            </ul>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-lime-400/30">
              More contact details
            </Button>
          </div>

          {/* More Info */}
          <div className="space-y-6 animate-fade-in-up [animation-delay:600ms]">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide border-b border-gray-600 pb-2 hover:border-lime-400 transition-colors duration-300">
              More Fuory info
            </h3>
            <ul className="space-y-3 text-gray-100">
              {["Certifications", "Careers", "FAQ", "Sustainability"].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-lime-400 cursor-pointer transition-all duration-300 hover:translate-x-2 animate-fade-in-left"
                  style={{ animationDelay: `${800 + i * 100}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white animate-fade-in-up [animation-delay:1000ms]">
          <p>© {new Date().getFullYear()} Fuory Company. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-lime-400 transition-all duration-300 hover:scale-110">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lime-400 transition-all duration-300 hover:scale-110">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
