"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobFilters } from "@/components/job-filters"
import { JobListings } from "@/components/job-listings"

// Página principal para buscar ofertas de trabajo
// Muestra filtros en el lado izquierdo y las ofertas en el lado derecho
export default function BuscarOfertasPage() {
  // Estado para almacenar los filtros seleccionados
  const [filters, setFilters] = useState({
    sector: "",
    modalidad: "",
    horario: "",
    fechaPublicacion: "",
  })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Contenedor principal con padding superior para el header fijo */}
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Título de la página */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Buscar Ofertas de Trabajo</h1>
            <p className="text-muted-foreground text-lg">
              Encontrá el empleo ideal para vos. Usá los filtros para refinar tu búsqueda.
            </p>
          </div>

          {/* Layout de dos columnas: filtros a la izquierda, ofertas a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Columna de filtros (1/4 del ancho en pantallas grandes) */}
            <div className="lg:col-span-1">
              <JobFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* Columna de listado de ofertas (3/4 del ancho en pantallas grandes) */}
            <div className="lg:col-span-3">
              <JobListings filters={filters} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
