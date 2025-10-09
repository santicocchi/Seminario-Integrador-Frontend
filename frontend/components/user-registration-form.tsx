"use client"

import { useState } from "react"
import { PersonalDataStep } from "@/components/registration-steps/personal-data-step"
import { EducationStep } from "@/components/registration-steps/education-step"
import { ExperienceStep } from "@/components/registration-steps/experience-step"
import { LanguagesStep } from "@/components/registration-steps/languages-step"
import { SkillsStep } from "@/components/registration-steps/skills-step"
import { UploadCVStep } from "@/components/registration-steps/upload-cv-step"
import { SuccessStep } from "@/components/registration-steps/success-step"

// Formulario de registro de usuario con múltiples pasos
// Guía al usuario a través de 7 pasos para completar su perfil
export function UserRegistrationForm() {
  // Estado para controlar en qué paso está el usuario (1-7)
  const [currentStep, setCurrentStep] = useState(1)

  // Estado que almacena todos los datos del formulario
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: "",
    apellido: "",
    genero: "",
    fechaNacimiento: "",
    telefono: "",
    cuil: "",
    localidad: "",
    cp: "",
    calle: "",
    numero: "",
    piso: "",
    departamento: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Educación (puede tener múltiples entradas)
    educacion: [] as any[],
    // Experiencias laborales (puede tener múltiples entradas)
    experiencias: [] as any[],
    // Idiomas
    idiomas: [] as any[],
    // Aptitudes seleccionadas
    aptitudes: [] as string[],
    // Archivo CV (opcional)
    cvFile: null as File | null,
  })

  // Función para actualizar los datos del formulario
  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  // Función para avanzar al siguiente paso
  const nextStep = () => setCurrentStep((prev) => prev + 1)

  // Función para retroceder al paso anterior
  const prevStep = () => setCurrentStep((prev) => prev - 1)

  const totalSteps = 7

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Barra de progreso (se oculta en el último paso) */}
      {currentStep < totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {/* Indicador de paso actual */}
            <span className="text-sm font-medium text-muted-foreground">
              Paso {currentStep} de {totalSteps - 1}
            </span>
            {/* Porcentaje completado */}
            <span className="text-sm font-medium text-primary">
              {Math.round(((currentStep - 1) / (totalSteps - 1)) * 100)}% completado
            </span>
          </div>
          {/* Barra de progreso visual */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Renderizar el paso correspondiente según currentStep */}
      {/* Paso 1: Datos personales y de cuenta */}
      {currentStep === 1 && <PersonalDataStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />}

      {/* Paso 2: Educación */}
      {currentStep === 2 && (
        <EducationStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {/* Paso 3: Experiencia laboral */}
      {currentStep === 3 && (
        <ExperienceStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {/* Paso 4: Idiomas */}
      {currentStep === 4 && (
        <LanguagesStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {/* Paso 5: Aptitudes */}
      {currentStep === 5 && (
        <SkillsStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {/* Paso 6: Subir CV (opcional) */}
      {currentStep === 6 && (
        <UploadCVStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
      )}

      {/* Paso 7: Pantalla de éxito */}
      {currentStep === 7 && <SuccessStep />}
    </div>
  )
}
