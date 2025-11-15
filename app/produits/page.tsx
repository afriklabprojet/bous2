"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const { language } = useLanguage();

  const products = [
    {
      name: language === "fr" ? "Bois d'Érable Premium" : "Premium Maple Wood",
      image: "/images/maple-wood.svg",
      description:
        language === "fr"
          ? "Bois dur de première qualité, séché naturellement 18-24 mois. Excellent pouvoir calorifique et combustion longue durée. Idéal pour chauffage principal."
          : "Premium hardwood, naturally dried 18-24 months. Excellent heat output and long-lasting burn. Ideal for primary heating.",
      features: [
        language === "fr"
          ? "🔥 Haute densité énergétique (4700 kcal/kg)"
          : "🔥 High energy density (4700 kcal/kg)",
        language === "fr" ? "⏱️ Combustion lente (8-10h)" : "⏱️ Slow burning (8-10h)",
        language === "fr" ? "🌡️ Température élevée" : "🌡️ High temperature",
        language === "fr" ? "✨ Faible taux de cendres (1%)" : "✨ Low ash content (1%)",
        language === "fr" ? "📏 Bûches 16 pouces" : "📏 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "160$" : "$160",
        bulk3: language === "fr" ? "450$ (3 cordes)" : "$450 (3 cords)",
        bulk5: language === "fr" ? "720$ (5 cordes)" : "$720 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Bouleau Blanc" : "White Birch Wood",
      image: "/images/birch-wood.svg",
      description:
        language === "fr"
          ? "Bois franc réputé pour son odeur agréable et son écorce blanche distinctive. Parfait pour une ambiance chaleureuse. Séchage naturel 12-18 mois."
          : "Hardwood known for its pleasant scent and distinctive white bark. Perfect for a warm atmosphere. Natural drying 12-18 months.",
      features: [
        language === "fr" ? "🌲 Odeur agréable caractéristique" : "🌲 Characteristic pleasant scent",
        language === "fr" ? "🔥 Flamme vive et belle" : "🔥 Bright beautiful flame",
        language === "fr" ? "💨 Séchage rapide" : "💨 Quick drying",
        language === "fr" ? "🏡 Idéal résidentiel et foyer" : "🏡 Ideal for residential & fireplace",
        language === "fr" ? "📏 Bûches 14-16 pouces" : "📏 14-16 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "150$" : "$150",
        bulk3: language === "fr" ? "420$ (3 cordes)" : "$420 (3 cords)",
        bulk5: language === "fr" ? "680$ (5 cordes)" : "$680 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois Mélangé Économique" : "Economy Mixed Wood",
      image: "/images/mixed-wood.svg",
      description:
        language === "fr"
          ? "Mélange équilibré de bois durs (érable, bouleau, hêtre). Solution économique sans compromis sur la qualité. Parfait pour usage quotidien."
          : "Balanced mix of hardwoods (maple, birch, beech). Economical solution without compromising quality. Perfect for daily use.",
      features: [
        language === "fr"
          ? "💰 Meilleur rapport qualité-prix"
          : "💰 Best value for money",
        language === "fr"
          ? "🔥 Performance constante (4200 kcal/kg)"
          : "🔥 Consistent performance (4200 kcal/kg)",
        language === "fr" ? "📦 Grande polyvalence d'usage" : "📦 Great versatility",
        language === "fr" ? "✅ Toujours disponible en stock" : "✅ Always in stock",
        language === "fr" ? "📏 Bûches 14-18 pouces" : "📏 14-18 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "130$" : "$130",
        bulk3: language === "fr" ? "360$ (3 cordes)" : "$360 (3 cords)",
        bulk5: language === "fr" ? "600$ (5 cordes)" : "$600 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Merisier" : "Yellow Birch Wood",
      image: "/images/maple-wood.svg",
      description:
        language === "fr"
          ? "Bois dur noble québécois, excellent pouvoir calorifique. Combustion lente et régulière. Prisé pour son odeur subtile et sa qualité exceptionnelle."
          : "Noble Quebec hardwood, excellent heating value. Slow and steady burn. Prized for subtle scent and exceptional quality.",
      features: [
        language === "fr" ? "⭐ Qualité supérieure" : "⭐ Superior quality",
        language === "fr" ? "🔥 Combustion régulière (7-9h)" : "🔥 Steady burn (7-9h)",
        language === "fr" ? "🌡️ Chaleur intense et durable" : "🌡️ Intense lasting heat",
        language === "fr" ? "🌿 Odeur douce et agréable" : "🌿 Sweet pleasant scent",
        language === "fr" ? "📏 Bûches 16 pouces" : "📏 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "170$" : "$170",
        bulk3: language === "fr" ? "480$ (3 cordes)" : "$480 (3 cords)",
        bulk5: language === "fr" ? "780$ (5 cordes)" : "$780 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Frêne" : "Ash Wood",
      image: "/images/mixed-wood.svg",
      description:
        language === "fr"
          ? "Bois dur réputé pour brûler même vert. Excellent pour transition automne-hiver. Séchage rapide et chaleur soutenue. Disponibilité selon la saison."
          : "Hardwood known to burn even when green. Excellent for fall-winter transition. Quick drying and sustained heat. Seasonal availability.",
      features: [
        language === "fr" ? "🚀 Brûle même légèrement vert" : "🚀 Burns even slightly green",
        language === "fr" ? "⚡ Allumage facile et rapide" : "⚡ Easy quick ignition",
        language === "fr" ? "🔥 Chaleur soutenue (4300 kcal/kg)" : "🔥 Sustained heat (4300 kcal/kg)",
        language === "fr" ? "💨 Séchage rapide (6-12 mois)" : "💨 Quick drying (6-12 months)",
        language === "fr" ? "📏 Bûches 14-16 pouces" : "📏 14-16 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "155$" : "$155",
        bulk3: language === "fr" ? "435$ (3 cordes)" : "$435 (3 cords)",
        bulk5: language === "fr" ? "700$ (5 cordes)" : "$700 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois Vert à Sécher" : "Green Wood to Season",
      image: "/images/birch-wood.svg",
      description:
        language === "fr"
          ? "Bois fraîchement coupé, mélange de feuillus. Pour séchage personnel. Prix avantageux pour commande anticipée. Livraison printemps pour séchage été."
          : "Freshly cut wood, hardwood mix. For personal seasoning. Advantageous price for advance orders. Spring delivery for summer seasoning.",
      features: [
        language === "fr" ? "💵 Prix le plus bas" : "💵 Lowest price",
        language === "fr" ? "🌱 Fraîchement coupé" : "🌱 Freshly cut",
        language === "fr" ? "⏰ Séchage requis 12-18 mois" : "⏰ Requires 12-18 months seasoning",
        language === "fr" ? "📅 Commande anticipée recommandée" : "📅 Advance order recommended",
        language === "fr" ? "📏 Bûches 16-18 pouces" : "📏 16-18 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "90$" : "$90",
        bulk3: language === "fr" ? "240$ (3 cordes)" : "$240 (3 cords)",
        bulk5: language === "fr" ? "400$ (5 cordes)" : "$400 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Mélange Premium" : "Premium Mix",
      image: "/images/premium-mixed.svg",
      description:
        language === "fr"
          ? "Sélection des meilleurs bois durs : érable, merisier, chêne. Trié manuellement pour qualité maximale. Séché 24+ mois. Pour les connaisseurs exigeants."
          : "Selection of finest hardwoods: maple, yellow birch, oak. Hand-sorted for maximum quality. Seasoned 24+ months. For discerning connoisseurs.",
      features: [
        language === "fr" ? "⭐ Qualité exceptionnelle" : "⭐ Exceptional quality",
        language === "fr" ? "🔥 Pouvoir calorifique maximal (4800+ kcal/kg)" : "🔥 Maximum heat output (4800+ kcal/kg)",
        language === "fr" ? "⏱️ Combustion extra longue (10-12h)" : "⏱️ Extra long burn (10-12h)",
        language === "fr" ? "✨ Très faible taux de cendres" : "✨ Very low ash content",
        language === "fr" ? "📏 Bûches calibrées 16 pouces" : "📏 Calibrated 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "180$" : "$180",
        bulk3: language === "fr" ? "510$ (3 cordes)" : "$510 (3 cords)",
        bulk5: language === "fr" ? "840$ (5 cordes)" : "$840 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Granulés Premium" : "Premium Pellets",
      image: "/images/pellets-wood.svg",
      description:
        language === "fr"
          ? "Granulés de bois 100% feuillus, faible taux de cendres (<0.5%). DIN Plus certifiés. Chaleur constante et automatisée. Sacs de 15kg, livrés sur palette."
          : "100% hardwood pellets, low ash content (<0.5%). DIN Plus certified. Constant automated heat. 15kg bags, delivered on pallet.",
      features: [
        language === "fr" ? "🌟 Certification DIN Plus" : "🌟 DIN Plus certified",
        language === "fr" ? "🔥 Haut rendement énergétique" : "🔥 High energy efficiency",
        language === "fr" ? "✨ Taux de cendres < 0.5%" : "✨ Ash content < 0.5%",
        language === "fr" ? "📦 Sacs de 15kg (66 sacs/tonne)" : "📦 15kg bags (66 bags/ton)",
        language === "fr" ? "🚚 Livraison sur palette" : "🚚 Pallet delivery",
      ],
      pricing: {
        single: language === "fr" ? "9$/sac" : "$9/bag",
        bulk3: language === "fr" ? "550$/tonne (66 sacs)" : "$550/ton (66 bags)",
        bulk5: language === "fr" ? "2700$/5 tonnes" : "$2700/5 tons",
      },
    },
    {
      name: language === "fr" ? "Frêne Blanc" : "White Ash",
      image: "/images/ash-wood.svg",
      description:
        language === "fr"
          ? "Frêne blanc de première qualité. Réputé pour brûler même légèrement vert. Allumage ultra-rapide, chaleur intense. Stock limité - commandez tôt."
          : "Premium white ash. Known to burn even slightly green. Ultra-fast ignition, intense heat. Limited stock - order early.",
      features: [
        language === "fr" ? "⚡ Allumage ultra-rapide" : "⚡ Ultra-fast ignition",
        language === "fr" ? "🔥 Brûle même légèrement vert" : "🔥 Burns even slightly green",
        language === "fr" ? "🌡️ Chaleur intense (4400 kcal/kg)" : "🌡️ Intense heat (4400 kcal/kg)",
        language === "fr" ? "💨 Séchage rapide 8-12 mois" : "💨 Quick drying 8-12 months",
        language === "fr" ? "⚠️ Stock limité - réservation" : "⚠️ Limited stock - reservation",
      ],
      pricing: {
        single: language === "fr" ? "165$" : "$165",
        bulk3: language === "fr" ? "465$ (3 cordes)" : "$465 (3 cords)",
        bulk5: language === "fr" ? "750$ (5 cordes)" : "$750 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bouleau Jaune (Merisier)" : "Yellow Birch",
      image: "/images/birch-wood.svg",
      description:
        language === "fr"
          ? "Merisier (bouleau jaune) - arbre emblématique du Québec. Bois noble, odeur caractéristique d'essence de wintergreen. Combustion régulière et chaleur soutenue."
          : "Yellow birch - Quebec's emblematic tree. Noble wood, characteristic wintergreen scent. Steady burn and sustained heat.",
      features: [
        language === "fr" ? "🍁 Bois emblématique du Québec" : "🍁 Quebec's emblematic wood",
        language === "fr" ? "🌿 Odeur de wintergreen unique" : "🌿 Unique wintergreen scent",
        language === "fr" ? "🔥 Combustion stable (4500 kcal/kg)" : "🔥 Stable burn (4500 kcal/kg)",
        language === "fr" ? "⏱️ Durée 7-9 heures" : "⏱️ Duration 7-9 hours",
        language === "fr" ? "📏 Bûches sélectionnées 16 pouces" : "📏 Selected 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "175$" : "$175",
        bulk3: language === "fr" ? "495$ (3 cordes)" : "$495 (3 cords)",
        bulk5: language === "fr" ? "810$ (5 cordes)" : "$810 (5 cords)",
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
