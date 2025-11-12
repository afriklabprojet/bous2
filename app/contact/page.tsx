"use client";

import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-6 text-green-800">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "fr"
              ? "N'hésitez pas à nous contacter pour toute question ou demande de renseignements"
              : "Don't hesitate to contact us for any questions or inquiries"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 text-green-700">
                Transport et Bois de Chauffage JSGC
              </h2>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-green-700 mt-1 shrink-0"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Adresse" : "Address"}
                    </h3>
                    <p className="text-gray-600">
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
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-green-700 mt-1 shrink-0"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "fr" ? "Courriel" : "Email"}
                    </h3>
                    <a
                      href="mailto:contact@jsgc.ca"
                      className="text-green-700 hover:text-green-800 transition-colors"
                    >
                      contact@jsgc.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-green-700 mt-1 shrink-0"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
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
              <div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-green-700 mt-1 shrink-0"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "fr"
                        ? "Heures d'ouverture"
                        : "Business Hours"}
                    </h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Lundi - Vendredi: 8h00 - 17h00"
                        : "Monday - Friday: 8:00 AM - 5:00 PM"}
                      <br />
                      {language === "fr"
                        ? "Samedi: 9h00 - 12h00"
                        : "Saturday: 9:00 AM - 12:00 PM"}
                      <br />
                      {language === "fr" ? "Dimanche: Fermé" : "Sunday: Closed"}
                    </p>
                  </div>
                </div>
              </div>

              {/* NEQ */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  NEQ: 1175166686
                  <br />
                  {language === "fr"
                    ? "Entreprise immatriculée au Québec"
                    : "Registered business in Quebec"}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px]">
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

            {/* Quick Contact Card */}
            <div className="bg-linear-to-r from-green-700 to-green-900 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                {language === "fr" ? "Prêt à commander?" : "Ready to order?"}
              </h3>
              <p className="mb-6 text-gray-50">
                {language === "fr"
                  ? "Commandez votre bois de chauffage dès maintenant"
                  : "Order your firewood now"}
              </p>

              {/* Payment Info */}
              <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-sm font-semibold flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
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
                    ? "💳 Virement Interac accepté"
                    : "💳 Interac Transfer Accepted"}
                </p>
              </div>

              <a
                href="/commande"
                className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full text-center"
              >
                {language === "fr" ? "Commander" : "Order Now"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
