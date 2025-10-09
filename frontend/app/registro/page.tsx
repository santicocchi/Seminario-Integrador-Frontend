import { Header } from "@/components/header"
import { AccountTypeSelection } from "@/components/account-type-selection"

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      <main className="pt-24 pb-16">
        <AccountTypeSelection />
      </main>
    </div>
  )
}
