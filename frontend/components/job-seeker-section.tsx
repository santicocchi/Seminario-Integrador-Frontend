"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { UserPlus, Briefcase, Bell } from "lucide-react"
import Link from "next/link"

export function JobSeekerSection() {
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
    <section id="buscar" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¡Las ofertas de trabajo están esperándote!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Registrate gratis y accedé a cientos de oportunidades laborales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Feature 1 */}
          <div className="scale-in stagger-1">
            <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 h-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Registro gratuito</h3>
              <p className="text-white text-pretty leading-relaxed">
                Creá tu cuenta en minutos y empezá a buscar ofertas de empleo de forma inmediata.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="scale-in stagger-2">
            <div className="bg-secondary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 h-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Vacantes diarias</h3>
              <p className="text-white text-pretty leading-relaxed">
                Consultá nuevas oportunidades día a día y postulate a las que más te interesen.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="scale-in stagger-3">
            <div className="bg-accent rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 h-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Notificaciones</h3>
              <p className="text-white text-pretty leading-relaxed">
                Activá las notificaciones y recibí la respuesta a tus postulaciones al instante.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center fade-in-up stagger-3">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            asChild
          >
            <Link href="/registro">Creá tu cuenta gratis</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
