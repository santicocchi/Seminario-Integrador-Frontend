"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import {login} from "@/services/authService";
import { set } from "date-fns"

// Formulario de inicio de sesión
// Permite al usuario ingresar con email y contraseña
export function LoginForm() {
  // Estado para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false)

  // Estados para los campos del formulario
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   // Estado para el mensaje
  const [mensaje, setMensaje] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");


  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí conectarás con tu backend para autenticar al usuario
    try{
      const result = await login({email, password});
      // Guardar correctamente el token
      localStorage.setItem("token", result.accessToken);
      
      console.log("Inicio de sesión exitoso:", result);

      // Mostrar mensaje en pantalla
       setMensaje("Inicio de sesión exitoso");
        setErrorMensaje(""); // Limpiar mensaje de error
       

      
      // Redirigir o actualizar UI según sea necesario
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
       // Mostrar mensaje de error
       setErrorMensaje("Credenciales inválidas. Por favor, inténtalo de nuevo.");
       setMensaje(""); // Limpiar mensaje de éxito
       setMensaje(""); // Limpiar mensaje de éxito
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campo de correo electrónico */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
          Correo electrónico
        </Label>
        <div className="relative">
          {/* Icono de email */}
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12"
            required
          />
        </div>
      </div>

      {/* Campo de contraseña */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-semibold text-foreground">
          Contraseña
        </Label>
        <div className="relative">
          {/* Icono de candado */}
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-12"
            required
          />
          {/* Botón para mostrar/ocultar contraseña */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Opciones de recordar y recuperar contraseña */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded border-border" />
          <span className="text-sm text-muted-foreground">Recordarme</span>
        </label>
        <a href="#" className="text-sm text-primary hover:underline font-medium">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {/* Botón de envío */}
      <Button
        type="submit"
        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
      >
        Iniciar Sesión
      </Button>

      {mensaje && (
      <div className="mt-4 mx-auto w-full max-w-md border border-green-500 bg-green-100 text-green-800 px-4 py-2 rounded text-center font-semibold shadow-sm">
      {mensaje}
      </div>)}

      {errorMensaje && (
      <div className="mt-4 mx-auto w-full max-w-md border border-red-500 bg-red-100 text-red-800 px-4 py-2 rounded text-center font-semibold shadow-sm">
      {errorMensaje}
      </div>)}

      {/* Divisor */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-muted-foreground">O continúa con</span>
        </div>
      </div>
    </form>
  )
}
