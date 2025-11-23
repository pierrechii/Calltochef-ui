"use client"

import Link from "next/link"
import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ButtonLiquid from "@/components/ui/ButtonLiquid"

interface FormData {
  // Étape 1: Informations restaurant
  restaurantName: string
  address: string
  websiteOrMaps: string
  
  // Étape 2: Contact
  contactName: string
  email: string
  phone: string
  whatsapp: string
  
  // Étape 3: Configuration
  besoinPrincipal: string
  besoinsSecondaires: string[]
  autres: string
  
  // Autres
  abonnement: string
  conditions: boolean
}

const BESOINS_PRINCIPAUX = [
  "Prise de réservations",
  "Prise de commandes",
  "Répondeur intelligent",
  "FAQ / Questions fréquentes",
  "Multilingue"
]

const BESOINS_SECONDAIRES = [
  "Prise de réservations",
  "Prise de commandes",
  "Répondeur intelligent",
  "FAQ / Questions fréquentes",
  "Multilingue"
]

function FormulaireContent() {
  const searchParams = useSearchParams()
  const abonnementChoisi = searchParams.get("pack") || "Essentielle"

  const [currentStep, setCurrentStep] = useState(1)
  const [priceIds, setPriceIds] = useState<{ REZO?: string; REZO_CHARLY?: string }>({})
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    address: "",
    websiteOrMaps: "",
    contactName: "",
    email: "",
    phone: "",
    whatsapp: "",
    besoinPrincipal: "",
    besoinsSecondaires: [],
    autres: "",
    abonnement: abonnementChoisi,
    conditions: false,
  })

  // Charger les priceIds depuis l'API
  useEffect(() => {
    fetch("/api/prices")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API returned ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          console.error("❌ Erreur API prices:", data.error)
          return
        }
        if (data.REZO && data.REZO_CHARLY) {
          console.log("✅ Price IDs chargés:", { REZO: data.REZO, REZO_CHARLY: data.REZO_CHARLY })
          setPriceIds(data)
        } else {
          console.error("❌ Price IDs incomplets depuis l'API:", data)
        }
      })
      .catch((error) => {
        console.error("❌ Erreur lors du chargement des price IDs:", error)
        // Fallback: essayer avec les variables d'environnement directes
        const fallbackPrices = {
          REZO: process.env.NEXT_PUBLIC_PRICE_REZO,
          REZO_CHARLY: process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY,
        }
        if (fallbackPrices.REZO && fallbackPrices.REZO_CHARLY) {
          console.log("✅ Utilisation des price IDs en fallback")
          setPriceIds(fallbackPrices)
        }
      })
  }, [])

  useEffect(() => {
    setFormData((prev) => ({ ...prev, abonnement: abonnementChoisi }))
  }, [abonnementChoisi])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      const besoin = value
      setFormData((prev) => ({
        ...prev,
        besoinsSecondaires: checked
          ? [...prev.besoinsSecondaires, besoin]
          : prev.besoinsSecondaires.filter((b) => b !== besoin),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.restaurantName && formData.address && formData.websiteOrMaps)
      case 2:
        return !!(formData.contactName && formData.email && formData.phone)
      case 3:
        return !!formData.besoinPrincipal
      default:
        return false
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.conditions) {
      alert("Veuillez accepter les conditions générales pour continuer.")
      return
    }

    try {
      // Déterminer le priceId selon le pack choisi
      let offerPriceId: string | undefined
      if (formData.abonnement === "Essentielle") {
        offerPriceId = priceIds.REZO || process.env.NEXT_PUBLIC_PRICE_REZO || process.env.REACT_APP_PRICE_REZO
      } else if (formData.abonnement === "Confort") {
        offerPriceId = priceIds.REZO_CHARLY || process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY || process.env.REACT_APP_PRICE_REZO_CHARLY
      } else {
        offerPriceId = priceIds.REZO_CHARLY || process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY || process.env.REACT_APP_PRICE_REZO_CHARLY
      }

      if (!offerPriceId) {
        console.error("PriceId non défini pour l'offre:", formData.abonnement, {
          priceIds,
          env: {
            NEXT_PUBLIC_PRICE_REZO: process.env.NEXT_PUBLIC_PRICE_REZO,
            NEXT_PUBLIC_PRICE_REZO_CHARLY: process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY,
          }
        })
        alert("❌ Erreur de configuration. Veuillez contacter le support.")
        return
      }

      const checkoutData = {
        email: formData.email,
        offer: offerPriceId,
      }

      const response = await fetch("/api/checkout/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      })

      if (!response.ok) {
        console.error("Erreur lors de la création de la session Stripe:", {
          status: response.status,
          statusText: response.statusText,
        })
        alert("❌ Erreur lors de l'envoi du formulaire")
        return
      }

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("Réponse de l'API invalide: pas d'URL de redirection", data)
        alert("❌ Erreur lors de l'envoi du formulaire")
      }
    } catch (error) {
      console.error("Erreur réseau ou exception lors de la soumission:", error)
      alert("❌ Erreur lors de l'envoi du formulaire")
    }
  }

  const getPackInfo = (pack: string) => {
    switch (pack) {
      case "Essentielle":
        return {
          name: "Agent Rézo",
          price: "29€/mois",
          color: "emerald",
          benefits: [
            "Gestion automatique des réservations",
            "Vérification de disponibilité en temps réel",
            "Confirmation automatique des créneaux",
            "Synchronisation avec votre planning"
          ]
        }
      case "Confort":
        return {
          name: "Rézo + Charly",
          price: "69€/mois",
          color: "blue",
          benefits: [
            "Toutes les fonctionnalités de Rézo",
            "Support client intelligent 24/7",
            "Réponses automatiques aux questions",
            "Gestion du menu et des allergènes"
          ]
        }
      case "Premium":
        return {
          name: "Équipe complète",
          price: "129€/mois",
          color: "purple",
          benefits: [
            "Toutes les fonctionnalités incluses",
            "Personnalisation avancée",
            "Support prioritaire",
            "Intégrations multiples"
          ]
        }
      default:
        return {
          name: "Agent Rézo",
          price: "29€/mois",
          color: "emerald",
          benefits: [
            "Gestion automatique des réservations",
            "Vérification de disponibilité en temps réel",
            "Confirmation automatique des créneaux",
            "Synchronisation avec votre planning"
          ]
        }
    }
  }

  const packInfo = getPackInfo(formData.abonnement)
  const progress = (currentStep / 3) * 100

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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            <div className="text-left md:text-right">
              <div className="text-3xl font-bold text-gray-900">{packInfo.price}</div>
              <div className="text-sm text-gray-500">Essai gratuit 7 jours</div>
            </div>
          </div>
          
          {/* Résumé des bénéfices */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Ce qui est inclus :</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {packInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="text-emerald-500 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Étape {currentStep}/3
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% complété
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Wizard */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Étape 1: Informations restaurant */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Informations sur le restaurant
                  </h3>
                </div>

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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lien du site ou fiche Google Maps *
                  </label>
                  <input
                    type="url"
                    name="websiteOrMaps"
                    value={formData.websiteOrMaps}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex. https://g.co/kgs/XXXXX"
                    required
                  />
                </div>
              </div>
            )}

            {/* Étape 2: Contact */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Contact
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
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

                <div>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro WhatsApp <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ex: +33 6 12 34 56 78"
                  />
                </div>
              </div>
            )}

            {/* Étape 3: Configuration rapide */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Configuration rapide
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Besoin principal *
                  </label>
                  <select
                    name="besoinPrincipal"
                    value={formData.besoinPrincipal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Sélectionnez votre besoin principal</option>
                    {BESOINS_PRINCIPAUX.map((besoin) => (
                      <option key={besoin} value={besoin}>
                        {besoin}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Besoins secondaires <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <div className="space-y-2">
                    {BESOINS_SECONDAIRES.map((besoin) => (
                      <label
                        key={besoin}
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={besoin}
                          checked={formData.besoinsSecondaires.includes(besoin)}
                          onChange={handleChange}
                          className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{besoin}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Champ libre <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <textarea
                    name="autres"
                    value={formData.autres}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Décrivez brièvement vos besoins spécifiques ou vos contraintes particulières…"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-center"
                >
                  ← Précédent
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!validateStep(currentStep)}
                  className={`flex-1 py-4 px-8 rounded-xl font-semibold transition-all duration-200 text-center ${
                    validateStep(currentStep)
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:scale-105 shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Suivant →
                </button>
              ) : (
                <>
                  {/* Terms and Conditions - Juste avant le CTA */}
                  <div className="w-full bg-gray-50 rounded-xl p-6 mb-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="conditions"
                        checked={formData.conditions}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, conditions: e.target.checked }))
                        }
                        required
                        className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <label className="ml-3 text-sm text-gray-700">
                        J'accepte les{" "}
                        <Link href="/cgv" className="text-emerald-600 hover:underline">
                          conditions générales
                        </Link>{" "}
                        et la{" "}
                        <Link href="/confidentialite" className="text-emerald-600 hover:underline">
                          politique de confidentialité
                        </Link>{" "}
                        de CallToChef.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="ctc-liquid-button w-full py-5 px-8 text-white font-bold text-lg rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                    <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10">
                      Activer mon essai gratuit
                    </span>
                    <span className="absolute inset-0 border border-white/30 rounded-2xl"></span>
                  </button>
                </>
              )}
            </div>

            {currentStep === 1 && (
              <div className="text-center">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  ← Retour à l'accueil
                </Link>
              </div>
            )}
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .ctc-liquid-button {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.95) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 
            0 8px 32px rgba(16, 185, 129, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        .ctc-liquid-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-radius: inherit;
          pointer-events: none;
        }
        
        .ctc-liquid-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 
            0 12px 40px rgba(16, 185, 129, 0.4),
            0 4px 12px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }
        
        .ctc-liquid-button:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 
            0 4px 16px rgba(16, 185, 129, 0.3),
            0 1px 4px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  )
}

export default function Formulaire() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement du formulaire...</p>
          </div>
        </div>
      }
    >
      <FormulaireContent />
    </Suspense>
  )
}
