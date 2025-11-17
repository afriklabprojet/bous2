export type Language = "fr" | "en";

export interface Translation {
  nav: {
    home: string;
    services: string;
    products: string;
    order: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    transport: {
      title: string;
      description: string;
    };
    firewood: {
      title: string;
      description: string;
    };
    delivery: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    address: string;
    email: string;
    phone: string;
  };
  order: {
    title: string;
    name: string;
    address: string;
    city: string;
    postalCode: string;
    woodType: string;
    quantity: string;
    phone: string;
    email: string;
    paymentMethod: string;
    deliveryDate: string;
    notes: string;
    submit: string;
    emailNote: string;
    woodTypes: {
      maple: string;
      birch: string;
      mixed: string;
      cherry: string;
      ash: string;
      green: string;
      premium: string;
      pellets: string;
      whiteAsh: string;
      yellowBirch: string;
    };
    paymentMethods: {
      interac: string;
    };
  };
  footer: {
    company: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      products: "Nos Produits",
      order: "Commander",
      contact: "Contact",
    },
    hero: {
      title: "Transport et Bois de Chauffage JSGC",
      subtitle: "Votre partenaire énergie au Québec",
      cta: "Commander maintenant",
    },
    services: {
      title: "Nos Services",
      transport: {
        title: "Transport",
        description:
          "Service de transport fiable pour tous vos besoins de marchandises.",
      },
      firewood: {
        title: "Bois de Chauffage",
        description:
          "Bois de chauffage de qualité supérieure : érable, bouleau et mélangé.",
      },
      delivery: {
        title: "Livraison",
        description: "Livraison rapide et fiable directement à votre domicile.",
      },
    },
    contact: {
      title: "Contactez-nous",
      address: "1100 Route 381, Ferland-et-Boilleau (Québec) G0V 1H0, Canada",
      email: "contact@jsgc.store",
      phone: "Téléphone",
    },
    order: {
      title: "Commander du bois de chauffage",
      name: "Nom complet",
      address: "Adresse de livraison complète",
      city: "Ville",
      postalCode: "Code postal",
      woodType: "Type de bois",
      quantity: "Quantité (cordes)",
      phone: "Téléphone",
      email: "Courriel",
      paymentMethod: "Méthode de paiement préférée",
      deliveryDate: "Date de livraison souhaitée",
      notes: "Notes ou instructions spéciales",
      submit: "Envoyer la commande",
      emailNote: "Vos informations seront envoyées par courriel à",
      woodTypes: {
        maple: "Bois d'Érable Premium - 160$",
        birch: "Bois de Bouleau Blanc - 150$",
        mixed: "Bois Mélangé Économique - 130$",
        cherry: "Bois de Merisier - 170$",
        ash: "Bois de Frêne - 155$",
        green: "Bois Vert à Sécher - 90$",
        premium: "Mélange Premium - 180$",
        pellets: "Granulés Premium - 250$/palette",
        whiteAsh: "Frêne Blanc - 165$",
        yellowBirch: "Bouleau Jaune - 175$",
      },
      paymentMethods: {
        interac: "Virement Interac",
      },
    },
    footer: {
      company: "Transport et Bois de Chauffage JSGC",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      products: "Our Products",
      order: "Order",
      contact: "Contact",
    },
    hero: {
      title: "Transport et Bois de Chauffage JSGC",
      subtitle: "Your Energy Partner in Quebec",
      cta: "Order Now",
    },
    services: {
      title: "Our Services",
      transport: {
        title: "Transport",
        description: "Reliable transport service for all your freight needs.",
      },
      firewood: {
        title: "Firewood",
        description: "Premium quality firewood: maple, birch, and mixed.",
      },
      delivery: {
        title: "Delivery",
        description: "Fast and reliable delivery directly to your home.",
      },
    },
    contact: {
      title: "Contact Us",
      address: "1100 Route 381, Ferland-et-Boilleau (Quebec) G0V 1H0, Canada",
      email: "contact@jsgc.store",
      phone: "Phone",
    },
    order: {
      title: "Order Firewood",
      name: "Full Name",
      address: "Complete Delivery Address",
      city: "City",
      postalCode: "Postal Code",
      woodType: "Wood Type",
      quantity: "Quantity (cords)",
      phone: "Phone",
      email: "Email",
      paymentMethod: "Preferred Payment Method",
      deliveryDate: "Preferred Delivery Date",
      notes: "Special Notes or Instructions",
      submit: "Send Order",
      emailNote: "Your information will be sent by email to",
      woodTypes: {
        maple: "Premium Maple Wood - $160",
        birch: "White Birch Wood - $150",
        mixed: "Economy Mixed Wood - $130",
        cherry: "Yellow Birch Wood - $170",
        ash: "Ash Wood - $155",
        green: "Green Wood to Season - $90",
        premium: "Premium Mix - $180",
        pellets: "Premium Pellets - $250/pallet",
        whiteAsh: "White Ash - $165",
        yellowBirch: "Yellow Birch - $175",
      },
      paymentMethods: {
        interac: "Interac Transfer",
      },
    },
    footer: {
      company: "Transport et Bois de Chauffage JSGC",
      rights: "All rights reserved.",
    },
  },
};
