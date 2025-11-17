"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-[slide-up_0.6s_ease-out]">
            <div className="inline-block mb-4 px-6 py-2 bg-green-700 text-white rounded-full text-sm font-bold">
              ⭐ {language === "fr" ? "MEILLEURS VENTES" : "BEST SELLERS"}
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-green-800">
              {language === "fr"
                ? "Bois de Chauffage Premium"
                : "Premium Firewood"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === "fr"
                ? "Séché naturellement, prêt à brûler immédiatement. Profitez d'une chaleur constante et durable tout l'hiver ❄️🔥"
                : "Naturally dried, ready to burn immediately. Enjoy consistent and lasting warmth all winter long ❄️🔥"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Érable Premium */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-amber-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                🔥 {language === "fr" ? "POPULAIRE" : "POPULAR"}
              </div>
              <div className="text-6xl mb-6 text-center">🔥</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800 text-center">
                {language === "fr" ? "Érable Premium" : "Premium Maple"}
              </h3>
              <ul className="text-gray-700 mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Haute densité énergétique" : "High energy density"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Chaleur intense" : "Intense heat"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Brûle longtemps" : "Long burning"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Peu de fumée" : "Low smoke"}
                </li>
              </ul>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-4xl font-bold text-amber-800">160$</span>
                <span className="text-gray-500 text-sm">/ {language === "fr" ? "corde" : "cord"}</span>
              </div>
              <Link
                href="/produits"
                className="block w-full text-center bg-amber-800 hover:bg-amber-900 text-white px-6 py-4 rounded-xl font-bold transition-all group-hover:scale-105 shadow-lg"
              >
                {language === "fr" ? "🛒 Commander" : "🛒 Order Now"}
              </Link>
            </div>

            {/* Bouleau Blanc */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                ⭐ {language === "fr" ? "QUALITÉ" : "QUALITY"}
              </div>
              <div className="text-6xl mb-6 text-center">🪵</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800 text-center">
                {language === "fr" ? "Bouleau Blanc" : "White Birch"}
              </h3>
              <ul className="text-gray-700 mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Excellent rapport qualité-prix" : "Excellent value"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Combustion propre" : "Clean burning"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Peu de résidus" : "Minimal residue"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Facile à allumer" : "Easy to ignite"}
                </li>
              </ul>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-4xl font-bold text-blue-800">150$</span>
                <span className="text-gray-500 text-sm">/ {language === "fr" ? "corde" : "cord"}</span>
              </div>
              <Link
                href="/produits"
                className="block w-full text-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-4 rounded-xl font-bold transition-all group-hover:scale-105 shadow-lg"
              >
                {language === "fr" ? "🛒 Commander" : "🛒 Order Now"}
              </Link>
            </div>

            {/* Mélangé */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                💰 {language === "fr" ? "ÉCONOMIQUE" : "VALUE"}
              </div>
              <div className="text-6xl mb-6 text-center">🌲</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800 text-center">
                {language === "fr" ? "Bois Mélangé" : "Mixed Wood"}
              </h3>
              <ul className="text-gray-700 mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Meilleur prix" : "Best price"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Mélange équilibré" : "Balanced mix"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Bon rendement" : "Good performance"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {language === "fr" ? "Usage quotidien" : "Daily use"}
                </li>
              </ul>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-4xl font-bold text-green-800">130$</span>
                <span className="text-gray-500 text-sm">/ {language === "fr" ? "corde" : "cord"}</span>
              </div>
              <Link
                href="/produits"
                className="block w-full text-center bg-green-800 hover:bg-green-900 text-white px-6 py-4 rounded-xl font-bold transition-all group-hover:scale-105 shadow-lg"
              >
                {language === "fr" ? "🛒 Commander" : "🛒 Order Now"}
              </Link>
            </div>
          </div>

          <div className="text-center bg-linear-to-r from-green-50 to-amber-50 rounded-2xl p-8 border-2 border-dashed border-green-300">
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              {language === "fr"
                ? "🌟 Plus de 10 types de bois disponibles !"
                : "🌟 More than 10 types of wood available!"}
            </p>
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              {language === "fr"
                ? "Découvrir tous nos produits"
                : "Discover all our products"}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-green-800">
            {t.services.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              }
              title={t.services.firewood.title}
              description={t.services.firewood.description}
            />
            <ServiceCard
              icon={
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              }
              title={t.services.delivery.title}
              description={t.services.delivery.description}
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-green-100">{language === "fr" ? "Clients Satisfaits" : "Happy Customers"}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-green-100">{language === "fr" ? "Années d'Expérience" : "Years Experience"}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-green-100">{language === "fr" ? "Bois Séché Naturellement" : "Naturally Dried Wood"}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24h</div>
              <p className="text-green-100">{language === "fr" ? "Livraison Rapide" : "Fast Delivery"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-green-800">
              {language === "fr" ? "Pourquoi Choisir JSGC?" : "Why Choose JSGC?"}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {language === "fr"
                ? "Votre partenaire de confiance pour un hiver au chaud"
                : "Your trusted partner for a warm winter"}
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center text-white text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-green-800">
                      {language === "fr"
                        ? "Qualité Garantie"
                        : "Guaranteed Quality"}
                    </h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Bois sélectionné, séché naturellement, prêt à utiliser immédiatement"
                        : "Selected wood, naturally dried, ready to use immediately"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-amber-700 rounded-2xl flex items-center justify-center text-white text-2xl">
                    🚚
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-amber-800">
                      {language === "fr" ? "Livraison Rapide" : "Fast Delivery"}
                    </h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Livraison rapide et fiable directement chez vous, service professionnel"
                        : "Fast and reliable delivery directly to your home, professional service"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl">
                    💰
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-blue-800">
                      {language === "fr"
                        ? "Prix Compétitifs"
                        : "Competitive Prices"}
                    </h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Meilleur rapport qualité-prix, prix transparents sans surprise"
                        : "Best value for money, transparent pricing with no surprises"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-red-700 rounded-2xl flex items-center justify-center text-white text-2xl">
                    ❤️
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-red-800">
                      {language === "fr" ? "Service Client ⭐" : "Customer Service ⭐"}
                    </h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Équipe dévouée, conseils personnalisés, satisfaction garantie"
                        : "Dedicated team, personalized advice, satisfaction guaranteed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            {language === "fr" ? "Prêt à commander?" : "Ready to Order?"}
          </h2>
          <p className="text-xl mb-8 text-gray-50 max-w-2xl mx-auto">
            {language === "fr"
              ? "Commandez votre bois de chauffage dès aujourd'hui et profitez d'une livraison rapide"
              : "Order your firewood today and enjoy fast delivery"}
          </p>

          <div>
            <Link
              href="/commande"
              className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
