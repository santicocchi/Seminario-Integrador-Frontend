"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Eye, EyeOff } from "lucide-react"
import { CompanySuccessScreen } from "./company-success-screen"

// Lista de sectores disponibles para empresas
const SECTORES = [
  "Informática",
  "Desarrollo web",
  "Agricultura",
  "Construcción",
  "Educación",
  "Salud",
  "Comercio",
  "Gastronomía",
  "Turismo",
  "Transporte",
  "Finanzas",
  "Marketing",
  "Manufactura",
  "Servicios",
  "Telecomunicaciones",
]

// Formulario de registro para empresas
// Recopila información de la empresa y crea una cuenta
export function CompanyRegistrationForm() {
  // Estado para mostrar la pantalla de éxito
  const [showSuccess, setShowSuccess] = useState(false)

  // Estados para mostrar/ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Estado con todos los datos del formulario
  const [formData, setFormData] = useState({
    nombreComercial: "",
    razonSocial: "",
    cuit: "",
    sector: "",
    telefono: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Función para formatear el CUIT automáticamente (XX-XXXXXXXX-X)
  const handleCuitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Eliminar todos los caracteres que no sean números
    let value = e.target.value.replace(/\D/g, "")

    // Limitar a 11 dígitos
    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    // Formatear con guiones
    let formatted = value
    if (value.length > 2) {
      formatted = value.slice(0, 2) + "-" + value.slice(2)
    }
    if (value.length > 10) {
      formatted = value.slice(0, 2) + "-" + value.slice(2, 10) + "-" + value.slice(10)
    }

    setFormData({ ...formData, cuit: formatted })
  }

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí conectarás con tu backend para crear la cuenta de empresa
    setShowSuccess(true)
  }

  // Si el registro fue exitoso, mostrar pantalla de éxito
  if (showSuccess) {
    return <CompanySuccessScreen />
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border">
      {/* Encabezado del formulario */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 rounded-full p-4">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Empezá a crear tu cuenta de empresa</h1>
        <p className="text-muted-foreground">Completá los datos de tu empresa para comenzar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground border-b pb-2">Datos de la empresa</h2>

          {/* Nombre comercial y razón social */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombreComercial">Nombre comercial de la empresa *</Label>
              <Input
                id="nombreComercial"
                required
                value={formData.nombreComercial}
                onChange={(e) => setFormData({ ...formData, nombreComercial: e.target.value })}
                placeholder="Ej: Tech Solutions"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="razonSocial">Razón social *</Label>
              <Input
                id="razonSocial"
                required
                value={formData.razonSocial}
                onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                placeholder="Ej: Tech Solutions S.A."
              />
            </div>
          </div>

          {/* CUIT y Sector */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cuit">CUIT *</Label>
              <Input
                id="cuit"
                required
                value={formData.cuit}
                onChange={handleCuitChange}
                placeholder="XX-XXXXXXXX-X"
                maxLength={13}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">Sector *</Label>
              <Select
                required
                value={formData.sector}
                onValueChange={(value) => setFormData({ ...formData, sector: value })}
              >
                <SelectTrigger id="sector">
                  <SelectValue placeholder="Seleccioná un sector" />
                </SelectTrigger>
                <SelectContent>
                  {/* Mapear todos los sectores disponibles */}
                  {SECTORES.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Teléfono y Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="Ej: 3534123456"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="empresa@ejemplo.com"
              />
            </div>
          </div>

          {/* Contraseña y Confirmar contraseña */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Mínimo 8 caracteres"
                  minLength={8}
                />
                {/* Botón para mostrar/ocultar contraseña */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Repetí tu contraseña"
                  minLength={8}
                />
                {/* Botón para mostrar/ocultar confirmación de contraseña */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de envío */}
        <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg">
          ACEPTAR
        </Button>
      </form>
    </div>
  )
}
