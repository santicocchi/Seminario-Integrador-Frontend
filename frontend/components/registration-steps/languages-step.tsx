"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Languages, ChevronLeft, Plus, X } from "lucide-react"

interface Language {
  idioma: string
  nivel: string
}

interface LanguagesStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function LanguagesStep({ formData, updateFormData, onNext, onBack }: LanguagesStepProps) {
  const [idiomas, setIdiomas] = useState<Language[]>([{ idioma: "", nivel: "" }])

  const addLanguage = () => {
    setIdiomas([...idiomas, { idioma: "", nivel: "" }])
  }

  const removeLanguage = (index: number) => {
    setIdiomas(idiomas.filter((_, i) => i !== index))
  }

  const updateLanguage = (index: number, field: keyof Language, value: string) => {
    const updated = [...idiomas]
    updated[index][field] = value
    setIdiomas(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFormData({ idiomas })
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Languages className="h-8 w-8 text-primary" />
          Idiomas
        </h2>
        <p className="text-muted-foreground">Agregá los idiomas que conocés</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {idiomas.map((lang, index) => (
          <div key={index} className="space-y-4 p-6 bg-muted/30 rounded-xl relative">
            {idiomas.length > 1 && (
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className="absolute top-4 right-4 text-destructive hover:bg-destructive/10 p-2 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <h3 className="text-lg font-semibold text-foreground">Idioma {index + 1}</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`idioma-${index}`}>Nombre del idioma *</Label>
                <Input
                  id={`idioma-${index}`}
                  placeholder="Ej: Inglés, Portugués"
                  value={lang.idioma}
                  onChange={(e) => updateLanguage(index, "idioma", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`nivel-${index}`}>Nivel *</Label>
                <Select value={lang.nivel} onValueChange={(value) => updateLanguage(index, "nivel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná el nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Básico</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addLanguage}
          className="w-full border-2 border-dashed border-primary text-primary hover:bg-primary/10 bg-transparent"
        >
          <Plus className="h-4 w-4 mr-2" />
          Añadir otro idioma
        </Button>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Button>
          <Button type="submit" className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-bold">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  )
}
