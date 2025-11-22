import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Vérification basique des champs
    if (!body.restaurantName || !body.contactName || !body.email) {
      return NextResponse.json(
        { success: false, error: "Champs obligatoires manquants" },
        { status: 400 }
      )
    }

    // Configuration du transport avec Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ton Gmail
        pass: process.env.EMAIL_PASS, // mot de passe d’application Gmail
      },
    })

    // Options de l'email
    const mailOptions = {
      from: `"CallToChef Formulaire" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "calltochefia@gmail.com", // destinataire
      subject: `📩 Nouvelle demande - ${body.restaurantName}`,
      text: `
Nouvelle demande reçue :

🍽️ Restaurant : ${body.restaurantName}
📍 Adresse : ${body.address}

👤 Responsable : ${body.contactName}
📧 Email : ${body.email}
📞 Téléphone : ${body.phone}

📦 Abonnement choisi : ${body.abonnement}
📅 Mise en place : ${body.dateMiseEnPlace}

🕒 Horaires : ${body.horaires}

📝 Autres précisions :
${body.autres}

✅ Conditions acceptées : ${body.conditions ? "Oui" : "Non"}
      `,
      html: `
        <h2>Nouvelle demande reçue 📩</h2>
        <p><b>🍽️ Restaurant :</b> ${body.restaurantName}</p>
        <p><b>📍 Adresse :</b> ${body.address}</p>
        <p><b>👤 Responsable :</b> ${body.contactName}</p>
        <p><b>📧 Email :</b> ${body.email}</p>
        <p><b>📞 Téléphone :</b> ${body.phone}</p>
        <p><b>📦 Abonnement choisi :</b> ${body.abonnement}</p>
        <p><b>📅 Mise en place :</b> ${body.dateMiseEnPlace}</p>
        <p><b>🕒 Horaires :</b> ${body.horaires}</p>
        <p><b>📝 Autres précisions :</b> ${body.autres}</p>
        <p><b>✅ Conditions acceptées :</b> ${body.conditions ? "Oui" : "Non"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur email:", error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
