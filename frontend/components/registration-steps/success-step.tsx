"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, User, Briefcase } from "lucide-react"
import Link from "next/link"

export function SuccessStep() {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg border border-border text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-accent/10 rounded-full p-6">
          <CheckCircle2 className="h-24 w-24 text-accent" />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-foreground mb-4">¡Registro completado con éxito!</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Tu cuenta ha sido creada correctamente.
        <br />
        Ahora podés acceder a todas las funcionalidades de la plataforma.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Link href="/perfil" className="flex-1">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2">
            <User className="h-5 w-5" />
            IR A MI PERFIL
          </Button>
        </Link>
        <Link href="/ofertas" className="flex-1">
          <Button className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-bold flex items-center justify-center gap-2">
            <Briefcase className="h-5 w-5" />
            EXPLORAR OFERTAS
          </Button>
        </Link>
      </div>
    </div>
  )
}
