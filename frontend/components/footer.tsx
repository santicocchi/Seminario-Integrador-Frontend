import Link from "next/link"
import { Briefcase, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary rounded-full p-2">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Bolsa de Trabajo VM</span>
            </div>
            <p className="text-white/70 mb-4 text-pretty">
              Conectando empresas y profesionales en Villa María para construir un mejor futuro laboral.
            </p>
            <p className="text-white/60 text-sm">www.bolsatrabajovm.com.ar</p>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Información</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Ejemplo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Hola
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Estas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Bla
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contactanos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@bolsatrabajovm.com.ar"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+543534000000"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Número de teléfono
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2025 Bolsa de Trabajo Villa María. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
