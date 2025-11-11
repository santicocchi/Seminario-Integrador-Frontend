"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, ChevronLeft, Upload, Check } from "lucide-react"

interface UploadCVStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function UploadCVStep({ formData, updateFormData, onNext, onBack }: UploadCVStepProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  // Función para manejar el cambio de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      updateFormData({ cvFile: file })
    }
  }

  // Función para finalizar el registro
  const handleFinish = () => {
    // Cuando descargues el proyecto, aquí deberás agregar la llamada a la API
    console.log("Datos del formulario:", formData)
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          Subí tu CV en formato PDF
        </h2>
        <p className="text-muted-foreground">
          Tenés la posibilidad de adjuntar tu currículum en formato PDF para complementar tu perfil. Esta acción es
          opcional y no es un requisito obligatorio para continuar con el registro.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors">
          <input type="file" id="cv-upload" accept=".pdf" onChange={handleFileChange} className="hidden" />
          <label htmlFor="cv-upload" className="cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              {fileName ? (
                <>
                  <div className="bg-accent/10 rounded-full p-4">
                    <Check className="h-12 w-12 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">{fileName}</p>
                    <p className="text-sm text-muted-foreground mt-1">Archivo cargado correctamente</p>
                  </div>
                  <Button type="button" variant="outline" className="mt-2 bg-transparent">
                    Cambiar archivo
                  </Button>
                </>
              ) : (
                <>
                  <div className="bg-primary/10 rounded-full p-4">
                    <Upload className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Hacé clic para subir tu CV</p>
                    <p className="text-sm text-muted-foreground mt-1">Formato PDF (máximo 5MB)</p>
                  </div>
                  <Button type="button" className="mt-2 bg-primary hover:bg-primary/90">
                    Seleccionar archivo
                  </Button>
                </>
              )}
            </div>
          </label>
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex items-center gap-2 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Button>
          <Button
            type="button"
            onClick={handleFinish}
            className="flex-1 h-12 bg-accent hover:bg-accent/90 text-white font-bold"
          >
            FINALIZAR REGISTRO
          </Button>
        </div>
      </div>
    </div>
  )
}
