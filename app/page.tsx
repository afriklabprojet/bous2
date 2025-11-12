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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              }
              title={t.services.transport.title}
              description={t.services.transport.description}
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

          {/* Payment Badge */}
          <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-semibold flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {language === "fr"
                ? "💳 Paiement par virement Interac accepté"
                : "💳 Interac Transfer Payment Accepted"}
            </p>
          </div>

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
