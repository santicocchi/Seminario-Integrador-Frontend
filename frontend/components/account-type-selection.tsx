"use client"

import { Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function AccountTypeSelection() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Crear una cuenta</h1>
        <p className="text-lg text-muted-foreground">Seleccioná el tipo de cuenta que deseas crear</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Cuenta de Empresa */}
        <button
          onClick={() => router.push("/registro/empresa")}
          className="group relative bg-white rounded-2xl p-8 border-2 border-border hover:border-primary transition-all hover:shadow-xl"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="bg-primary/10 rounded-full p-6 group-hover:bg-primary group-hover:scale-110 transition-all">
              <Building2 className="h-16 w-16 text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Cuenta de Empresa</h2>
              <p className="text-muted-foreground">
                Publicá ofertas de trabajo y encontrá a los mejores candidatos para tu empresa
              </p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12">
              Crear cuenta de Empresa
            </Button>
          </div>
        </button>

        {/* Cuenta de Usuario */}
        <button
          onClick={() => router.push("/registro/usuario")}
          className="group relative bg-white rounded-2xl p-8 border-2 border-border hover:border-secondary transition-all hover:shadow-xl"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="bg-secondary/10 rounded-full p-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
              <User className="h-16 w-16 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Cuenta de Usuario</h2>
              <p className="text-muted-foreground">
                Buscá ofertas de trabajo y postulate a las oportunidades que más te interesen
              </p>
            </div>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold h-12">
              Crear cuenta de Usuario
            </Button>
          </div>
        </button>
      </div>
    </div>
  )
}
