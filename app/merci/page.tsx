"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThankYouContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  // Get order details from URL params
  const name = searchParams?.get("name") || "";
  const woodType = searchParams?.get("woodType") || "";
  const quantity = searchParams?.get("quantity") || "";
  const address = searchParams?.get("address") || "";
  const city = searchParams?.get("city") || "";
  const postalCode = searchParams?.get("postalCode") || "";
  const phone = searchParams?.get("phone") || "";
  const email = searchParams?.get("email") || "";
  const paymentMethod = searchParams?.get("paymentMethod") || "";
  const deliveryDate = searchParams?.get("deliveryDate") || "";
  const notes = searchParams?.get("notes") || "";

  // Wood type translations
  const woodTypes: { [key: string]: { fr: string; en: string } } = {
    maple: { fr: "Érable Premium", en: "Premium Maple" },
    birch: { fr: "Bouleau Blanc", en: "White Birch" },
    mixed: { fr: "Mélangé Économique", en: "Mixed Economic" },
    cherry: { fr: "Merisier", en: "Cherry" },
    ash: { fr: "Frêne", en: "Ash" },
    green: { fr: "Bois Vert", en: "Green Wood" },
    premium: { fr: "Mélange Premium", en: "Premium Mix" },
    whiteash: { fr: "Frêne Blanc", en: "White Ash" },
    yellowbirch: { fr: "Bouleau Jaune", en: "Yellow Birch" },
    pellets: { fr: "Granulés Premium", en: "Premium Pellets" },
  };

  const paymentMethods: { [key: string]: { fr: string; en: string } } = {
    interac: { fr: "Virement Interac", en: "Interac Transfer" },
  };

  const woodTypeName =
    woodTypes[woodType]?.[language as "fr" | "en"] || woodType;
  const paymentMethodName =
    paymentMethods[paymentMethod]?.[language as "fr" | "en"] || paymentMethod;

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12 animate-[slide-up_0.6s_ease-out]">
          <div className="inline-block bg-green-700 text-white p-6 rounded-full mb-6 shadow-2xl">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-green-800">
            {language === "fr" ? "🎉 Commande Reçue !" : "🎉 Order Received!"}
          </h1>
          <p className="text-xl text-gray-600">
            {language === "fr"
              ? "Merci pour votre confiance ! Nous avons bien reçu votre commande."
              : "Thank you for your trust! We have received your order."}
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-2 border-green-100">
          <h2 className="text-3xl font-heading font-bold mb-6 text-green-800 flex items-center gap-3">
            <span>📋</span>
            {language === "fr" ? "Récapitulatif de commande" : "Order Summary"}
          </h2>

          {/* Customer Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span>👤</span>
              {language === "fr"
                ? "Informations client"
                : "Customer Information"}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === "fr" ? "Nom complet" : "Full Name"}
                </p>
                <p className="font-semibold text-gray-900">{name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === "fr" ? "Téléphone" : "Phone"}
                </p>
                <p className="font-semibold text-gray-900">{phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === "fr" ? "Adresse" : "Address"}
                </p>
                <p className="font-semibold text-gray-900">
                  {address}, {city}, {postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span>🪵</span>
              {language === "fr" ? "Détails de la commande" : "Order Details"}
            </h3>
            <div className="bg-linear-to-r from-amber-50 to-green-50 rounded-xl p-6 border-2 border-amber-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {language === "fr" ? "Type de bois" : "Wood Type"}
                  </p>
                  <p className="text-2xl font-bold text-green-800">
                    {woodTypeName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {language === "fr" ? "Quantité" : "Quantity"}
                  </p>
                  <p className="text-2xl font-bold text-green-800">
                    {quantity}{" "}
                    {language === "fr"
                      ? quantity === "1"
                        ? "corde"
                        : "cordes"
                      : quantity === "1"
                      ? "cord"
                      : "cords"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {language === "fr" ? "Mode de paiement" : "Payment Method"}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {paymentMethodName}
                  </p>
                </div>
                {deliveryDate && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === "fr"
                        ? "Date de livraison souhaitée"
                        : "Desired Delivery Date"}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(deliveryDate).toLocaleDateString(
                        language === "fr" ? "fr-CA" : "en-CA",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                )}
              </div>
              {notes && (
                <div className="mt-6 pt-6 border-t border-amber-300">
                  <p className="text-sm text-gray-600 mb-2">
                    {language === "fr" ? "Notes" : "Notes"}
                  </p>
                  <p className="text-gray-900 italic">{notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 mb-8">
            <h3 className="text-xl font-bold mb-4 text-amber-800 flex items-center gap-2">
              <span>💳</span>
              {language === "fr"
                ? "Instructions de Paiement"
                : "Payment Instructions"}
            </h3>
            <div className="bg-white rounded-lg p-6 border-2 border-amber-200">
              <p className="text-gray-700 mb-4">
                {language === "fr"
                  ? "Veuillez envoyer votre virement Interac à :"
                  : "Please send your Interac transfer to:"}
              </p>
              <div className="bg-green-700 text-white rounded-xl p-6 text-center mb-4">
                <p className="text-sm mb-2 opacity-90">
                  {language === "fr" ? "Adresse email Interac" : "Interac email address"}
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  📧 contact@jsgc.store
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">💡</span>
                  <span>
                    <strong>
                      {language === "fr" ? "Important :" : "Important:"}
                    </strong>{" "}
                    {language === "fr"
                      ? "Veuillez inclure votre nom et la référence de commande dans le message du virement."
                      : "Please include your name and order reference in the transfer message."}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center gap-2">
              <span>📞</span>
              {language === "fr" ? "Prochaines étapes" : "Next Steps"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">
                  {language === "fr"
                    ? "Votre commande a été envoyée avec succès"
                    : "Your order has been sent successfully"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">→</span>
                <span className="text-gray-700">
                  {language === "fr"
                    ? "Notre équipe va vous contacter dans les 24 heures pour confirmer les détails"
                    : "Our team will contact you within 24 hours to confirm details"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">🚚</span>
                <span className="text-gray-700">
                  {language === "fr"
                    ? "La livraison sera planifiée selon vos disponibilités"
                    : "Delivery will be scheduled according to your availability"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">💬</span>
                <span className="text-gray-700">
                  {language === "fr"
                    ? "Pour toute question, contactez-nous au "
                    : "For any questions, contact us at "}
                  <a
                    href="tel:+14185551234"
                    className="font-bold text-green-700 hover:text-green-900"
                  >
                    (418) 555-1234
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>🏠</span>
            {language === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Link>
          <Link
            href="/produits"
            className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>🪵</span>
            {language === "fr" ? "Voir nos produits" : "View Products"}
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>📞</span>
            {language === "fr" ? "Nous contacter" : "Contact Us"}
          </Link>
        </div>

        {/* Trust Message */}
        <div className="text-center bg-linear-to-r from-green-700 to-green-800 text-white rounded-2xl p-8 shadow-2xl">
          <p className="text-2xl font-heading font-bold mb-4">
            {language === "fr"
              ? "Merci de votre confiance ! 🙏"
              : "Thank you for your trust! 🙏"}
          </p>
          <p className="text-lg opacity-90">
            {language === "fr"
              ? "Transport et Bois de Chauffage JSGC - Votre partenaire énergie au Québec"
              : "Transport et Bois de Chauffage JSGC - Your energy partner in Quebec"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl">Loading...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
