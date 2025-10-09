"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Sección hero principal con imagen de fondo de la ciudad
// Incluye animaciones al hacer scroll
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Efecto para detectar cuando los elementos entran en la vista y activar animaciones
  useEffect(() => {
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento es visible, agregar clase "visible" para activar animación
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }, // Activar cuando el 10% del elemento es visible
    )

    // Observar todos los elementos con clases de animación
    const elements = sectionRef.current?.querySelectorAll(".fade-in-up, .fade-in")
    elements?.forEach((el) => observer.observe(el))

    // Limpiar observador al desmontar componente
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de la ciudad de Villa María */}
        <img src="/images/design-mode/Ciudad.png" alt="Villa María" className="w-full h-full object-cover" />
        {/* Overlay con gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/10" />
      </div>

      {/* Contenido principal centrado */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Título principal con animación */}
          <h1 className="fade-in-up stagger-1 text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg">
            Encontrá el empleo que encaja con vos
          </h1>

          {/* Subtítulo con animación */}
          <p className="fade-in-up stagger-2 text-xl md:text-2xl text-white mb-10 text-pretty max-w-2xl mx-auto drop-shadow-md">
            {"Conectamos empresas y profesionales en Villa María.\nTu próxima oportunidad laboral está acá."}
          </p>

          {/* Botones de acción con animación */}
          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/95 font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Search className="mr-2 h-5 w-5" />
              Buscar empleos
            </Button>
            <Button
              size="lg"
              className="border-3 border-white bg-primary/90 text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Publicar oferta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
