import Link from "next/link"

export default function Confidentialite() {
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
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Collecte des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CallToChef collecte les données suivantes dans le cadre de la fourniture de ses services :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Données d'identification (nom, prénom, email, téléphone)</li>
                <li>Informations sur votre restaurant (nom, adresse, horaires)</li>
                <li>Données de navigation et d'utilisation du service</li>
                <li>Données de paiement (traitées par notre partenaire Stripe)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Utilisation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fournir et améliorer nos services</li>
                <li>Gérer votre compte et votre abonnement</li>
                <li>Vous contacter concernant votre compte ou nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Conservation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données sont conservées pendant la durée de votre abonnement et jusqu'à 3 ans après la fin 
                de votre relation contractuelle, conformément à la réglementation en vigueur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Vos Droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : calltochefia@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Sécurité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre tout accès non autorisé, perte ou destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences 
                de cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité :
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

