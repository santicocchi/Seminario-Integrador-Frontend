"use client"

// Página de perfil de empresa con navegación lateral y secciones
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, FileText, Users, Edit, Eye, Trash2, Pause, Play } from "lucide-react"
import Link from "next/link"

// Datos de ejemplo - luego se reemplazarán con datos del backend
const empresaEjemplo = {
  nombre: "Tech Solutions SA",
  razonSocial: "Tech Solutions Sociedad Anónima",
  cuit: "30-12345678-9",
  sector: "Informática",
  telefono: "+54 353 1234567",
  email: "contacto@techsolutions.com",
  estadisticas: {
    totalOfertas: 15,
    disponibles: 8,
    finalizadas: 4,
    pausadas: 2,
    eliminadas: 1,
  },
}

const ofertasEjemplo = [
  {
    id: 1,
    puesto: "Desarrollador Full Stack",
    modalidad: "Híbrido",
    horario: "Lunes a Viernes 9-18hs",
    estado: "disponible",
    fechaPublicacion: "2024-01-15",
    postulaciones: 12,
  },
  {
    id: 2,
    puesto: "Diseñador UX/UI",
    modalidad: "Remoto",
    horario: "Flexible",
    estado: "disponible",
    fechaPublicacion: "2024-01-20",
    postulaciones: 8,
  },
  {
    id: 3,
    puesto: "Project Manager",
    modalidad: "Presencial",
    horario: "Lunes a Viernes 8-17hs",
    estado: "pausada",
    fechaPublicacion: "2024-01-10",
    postulaciones: 15,
  },
]

const postulacionesEjemplo = [
  {
    ofertaId: 1,
    puesto: "Desarrollador Full Stack",
    totalPostulaciones: 12,
    postulantes: [
      {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan@email.com",
        estado: "pendiente",
        fechaPostulacion: "2024-01-16",
      },
      {
        id: 2,
        nombre: "María González",
        email: "maria@email.com",
        estado: "en-revision",
        fechaPostulacion: "2024-01-17",
      },
      {
        id: 3,
        nombre: "Carlos Rodríguez",
        email: "carlos@email.com",
        estado: "preseleccionada",
        fechaPostulacion: "2024-01-18",
      },
    ],
  },
  {
    ofertaId: 2,
    puesto: "Diseñador UX/UI",
    totalPostulaciones: 8,
    postulantes: [
      {
        id: 4,
        nombre: "Ana Martínez",
        email: "ana@email.com",
        estado: "aceptada",
        fechaPostulacion: "2024-01-21",
      },
      {
        id: 5,
        nombre: "Luis Fernández",
        email: "luis@email.com",
        estado: "rechazada",
        fechaPostulacion: "2024-01-22",
      },
    ],
  },
]

