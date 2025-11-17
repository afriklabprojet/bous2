"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/language-context";

export default function OrderPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-green-700 via-green-600 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg animate-[slide-up_0.6s_ease-out]">
            🛒 {language === "fr" ? "COMMANDE EN LIGNE" : "ONLINE ORDER"}
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-[slide-up_0.6s_ease-out_0.1s_both]">
            {t.order.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-[slide-up_0.6s_ease-out_0.2s_both]">
            {language === "fr"
              ? "Commandez votre bois de chauffage en 3 étapes simples"
              : "Order your firewood in 3 simple steps"}
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
              <div className="shrink-0 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-green-800">
                  {language === "fr" ? "Informations" : "Information"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Vos coordonnées" : "Your details"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
              <div className="shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-amber-800">
                  {language === "fr" ? "Commande" : "Order"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr"
                    ? "Produit et quantité"
                    : "Product & quantity"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
              <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-blue-800">
                  {language === "fr" ? "Confirmation" : "Confirmation"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Validation" : "Validation"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🚚</div>
            <p className="text-sm font-semibold text-gray-800">
              {language === "fr" ? "Livraison rapide" : "Fast delivery"}
            </p>
            <p className="text-xs text-gray-600">
              2-5 {language === "fr" ? "jours" : "days"}
            </p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-sm font-semibold text-gray-800">
              {language === "fr" ? "Qualité garantie" : "Quality guaranteed"}
            </p>
            <p className="text-xs text-gray-600">
              {language === "fr" ? "Bois séché" : "Dried wood"}
            </p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-sm font-semibold text-gray-800">
              {language === "fr" ? "Prix compétitifs" : "Competitive prices"}
            </p>
            <p className="text-xs text-gray-600">
              {language === "fr" ? "Rabais volume" : "Volume discount"}
            </p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📞</div>
            <p className="text-sm font-semibold text-gray-800">
              {language === "fr" ? "Support dédié" : "Dedicated support"}
            </p>
            <p className="text-xs text-gray-600">24/7</p>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Information Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Important Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-heading font-bold mb-6 text-green-800 flex items-center gap-3">
              <span className="text-3xl">ℹ️</span>
              {language === "fr"
                ? "Informations importantes"
                : "Important Information"}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <span className="text-green-700 font-bold text-xl shrink-0">
                  📏
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {language === "fr" ? "Unité de mesure" : "Unit of measure"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "fr"
                      ? "Le bois est vendu à la corde (128 pi³)"
                      : "Wood is sold by the cord (128 ft³)"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <span className="text-amber-700 font-bold text-xl shrink-0">
                  📦
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {language === "fr" ? "Commande minimum" : "Minimum order"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "fr" ? "1 corde" : "1 cord"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-700 font-bold text-xl shrink-0">
                  🎁
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {language === "fr" ? "Livraison gratuite" : "Free delivery"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "fr"
                      ? "Pour les commandes de 3 cordes et plus"
                      : "For orders of 3 cords or more"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-700 font-bold text-xl shrink-0">
                  ⏱️
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {language === "fr" ? "Délai de livraison" : "Delivery time"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "fr"
                      ? "2-5 jours ouvrables"
                      : "2-5 business days"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                <span className="text-pink-700 font-bold text-xl shrink-0">
                  💳
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {language === "fr"
                      ? "Paiement accepté"
                      : "Payment accepted"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "fr"
                      ? "Virement Interac"
                      : "Interac transfer"}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="space-y-6">
            <div className="bg-linear-to-br from-green-700 to-green-800 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📞</span>
                {language === "fr" ? "Besoin d'aide?" : "Need help?"}
              </h2>
              <p className="text-lg mb-6 opacity-95">
                {language === "fr"
                  ? "Notre équipe est là pour vous aider!"
                  : "Our team is here to help you!"}
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+14185551234"
                  className="block bg-white text-green-800 px-6 py-4 rounded-xl font-bold text-center hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  📱 (418) 555-1234
                </a>
                <a
                  href="mailto:contact@jsgc.store"
                  className="block bg-amber-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  ✉️ contact@jsgc.store
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
              <h3 className="text-xl font-heading font-bold mb-4 text-blue-800 flex items-center gap-2">
                <span className="text-2xl">❓</span>
                {language === "fr" ? "Questions fréquentes" : "FAQ"}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">
                    {language === "fr"
                      ? "Quelle quantité commander pour l'hiver?"
                      : "How much to order for winter?"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">
                    {language === "fr"
                      ? "Quel type de bois choisir?"
                      : "Which wood type to choose?"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">
                    {language === "fr"
                      ? "Comment stocker le bois?"
                      : "How to store wood?"}
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block mt-4 text-center text-blue-700 hover:text-blue-900 font-semibold text-sm"
              >
                {language === "fr" ? "Contactez-nous →" : "Contact us →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
