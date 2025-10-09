"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Lock, Phone, MapPin } from "lucide-react"

interface PersonalDataStepProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
}

export function PersonalDataStep({ formData, updateFormData, onNext }: PersonalDataStepProps) {
  const handleFechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove non-digits

    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2)
    }
    if (value.length >= 5) {
      value = value.slice(0, 5) + "/" + value.slice(5, 9)
    }

    updateFormData({ fechaNacimiento: value })
  }

  const handleCuilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove non-digits

    if (value.length >= 2) {
      value = value.slice(0, 2) + "-" + value.slice(2)
    }
    if (value.length >= 11) {
      value = value.slice(0, 11) + "-" + value.slice(11, 12)
    }

    updateFormData({ cuil: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Datos Personales</h2>
        <p className="text-muted-foreground">Completá tu información personal y de contacto</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos Personales */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Información Personal
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => updateFormData({ nombre: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido">Apellido *</Label>
              <Input
                id="apellido"
                value={formData.apellido}
                onChange={(e) => updateFormData({ apellido: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genero">Género *</Label>
              <Select value={formData.genero} onValueChange={(value) => updateFormData({ genero: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccioná tu género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="femenino">Femenino</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fechaNacimiento">Fecha de Nacimiento (DD/MM/AAAA) *</Label>
              <Input
                id="fechaNacimiento"
                type="text"
                placeholder="DD/MM/AAAA"
                value={formData.fechaNacimiento}
                onChange={handleFechaChange}
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefono">Número de Teléfono *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="telefono"
                  type="tel"
                  className="pl-10"
                  value={formData.telefono}
                  onChange={(e) => updateFormData({ telefono: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cuil">CUIL (XX-XXXXXXXX-X) *</Label>
              <Input
                id="cuil"
                placeholder="XX-XXXXXXXX-X"
                value={formData.cuil}
                onChange={handleCuilChange}
                maxLength={13}
                required
              />
            </div>
          </div>
        </div>

        {/* Dirección */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Dirección
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="localidad">Localidad *</Label>
              <Input
                id="localidad"
                value={formData.localidad}
                onChange={(e) => updateFormData({ localidad: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cp">Código Postal *</Label>
              <Input id="cp" value={formData.cp} onChange={(e) => updateFormData({ cp: e.target.value })} required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calle">Calle *</Label>
              <Input
                id="calle"
                value={formData.calle}
                onChange={(e) => updateFormData({ calle: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numero">Número *</Label>
              <Input
                id="numero"
                value={formData.numero}
                onChange={(e) => updateFormData({ numero: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="piso">Piso (opcional)</Label>
              <Input id="piso" value={formData.piso} onChange={(e) => updateFormData({ piso: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departamento">Departamento (opcional)</Label>
              <Input
                id="departamento"
                value={formData.departamento}
                onChange={(e) => updateFormData({ departamento: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Datos de la Cuenta */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Datos de la Cuenta
          </h3>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                className="pl-10"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateFormData({ password: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Contraseña *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-base">
          Continuar
        </Button>
      </form>
    </div>
  )
}
