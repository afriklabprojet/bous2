"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-br from-green-900 to-green-700 text-white mt-20 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 13.3C480 6.7 600 13.3 720 16.7C840 20 960 20 1080 13.3C1200 6.7 1320 -6.7 1380 -13.3L1440 -20V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center font-bold text-xl">
                J
              </div>
              <h3 className="text-3xl font-heading font-bold">JSGC</h3>
            </div>
            <p className="text-white/80 leading-relaxed">{t.footer.company}</p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>NEQ: 1175166686</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
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
              {t.contact.title}
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0"
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
                <p className="text-sm leading-relaxed">
                  1100 Route 381
                  <br />
                  Ferland-et-Boilleau (Québec)
                  <br />
                  G0V 1H0, Canada
                </p>
              </div>
              <a
                href="mailto:contact@jsgc.store"
                className="flex items-center hover:text-amber-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-3"
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
                <span className="break-all">
                  contact@jsgc.store
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">
              {t.nav.services}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                <span className="w-2 h-2 bg-amber-800 rounded-full"></span>
                <span>{t.services.transport.title}</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                <span className="w-2 h-2 bg-amber-800 rounded-full"></span>
                <span>{t.services.firewood.title}</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                <span className="w-2 h-2 bg-amber-800 rounded-full"></span>
                <span>{t.services.delivery.title}</span>
              </li>
            </ul>

            {/* Payment Badge */}
            <div className="mt-6 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-sm font-semibold text-white flex items-center">
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
                💳 Virement Interac
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              &copy; {currentYear} {t.footer.company}. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6 text-white/60">
              <span className="text-sm">Fait avec ❤️ au Québec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
    </footer>
  );
}
