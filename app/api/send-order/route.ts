import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend only when the API is called, not at build time
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      woodType,
      quantity,
      paymentMethod,
      deliveryDate,
      notes,
      language,
    } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !postalCode ||
      !woodType ||
      !quantity
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isEnglish = language === "en";

    // Initialize Resend client
    const resend = getResend();

    // Send email to business
    const { error: businessError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "JSGC <contact@jsgc.store>",
      to: process.env.EMAIL_TO || "contact@jsgc.store",
      subject: `${
        isEnglish ? "🪵 New Firewood Order" : "🪵 Nouvelle Commande de Bois"
      } - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f5f5f5;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .section {
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 8px;
                border-left: 4px solid #2e7d32;
              }
              .section h2 {
                color: #2e7d32;
                margin-top: 0;
                font-size: 18px;
                border-bottom: 2px solid #e0e0e0;
                padding-bottom: 10px;
              }
              .info-row {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #f0f0f0;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: bold;
                color: #666;
              }
              .value {
                color: #333;
              }
              .notes-box {
                background: #fff9c4;
                padding: 15px;
                border-radius: 5px;
                border-left: 4px solid #fbc02d;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                color: #999;
                margin-top: 30px;
                font-size: 12px;
              }
              .highlight {
                background: #c8e6c9;
                padding: 2px 6px;
                border-radius: 3px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🪵 ${
                isEnglish ? "New Order Received" : "Nouvelle Commande Reçue"
              }</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Transport et Bois de Chauffage JSGC</p>
            </div>
            
            <div class="content">
              <!-- Customer Information -->
              <div class="section">
                <h2>👤 ${
                  isEnglish ? "Customer Information" : "Informations Client"
                }</h2>
                <div class="info-row">
                  <span class="label">${isEnglish ? "Name" : "Nom"}:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Phone" : "Téléphone"
                  }:</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Email" : "Courriel"
                  }:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
              </div>

              <!-- Delivery Address -->
              <div class="section">
                <h2>📍 ${
                  isEnglish ? "Delivery Address" : "Adresse de Livraison"
                }</h2>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Address" : "Adresse"
                  }:</span>
                  <span class="value">${address}</span>
                </div>
                <div class="info-row">
                  <span class="label">${isEnglish ? "City" : "Ville"}:</span>
                  <span class="value">${city}</span>
                </div>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Postal Code" : "Code Postal"
                  }:</span>
                  <span class="value">${postalCode}</span>
                </div>
              </div>

              <!-- Order Details -->
              <div class="section">
                <h2>📦 ${
                  isEnglish ? "Order Details" : "Détails de la Commande"
                }</h2>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Wood Type" : "Type de Bois"
                  }:</span>
                  <span class="value highlight">${woodType}</span>
                </div>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Quantity" : "Quantité"
                  }:</span>
                  <span class="value highlight">${quantity} ${
        isEnglish ? "cord(s)" : "corde(s)"
      }</span>
                </div>
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Payment Method" : "Mode de Paiement"
                  }:</span>
                  <span class="value">${paymentMethod}</span>
                </div>
                ${
                  deliveryDate
                    ? `
                <div class="info-row">
                  <span class="label">${
                    isEnglish ? "Preferred Date" : "Date Souhaitée"
                  }:</span>
                  <span class="value">${new Date(
                    deliveryDate
                  ).toLocaleDateString(isEnglish ? "en-CA" : "fr-CA", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</span>
                </div>
                `
                    : ""
                }
              </div>

              ${
                notes
                  ? `
              <!-- Special Notes -->
              <div class="section">
                <h2>📝 ${isEnglish ? "Special Notes" : "Notes Spéciales"}</h2>
                <div class="notes-box">
                  ${notes.replace(/\n/g, "<br>")}
                </div>
              </div>
              `
                  : ""
              }

              <!-- Quick Actions -->
              <div class="section" style="text-align: center; background: #e8f5e9;">
                <p style="margin: 0 0 15px 0; color: #2e7d32; font-weight: bold;">
                  ${isEnglish ? "📞 Quick Actions" : "📞 Actions Rapides"}
                </p>
                <a href="tel:${phone}" style="display: inline-block; background: #2e7d32; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 5px;">
                  ${isEnglish ? "Call Customer" : "Appeler le Client"}
                </a>
                <a href="mailto:${email}" style="display: inline-block; background: #f57c00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 5px;">
                  ${isEnglish ? "Send Email" : "Envoyer un Email"}
                </a>
              </div>
            </div>

            <div class="footer">
              <p>Transport et Bois de Chauffage JSGC</p>
              <p>1100 Route 381, Ferland-et-Boilleau (Québec) G0V 1H0</p>
              <p>📧 contact@jsgc.store | 📞 +1 (418) 673-3851</p>
            </div>
          </body>
        </html>
      `,
    });

    if (businessError) {
      console.error("Resend error (business):", businessError);
      return NextResponse.json(
        { error: businessError.message },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { error: customerError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "JSGC <contact@jsgc.store>",
      to: email,
      subject: isEnglish
        ? "✅ Order Confirmation - JSGC Firewood"
        : "✅ Confirmation de Commande - Bois JSGC",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f5f5f5;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .success-icon {
                font-size: 60px;
                margin-bottom: 10px;
              }
              .message-box {
                background: white;
                padding: 25px;
                border-radius: 8px;
                margin: 20px 0;
                text-align: center;
              }
              .summary {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #2e7d32;
              }
              .footer {
                text-align: center;
                color: #999;
                margin-top: 30px;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="success-icon">✅</div>
              <h1>${isEnglish ? "Order Confirmed!" : "Commande Confirmée!"}</h1>
            </div>
            
            <div class="content">
              <div class="message-box">
                <h2 style="color: #2e7d32; margin-top: 0;">
                  ${
                    isEnglish
                      ? "Thank you for your order!"
                      : "Merci pour votre commande!"
                  }
                </h2>
                <p>
                  ${
                    isEnglish
                      ? `Hello ${name},<br><br>We have received your firewood order and will contact you shortly to confirm the delivery details.`
                      : `Bonjour ${name},<br><br>Nous avons bien reçu votre commande de bois de chauffage et nous vous contacterons sous peu pour confirmer les détails de livraison.`
                  }
                </p>
              </div>

              <div class="summary">
                <h3 style="color: #2e7d32; margin-top: 0;">
                  ${isEnglish ? "📋 Order Summary" : "📋 Résumé de la Commande"}
                </h3>
                <p><strong>${
                  isEnglish ? "Wood Type" : "Type de Bois"
                }:</strong> ${woodType}</p>
                <p><strong>${
                  isEnglish ? "Quantity" : "Quantité"
                }:</strong> ${quantity} ${
        isEnglish ? "cord(s)" : "corde(s)"
      }</p>
                <p><strong>${
                  isEnglish ? "Delivery Address" : "Adresse de Livraison"
                }:</strong><br>
                   ${address}<br>${city}, ${postalCode}</p>
                ${
                  deliveryDate
                    ? `<p><strong>${
                        isEnglish ? "Preferred Date" : "Date Souhaitée"
                      }:</strong> ${new Date(deliveryDate).toLocaleDateString(
                        isEnglish ? "en-CA" : "fr-CA"
                      )}</p>`
                    : ""
                }
              </div>

              <div class="message-box" style="background: #fff3cd; border-left: 4px solid #f57c00;">
                <h3 style="color: #f57c00; margin-top: 0;">
                  💳 ${
                    isEnglish
                      ? "Payment Instructions"
                      : "Instructions de Paiement"
                  }
                </h3>
                <p style="margin-bottom: 10px;">
                  ${
                    isEnglish
                      ? "Please send your Interac transfer to:"
                      : "Veuillez envoyer votre virement Interac à :"
                  }
                </p>
                <p style="font-size: 18px; font-weight: bold; color: #2e7d32; margin: 15px 0;">
                  📧 contact@jsgc.store
                </p>
                <p style="font-size: 14px; color: #666;">
                  ${
                    isEnglish
                      ? "💡 <strong>Important:</strong> Please include your name and order reference in the transfer message."
                      : "💡 <strong>Important :</strong> Veuillez inclure votre nom et la référence de commande dans le message du virement."
                  }
                </p>
              </div>

              <div class="message-box">
                <p style="margin: 0;">
                  ${
                    isEnglish
                      ? '💬 <strong>Questions?</strong><br>Contact us at <a href="mailto:contact@jsgc.store">contact@jsgc.store</a> or call <a href="tel:+14186733851">+1 (418) 673-3851</a>'
                      : '💬 <strong>Des questions?</strong><br>Contactez-nous à <a href="mailto:contact@jsgc.store">contact@jsgc.store</a> ou appelez au <a href="tel:+14186733851">+1 (418) 673-3851</a>'
                  }
                </p>
              </div>
            </div>

            <div class="footer">
              <p>Transport et Bois de Chauffage JSGC</p>
              <p>1100 Route 381, Ferland-et-Boilleau (Québec) G0V 1H0</p>
            </div>
          </body>
        </html>
      `,
    });

    if (customerError) {
      console.error("Resend error (customer):", customerError);
      // Don't fail the whole request if customer email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
