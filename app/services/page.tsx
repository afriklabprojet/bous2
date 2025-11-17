"use client";

import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-6 text-green-800">
            {t.services.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "fr"
              ? "Découvrez nos services de transport et de vente de bois de chauffage de qualité supérieure"
              : "Discover our transport services and premium firewood sales"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Detailed Services */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Transport Service */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-green-700">
              {t.services.transport.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "fr"
                ? "Notre service de transport professionnel assure la livraison sécurisée de vos marchandises. Nous disposons d'une flotte moderne et entretenue pour répondre à tous vos besoins de transport."
                : "Our professional transport service ensures the safe delivery of your goods. We have a modern and well-maintained fleet to meet all your transport needs."}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                {language === "fr"
                  ? "Transport de marchandises diverses"
                  : "Transport of various goods"}
              </li>
              <li>
                {language === "fr"
                  ? "Chauffeurs expérimentés"
                  : "Experienced drivers"}
              </li>
              <li>
                {language === "fr"
                  ? "Service ponctuel et fiable"
                  : "Punctual and reliable service"}
              </li>
              <li>
                {language === "fr"
                  ? "Couverture régionale complète"
                  : "Complete regional coverage"}
              </li>
            </ul>
          </div>

          {/* Firewood Service */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-green-700">
              {t.services.firewood.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "fr"
                ? "Nous offrons du bois de chauffage de première qualité, soigneusement sélectionné et séché pour garantir une combustion optimale et une chaleur durable."
                : "We offer premium quality firewood, carefully selected and dried to ensure optimal combustion and lasting heat."}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-heading font-semibold text-lg mb-2 text-green-800">
                  {t.order.woodTypes.maple}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr"
                    ? "Chaleur intense et longue durée"
                    : "Intense heat and long duration"}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-heading font-semibold text-lg mb-2 text-green-800">
                  {t.order.woodTypes.birch}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr"
                    ? "Combustion propre et efficace"
                    : "Clean and efficient combustion"}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-heading font-semibold text-lg mb-2 text-green-800">
                  {t.order.woodTypes.mixed}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr"
                    ? "Mélange équilibré et économique"
                    : "Balanced and economical mix"}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Service */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-green-700">
              {t.services.delivery.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "fr"
                ? "Notre service de livraison rapide et fiable vous assure de recevoir votre bois de chauffage directement à domicile, en toute tranquillité."
                : "Our fast and reliable delivery service ensures you receive your firewood directly at home, with complete peace of mind."}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                {language === "fr"
                  ? "Livraison rapide et fiable"
                  : "Fast and reliable delivery"}
              </li>
              <li>
                {language === "fr"
                  ? "Délais de livraison courts"
                  : "Short delivery times"}
              </li>
              <li>
                {language === "fr"
                  ? "Empilage soigné et organisé"
                  : "Neat and organized stacking"}
              </li>
              <li>
                {language === "fr"
                  ? "Service courtois et professionnel"
                  : "Courteous and professional service"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
