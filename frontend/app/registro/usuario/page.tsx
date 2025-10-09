import { Header } from "@/components/header"
import { UserRegistrationForm } from "@/components/user-registration-form"

export default function RegistroUsuarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      <main className="pt-24 pb-16">
        <UserRegistrationForm />
      </main>
    </div>
  )
}
