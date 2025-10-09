"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

// Componente de encabezado/navbar
// Muestra el logo, navegación y botones de autenticación
export function Header() {
  // Función para hacer scroll suave hacia arriba cuando se hace clic en "Inicio"
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    // Header fijo en la parte superior con fondo semi-transparente
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo de la aplicación */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-full p-2 group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Bolsa de Trabajo VM</span>
          </Link>

          {/* Menú de navegación (oculto en móvil) */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Link a inicio con scroll suave */}
            <a
              href="/"
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Inicio
            </a>
            <Link href="#publicar" className="text-foreground hover:text-primary transition-colors font-medium">
              Publicar ofertas de trabajo
            </Link>
            <Link href="#buscar" className="text-foreground hover:text-primary transition-colors font-medium">
              Buscar ofertas de trabajo
            </Link>
          </nav>

          {/* Botones de autenticación */}
          <div className="flex items-center gap-3">
            {/* Botón para ir al login */}
            <Link href="/login">
              <Button
                variant="outline"
                className="font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all bg-transparent"
              >
                Iniciar Sesión
              </Button>
            </Link>

            {/* Botón para ir al registro */}
            <Link href="/registro">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
