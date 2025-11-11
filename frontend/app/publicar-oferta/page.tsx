// Página para publicar ofertas de trabajo
// Solo accesible para empresas registradas
import JobPostingForm from "@/components/job-posting-form"

export default function PublicarOfertaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Espaciado para el header fijo */}
      <div className="h-20" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Título de la página */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">Publicar Oferta de Trabajo</h1>
            <p className="text-muted-foreground text-lg">Completá el formulario para publicar tu oferta laboral</p>
          </div>

          {/* Formulario de publicación */}
          <JobPostingForm />
        </div>
      </div>
    </div>
  )
}
