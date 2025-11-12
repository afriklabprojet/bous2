"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-green-700 text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-2xl py-3 backdrop-blur-sm bg-green-700/95"
          : "shadow-lg py-4"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-bold">
            JSGC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition-colors">
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-200 transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/produits"
              className="hover:text-gray-200 transition-colors"
            >
              {t.nav.products}
            </Link>
            <Link
              href="/commande"
              className="bg-amber-800 px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors"
            >
              {t.nav.order}
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-200 transition-colors"
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1 rounded ${
                  language === "fr" ? "bg-amber-800" : "hover:bg-green-800"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded ${
                  language === "en" ? "bg-amber-800" : "hover:bg-green-800"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-gray-200 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className="block hover:text-gray-200 transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/produits"
              className="block hover:text-gray-200 transition-colors"
            >
              {t.nav.products}
            </Link>
            <Link
              href="/commande"
              className="block bg-amber-800 px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors text-center"
            >
              {t.nav.order}
            </Link>
            <Link
              href="/contact"
              className="block hover:text-gray-200 transition-colors"
            >
              {t.nav.contact}
            </Link>
            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-4 py-2 rounded flex-1 ${
                  language === "fr" ? "bg-amber-800" : "bg-green-800"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded flex-1 ${
                  language === "en" ? "bg-amber-800" : "bg-green-800"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
