"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, ChevronLeft, Plus, X } from "lucide-react"

interface Experience {
  empresa: string
  puesto: string
  anioInicio: string
  anioFin: string
  actualidad: boolean
}

interface ExperienceStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function ExperienceStep({ formData, updateFormData, onNext, onBack }: ExperienceStepProps) {
  const [experiencias, setExperiencias] = useState<Experience[]>([
    { empresa: "", puesto: "", anioInicio: "", anioFin: "", actualidad: false },
  ])

  const addExperience = () => {
    setExperiencias([...experiencias, { empresa: "", puesto: "", anioInicio: "", anioFin: "", actualidad: false }])
  }

  const removeExperience = (index: number) => {
    setExperiencias(experiencias.filter((_, i) => i !== index))
  }

  const updateExperience = (index: number, field: keyof Experience, value: string | boolean) => {
    const updated = [...experiencias]
    updated[index] = { ...updated[index], [field]: value }
    setExperiencias(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFormData({ experiencias })
    onNext()
  }

  const handleSkip = () => {
    updateFormData({ experiencias: [] })
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          Rellená el formulario de tu CV
        </h2>
        <p className="text-muted-foreground">Agregá tu experiencia laboral</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {experiencias.map((exp, index) => (
          <div key={index} className="space-y-4 p-6 bg-muted/30 rounded-xl relative">
            {experiencias.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="absolute top-4 right-4 text-destructive hover:bg-destructive/10 p-2 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <h3 className="text-lg font-semibold text-foreground">Experiencia {index + 1}</h3>

            <div className="space-y-2">
              <Label htmlFor={`empresa-${index}`}>Nombre de la empresa/establecimiento *</Label>
              <Input
                id={`empresa-${index}`}
                value={exp.empresa}
                onChange={(e) => updateExperience(index, "empresa", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`puesto-${index}`}>Puesto *</Label>
              <Input
                id={`puesto-${index}`}
                value={exp.puesto}
                onChange={(e) => updateExperience(index, "puesto", e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`anioInicio-${index}`}>Año Inicio *</Label>
                <Input
                  id={`anioInicio-${index}`}
                  type="number"
                  placeholder="AAAA"
                  value={exp.anioInicio}
                  onChange={(e) => updateExperience(index, "anioInicio", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`anioFin-${index}`}>Año Fin *</Label>
                <Input
                  id={`anioFin-${index}`}
                  type="number"
                  placeholder="AAAA"
                  value={exp.anioFin}
                  onChange={(e) => updateExperience(index, "anioFin", e.target.value)}
                  disabled={exp.actualidad}
                  required={!exp.actualidad}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id={`actualidad-${index}`}
                checked={exp.actualidad}
                onCheckedChange={(checked) => updateExperience(index, "actualidad", checked as boolean)}
              />
              <Label htmlFor={`actualidad-${index}`} className="cursor-pointer">
                Actualidad (trabajo actual)
              </Label>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addExperience}
          className="w-full border-2 border-dashed border-primary text-primary hover:bg-primary/10 bg-transparent"
        >
          <Plus className="h-4 w-4 mr-2" />
          Añadir otra experiencia laboral
        </Button>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Button>
          <Button type="button" variant="outline" onClick={handleSkip} className="bg-transparent">
            Omitir
          </Button>
          <Button type="submit" className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-bold">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  )
}
