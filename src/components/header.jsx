"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "How You'll Learn", href: "#how-youll-learn" },
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "Community", href: "#community" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80 // Account for fixed header height
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }

    setIsMenuOpen(false)
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      <div
        className={`${isScrolled ? "bg-slate-800/95" : "bg-slate-800/20"} backdrop-blur-sm text-white py-2 px-4 hidden md:block transition-all duration-300`}
      >
        <div className="w-full mx-auto flex flex-col md:flex-row items-center sm:justify-between lg:justify-center text-sm min-h-8 gap-x-8 gap-y-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-xs sm:text-sm">
                <Link href="tel:+919876543210">Call us: +91 98765 43210</Link>
              </span>
            </div>
            <div className="hidden sm:flex items-center">
              <span>|</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-xs sm:text-sm">
                <Link href="mailto:info@onyxedutech.com?Subject=Hello">Email: info@onyxedutech.com</Link>
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <Link
              href="https://twitter.com/onyxedutech"
              className="hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.facebook.com/onyxedutech"
              className="hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/onyxedutech"
              className="hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/onyxedutech"
              className="hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Transparent */}
      <div
        className={`${isScrolled ? "bg-white/95 shadow-lg" : "bg-transparent"} backdrop-blur-sm transition-all duration-300`}
      >
        <div className="w-full mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between lg:justify-center items-center h-20 lg:gap-x-8">
            <div className="flex">
              <Link href="/" className="flex items-center hover:scale-105 transform transition-transform duration-300">
                <div
                  className={`${isScrolled ? "bg-gradient-to-r from-blue-900 to-orange-500 p-2 rounded-lg shadow-md" : ""} transition-all duration-300`}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onyx_logo%20%281%29-i1TK1VIX9JHccoUSbgMG4DrUitxgDC.png"
                    alt="Onyx EduTech Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group cursor-pointer ${
                    isScrolled ? "text-blue-900 hover:text-orange-500" : "text-white hover:text-orange-400"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <div className="flex items-center space-x-3 ml-4">
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 transform bg-transparent"
                >
                  <Link href="/register-student">Register as Student</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 hover:scale-110 transform transition-all duration-300 ${
                  isScrolled ? "text-blue-900 hover:text-orange-500" : "text-white hover:text-orange-400"
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/20 animate-in slide-in-from-top-2 duration-300 bg-black/80 backdrop-blur-sm rounded-b-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-orange-400 hover:bg-white/10 rounded-md transition-all duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 space-y-2">
                  <Button
                    asChild
                    onClick={toggleMenu}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transform transition-all duration-300"
                  >
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                  <Button
                    asChild
                    onClick={toggleMenu}
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transform transition-all duration-300 bg-transparent"
                  >
                    <Link href="/register-student">Register as Student</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
