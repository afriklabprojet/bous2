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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-green-800">
              {language === "fr" ? "Nos Produits Vedettes" : "Our Featured Products"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr" 
                ? "Découvrez notre sélection de bois de chauffage premium, séché et prêt à brûler"
                : "Discover our selection of premium firewood, dried and ready to burn"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Érable Premium */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800">
                {language === "fr" ? "Érable Premium" : "Premium Maple"}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === "fr"
                  ? "Notre meilleur bois, haute densité, chaleur intense et durable"
                  : "Our best wood, high density, intense and lasting heat"}
              </p>
              <div className="text-3xl font-bold text-amber-800 mb-4">160$</div>
              <Link
                href="/produits"
                className="block w-full text-center bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === "fr" ? "Voir détails" : "View details"}
              </Link>
            </div>

            {/* Bouleau Blanc */}
            <div className="bg-linear-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🪵</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800">
                {language === "fr" ? "Bouleau Blanc" : "White Birch"}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === "fr"
                  ? "Excellent rapport qualité-prix, brûle proprement avec peu de résidus"
                  : "Excellent value, burns cleanly with minimal residue"}
              </p>
              <div className="text-3xl font-bold text-blue-800 mb-4">150$</div>
              <Link
                href="/produits"
                className="block w-full text-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === "fr" ? "Voir détails" : "View details"}
              </Link>
            </div>

            {/* Mélangé */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-green-800">
                {language === "fr" ? "Bois Mélangé" : "Mixed Wood"}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === "fr"
                  ? "Solution économique, mélange équilibré de feuillus"
                  : "Economical solution, balanced mix of hardwoods"}
              </p>
              <div className="text-3xl font-bold text-green-800 mb-4">130$</div>
              <Link
                href="/produits"
                className="block w-full text-center bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === "fr" ? "Voir détails" : "View details"}
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-semibold text-lg group"
            >
              {language === "fr" ? "Voir tous nos produits" : "See all our products"}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8 text-green-800">
              {language === "fr" ? "Pourquoi nous choisir?" : "Why Choose Us?"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {language === "fr"
                      ? "Qualité Supérieure"
                      : "Superior Quality"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Bois de chauffage sélectionné et séché pour une combustion optimale"
                      : "Selected and dried firewood for optimal combustion"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {language === "fr" ? "Livraison Rapide" : "Fast Delivery"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Service de livraison fiable dans tout le Saguenay-Lac-Saint-Jean"
                      : "Reliable delivery service throughout Saguenay-Lac-Saint-Jean"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {language === "fr"
                      ? "Prix Compétitifs"
                      : "Competitive Prices"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Meilleur rapport qualité-prix de la région"
                      : "Best value for money in the region"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {language === "fr" ? "Service Client" : "Customer Service"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Équipe dédiée à votre satisfaction"
                      : "Team dedicated to your satisfaction"}
                  </p>
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
