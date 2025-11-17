"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/language-context";

export default function OrderPage() {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-6 text-green-800">
            {t.order.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "fr"
              ? "Remplissez le formulaire ci-dessous pour commander votre bois de chauffage. Nous vous contacterons rapidement pour confirmer votre commande."
              : "Fill out the form below to order your firewood. We will contact you shortly to confirm your order."}
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Information */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold mb-4 text-green-700">
              {language === "fr"
                ? "Informations importantes"
                : "Important Information"}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-700 mr-3">•</span>
                <span>
                  {language === "fr"
                    ? "Le bois est vendu à la corde (128 pi³)"
                    : "Wood is sold by the cord (128 ft³)"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-3">•</span>
                <span>
                  {language === "fr"
                    ? "Commande minimum: 1 corde"
                    : "Minimum order: 1 cord"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-3">•</span>
                <span>
                  {language === "fr"
                    ? "Livraison gratuite pour les commandes de 3 cordes et plus"
                    : "Free delivery for orders of 3 cords or more"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-3">•</span>
                <span>
                  {language === "fr"
                    ? "Délai de livraison: 2-5 jours ouvrables"
                    : "Delivery time: 2-5 business days"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-3">•</span>
                <span>
                  {language === "fr"
                    ? "Paiement accepté: Virement Interac"
                    : "Payment accepted: Interac transfer"}
                </span>
              </li>
            </ul>

            {/* Payment Info Badge */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-700"
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
                <p className="text-green-800 font-semibold">
                  {language === "fr"
                    ? "💳 Virement Interac accepté"
                    : "💳 Interac Transfer Accepted"}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-700 mb-2">
              {language === "fr"
                ? "Vous préférez commander par téléphone?"
                : "Prefer to order by phone?"}
            </p>
            <p className="text-green-700 font-semibold text-lg">
              {language === "fr"
                ? "Appelez-nous ou envoyez un courriel"
                : "Call us or send an email"}
            </p>
            <a
              href="mailto:contact@jsgc.store"
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              contact@jsgc.store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
