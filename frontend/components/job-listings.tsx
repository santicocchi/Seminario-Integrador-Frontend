"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, MapPin, Clock, Calendar, Building2 } from "lucide-react"

// Componente que muestra el listado de ofertas de trabajo
// Recibe los filtros y muestra las ofertas que coinciden
interface JobListingsProps {
  filters: {
    sector: string
    modalidad: string
    horario: string
    fechaPublicacion: string
  }
}

// Datos de ejemplo de ofertas de trabajo (en producción vendrían del backend)
const mockJobs = [
  {
    id: 1,
    puesto: "Desarrollador Full Stack",
    empresa: "Tech Solutions SA",
    sector: "informatica",
    modalidad: "hibrido",
    horario: "tiempo-completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Buscamos desarrollador con experiencia en React y Node.js para unirse a nuestro equipo.",
    fechaPublicacion: "2024-01-15",
    salario: "A convenir",
  },
  {
    id: 2,
    puesto: "Diseñador UX/UI",
    empresa: "Creative Studio",
    sector: "desarrollo-web",
    modalidad: "remoto",
    horario: "tiempo-completo",
    ubicacion: "Remoto",
    descripcion: "Diseñador creativo para proyectos web y mobile. Experiencia con Figma requerida.",
    fechaPublicacion: "2024-01-14",
    salario: "$800.000 - $1.200.000",
  },
  {
    id: 3,
    puesto: "Contador Público",
    empresa: "Estudio Contable López",
    sector: "finanzas",
    modalidad: "presencial",
    horario: "tiempo-completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Estudio contable busca profesional con matrícula activa para atención de clientes.",
    fechaPublicacion: "2024-01-13",
    salario: "A convenir",
  },
  {
    id: 4,
    puesto: "Profesor de Inglés",
    empresa: "Instituto de Idiomas",
    sector: "educacion",
    modalidad: "presencial",
    horario: "medio-tiempo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Instituto busca profesor de inglés para clases grupales e individuales.",
    fechaPublicacion: "2024-01-12",
    salario: "$400.000 - $600.000",
  },
  {
    id: 5,
    puesto: "Vendedor de Comercio",
    empresa: "Tienda Local",
    sector: "comercio",
    modalidad: "presencial",
    horario: "tiempo-completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Local comercial busca vendedor con experiencia en atención al cliente.",
    fechaPublicacion: "2024-01-11",
    salario: "$500.000 + comisiones",
  },
]

export function JobListings({ filters }: JobListingsProps) {
  // Filtrar las ofertas según los filtros seleccionados
  const filteredJobs = mockJobs.filter((job) => {
    // Filtro por sector
    if (filters.sector && filters.sector !== "todos" && job.sector !== filters.sector) {
      return false
    }
    // Filtro por modalidad
    if (filters.modalidad && filters.modalidad !== "todas" && job.modalidad !== filters.modalidad) {
      return false
    }
    // Filtro por horario
    if (filters.horario && filters.horario !== "todos" && job.horario !== filters.horario) {
      return false
    }
    // Filtro por fecha (simplificado para el ejemplo)
    // En producción, aquí se compararían las fechas reales
    return true
  })

  return (
    <div className="space-y-4">
      {/* Contador de resultados */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          {filteredJobs.length} {filteredJobs.length === 1 ? "oferta encontrada" : "ofertas encontradas"}
        </p>
      </div>

      {/* Listado de ofertas */}
      {filteredJobs.length === 0 ? (
        // Mensaje cuando no hay resultados
        <Card className="p-12 text-center">
          <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron ofertas</h3>
          <p className="text-muted-foreground">Intentá ajustar los filtros para ver más resultados.</p>
        </Card>
      ) : (
        // Tarjetas de ofertas de trabajo
        filteredJobs.map((job) => (
          <Link key={job.id} href={`/oferta/${job.id}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Información principal de la oferta */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    {/* Icono de la empresa */}
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      {/* Título del puesto */}
                      <h3 className="text-xl font-bold text-foreground mb-1">{job.puesto}</h3>
                      {/* Nombre de la empresa */}
                      <p className="text-muted-foreground font-medium mb-3">{job.empresa}</p>

                      {/* Descripción */}
                      <p className="text-foreground mb-4">{job.descripcion}</p>

                      {/* Detalles de la oferta */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.ubicacion}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span className="capitalize">{job.horario.replace("-", " ")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(job.fechaPublicacion).toLocaleDateString("es-AR")}</span>
                        </div>
                      </div>

                      {/* Badges de modalidad y salario */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {job.modalidad}
                        </Badge>
                        <Badge variant="outline">{job.salario}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))
      )}
    </div>
  )
}
