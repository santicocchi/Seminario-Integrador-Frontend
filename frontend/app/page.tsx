// Página principal de la aplicación
// Muestra el landing page con todas las secciones

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EmployerSection } from "@/components/employer-section"
import { JobSeekerSection } from "@/components/job-seeker-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra de navegación superior */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Sección hero con imagen de la ciudad */}
        <HeroSection />

        {/* Sección para empleadores */}
        <EmployerSection />

        {/* Sección para buscadores de empleo */}
        <JobSeekerSection />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}
