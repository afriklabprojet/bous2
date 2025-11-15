"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    woodType: "maple",
    quantity: "",
    phone: "",
    email: "",
    paymentMethod: "interac",
    deliveryDate: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            language === "fr"
              ? "✅ Commande envoyée avec succès! Nous vous contacterons sous peu."
              : "✅ Order sent successfully! We will contact you shortly.",
        });
        // Reset form
        setFormData({
          name: "",
          address: "",
          city: "",
          postalCode: "",
          woodType: "maple",
          quantity: "",
          phone: "",
          email: "",
          paymentMethod: "interac",
          deliveryDate: "",
          notes: "",
        });
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(data.error || "Failed to send order");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          language === "fr"
            ? "❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement."
            : "❌ Error sending order. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Old mailto backup function
  const handleMailtoFallback = () => {
    const subject = `${
      language === "fr" ? "Commande de bois de chauffage" : "Firewood Order"
    } - ${formData.name}`;
    const body = `
${
  language === "fr"
    ? "NOUVELLE COMMANDE DE BOIS DE CHAUFFAGE"
    : "NEW FIREWOOD ORDER"
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${language === "fr" ? "CLIENT" : "CUSTOMER"}:
${language === "fr" ? "Nom" : "Name"}: ${formData.name}
${language === "fr" ? "Téléphone" : "Phone"}: ${formData.phone}
${language === "fr" ? "Courriel" : "Email"}: ${formData.email}

${language === "fr" ? "ADRESSE DE LIVRAISON" : "DELIVERY ADDRESS"}:
${formData.address}
${formData.city}, ${formData.postalCode}

${language === "fr" ? "DÉTAILS DE LA COMMANDE" : "ORDER DETAILS"}:
${language === "fr" ? "Type de bois" : "Wood type"}: ${formData.woodType}
${language === "fr" ? "Quantité" : "Quantity"}: ${formData.quantity} ${
      language === "fr" ? "corde(s)" : "cord(s)"
    }

${language === "fr" ? "PAIEMENT ET LIVRAISON" : "PAYMENT & DELIVERY"}:
${language === "fr" ? "Méthode de paiement" : "Payment method"}: ${
      formData.paymentMethod
    }
${language === "fr" ? "Date souhaitée" : "Preferred date"}: ${
      formData.deliveryDate ||
      (language === "fr" ? "Dès que possible" : "As soon as possible")
    }

${
  formData.notes
    ? `${language === "fr" ? "NOTES SPÉCIALES" : "SPECIAL NOTES"}:\n${
        formData.notes
      }`
    : ""
}
    `.trim();

    const mailtoLink = `mailto:contact@jsgc.store?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
    >
      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-semibold">{submitStatus.message}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Section: Client Information */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-heading font-bold text-green-700 mb-4">
            {language === "fr"
              ? "📋 Informations Client"
              : "📋 Customer Information"}
          </h3>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.order.name} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={language === "fr" ? "Jean Tremblay" : "John Smith"}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.phone} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(418) 555-0123"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={
                  language === "fr" ? "votre@email.com" : "your@email.com"
                }
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section: Delivery Address */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-heading font-bold text-green-700 mb-4">
            {language === "fr"
              ? "📍 Adresse de Livraison"
              : "📍 Delivery Address"}
          </h3>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.order.address} *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder={
                language === "fr" ? "123 Rue Principale" : "123 Main Street"
              }
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.city} *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder={language === "fr" ? "Chicoutimi" : "Chicoutimi"}
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.postalCode} *
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                required
                placeholder="G0V 1H0"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section: Order Details */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-heading font-bold text-green-700 mb-4">
            {language === "fr"
              ? "🪵 Détails de la Commande"
              : "🪵 Order Details"}
          </h3>

          {/* Wood Type */}
          <div className="mb-4">
            <label
              htmlFor="woodType"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.order.woodType} *
            </label>
            <select
              id="woodType"
              name="woodType"
              required
              value={formData.woodType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
            >
              <option value="maple">{t.order.woodTypes.maple}</option>
              <option value="birch">{t.order.woodTypes.birch}</option>
              <option value="mixed">{t.order.woodTypes.mixed}</option>
              <option value="cherry">{t.order.woodTypes.cherry}</option>
              <option value="ash">{t.order.woodTypes.ash}</option>
              <option value="green">{t.order.woodTypes.green}</option>
              <option value="premium">{t.order.woodTypes.premium}</option>
              <option value="pellets">{t.order.woodTypes.pellets}</option>
              <option value="whiteAsh">{t.order.woodTypes.whiteAsh}</option>
              <option value="yellowBirch">
                {t.order.woodTypes.yellowBirch}
              </option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.quantity} *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                required
                min="1"
                placeholder="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                {language === "fr"
                  ? "💡 3+ cordes = Livraison gratuite!"
                  : "💡 3+ cords = Free delivery!"}
              </p>
            </div>

            {/* Delivery Date */}
            <div>
              <label
                htmlFor="deliveryDate"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t.order.deliveryDate}
              </label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section: Payment & Notes */}
        <div className="pb-6">
          <h3 className="text-xl font-heading font-bold text-green-700 mb-4">
            {language === "fr" ? "💳 Paiement & Notes" : "💳 Payment & Notes"}
          </h3>

          {/* Payment Method */}
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.order.paymentMethod} *
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              required
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
            >
              <option value="interac">{t.order.paymentMethods.interac}</option>
              <option value="cash">{t.order.paymentMethods.cash}</option>
              <option value="check">{t.order.paymentMethods.check}</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.order.notes}
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder={
                language === "fr"
                  ? "Ex: Laisser près du garage, Appeler avant livraison, etc."
                  : "Ex: Leave near garage, Call before delivery, etc."
              }
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg text-lg ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-800 hover:bg-amber-900 hover:-translate-y-1"
          } text-white`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {language === "fr" ? "Envoi en cours..." : "Sending..."}
            </span>
          ) : (
            <>📧 {t.order.submit}</>
          )}
        </button>

        {/* Email Note */}
        <p className="text-sm text-center text-gray-500 mt-4">
          {t.order.emailNote}:{" "}
          <span className="font-semibold text-green-700">
            contact@jsgc.store
          </span>
        </p>
      </div>
    </form>
  );
}
