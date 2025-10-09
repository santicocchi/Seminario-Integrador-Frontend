"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Building2, Briefcase, Users } from "lucide-react"

export function CompanySuccessScreen() {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg border border-border text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-accent/10 rounded-full p-6">
          <CheckCircle2 className="h-24 w-24 text-accent" />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-foreground mb-4">¡Registro completado con éxito!</h2>
      <p className="text-lg text-muted-foreground mb-2">Tu cuenta de empresa fue creada correctamente.</p>
      <p className="text-lg text-muted-foreground mb-8">
        Ahora podés comenzar a publicar tus ofertas de trabajo y buscar candidatos para cubrir tus posiciones.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
        <Button
          onClick={() => {}}
          className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2"
        >
          <Building2 className="h-5 w-5" />
          Ir al perfil de la empresa
        </Button>
        <Button
          onClick={() => {}}
          className="flex-1 h-12 bg-secondary hover:bg-secondary/90 text-white font-bold flex items-center justify-center gap-2"
        >
          <Briefcase className="h-5 w-5" />
          Publicar una oferta laboral
        </Button>
        <Button
          onClick={() => {}}
          className="flex-1 h-12 bg-accent hover:bg-accent/90 text-white font-bold flex items-center justify-center gap-2"
        >
          <Users className="h-5 w-5" />
          Buscar candidatos
        </Button>
      </div>
    </div>
  )
}
