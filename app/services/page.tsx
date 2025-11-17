"use client";

import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            ⚡{" "}
            {language === "fr"
              ? "SERVICES PROFESSIONNELS"
              : "PROFESSIONAL SERVICES"}
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {t.services.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {language === "fr"
              ? "Transport professionnel et bois de chauffage de qualité supérieure"
              : "Professional transport and superior quality firewood"}
          </p>
        </div>
      </div>

      {/* Delivery Announcement Banner */}
      <div className="bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="text-2xl">🚚</span>
            <p className="text-lg md:text-xl font-bold">
              {language === "fr"
                ? "Livraison disponible dans la grande région de Québec !"
                : "Delivery available in the greater Quebec City area!"}
            </p>
            <span className="text-2xl">📍</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🚚</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Livraison 24-48h" : "24-48h Delivery"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Bois Séché" : "Dried Wood"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Service 5 Étoiles" : "5-Star Service"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💚</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "100% Naturel" : "100% Natural"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Services Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            {language === "fr" ? "Nos Services" : "Our Services"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "fr"
              ? "Des solutions complètes pour tous vos besoins en transport et chauffage"
              : "Complete solutions for all your transport and heating needs"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="transform transition-all duration-300 hover:-translate-y-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              title={t.services.transport.title}
              description={t.services.transport.description}
            />
          </div>
          <div className="transform transition-all duration-300 hover:-translate-y-2">
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
                </svg>
              }
              title={t.services.firewood.title}
              description={t.services.firewood.description}
            />
          </div>
          <div className="transform transition-all duration-300 hover:-translate-y-2">
            <ServiceCard
              icon={
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              }
              title={t.services.delivery.title}
              description={t.services.delivery.description}
            />
          </div>
        </div>

        {/* Detailed Services */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Transport Service */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-green-600 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-green-800">
                  {t.services.transport.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === "fr"
                  ? "Notre service de transport professionnel assure la livraison sécurisée de vos marchandises. Nous disposons d'une flotte moderne et entretenue pour répondre à tous vos besoins de transport."
                  : "Our professional transport service ensures the safe delivery of your goods. We have a modern and well-maintained fleet to meet all your transport needs."}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr"
                        ? "Transport Varié"
                        : "Varied Transport"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Transport de marchandises diverses"
                        : "Transport of various goods"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Expertise" : "Expertise"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Chauffeurs expérimentés"
                        : "Experienced drivers"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Fiabilité" : "Reliability"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Service ponctuel et fiable"
                        : "Punctual and reliable service"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Couverture" : "Coverage"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Couverture régionale complète"
                        : "Complete regional coverage"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Firewood Service */}
          <div className="relative bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-amber-600 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-100 rounded-full -ml-20 -mb-20"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-amber-700"
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
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-amber-900">
                  {t.services.firewood.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === "fr"
                  ? "Nous offrons du bois de chauffage de première qualité, soigneusement sélectionné et séché pour garantir une combustion optimale et une chaleur durable."
                  : "We offer premium quality firewood, carefully selected and dried to ensure optimal combustion and lasting heat."}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">🍁</div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-amber-900">
                    {t.order.woodTypes.maple}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Chaleur intense et longue durée"
                      : "Intense heat and long duration"}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">🌲</div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-amber-900">
                    {t.order.woodTypes.birch}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Combustion propre et efficace"
                      : "Clean and efficient combustion"}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">🔥</div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-amber-900">
                    {t.order.woodTypes.mixed}
                  </h3>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? "Mélange équilibré et économique"
                      : "Balanced and economical mix"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Service */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-blue-600 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-50 rounded-full -ml-20 -mt-20"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900">
                  {t.services.delivery.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === "fr"
                  ? "Notre service de livraison rapide et fiable vous assure de recevoir votre bois de chauffage directement à domicile, en toute tranquillité."
                  : "Our fast and reliable delivery service ensures you receive your firewood directly at home, with complete peace of mind."}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Rapidité" : "Speed"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Livraison rapide et fiable"
                        : "Fast and reliable delivery"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Délais Courts" : "Short Delays"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Délais de livraison courts"
                        : "Short delivery times"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Organisation" : "Organization"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Empilage soigné et organisé"
                        : "Neat and organized stacking"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === "fr"
                        ? "Professionnalisme"
                        : "Professionalism"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Service courtois et professionnel"
                        : "Courteous and professional service"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative mt-20 bg-linear-to-br from-green-700 via-green-800 to-green-900 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {language === "fr"
                ? "Prêt à Découvrir Nos Produits ?"
                : "Ready to Discover Our Products?"}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {language === "fr"
                ? "Explorez notre catalogue complet de bois de chauffage et trouvez la solution parfaite pour vos besoins"
                : "Explore our complete firewood catalog and find the perfect solution for your needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/produits"
                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                {language === "fr" ? "Voir Nos Produits" : "View Our Products"}
              </a>
              <a
                href="/contact"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
