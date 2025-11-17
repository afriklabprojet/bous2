"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Delivery Announcement Banner */}
      <div className="bg-linear-to-r from-green-700 via-green-600 to-green-700 text-white py-4 shadow-lg">
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
      <ProductsContent language={language} />
    </div>
  );
}

function ProductsContent({ language }: { language: string }) {
  const products = [
    {
      name: language === "fr" ? "Bois d'Érable Premium" : "Premium Maple Wood",
      image: "/images/maple-wood.jpg",
      description:
        language === "fr"
          ? "Bois dur de première qualité, séché naturellement 18-24 mois. Excellent pouvoir calorifique et combustion longue durée. Idéal pour chauffage principal."
          : "Premium hardwood, naturally dried 18-24 months. Excellent heat output and long-lasting burn. Ideal for primary heating.",
      features: [
        language === "fr"
          ? "🔥 Haute densité énergétique (4700 kcal/kg)"
          : "🔥 High energy density (4700 kcal/kg)",
        language === "fr"
          ? "⏱️ Combustion lente (8-10h)"
          : "⏱️ Slow burning (8-10h)",
        language === "fr" ? "🌡️ Température élevée" : "🌡️ High temperature",
        language === "fr"
          ? "✨ Faible taux de cendres (1%)"
          : "✨ Low ash content (1%)",
        language === "fr" ? "📏 Bûches 16 pouces" : "📏 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "130$" : "$130",
        bulk3: language === "fr" ? "370$ (3 cordes)" : "$370 (3 cords)",
        bulk5: language === "fr" ? "600$ (5 cordes)" : "$600 (5 cords)",
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
        language === "fr"
          ? "🌲 Odeur agréable caractéristique"
          : "🌲 Characteristic pleasant scent",
        language === "fr"
          ? "🔥 Flamme vive et belle"
          : "🔥 Bright beautiful flame",
        language === "fr" ? "💨 Séchage rapide" : "💨 Quick drying",
        language === "fr"
          ? "🏡 Idéal résidentiel et foyer"
          : "🏡 Ideal for residential & fireplace",
        language === "fr" ? "📏 Bûches 14-16 pouces" : "📏 14-16 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "120$" : "$120",
        bulk3: language === "fr" ? "340$ (3 cordes)" : "$340 (3 cords)",
        bulk5: language === "fr" ? "550$ (5 cordes)" : "$550 (5 cords)",
      },
    },
    {
      name:
        language === "fr" ? "Bois Mélangé Économique" : "Economy Mixed Wood",
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
        language === "fr"
          ? "📦 Grande polyvalence d'usage"
          : "📦 Great versatility",
        language === "fr"
          ? "✅ Toujours disponible en stock"
          : "✅ Always in stock",
        language === "fr" ? "📏 Bûches 14-18 pouces" : "📏 14-18 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "95$" : "$95",
        bulk3: language === "fr" ? "270$ (3 cordes)" : "$270 (3 cords)",
        bulk5: language === "fr" ? "450$ (5 cordes)" : "$450 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Merisier" : "Yellow Birch Wood",
      image: "/images/cherry-wood.jpg",
      description:
        language === "fr"
          ? "Bois dur noble québécois, excellent pouvoir calorifique. Combustion lente et régulière. Prisé pour son odeur subtile et sa qualité exceptionnelle."
          : "Noble Quebec hardwood, excellent heating value. Slow and steady burn. Prized for subtle scent and exceptional quality.",
      features: [
        language === "fr" ? "⭐ Qualité supérieure" : "⭐ Superior quality",
        language === "fr"
          ? "🔥 Combustion régulière (7-9h)"
          : "🔥 Steady burn (7-9h)",
        language === "fr"
          ? "🌡️ Chaleur intense et durable"
          : "🌡️ Intense lasting heat",
        language === "fr"
          ? "🌿 Odeur douce et agréable"
          : "🌿 Sweet pleasant scent",
        language === "fr" ? "📏 Bûches 16 pouces" : "📏 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "140$" : "$140",
        bulk3: language === "fr" ? "400$ (3 cordes)" : "$400 (3 cords)",
        bulk5: language === "fr" ? "670$ (5 cordes)" : "$670 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois de Frêne" : "Ash Wood",
      image: "/images/ash-wood.svg",
      description:
        language === "fr"
          ? "Bois dur réputé pour brûler même vert. Excellent pour transition automne-hiver. Séchage rapide et chaleur soutenue. Disponibilité selon la saison."
          : "Hardwood known to burn even when green. Excellent for fall-winter transition. Quick drying and sustained heat. Seasonal availability.",
      features: [
        language === "fr"
          ? "🚀 Brûle même légèrement vert"
          : "🚀 Burns even slightly green",
        language === "fr"
          ? "⚡ Allumage facile et rapide"
          : "⚡ Easy quick ignition",
        language === "fr"
          ? "🔥 Chaleur soutenue (4300 kcal/kg)"
          : "🔥 Sustained heat (4300 kcal/kg)",
        language === "fr"
          ? "💨 Séchage rapide (6-12 mois)"
          : "💨 Quick drying (6-12 months)",
        language === "fr" ? "📏 Bûches 14-16 pouces" : "📏 14-16 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "115$" : "$115",
        bulk3: language === "fr" ? "330$ (3 cordes)" : "$330 (3 cords)",
        bulk5: language === "fr" ? "540$ (5 cordes)" : "$540 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bois Vert à Sécher" : "Green Wood to Season",
      image: "/images/green-wood.svg",
      description:
        language === "fr"
          ? "Bois fraîchement coupé, mélange de feuillus. Pour séchage personnel. Prix avantageux pour commande anticipée. Livraison printemps pour séchage été."
          : "Freshly cut wood, hardwood mix. For personal seasoning. Advantageous price for advance orders. Spring delivery for summer seasoning.",
      features: [
        language === "fr" ? "💵 Prix le plus bas" : "💵 Lowest price",
        language === "fr" ? "🌱 Fraîchement coupé" : "🌱 Freshly cut",
        language === "fr"
          ? "⏰ Séchage requis 12-18 mois"
          : "⏰ Requires 12-18 months seasoning",
        language === "fr"
          ? "📅 Commande anticipée recommandée"
          : "📅 Advance order recommended",
        language === "fr" ? "📏 Bûches 16-18 pouces" : "📏 16-18 inch logs",
      ],
      pricing: {
        single: language === "fr" ? "80$" : "$80",
        bulk3: language === "fr" ? "230$ (3 cordes)" : "$230 (3 cords)",
        bulk5: language === "fr" ? "380$ (5 cordes)" : "$380 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Mélange Premium" : "Premium Mix",
      image: "/images/premium-mixed.svg",
      description:
        language === "fr"
          ? "Sélection des meilleurs bois durs : érable, frêne, merisier. Trié manuellement pour qualité maximale. Séché 24+ mois. Pour les connaisseurs exigeants."
          : "Selection of finest hardwoods: maple, ash, yellow birch. Hand-sorted for maximum quality. Seasoned 24+ months. For discerning connoisseurs.",
      features: [
        language === "fr"
          ? "⭐ Qualité exceptionnelle"
          : "⭐ Exceptional quality",
        language === "fr"
          ? "🔥 Pouvoir calorifique maximal (4800+ kcal/kg)"
          : "🔥 Maximum heat output (4800+ kcal/kg)",
        language === "fr"
          ? "⏱️ Combustion extra longue (10-12h)"
          : "⏱️ Extra long burn (10-12h)",
        language === "fr"
          ? "✨ Très faible taux de cendres"
          : "✨ Very low ash content",
        language === "fr"
          ? "📏 Bûches calibrées 16 pouces"
          : "📏 Calibrated 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "125$" : "$125",
        bulk3: language === "fr" ? "360$ (3 cordes)" : "$360 (3 cords)",
        bulk5: language === "fr" ? "600$ (5 cordes)" : "$600 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Granulés Premium" : "Premium Pellets",
      image: "/images/pellets-wood.svg",
      description:
        language === "fr"
          ? "Granulés de bois 100% naturels, sacs de 40 lb. Combustion propre et efficace pour poêles à granulés. Chaleur constante et automatisée. Palette de 50 sacs."
          : "100% natural wood pellets, 40 lb bags. Clean and efficient combustion for pellet stoves. Constant automated heat. 50-bag pallet.",
      features: [
        language === "fr" ? "🌱 100% bois naturel" : "🌱 100% natural wood",
        language === "fr"
          ? "🔥 Combustion propre et efficace"
          : "🔥 Clean efficient combustion",
        language === "fr" ? "✨ Faible taux de cendres" : "✨ Low ash content",
        language === "fr"
          ? "📦 Palette de 50 sacs (40 lb)"
          : "📦 50-bag pallet (40 lb)",
        language === "fr"
          ? "♨️ Idéal poêles à granulés"
          : "♨️ Ideal for pellet stoves",
      ],
      pricing: {
        single: language === "fr" ? "260$/palette" : "$260/pallet",
        bulk3: language === "fr" ? "750$ (3 palettes)" : "$750 (3 pallets)",
        bulk5: language === "fr" ? "1250$ (5 palettes)" : "$1250 (5 pallets)",
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
        language === "fr"
          ? "⚡ Allumage ultra-rapide"
          : "⚡ Ultra-fast ignition",
        language === "fr"
          ? "🔥 Brûle même légèrement vert"
          : "🔥 Burns even slightly green",
        language === "fr"
          ? "🌡️ Chaleur intense (4400 kcal/kg)"
          : "🌡️ Intense heat (4400 kcal/kg)",
        language === "fr"
          ? "💨 Séchage rapide 8-12 mois"
          : "💨 Quick drying 8-12 months",
        language === "fr"
          ? "⚠️ Stock limité - réservation"
          : "⚠️ Limited stock - reservation",
      ],
      pricing: {
        single: language === "fr" ? "125$" : "$125",
        bulk3: language === "fr" ? "360$ (3 cordes)" : "$360 (3 cords)",
        bulk5: language === "fr" ? "600$ (5 cordes)" : "$600 (5 cords)",
      },
    },
    {
      name: language === "fr" ? "Bouleau Jaune (Merisier)" : "Yellow Birch",
      image: "/images/yellow-birch.svg",
      description:
        language === "fr"
          ? "Merisier (bouleau jaune) - arbre emblématique du Québec. Bois noble, odeur caractéristique d'essence de wintergreen. Combustion régulière et chaleur soutenue."
          : "Yellow birch - Quebec's emblematic tree. Noble wood, characteristic wintergreen scent. Steady burn and sustained heat.",
      features: [
        language === "fr"
          ? "🍁 Bois emblématique du Québec"
          : "🍁 Quebec's emblematic wood",
        language === "fr"
          ? "🌿 Odeur de wintergreen unique"
          : "🌿 Unique wintergreen scent",
        language === "fr"
          ? "🔥 Combustion stable (4500 kcal/kg)"
          : "🔥 Stable burn (4500 kcal/kg)",
        language === "fr" ? "⏱️ Durée 7-9 heures" : "⏱️ Duration 7-9 hours",
        language === "fr"
          ? "📏 Bûches sélectionnées 16 pouces"
          : "📏 Selected 16-inch logs",
      ],
      pricing: {
        single: language === "fr" ? "145$" : "$145",
        bulk3: language === "fr" ? "420$ (3 cordes)" : "$420 (3 cords)",
        bulk5: language === "fr" ? "700$ (5 cordes)" : "$700 (5 cords)",
      },
    },
  ];

  return (
    <div className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-[slide-up_0.6s_ease-out]">
          <div className="inline-block mb-4 px-6 py-2 bg-green-700 text-white rounded-full text-sm font-bold">
            🔥 {language === "fr" ? "CATALOGUE COMPLET" : "FULL CATALOG"}
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-green-800">
            {language === "fr"
              ? "Nos Produits Premium"
              : "Our Premium Products"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "fr"
              ? "Bois de chauffage 100% naturel, séché avec soin et livré rapidement. Choisissez la qualité pour votre confort 🌲"
              : "100% natural firewood, carefully dried and delivered quickly. Choose quality for your comfort 🌲"}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-green-200">
              <span className="text-green-800 font-semibold">
                ✓{" "}
                {language === "fr" ? "Séché Naturellement" : "Naturally Dried"}
              </span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-amber-200">
              <span className="text-amber-800 font-semibold">
                ✓ {language === "fr" ? "Livraison Rapide" : "Fast Delivery"}
              </span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-blue-200">
              <span className="text-blue-800 font-semibold">
                ✓{" "}
                {language === "fr" ? "Prix Transparents" : "Transparent Prices"}
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-green-400 relative"
            >
              {/* Premium Badge for top products */}
              {index < 3 && (
                <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {index === 0 &&
                    "🔥 " + (language === "fr" ? "POPULAIRE" : "POPULAR")}
                  {index === 1 &&
                    "⭐ " + (language === "fr" ? "QUALITÉ" : "QUALITY")}
                  {index === 2 &&
                    "💰 " + (language === "fr" ? "VALEUR" : "VALUE")}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-50 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Header */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-green-800 group-hover:text-green-900 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="text-green-600 mr-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Table */}
                <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5 space-y-3 mb-4">
                  <div className="text-center mb-2">
                    <p className="text-xs uppercase tracking-wide text-green-700 font-bold">
                      💵 {language === "fr" ? "TARIFS" : "PRICING"}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-green-200">
                    <span className="text-gray-700 font-semibold">
                      {language === "fr" ? "1 corde" : "1 cord"}
                    </span>
                    <span className="text-green-800 font-bold text-2xl">
                      {product.pricing.single}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200 bg-white/60 px-3 rounded-lg">
                    <div>
                      <span className="text-gray-700 font-semibold block">
                        {language === "fr" ? "3 cordes" : "3 cords"}
                      </span>
                      <span className="text-xs text-green-600">
                        💰 {language === "fr" ? "Économisez!" : "Save!"}
                      </span>
                    </div>
                    <span className="text-green-800 font-bold text-xl">
                      {product.pricing.bulk3}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-linear-to-r from-amber-100 to-orange-100 px-3 rounded-lg border-2 border-amber-300">
                    <div>
                      <span className="text-gray-800 font-bold flex items-center gap-2">
                        {language === "fr" ? "5 cordes" : "5 cords"}
                        <span className="text-xs bg-amber-800 text-white px-3 py-1 rounded-full animate-pulse">
                          ⭐{" "}
                          {language === "fr" ? "MEILLEUR PRIX" : "BEST VALUE"}
                        </span>
                      </span>
                    </div>
                    <span className="text-amber-900 font-bold text-xl">
                      {product.pricing.bulk5}
                    </span>
                  </div>
                </div>

                {/* Order Button */}
                <Link
                  href="/commande"
                  className="block w-full bg-linear-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl group-hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    🛒{" "}
                    {language === "fr" ? "Commander Maintenant" : "Order Now"}
                    <svg
                      className="w-5 h-5"
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
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-r from-green-700 via-green-800 to-green-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              🔥 {language === "fr" ? "COMMANDEZ DÈS MAINTENANT" : "ORDER NOW"}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {language === "fr"
                ? "Prêt pour un hiver au chaud ?"
                : "Ready for a warm winter?"}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {language === "fr"
                ? "✓ Livraison rapide sous 24-48h • ✓ Qualité garantie • ✓ Paiement sécurisé"
                : "✓ Fast delivery 24-48h • ✓ Guaranteed quality • ✓ Secure payment"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/commande"
                className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-800/50 hover:scale-105"
              >
                🛒 {language === "fr" ? "Commander Maintenant" : "Order Now"}
                <svg
                  className="w-6 h-6"
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/50 px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                📞 {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
            <div className="text-5xl mb-4">📏</div>
            <h3 className="font-bold text-xl mb-3 text-green-800">
              {language === "fr" ? "Unité de Mesure" : "Unit of Measure"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {language === "fr"
                ? "Vendu à la corde standard (128 pi³) - Mesure officielle garantie"
                : "Sold by standard cord (128 ft³) - Official measure guaranteed"}
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
            <div className="text-5xl mb-4">💧</div>
            <h3 className="font-bold text-xl mb-3 text-green-800">
              {language === "fr" ? "Taux d'Humidité" : "Moisture Content"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {language === "fr"
                ? "Séché naturellement ≤ 20% - Prêt à brûler immédiatement"
                : "Naturally dried ≤ 20% - Ready to burn immediately"}
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl mb-3 text-green-800">
              {language === "fr" ? "Livraison Rapide" : "Fast Delivery"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {language === "fr"
                ? "Livraison rapide et fiable - Service professionnel garanti"
                : "Fast and reliable delivery - Professional service guaranteed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
