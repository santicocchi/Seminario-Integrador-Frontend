"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, MapPin, CheckCircle2 } from "lucide-react"

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

// Props del componente
interface JobPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  jobData: JobPostingData
}

// Componente modal para mostrar la vista previa de la oferta
export function JobPreviewModal({ isOpen, onClose, jobData }: JobPreviewModalProps) {
  // Función para formatear texto con saltos de línea
  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Vista Previa de la Oferta</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Título del puesto */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{jobData.puesto}</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <MapPin className="mr-1 h-4 w-4" />
                {jobData.modalidad.charAt(0).toUpperCase() + jobData.modalidad.slice(1)}
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Clock className="mr-1 h-4 w-4" />
                {jobData.horario}
              </Badge>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-primary" />
              Descripción del Puesto
            </h3>
            <div className="text-muted-foreground">{formatText(jobData.descripcion)}</div>
          </div>

          {/* Responsabilidades */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
              Responsabilidades
            </h3>
            <div className="text-muted-foreground">{formatText(jobData.responsabilidad)}</div>
          </div>

          {/* Requisitos */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Requisitos</h3>
            <div className="text-muted-foreground">{formatText(jobData.requisitos)}</div>
          </div>

          {/* Beneficios */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Beneficios</h3>
            <div className="text-muted-foreground">{formatText(jobData.beneficios)}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
