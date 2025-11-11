"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

// Componente de filtros para buscar ofertas de trabajo
// Permite filtrar por sector, modalidad, horario y fecha de publicación
interface JobFiltersProps {
  filters: {
    sector: string
    modalidad: string
    horario: string
    fechaPublicacion: string
  }
  setFilters: (filters: any) => void
}

export function JobFilters({ filters, setFilters }: JobFiltersProps) {
  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setFilters({
      sector: "",
      modalidad: "",
      horario: "",
      fechaPublicacion: "",
    })
  }

  // Verificar si hay algún filtro activo
  const hasActiveFilters = Object.values(filters).some((value) => value !== "")

  return (
    <Card className="p-6 sticky top-28">
      {/* Encabezado de filtros */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Filtros</h2>
        </div>
        {/* Botón para limpiar filtros (solo visible si hay filtros activos) */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Filtro por Sector */}
        <div className="space-y-2">
          <Label htmlFor="sector" className="text-sm font-semibold">
            Sector
          </Label>
          <Select value={filters.sector} onValueChange={(value) => setFilters({ ...filters, sector: value })}>
            <SelectTrigger id="sector">
              <SelectValue placeholder="Todos los sectores" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los sectores</SelectItem>
              <SelectItem value="informatica">Informática</SelectItem>
              <SelectItem value="desarrollo-web">Desarrollo Web</SelectItem>
              <SelectItem value="agricultura">Agricultura</SelectItem>
              <SelectItem value="construccion">Construcción</SelectItem>
              <SelectItem value="educacion">Educación</SelectItem>
              <SelectItem value="salud">Salud</SelectItem>
              <SelectItem value="comercio">Comercio</SelectItem>
              <SelectItem value="gastronomia">Gastronomía</SelectItem>
              <SelectItem value="turismo">Turismo</SelectItem>
              <SelectItem value="transporte">Transporte</SelectItem>
              <SelectItem value="finanzas">Finanzas</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="manufactura">Manufactura</SelectItem>
              <SelectItem value="servicios">Servicios</SelectItem>
              <SelectItem value="telecomunicaciones">Telecomunicaciones</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filtro por Modalidad de Trabajo */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Modalidad de Trabajo</Label>
          <RadioGroup value={filters.modalidad} onValueChange={(value) => setFilters({ ...filters, modalidad: value })}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="todas" id="todas" />
              <Label htmlFor="todas" className="font-normal cursor-pointer">
                Todas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="presencial" id="presencial" />
              <Label htmlFor="presencial" className="font-normal cursor-pointer">
                Presencial
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remoto" id="remoto" />
              <Label htmlFor="remoto" className="font-normal cursor-pointer">
                Remoto
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hibrido" id="hibrido" />
              <Label htmlFor="hibrido" className="font-normal cursor-pointer">
                Híbrido
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Filtro por Horario */}
        <div className="space-y-2">
          <Label htmlFor="horario" className="text-sm font-semibold">
            Horario
          </Label>
          <Select value={filters.horario} onValueChange={(value) => setFilters({ ...filters, horario: value })}>
            <SelectTrigger id="horario">
              <SelectValue placeholder="Todos los horarios" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los horarios</SelectItem>
              <SelectItem value="tiempo-completo">Tiempo Completo</SelectItem>
              <SelectItem value="medio-tiempo">Medio Tiempo</SelectItem>
              <SelectItem value="por-horas">Por Horas</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filtro por Fecha de Publicación */}
        <div className="space-y-2">
          <Label htmlFor="fecha" className="text-sm font-semibold">
            Fecha de Publicación
          </Label>
          <Select
            value={filters.fechaPublicacion}
            onValueChange={(value) => setFilters({ ...filters, fechaPublicacion: value })}
          >
            <SelectTrigger id="fecha">
              <SelectValue placeholder="Cualquier fecha" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Cualquier fecha</SelectItem>
              <SelectItem value="hoy">Hoy</SelectItem>
              <SelectItem value="ultima-semana">Última semana</SelectItem>
              <SelectItem value="ultimo-mes">Último mes</SelectItem>
              <SelectItem value="ultimos-3-meses">Últimos 3 meses</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}
