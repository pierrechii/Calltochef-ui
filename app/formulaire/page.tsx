"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import { GradientDots } from "@/components/ui/gradient-dots"

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
      alert("❌ Erreur lors de l’envoi du formulaire")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Fond animé */}
      <GradientDots duration={20} className="z-0" />

      {/* Contenu du formulaire */}
      <div className="relative z-10 w-full max-w-3xl bg-zinc-900/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-zinc-700">
        {/* Message dynamique */}
        <h2 className="text-xl font-bold mb-4 text-center text-green-400">
          Vous avez choisi le pack {formData.abonnement} ✅
        </h2>

        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          📝 Formulaire de souscription
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          {/* Restaurant */}
          <div>
            <label className="block mb-2">Nom du restaurant</label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
              required
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Nom et prénom</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
              required
            />
          </div>

          {/* Abonnement (lecture seule) */}
          <div>
            <label className="block mb-2">Formule choisie</label>
            <input
              type="text"
              value={formData.abonnement}
              readOnly
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-gray-400"
            />
          </div>

          {/* Date de mise en place */}
          <div>
            <label className="block mb-2">Date de mise en place</label>
            <input
              type="text"
              name="dateMiseEnPlace"
              value={formData.dateMiseEnPlace}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
            />
          </div>

          {/* Fonctionnement */}
          <div>
            <label className="block mb-2">Horaires d’ouverture</label>
            <input
              type="text"
              name="horaires"
              value={formData.horaires}
              onChange={handleChange}
              placeholder="Ex: 11h-15h / 18h-23h"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
            />
          </div>
          <div>
            <label className="block mb-2">Volume moyen d’appels</label>
            <select
              name="volumeAppels"
              value={formData.volumeAppels}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
            >
              <option value="<5">&lt;5</option>
              <option value="5-15">5-15</option>
              <option value="15-30">15-30</option>
              <option value="30+">30+</option>
            </select>
          </div>

          {/* Autres */}
          <div>
            <label className="block mb-2">Autres précisions</label>
            <textarea
              name="autres"
              value={formData.autres}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
            />
          </div>

          {/* Validation */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="conditions"
              checked={formData.conditions}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <span className="text-sm">
              J’accepte les conditions générales et la politique de confidentialité
            </span>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white transition"
          >
            Envoyer
          </button>

          <Link
            href="/presentation"
            className="block text-center mt-4 text-sm text-gray-300 hover:underline"
          >
            ← Retour à la présentation
          </Link>
        </form>
      </div>
    </div>
  )
}

export default function Formulaire() {
  return (
    <Suspense fallback={<div className="text-center text-white">Chargement du formulaire...</div>}>
      <FormulaireContent />
    </Suspense>
  )
}
