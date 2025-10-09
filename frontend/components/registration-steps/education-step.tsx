"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, ChevronLeft, Plus, X } from "lucide-react"

interface Education {
  institucion: string
  titulo: string
  nivel: string
  anioInicio: string
  anioFin: string
  actualidad: boolean
}

interface EducationStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function EducationStep({ formData, updateFormData, onNext, onBack }: EducationStepProps) {
  const [educaciones, setEducaciones] = useState<Education[]>([
    { institucion: "", titulo: "", nivel: "", anioInicio: "", anioFin: "", actualidad: false },
  ])

  const addEducation = () => {
    setEducaciones([
      ...educaciones,
      { institucion: "", titulo: "", nivel: "", anioInicio: "", anioFin: "", actualidad: false },
    ])
  }

  const removeEducation = (index: number) => {
    setEducaciones(educaciones.filter((_, i) => i !== index))
  }

  const updateEducation = (index: number, field: keyof Education, value: string | boolean) => {
    const updated = [...educaciones]
    updated[index] = { ...updated[index], [field]: value }
    setEducaciones(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFormData({ educaciones })
    onNext()
  }

  const handleSkip = () => {
    updateFormData({ educaciones: [] })
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          Rellená el formulario de tu CV
        </h2>
        <p className="text-muted-foreground">Agregá tu formación académica</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {educaciones.map((edu, index) => (
          <div key={index} className="space-y-4 p-6 bg-muted/30 rounded-xl relative">
            {educaciones.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-4 right-4 text-destructive hover:bg-destructive/10 p-2 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <h3 className="text-lg font-semibold text-foreground">Estudio {index + 1}</h3>

            <div className="space-y-2">
              <Label htmlFor={`institucion-${index}`}>Institución *</Label>
              <Input
                id={`institucion-${index}`}
                placeholder="Nombre de la institución"
                value={edu.institucion}
                onChange={(e) => updateEducation(index, "institucion", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`titulo-${index}`}>Título *</Label>
              <Input
                id={`titulo-${index}`}
                placeholder="Título obtenido o en curso"
                value={edu.titulo}
                onChange={(e) => updateEducation(index, "titulo", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`nivel-${index}`}>Nivel *</Label>
              <Input
                id={`nivel-${index}`}
                placeholder="Ej: Secundario, Terciario, Universitario"
                value={edu.nivel}
                onChange={(e) => updateEducation(index, "nivel", e.target.value)}
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
                  value={edu.anioInicio}
                  onChange={(e) => updateEducation(index, "anioInicio", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`anioFin-${index}`}>Año Fin *</Label>
                <Input
                  id={`anioFin-${index}`}
                  type="number"
                  placeholder="AAAA"
                  value={edu.anioFin}
                  onChange={(e) => updateEducation(index, "anioFin", e.target.value)}
                  disabled={edu.actualidad}
                  required={!edu.actualidad}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id={`actualidad-${index}`}
                checked={edu.actualidad}
                onCheckedChange={(checked) => updateEducation(index, "actualidad", checked as boolean)}
              />
              <Label htmlFor={`actualidad-${index}`} className="cursor-pointer">
                Actualidad (cursando actualmente)
              </Label>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addEducation}
          className="w-full border-2 border-dashed border-primary text-primary hover:bg-primary/10 bg-transparent"
        >
          <Plus className="h-4 w-4 mr-2" />
          Añadir otro estudio
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
