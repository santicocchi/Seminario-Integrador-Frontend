import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Clock, Calendar, Building2, Briefcase, DollarSign } from "lucide-react"

// Datos de ejemplo (los mismos que en job-listings.tsx)
// En producción, estos datos vendrían del backend mediante una API
const mockJobs = [
  {
    id: 1,
    puesto: "Desarrollador Full Stack",
    empresa: "Tech Solutions SA",
    sector: "Informática",
    modalidad: "Híbrido",
    horario: "Tiempo completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Buscamos desarrollador con experiencia en React y Node.js para unirse a nuestro equipo.",
    responsabilidades: [
      "Desarrollar y mantener aplicaciones web usando React y Node.js",
      "Colaborar con el equipo de diseño para implementar interfaces de usuario",
      "Escribir código limpio, mantenible y bien documentado",
      "Participar en revisiones de código y reuniones de equipo",
    ],
    requisitos: [
      "3+ años de experiencia en desarrollo web",
      "Dominio de React, Node.js y TypeScript",
      "Experiencia con bases de datos SQL y NoSQL",
      "Conocimientos de Git y metodologías ágiles",
    ],
    beneficios: [
      "Salario competitivo",
      "Trabajo híbrido (2 días presencial, 3 días remoto)",
      "Capacitaciones y cursos pagos",
      "Ambiente de trabajo colaborativo",
    ],
    fechaPublicacion: "2024-01-15",
    salario: "A convenir",
  },
  {
    id: 2,
    puesto: "Diseñador UX/UI",
    empresa: "Creative Studio",
    sector: "Desarrollo Web",
    modalidad: "Remoto",
    horario: "Tiempo completo",
    ubicacion: "Remoto",
    descripcion: "Diseñador creativo para proyectos web y mobile. Experiencia con Figma requerida.",
    responsabilidades: [
      "Diseñar interfaces de usuario atractivas y funcionales",
      "Crear prototipos interactivos en Figma",
      "Realizar investigación de usuarios y pruebas de usabilidad",
      "Colaborar con desarrolladores para implementar diseños",
    ],
    requisitos: [
      "2+ años de experiencia en diseño UX/UI",
      "Portfolio con proyectos web y mobile",
      "Dominio de Figma y Adobe Creative Suite",
      "Conocimientos de HTML/CSS básico",
    ],
    beneficios: [
      "Trabajo 100% remoto",
      "Horarios flexibles",
      "Equipamiento provisto",
      "Proyectos variados e interesantes",
    ],
    fechaPublicacion: "2024-01-14",
    salario: "$800.000 - $1.200.000",
  },
  {
    id: 3,
    puesto: "Contador Público",
    empresa: "Estudio Contable López",
    sector: "Finanzas",
    modalidad: "Presencial",
    horario: "Tiempo completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Estudio contable busca profesional con matrícula activa para atención de clientes.",
    responsabilidades: [
      "Llevar registros contables de empresas clientes",
      "Preparar declaraciones impositivas",
      "Asesorar a clientes en temas contables e impositivos",
      "Realizar liquidaciones de sueldos",
    ],
    requisitos: [
      "Título de Contador Público",
      "Matrícula profesional activa",
      "Experiencia mínima de 2 años",
      "Conocimientos de sistemas contables",
    ],
    beneficios: [
      "Estabilidad laboral",
      "Capacitación continua",
      "Buen ambiente de trabajo",
      "Posibilidad de crecimiento",
    ],
    fechaPublicacion: "2024-01-13",
    salario: "A convenir",
  },
  {
    id: 4,
    puesto: "Profesor de Inglés",
    empresa: "Instituto de Idiomas",
    sector: "Educación",
    modalidad: "Presencial",
    horario: "Medio tiempo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Instituto busca profesor de inglés para clases grupales e individuales.",
    responsabilidades: [
      "Dictar clases de inglés a diferentes niveles",
      "Preparar material didáctico",
      "Evaluar el progreso de los estudiantes",
      "Organizar actividades de conversación",
    ],
    requisitos: [
      "Título de profesor de inglés o certificación internacional",
      "Experiencia en enseñanza",
      "Nivel de inglés avanzado o nativo",
      "Buenas habilidades de comunicación",
    ],
    beneficios: [
      "Horarios flexibles",
      "Material didáctico provisto",
      "Ambiente educativo profesional",
      "Posibilidad de dictar clases online",
    ],
    fechaPublicacion: "2024-01-12",
    salario: "$400.000 - $600.000",
  },
  {
    id: 5,
    puesto: "Vendedor de Comercio",
    empresa: "Tienda Local",
    sector: "Comercio",
    modalidad: "Presencial",
    horario: "Tiempo completo",
    ubicacion: "Villa María, Córdoba",
    descripcion: "Local comercial busca vendedor con experiencia en atención al cliente.",
    responsabilidades: [
      "Atender y asesorar a clientes",
      "Realizar ventas y cobros",
      "Mantener el orden y limpieza del local",
      "Gestionar stock y reposición de productos",
    ],
    requisitos: [
      "Experiencia en ventas y atención al cliente",
      "Buena presencia y trato amable",
      "Disponibilidad horaria",
      "Conocimientos básicos de computación",
    ],
    beneficios: [
      "Salario fijo más comisiones",
      "Capacitación en productos",
      "Descuentos en compras",
      "Ambiente de trabajo dinámico",
    ],
    fechaPublicacion: "2024-01-11",
    salario: "$500.000 + comisiones",
  },
]

// Página de detalles de una oferta de trabajo específica
// Recibe el ID de la oferta como parámetro de la URL
export default function OfertaDetallePage({ params }: { params: { id: string } }) {
  // Buscar la oferta por ID
  const job = mockJobs.find((j) => j.id === Number.parseInt(params.id))

  // Si no se encuentra la oferta, mostrar página 404
  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con botón de volver */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/buscar-ofertas">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a ofertas
            </Button>
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Encabezado de la oferta */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            {/* Icono de la empresa */}
            <div className="bg-primary/10 rounded-lg p-4 flex-shrink-0">
              <Building2 className="h-8 w-8 text-primary" />
            </div>

            <div className="flex-1">
              {/* Título del puesto */}
              <h1 className="text-3xl font-bold text-foreground mb-2">{job.puesto}</h1>
              {/* Nombre de la empresa */}
              <p className="text-xl text-muted-foreground font-medium mb-4">{job.empresa}</p>

              {/* Badges de modalidad y sector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {job.modalidad}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {job.sector}
                </Badge>
              </div>

              {/* Detalles rápidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{job.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{job.horario}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Publicado: {new Date(job.fechaPublicacion).toLocaleDateString("es-AR")}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salario}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de postulación principal */}
          <Button size="lg" className="w-full md:w-auto">
            <Briefcase className="h-4 w-4 mr-2" />
            Postularme a esta oferta
          </Button>
        </Card>

        {/* Descripción */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Descripción del puesto</h2>
          <p className="text-foreground leading-relaxed">{job.descripcion}</p>
        </Card>

        {/* Responsabilidades */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Responsabilidades</h2>
          <ul className="space-y-2">
            {job.responsabilidades.map((resp, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Requisitos */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Requisitos</h2>
          <ul className="space-y-2">
            {job.requisitos.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Beneficios */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Beneficios</h2>
          <ul className="space-y-2">
            {job.beneficios.map((ben, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Botón de postulación inferior */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">¿Te interesa esta oferta?</h3>
              <p className="text-sm text-muted-foreground">Postulate ahora y no pierdas esta oportunidad</p>
            </div>
            <Button size="lg">
              <Briefcase className="h-4 w-4 mr-2" />
              Postularme ahora
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
