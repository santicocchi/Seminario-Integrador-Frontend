import { Header } from "@/components/header"
import { CompanyRegistrationForm } from "@/components/company-registration-form"

export default function RegistroEmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <CompanyRegistrationForm />
        </div>
      </main>
    </div>
  )
}
