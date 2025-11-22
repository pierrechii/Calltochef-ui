import Link from "next/link"

export default function CGV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <Link
            href="/"
            className="text-emerald-600 hover:text-emerald-700 mb-6 inline-block"
          >
            ← Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Objet
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent l'utilisation du service CallToChef, 
                une solution d'assistant IA pour restaurants proposée par CallToChef.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CallToChef propose des services d'assistant IA incluant :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Gestion automatique des réservations</li>
                <li>Support client intelligent 24/7</li>
                <li>Réponses automatiques aux questions</li>
                <li>Intégration avec vos systèmes existants</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Tarifs et Paiement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les tarifs sont indiqués en euros TTC. Un essai gratuit de 7 jours est proposé pour toutes les offres.
                Le paiement s'effectue par carte bancaire via notre partenaire de paiement sécurisé Stripe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Engagement et Résiliation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'abonnement est sans engagement. Vous pouvez résilier à tout moment depuis votre espace client.
                La résiliation prend effet à la fin de la période de facturation en cours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Données Personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont traitées conformément à notre politique de confidentialité. 
                Consultez notre <Link href="/confidentialite" className="text-emerald-600 hover:underline">politique de confidentialité</Link> pour plus d'informations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant ces conditions générales, vous pouvez nous contacter à :
              </p>
              <ul className="list-none text-gray-700 space-y-2 mt-4">
                <li>📧 Email : calltochefia@gmail.com</li>
                <li>📞 Téléphone : 07 69 47 91 76</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

