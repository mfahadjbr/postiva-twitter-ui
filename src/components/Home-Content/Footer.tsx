import Link from "next/link"
import { Twitter, Linkedin, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg className="h-7 w-7 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Postiva</span>
            </Link>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Automate your Twitter success with AI-powered content generation and smart scheduling. 
              Transform your social media strategy with one click.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-lg">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Postiva. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with</span>
            <span className="text-red-500 text-lg">❤️</span>
            <span className="text-gray-400 text-sm">for Twitter creators</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
