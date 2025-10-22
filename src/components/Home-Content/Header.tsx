"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
              <svg className="h-7 w-7 text-white fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Postiva</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            <Link
              href="#how-it-works"
              className="relative text-gray-400 hover:text-white transition-colors text-lg font-medium group"
            >
              How It Works
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
            <Link
              href="/features"
              className="relative text-gray-400 hover:text-white transition-colors text-lg font-medium group"
            >
              Features
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
            <Link
              href="/About"
              className="relative text-gray-400 hover:text-white transition-colors text-lg font-medium group"
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="px-4 py-2 text-sm font-medium bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button variant="default" className="px-6 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-2xl" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#how-it-works"
                className="text-gray-400 hover:text-white transition-colors text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/features"
                className="text-gray-400 hover:text-white transition-colors text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/About"
                className="text-gray-400 hover:text-white transition-colors text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col space-y-4 pt-6 border-t border-gray-800">
                <Button variant="outline" className="px-4 py-2 text-sm font-medium bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button variant="default" className="px-6 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-2xl" asChild>
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
