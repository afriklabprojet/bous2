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
    woodType: string;
    quantity: string;
    phone: string;
    email: string;
    submit: string;
    woodTypes: {
      maple: string;
      birch: string;
      mixed: string;
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
        description:
          "Livraison rapide à domicile dans tout le Saguenay-Lac-Saint-Jean.",
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
      address: "Adresse de livraison",
      woodType: "Type de bois",
      quantity: "Quantité (cordes)",
      phone: "Téléphone",
      email: "Courriel",
      submit: "Envoyer la commande",
      woodTypes: {
        maple: "Érable",
        birch: "Bouleau",
        mixed: "Mélangé",
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
        description: "Fast home delivery throughout Saguenay-Lac-Saint-Jean.",
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
      address: "Delivery Address",
      woodType: "Wood Type",
      quantity: "Quantity (cords)",
      phone: "Phone",
      email: "Email",
      submit: "Send Order",
      woodTypes: {
        maple: "Maple",
        birch: "Birch",
        mixed: "Mixed",
      },
    },
    footer: {
      company: "Transport et Bois de Chauffage JSGC",
      rights: "All rights reserved.",
    },
  },
};