export default function PerfilEmpresaPage() {
  // Estado para controlar qué sección está activa
  const [seccionActiva, setSeccionActiva] = useState<"inicio" | "ofertas" | "postulados">("inicio")

  // Estado para controlar qué oferta muestra sus postulantes
  const [ofertaSeleccionada, setOfertaSeleccionada] = useState<number | null>(null)

  // Estado para el postulante seleccionado y filtro de estado
  const [postulanteSeleccionado, setPostulanteSeleccionado] = useState<any>(null)
  const [filtroEstado, setFiltroEstado] = useState<string>("todos")

  // Función para obtener el color del badge según el estado de la oferta
  const getEstadoBadge = (estado: string) => {
    const estados: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      disponible: { label: "Disponible", variant: "default" },
      pausada: { label: "Pausada", variant: "secondary" },
      finalizada: { label: "Finalizada", variant: "outline" },
      eliminada: { label: "Eliminada", variant: "destructive" },
    }
    return estados[estado] || estados.disponible
  }

  // Función para obtener el color del badge según el estado de la postulación
  const getEstadoPostulacionBadge = (estado: string) => {
    const estados: Record<string, { label: string; className: string }> = {
      pendiente: { label: "Pendiente de revisión", className: "bg-gray-500" },
      "en-revision": { label: "En revisión", className: "bg-blue-500" },
      preseleccionada: { label: "Preseleccionada", className: "bg-yellow-500" },
      rechazada: { label: "Rechazada", className: "bg-red-500" },
      aceptada: { label: "Aceptada", className: "bg-green-500" },
    }
    return estados[estado] || estados.pendiente
  }

  const cambiarEstadoPostulacion = (nuevoEstado: string) => {
    console.log(`[v0] Cambiando estado de postulación a: ${nuevoEstado}`)
    // Aquí se conectará con el backend para actualizar el estado
    if (postulanteSeleccionado) {
      postulanteSeleccionado.estado = nuevoEstado
      setPostulanteSeleccionado({ ...postulanteSeleccionado })
    }
  }

  const filtrarPostulantes = (postulantes: any[]) => {
    if (filtroEstado === "todos") return postulantes
    return postulantes.filter((p) => p.estado === filtroEstado)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">{empresaEjemplo.nombre}</h1>
              <p className="text-sm text-muted-foreground">{empresaEjemplo.sector}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Panel de navegación lateral */}
          <aside className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Panel de Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Botón Inicio */}
                <Button
                  variant={seccionActiva === "inicio" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSeccionActiva("inicio")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Inicio
                </Button>

                {/* Botón Ofertas Laborales */}
                <Button
                  variant={seccionActiva === "ofertas" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSeccionActiva("ofertas")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Ofertas Publicadas
                </Button>

                {/* Botón Mis Postulados */}
                <Button
                  variant={seccionActiva === "postulados" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSeccionActiva("postulados")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Mis Postulados
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Contenido principal */}
          <main className="md:col-span-3">
            {/* Sección Inicio */}
            {seccionActiva === "inicio" && (
              <div className="space-y-6">
                {/* Datos de la empresa */}
                <Card>
                  <CardHeader>
                    <CardTitle>Información de la Empresa</CardTitle>
                    <CardDescription>Datos registrados de tu empresa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Nombre Comercial</p>
                        <p className="text-base">{empresaEjemplo.nombre}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Razón Social</p>
                        <p className="text-base">{empresaEjemplo.razonSocial}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">CUIT</p>
                        <p className="text-base">{empresaEjemplo.cuit}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Sector</p>
                        <p className="text-base">{empresaEjemplo.sector}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Teléfono</p>
                        <p className="text-base">{empresaEjemplo.telefono}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p className="text-base">{empresaEjemplo.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Estadísticas */}
                <Card>
                  <CardHeader>
                    <CardTitle>Estadísticas de Ofertas Laborales</CardTitle>
                    <CardDescription>Resumen de tus publicaciones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {/* Total */}
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <p className="text-3xl font-bold text-primary">{empresaEjemplo.estadisticas.totalOfertas}</p>
                        <p className="text-sm text-muted-foreground mt-1">Total</p>
                      </div>

                      {/* Disponibles */}
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-3xl font-bold text-green-600">{empresaEjemplo.estadisticas.disponibles}</p>
                        <p className="text-sm text-muted-foreground mt-1">Disponibles</p>
                      </div>

                      {/* Finalizadas */}
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">{empresaEjemplo.estadisticas.finalizadas}</p>
                        <p className="text-sm text-muted-foreground mt-1">Finalizadas</p>
                      </div>

                      {/* Pausadas */}
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <p className="text-3xl font-bold text-yellow-600">{empresaEjemplo.estadisticas.pausadas}</p>
                        <p className="text-sm text-muted-foreground mt-1">Pausadas</p>
                      </div>

                      {/* Eliminadas */}
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <p className="text-3xl font-bold text-red-600">{empresaEjemplo.estadisticas.eliminadas}</p>
                        <p className="text-sm text-muted-foreground mt-1">Eliminadas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Sección Ofertas Laborales Publicadas */}
            {seccionActiva === "ofertas" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Ofertas Laborales Publicadas</h2>
                  <Button asChild>
                    <Link href="/publicar-oferta">
                      <FileText className="mr-2 h-4 w-4" />
                      Nueva Oferta
                    </Link>
                  </Button>
                </div>

                {/* Lista de ofertas */}
                <div className="space-y-4">
                  {ofertasEjemplo.map((oferta) => {
                    const estadoBadge = getEstadoBadge(oferta.estado)
                    return (
                      <Card key={oferta.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{oferta.puesto}</CardTitle>
                              <CardDescription>
                                Publicado el {new Date(oferta.fechaPublicacion).toLocaleDateString("es-AR")}
                              </CardDescription>
                            </div>
                            <Badge variant={estadoBadge.variant}>{estadoBadge.label}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex gap-4 text-sm">
                              <span>
                                <strong>Modalidad:</strong> {oferta.modalidad}
                              </span>
                              <span>
                                <strong>Horario:</strong> {oferta.horario}
                              </span>
                              <span>
                                <strong>Postulaciones:</strong> {oferta.postulaciones}
                              </span>
                            </div>

                            {/* Botones de acción */}
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="mr-2 h-4 w-4" />
                                Ver
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </Button>
                              {oferta.estado === "disponible" ? (
                                <Button size="sm" variant="outline">
                                  <Pause className="mr-2 h-4 w-4" />
                                  Pausar
                                </Button>
                              ) : oferta.estado === "pausada" ? (
                                <Button size="sm" variant="outline">
                                  <Play className="mr-2 h-4 w-4" />
                                  Reactivar
                                </Button>
                              ) : null}
                              <Button size="sm" variant="destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Eliminar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Sección Mis Postulados */}
            {seccionActiva === "postulados" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Mis Postulados</h2>

                {/* Lista de ofertas con postulaciones */}
                <div className="space-y-4">
                  {postulacionesEjemplo.map((oferta) => (
                    <Card key={oferta.ofertaId}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle>{oferta.puesto}</CardTitle>
                            <CardDescription>
                              {oferta.totalPostulaciones} postulación{oferta.totalPostulaciones !== 1 ? "es" : ""}
                            </CardDescription>
                          </div>
                          <Button
                            onClick={() => {
                              setOfertaSeleccionada(ofertaSeleccionada === oferta.ofertaId ? null : oferta.ofertaId)
                              setFiltroEstado("todos")
                            }}
                          >
                            {ofertaSeleccionada === oferta.ofertaId ? "Ocultar" : "Ver"} Postulantes
                          </Button>
                        </div>
                      </CardHeader>

                      {/* Lista de postulantes (se muestra al hacer clic) */}
                      {ofertaSeleccionada === oferta.ofertaId && (
                        <CardContent>
                          <div className="mb-4 flex gap-2 flex-wrap">
                            <Button
                              size="sm"
                              variant={filtroEstado === "todos" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("todos")}
                            >
                              Todos ({oferta.postulantes.length})
                            </Button>
                            <Button
                              size="sm"
                              variant={filtroEstado === "pendiente" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("pendiente")}
                            >
                              Pendientes ({oferta.postulantes.filter((p) => p.estado === "pendiente").length})
                            </Button>
                            <Button
                              size="sm"
                              variant={filtroEstado === "en-revision" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("en-revision")}
                            >
                              En Revisión ({oferta.postulantes.filter((p) => p.estado === "en-revision").length})
                            </Button>
                            <Button
                              size="sm"
                              variant={filtroEstado === "preseleccionada" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("preseleccionada")}
                            >
                              Preseleccionados (
                              {oferta.postulantes.filter((p) => p.estado === "preseleccionada").length})
                            </Button>
                            <Button
                              size="sm"
                              variant={filtroEstado === "aceptada" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("aceptada")}
                            >
                              Aceptados ({oferta.postulantes.filter((p) => p.estado === "aceptada").length})
                            </Button>
                            <Button
                              size="sm"
                              variant={filtroEstado === "rechazada" ? "default" : "outline"}
                              onClick={() => setFiltroEstado("rechazada")}
                            >
                              Rechazados ({oferta.postulantes.filter((p) => p.estado === "rechazada").length})
                            </Button>
                          </div>

                          <div className="space-y-3">
                            {filtrarPostulantes(oferta.postulantes).map((postulante) => {
                              const estadoBadge = getEstadoPostulacionBadge(postulante.estado)
                              return (
                                <div
                                  key={postulante.id}
                                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                                  onClick={() => setPostulanteSeleccionado(postulante)}
                                >
                                  <div className="space-y-1">
                                    <p className="font-medium">{postulante.nombre}</p>
                                    <p className="text-sm text-muted-foreground">{postulante.email}</p>
                                    <p className="text-xs text-muted-foreground">
                                      Postulado el {new Date(postulante.fechaPostulacion).toLocaleDateString("es-AR")}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge className={estadoBadge.className}>{estadoBadge.label}</Badge>
                                  </div>
                                </div>
                              )
                            })}

                            {filtrarPostulantes(oferta.postulantes).length === 0 && (
                              <p className="text-center text-muted-foreground py-8">
                                No hay postulantes con el estado seleccionado
                              </p>
                            )}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {postulanteSeleccionado && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setPostulanteSeleccionado(null)}
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{postulanteSeleccionado.nombre}</CardTitle>
                  <CardDescription>{postulanteSeleccionado.email}</CardDescription>
                </div>
                <Badge className={getEstadoPostulacionBadge(postulanteSeleccionado.estado).className}>
                  {getEstadoPostulacionBadge(postulanteSeleccionado.estado).label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Información del postulante */}
              <div>
                <h3 className="font-semibold mb-2">Información Personal</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Fecha de Postulación</p>
                    <p>{new Date(postulanteSeleccionado.fechaPostulacion).toLocaleDateString("es-AR")}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p>{postulanteSeleccionado.email}</p>
                  </div>
                </div>
              </div>

              {/* Datos de ejemplo del CV */}
              <div>
                <h3 className="font-semibold mb-2">Experiencia Laboral</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-accent/50 rounded">
                    <p className="font-medium">Desarrollador Frontend - Tech Company</p>
                    <p className="text-muted-foreground">2020 - Actualidad</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Educación</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-accent/50 rounded">
                    <p className="font-medium">Licenciatura en Sistemas</p>
                    <p className="text-muted-foreground">Universidad Nacional - 2016-2020</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Aptitudes</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Trabajo en equipo</Badge>
                  <Badge variant="outline">Adaptabilidad</Badge>
                  <Badge variant="outline">Comunicación</Badge>
                </div>
              </div>

              {/* Botones de acción según el estado */}
              <div className="flex gap-2 pt-4 border-t">
                {/* Si está pendiente o en revisión: puede preseleccionar o rechazar */}
                {(postulanteSeleccionado.estado === "pendiente" || postulanteSeleccionado.estado === "en-revision") && (
                  <>
                    <Button
                      className="flex-1"
                      variant="default"
                      onClick={() => cambiarEstadoPostulacion("preseleccionada")}
                    >
                      Preseleccionar
                    </Button>
                    <Button
                      className="flex-1"
                      variant="destructive"
                      onClick={() => cambiarEstadoPostulacion("rechazada")}
                    >
                      Rechazar
                    </Button>
                  </>
                )}

                {/* Si está preseleccionado: puede aceptar o rechazar */}
                {postulanteSeleccionado.estado === "preseleccionada" && (
                  <>
                    <Button className="flex-1" variant="default" onClick={() => cambiarEstadoPostulacion("aceptada")}>
                      Aceptar
                    </Button>
                    <Button
                      className="flex-1"
                      variant="destructive"
                      onClick={() => cambiarEstadoPostulacion("rechazada")}
                    >
                      Rechazar
                    </Button>
                  </>
                )}

                {/* Si está aceptado o rechazado: solo mostrar el estado */}
                {(postulanteSeleccionado.estado === "aceptada" || postulanteSeleccionado.estado === "rechazada") && (
                  <p className="text-center text-muted-foreground w-full py-2">
                    Esta postulación ya fue {postulanteSeleccionado.estado === "aceptada" ? "aceptada" : "rechazada"}
                  </p>
                )}

                <Button variant="outline" onClick={() => setPostulanteSeleccionado(null)}>
                  Cerrar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
