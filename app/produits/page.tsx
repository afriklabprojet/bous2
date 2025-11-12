"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const { language } = useLanguage();

  const products = [
    {
      name: language === "fr" ? "Bois d'Érable" : "Maple Wood",
      image: "/images/maple-wood.svg",
      description:
        language === "fr"
          ? "Bois dur de première qualité, séché naturellement. Excellent pouvoir calorifique et combustion longue durée."
          : "Premium hardwood, naturally dried. Excellent heat output and long-lasting burn.",
      features: [
        language === "fr"
          ? "🔥 Haute densité énergétique"
          : "🔥 High energy density",
        language === "fr" ? "⏱️ Combustion lente" : "⏱️ Slow burning",
        language === "fr" ? "🌡️ Température élevée" : "🌡️ High temperature",
        language === "fr" ? "✨ Faible taux de cendres" : "✨ Low ash content",
      ],
      pricing: {
        single: language === "fr" ? "160$" : "$160",
        bulk3: language === "fr" ? "450$ (3 cordes)" : "$450 (3 cords)",
        bulk5: language === "fr" ? "720$ (5 cordes)" : "$720 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Bouleau" : "Birch Wood",
      image: "/images/birch-wood.svg",
      description:
        language === "fr"
          ? "Bois franc réputé pour son odeur agréable. Parfait pour une ambiance chaleureuse."
          : "Hardwood known for its pleasant scent. Perfect for a warm atmosphere.",
      features: [
        language === "fr" ? "🌲 Odeur agréable" : "🌲 Pleasant scent",
        language === "fr" ? "🔥 Flamme vive" : "🔥 Bright flame",
        language === "fr" ? "💨 Séchage rapide" : "💨 Quick drying",
        language === "fr" ? "🏡 Idéal résidentiel" : "🏡 Ideal for residential",
      ],
      pricing: {
        single: language === "fr" ? "150$" : "$150",
        bulk3: language === "fr" ? "420$ (3 cordes)" : "$420 (3 cords)",
        bulk5: language === "fr" ? "680$ (5 cordes)" : "$680 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois Mélangé" : "Mixed Wood",
      image: "/images/mixed-wood.svg",
      description:
        language === "fr"
          ? "Mélange équilibré de bois durs. Solution économique sans compromis sur la qualité."
          : "Balanced mix of hardwoods. Economical solution without compromising quality.",
      features: [
        language === "fr"
          ? "💰 Meilleur rapport qualité-prix"
          : "💰 Best value for money",
        language === "fr"
          ? "🔥 Performance constante"
          : "🔥 Consistent performance",
        language === "fr" ? "📦 Grande polyvalence" : "📦 Great versatility",
        language === "fr" ? "✅ Toujours disponible" : "✅ Always available",
      ],
      pricing: {
        single: language === "fr" ? "130$" : "$130",
        bulk3: language === "fr" ? "360$ (3 cordes)" : "$360 (3 cords)",
        bulk5: language === "fr" ? "600$ (5 cordes)" : "$600 (5 cords)",
      },
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-6 text-green-800">
            {language === "fr" ? "Nos Produits" : "Our Products"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "fr"
              ? "Bois de chauffage de qualité supérieure, séché et prêt à l'emploi. Livraison rapide dans tout le Saguenay-Lac-Saint-Jean."
              : "Premium quality firewood, dried and ready to use. Fast delivery throughout Saguenay-Lac-Saint-Jean."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Product Header */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-green-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-2">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Table */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 space-y-2">
                  <div className="text-center mb-3">
                    <p className="text-xs uppercase tracking-wide text-green-700 font-semibold">
                      {language === "fr" ? "Prix par corde" : "Price per cord"}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">
                      {language === "fr" ? "1 corde" : "1 cord"}
                    </span>
                    <span className="text-green-800 font-bold text-lg">
                      {product.pricing.single}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200 bg-green-100/50 px-2 rounded">
                    <span className="text-gray-700 text-sm">
                      {language === "fr" ? "3 cordes" : "3 cords"}
                    </span>
                    <span className="text-green-800 font-bold">
                      {product.pricing.bulk3}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-amber-100 px-2 rounded">
                    <span className="text-gray-700 text-sm flex items-center">
                      {language === "fr" ? "5 cordes" : "5 cords"}
                      <span className="ml-2 text-xs bg-amber-800 text-white px-2 py-0.5 rounded-full">
                        {language === "fr" ? "Meilleur prix" : "Best value"}
                      </span>
                    </span>
                    <span className="text-amber-900 font-bold">
                      {product.pricing.bulk5}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-r from-green-700 to-green-900 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {language === "fr"
              ? "Prêt à commander votre bois de chauffage ?"
              : "Ready to order your firewood?"}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === "fr"
              ? "Livraison rapide • Qualité garantie • Service professionnel"
              : "Fast delivery • Guaranteed quality • Professional service"}
          </p>
          <Link
            href="/commande"
            className="inline-block bg-amber-800 hover:bg-amber-900 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-800/50 hover:-translate-y-1"
          >
            {language === "fr" ? "Commander maintenant" : "Order now"}
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">📏</div>
            <h3 className="font-bold text-lg mb-2 text-green-800">
              {language === "fr" ? "Unité de Mesure" : "Unit of Measure"}
            </h3>
            <p className="text-gray-600">
              {language === "fr"
                ? "Vendu à la corde (128 pi³)"
                : "Sold by the cord (128 ft³)"}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">💧</div>
            <h3 className="font-bold text-lg mb-2 text-green-800">
              {language === "fr" ? "Taux d'Humidité" : "Moisture Content"}
            </h3>
            <p className="text-gray-600">
              {language === "fr"
                ? "Séché naturellement ≤ 20%"
                : "Naturally dried ≤ 20%"}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2 text-green-800">
              {language === "fr" ? "Livraison" : "Delivery"}
            </h3>
            <p className="text-gray-600">
              {language === "fr"
                ? "Zone Saguenay-Lac-Saint-Jean"
                : "Saguenay-Lac-Saint-Jean area"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
