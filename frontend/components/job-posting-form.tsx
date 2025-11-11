"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Send } from "lucide-react"
import { JobPreviewModal } from "./job-preview-modal"

// Tipo para los datos de la oferta laboral
interface JobPostingData {
  puesto: string
  descripcion: string
  responsabilidad: string
  modalidad: string
  horario: string
  requisitos: string
  beneficios: string
}

// Componente del formulario para publicar ofertas de trabajo
export function JobPostingForm() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<JobPostingData>({
    puesto: "",
    descripcion: "",
    responsabilidad: "",
    modalidad: "",
    horario: "",
    requisitos: "",
    beneficios: "",
  })

  // Estado para controlar si se muestra la vista previa
  const [showPreview, setShowPreview] = useState(false)

  // Estado para errores de validación
  const [errors, setErrors] = useState<Partial<JobPostingData>>({})

  // Función para actualizar los datos del formulario
  const handleChange = (field: keyof JobPostingData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<JobPostingData> = {}

    if (!formData.puesto.trim()) newErrors.puesto = "El puesto es requerido"
    if (!formData.descripcion.trim()) newErrors.descripcion = "La descripción es requerida"
    if (!formData.responsabilidad.trim()) newErrors.responsabilidad = "Las responsabilidades son requeridas"
    if (!formData.modalidad) newErrors.modalidad = "La modalidad es requerida"
    if (!formData.horario.trim()) newErrors.horario = "El horario es requerido"
    if (!formData.requisitos.trim()) newErrors.requisitos = "Los requisitos son requeridos"
    if (!formData.beneficios.trim()) newErrors.beneficios = "Los beneficios son requeridos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Función para mostrar la vista previa
  const handlePreview = () => {
    if (validateForm()) {
      setShowPreview(true)
    }
  }

  // Función para publicar la oferta
  const handlePublish = () => {
    if (validateForm()) {
      // Aquí se conectará con el backend para publicar la oferta
      console.log("[v0] Publicando oferta:", formData)
      alert("Oferta publicada exitosamente!")
      // Resetear el formulario
      setFormData({
        puesto: "",
        descripcion: "",
        responsabilidad: "",
        modalidad: "",
        horario: "",
        requisitos: "",
        beneficios: "",
      })
    }
  }

  return (
    <>
      <Card className="shadow-xl border-2">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-2xl text-primary">Datos de la Oferta</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Campo: Puesto */}
          <div className="space-y-2">
            <Label htmlFor="puesto" className="text-base font-semibold">
              Puesto <span className="text-destructive">*</span>
            </Label>
            <Input
              id="puesto"
              placeholder="Ej: Desarrollador Full Stack"
              value={formData.puesto}
              onChange={(e) => handleChange("puesto", e.target.value)}
              className={errors.puesto ? "border-destructive" : ""}
            />
            {errors.puesto && <p className="text-sm text-destructive">{errors.puesto}</p>}
          </div>

          {/* Campo: Descripción */}
          <div className="space-y-2">
            <Label htmlFor="descripcion" className="text-base font-semibold">
              Descripción <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="descripcion"
              placeholder="Describe el puesto de trabajo..."
              value={formData.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              rows={4}
              className={errors.descripcion ? "border-destructive" : ""}
            />
            {errors.descripcion && <p className="text-sm text-destructive">{errors.descripcion}</p>}
          </div>

          {/* Campo: Responsabilidades */}
          <div className="space-y-2">
            <Label htmlFor="responsabilidad" className="text-base font-semibold">
              Responsabilidades <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="responsabilidad"
              placeholder="Lista las principales responsabilidades del puesto..."
              value={formData.responsabilidad}
              onChange={(e) => handleChange("responsabilidad", e.target.value)}
              rows={4}
              className={errors.responsabilidad ? "border-destructive" : ""}
            />
            {errors.responsabilidad && <p className="text-sm text-destructive">{errors.responsabilidad}</p>}
          </div>

          {/* Campo: Modalidad */}
          <div className="space-y-2">
            <Label htmlFor="modalidad" className="text-base font-semibold">
              Modalidad <span className="text-destructive">*</span>
            </Label>
            <Select value={formData.modalidad} onValueChange={(value) => handleChange("modalidad", value)}>
              <SelectTrigger className={errors.modalidad ? "border-destructive" : ""}>
                <SelectValue placeholder="Selecciona la modalidad de trabajo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="presencial">Presencial</SelectItem>
                <SelectItem value="remoto">Remoto</SelectItem>
                <SelectItem value="hibrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
            {errors.modalidad && <p className="text-sm text-destructive">{errors.modalidad}</p>}
          </div>

          {/* Campo: Horario */}
          <div className="space-y-2">
            <Label htmlFor="horario" className="text-base font-semibold">
              Horario <span className="text-destructive">*</span>
            </Label>
            <Input
              id="horario"
              placeholder="Ej: Lunes a Viernes de 9:00 a 18:00"
              value={formData.horario}
              onChange={(e) => handleChange("horario", e.target.value)}
              className={errors.horario ? "border-destructive" : ""}
            />
            {errors.horario && <p className="text-sm text-destructive">{errors.horario}</p>}
          </div>

          {/* Campo: Requisitos */}
          <div className="space-y-2">
            <Label htmlFor="requisitos" className="text-base font-semibold">
              Requisitos <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="requisitos"
              placeholder="Lista los requisitos necesarios para el puesto..."
              value={formData.requisitos}
              onChange={(e) => handleChange("requisitos", e.target.value)}
              rows={4}
              className={errors.requisitos ? "border-destructive" : ""}
            />
            {errors.requisitos && <p className="text-sm text-destructive">{errors.requisitos}</p>}
          </div>

          {/* Campo: Beneficios */}
          <div className="space-y-2">
            <Label htmlFor="beneficios" className="text-base font-semibold">
              Beneficios <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="beneficios"
              placeholder="Describe los beneficios que ofrece la empresa..."
              value={formData.beneficios}
              onChange={(e) => handleChange("beneficios", e.target.value)}
              rows={4}
              className={errors.beneficios ? "border-destructive" : ""}
            />
            {errors.beneficios && <p className="text-sm text-destructive">{errors.beneficios}</p>}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Botón para vista previa */}
            <Button
              type="button"
              variant="outline"
              onClick={handlePreview}
              className="flex-1 h-12 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all bg-transparent"
            >
              <Eye className="mr-2 h-5 w-5" />
              Vista Previa
            </Button>

            {/* Botón para publicar */}
            <Button
              type="button"
              onClick={handlePublish}
              className="flex-1 h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="mr-2 h-5 w-5" />
              Aceptar y Publicar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal de vista previa */}
      <JobPreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} jobData={formData} />
    </>
  )
}

export default JobPostingForm
