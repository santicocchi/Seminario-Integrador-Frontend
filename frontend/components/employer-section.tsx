"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Users, MessageSquare, ArrowRight } from "lucide-react"

export function EmployerSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up, .scale-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="publicar" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <Button variant="outline" className="mb-6 rounded-full bg-transparent">
            ¿Querés publicar una oferta?
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¡Publicá tus ofertas de trabajo!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conectá con los mejores profesionales de Villa María en simples pasos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Step 1 */}
            <div className="scale-in stagger-1 relative flex-1 w-full">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mt-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Creá tu cuenta de empresa</h3>
                <p className="text-muted-foreground text-pretty">
                  Publicá y llegá a los profesionales que buscás para tu equipo.
                </p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block fade-in-up stagger-2">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            {/* Step 2 */}
            <div className="scale-in stagger-2 relative flex-1 w-full">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mt-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Accedé a perfiles y filtrá</h3>
                <p className="text-muted-foreground text-pretty">
                  Según tus necesidades empresariales y requisitos específicos.
                </p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block fade-in-up stagger-3">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            {/* Step 3 */}
            <div className="scale-in stagger-3 relative flex-1 w-full">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  3
                </div>
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mt-4">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Contactá al candidato</h3>
                <p className="text-muted-foreground text-pretty">
                  Que mejor encaje con tu empresa y comenzá el proceso de selección.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
