"use client";

import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
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
            📧 {language === "fr" ? "CONTACTEZ-NOUS" : "CONTACT US"}
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {language === "fr"
              ? "N'hésitez pas à nous contacter pour toute question ou demande de renseignements"
              : "Don't hesitate to contact us for any questions or inquiries"}
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Réponse Rapide" : "Quick Response"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Support Dédié" : "Dedicated Support"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📍</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Local" : "Local"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold text-gray-900">
                {language === "fr" ? "Conseil Expert" : "Expert Advice"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-t-4 border-green-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20"></div>
              <div className="relative">
                <h2 className="text-3xl font-heading font-bold mb-8 text-green-800">
                  Transport et Bois de Chauffage JSGC
                </h2>

                {/* Address */}
                <div className="mb-6 bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg shrink-0">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {language === "fr" ? "Adresse" : "Address"}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        1100 Route 381
                        <br />
                        Ferland-et-Boilleau (Québec)
                        <br />
                        G0V 1H0, Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6 bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg shrink-0">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {language === "fr" ? "Courriel" : "Email"}
                      </h3>
                      <a
                        href="mailto:contact@jsgc.store"
                        className="text-green-700 hover:text-green-800 font-semibold text-lg hover:underline"
                      >
                        contact@jsgc.store
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6 bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg shrink-0">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {t.contact.phone}
                      </h3>
                      <p className="text-gray-600">
                        {language === "fr"
                          ? "Contactez-nous par courriel"
                          : "Contact us by email"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shrink-0">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {language === "fr"
                          ? "Heures d'ouverture"
                          : "Business Hours"}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-medium">
                          {language === "fr"
                            ? "Lundi - Vendredi:"
                            : "Monday - Friday:"}
                        </span>{" "}
                        {language === "fr"
                          ? "8h00 - 17h00"
                          : "8:00 AM - 5:00 PM"}
                        <br />
                        <span className="font-medium">
                          {language === "fr" ? "Samedi:" : "Saturday:"}
                        </span>{" "}
                        {language === "fr"
                          ? "9h00 - 12h00"
                          : "9:00 AM - 12:00 PM"}
                        <br />
                        <span className="font-medium">
                          {language === "fr" ? "Dimanche:" : "Sunday:"}
                        </span>{" "}
                        {language === "fr" ? "Fermé" : "Closed"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* NEQ */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">NEQ:</span> 1175166686
                    <br />
                    {language === "fr"
                      ? "Entreprise immatriculée au Québec"
                      : "Registered business in Quebec"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] border-2 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8!2d-71.0!3d48.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMwJzAwLjAiTiA3McKwMDAnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JSGC Location"
              ></iframe>
            </div>

            {/* Quick Action Cards */}
            <div className="space-y-4">
              {/* Order Card */}
              <div className="relative bg-linear-to-br from-amber-600 to-amber-800 text-white rounded-2xl shadow-2xl p-8 overflow-hidden group hover:shadow-3xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <div className="relative">
                  <div className="text-4xl mb-3">🛒</div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {language === "fr"
                      ? "Prêt à commander?"
                      : "Ready to order?"}
                  </h3>
                  <p className="mb-6 text-amber-50">
                    {language === "fr"
                      ? "Commandez votre bois de chauffage dès maintenant"
                      : "Order your firewood now"}
                  </p>
                  <a
                    href="/commande"
                    className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all w-full text-center"
                  >
                    {language === "fr" ? "Commander Maintenant" : "Order Now"}
                  </a>
                </div>
              </div>

              {/* Products Card */}
              <div className="relative bg-linear-to-br from-green-600 to-green-800 text-white rounded-2xl shadow-2xl p-8 overflow-hidden group hover:shadow-3xl transition-shadow">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <div className="relative">
                  <div className="text-4xl mb-3">🔥</div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {language === "fr"
                      ? "Découvrez nos produits"
                      : "Discover our products"}
                  </h3>
                  <p className="mb-6 text-green-50">
                    {language === "fr"
                      ? "Consultez notre catalogue complet"
                      : "Browse our complete catalog"}
                  </p>
                  <a
                    href="/produits"
                    className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all w-full text-center"
                  >
                    {language === "fr" ? "Voir les Produits" : "View Products"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
