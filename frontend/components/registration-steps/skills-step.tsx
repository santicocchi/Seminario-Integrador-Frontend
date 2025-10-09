"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ChevronLeft } from "lucide-react"

interface SkillsStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

const availableSkills = [
  "Adaptabilidad",
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Liderazgo",
  "Resolución de problemas",
  "Pensamiento crítico",
  "Creatividad",
  "Gestión del tiempo",
  "Organización",
  "Proactividad",
  "Responsabilidad",
  "Flexibilidad",
  "Empatía",
  "Atención al detalle",
  "Orientación a resultados",
]

export function SkillsStep({ formData, updateFormData, onNext, onBack }: SkillsStepProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFormData({ aptitudes: selectedSkills })
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          Aptitudes
        </h2>
        <p className="text-muted-foreground">
          Seleccioná las aptitudes que mejor te describen (hacé clic para seleccionar)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedSkills.includes(skill)
                  ? "bg-accent text-white shadow-md scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

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
