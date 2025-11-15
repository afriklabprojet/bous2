'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    woodType: 'maple',
    quantity: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Commande de bois de chauffage - ${formData.name}`;
    const body = `
Nom: ${formData.name}
Adresse de livraison: ${formData.address}
Type de bois: ${formData.woodType}
Quantité: ${formData.quantity} corde(s)
Téléphone: ${formData.phone}
Courriel: ${formData.email}
    `.trim();

    const mailtoLink = `mailto:contact@jsgc.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.order.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.order.address} *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>

        {/* Wood Type */}
        <div>
          <label htmlFor="woodType" className="block text-sm font-semibold text-gray-700 mb-2">
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
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.order.quantity} *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.order.phone} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.order.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg"
        >
          {t.order.submit}
        </button>
      </div>
    </form>
  );
}
