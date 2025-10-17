"use client"

import Link from "next/link"
import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

function FormulaireContent() {
  const searchParams = useSearchParams()
  const abonnementChoisi = searchParams.get("pack") || "Essentiel"

  const [formData, setFormData] = useState({
    restaurantName: "",
    address: "",
    contactName: "",
    email: "",
    phone: "",
    abonnement: abonnementChoisi,
    dateMiseEnPlace: "dès que possible",
    horaires: "",
    volumeAppels: "<5",
    autres: "",
    conditions: false,
  })

  useEffect(() => {
    setFormData((prev) => ({ ...prev, abonnement: abonnementChoisi }))
  }, [abonnementChoisi])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("✅ Formulaire envoyé avec succès !")
      setFormData({
        restaurantName: "",
        address: "",
        contactName: "",
        email: "",
        phone: "",
        abonnement: abonnementChoisi,
        dateMiseEnPlace: "dès que possible",
        horaires: "",
        volumeAppels: "<5",
        autres: "",
        conditions: false,
      })
    } else {
      alert("❌ Erreur lors de l'envoi du formulaire")
    }
  }

  const getPackInfo = (pack: string) => {
    switch (pack) {
      case "Essentielle":
        return { name: "Agent Rézo", price: "29€/mois", color: "emerald" }
      case "Confort":
        return { name: "Rézo + Charly", price: "69€/mois", color: "blue" }
      case "Premium":
        return { name: "Équipe complète", price: "129€/mois", color: "purple" }
      default:
        return { name: "Agent Rézo", price: "29€/mois", color: "emerald" }
    }
  }

  const packInfo = getPackInfo(formData.abonnement)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full px-6 py-2 mb-6">
            <span className="text-emerald-700 text-sm font-medium">🚀 Commencez votre essai gratuit</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Configuration de votre <span className="text-emerald-500">assistant IA</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quelques informations pour personnaliser votre expérience CallToChef
          </p>
        </div>

        {/* Pack Selection Display */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-r ${
                packInfo.color === 'emerald' ? 'from-emerald-500 to-green-500' :
                packInfo.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                'from-purple-500 to-indigo-500'
              } rounded-full flex items-center justify-center text-2xl`}>
                {packInfo.color === 'emerald' ? '📅' : packInfo.color === 'blue' ? '🤝' : '🚀'}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{packInfo.name}</h3>
                <p className="text-gray-600">Formule sélectionnée</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">{packInfo.price}</div>
              <div className="text-sm text-gray-500">Essai gratuit 7 jours</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Restaurant Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 text-sm">🏪</span>
                </span>
                Informations du restaurant
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du restaurant *
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex: Le Bistrot Parisien"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse complète *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex: 123 Rue de la Paix, 75001 Paris"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">👤</span>
                </span>
                Informations de contact
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex: Jean Dupont"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex: jean@restaurant.fr"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Ex: 01 23 45 67 89"
                  required
                />
              </div>
            </div>

            {/* Restaurant Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 text-sm">⚙️</span>
                </span>
                Configuration de votre restaurant
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horaires d'ouverture
                  </label>
                  <input
                    type="text"
                    name="horaires"
                    value={formData.horaires}
                    onChange={handleChange}
                    placeholder="Ex: 11h-15h / 18h-23h"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Volume moyen d'appels par jour
                  </label>
                  <select
                    name="volumeAppels"
                    value={formData.volumeAppels}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="<5">Moins de 5 appels</option>
                    <option value="5-15">5 à 15 appels</option>
                    <option value="15-30">15 à 30 appels</option>
                    <option value="30+">Plus de 30 appels</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de mise en place souhaitée
                </label>
                <input
                  type="text"
                  name="dateMiseEnPlace"
                  value={formData.dateMiseEnPlace}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Ex: Dès que possible, dans 2 semaines..."
                />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600 text-sm">💬</span>
                </span>
                Informations complémentaires
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autres précisions ou besoins spécifiques
                </label>
                <textarea
                  name="autres"
                  value={formData.autres}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Décrivez vos besoins spécifiques, vos contraintes particulières, ou toute information utile pour personnaliser votre assistant IA..."
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="conditions"
                  checked={formData.conditions}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <label className="ml-3 text-sm text-gray-700">
                  J'accepte les <Link href="/cgv" className="text-emerald-600 hover:underline">conditions générales</Link> et la <Link href="/confidentialite" className="text-emerald-600 hover:underline">politique de confidentialité</Link> de CallToChef. Je comprends que mes données seront utilisées pour la configuration de mon assistant IA.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              >
                🚀 Commencer mon essai gratuit
              </button>
              
              <Link
                href="/"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-center"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500">✓</span>
              <span>Essai gratuit 7 jours</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500">✓</span>
              <span>Installation en 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500">✓</span>
              <span>Support inclus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Formulaire() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du formulaire...</p>
        </div>
      </div>
    }>
      <FormulaireContent />
    </Suspense>
  )
}
