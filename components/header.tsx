'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold">VA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vertex</div>
              <div className="text-xs text-muted-foreground leading-none">Assessment Center</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/testing-environment">Facilities</NavLink>
            <NavLink href="/pte-academic">PTE Academic</NavLink>
            <NavLink href="/pte-core">PTE Core</NavLink>
            <NavLink href="/preparation">Preparation</NavLink>
            <NavLink href="/mock-tests">Mock Tests</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/register"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/testing-environment">Facilities</MobileNavLink>
            <MobileNavLink href="/pte-academic">PTE Academic</MobileNavLink>
            <MobileNavLink href="/pte-core">PTE Core</MobileNavLink>
            <MobileNavLink href="/preparation">Preparation</MobileNavLink>
            <MobileNavLink href="/mock-tests">Mock Tests</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Link
              href="/register"
              className="block w-full mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:bg-primary/90 transition"
            >
              Register Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
    >
      {children}
    </Link>
  )
}
