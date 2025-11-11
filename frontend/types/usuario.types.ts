// Tipos de datos para Usuario basados en el formulario de registro

// Datos personales del usuario
export interface DatosPersonales {
  nombre: string
  apellido: string
  genero: "Masculino" | "Femenino" | "Otro"
  fechaNacimiento: string // Formato: DD/MM/AAAA
  telefono: string
  cuil: string // Formato: XX-XXXXXXXX-X
}

// Dirección del usuario
export interface Direccion {
  localidad: string
  codigoPostal: string
  calle: string
  numero: string
  piso?: string
  departamento?: string
}

// Datos de la cuenta
export interface DatosCuenta {
  email: string
  password: string
}

// Educación del usuario
export interface Educacion {
  institucion: string
  titulo: string
  nivel: string
  anioInicio: string
  anioFin: string // Puede ser "Actualidad"
}

// Experiencia laboral del usuario
export interface ExperienciaLaboral {
  nombreEmpresa: string
  puesto: string
  anioInicio: string
  anioFin: string // Puede ser "Actualidad"
}

// Idioma del usuario
export interface Idioma {
  nombre: string
  nivel: "Básico" | "Intermedio" | "Avanzado"
}

// DTO completo para crear un usuario
export interface CreateUsuarioDto {
  // Datos personales
  nombre: string
  apellido: string
  genero: string
  fechaNacimiento: string
  telefono: string
  cuil: string

  // Dirección
  localidad: string
  codigoPostal: string
  calle: string
  numero: string
  piso?: string
  departamento?: string

  // Cuenta
  email: string
  password: string

  // CV
  educacion?: Educacion[]
  experienciaLaboral?: ExperienciaLaboral[]
  idiomas?: Idioma[]
  aptitudes?: string[]
  cvPdf?: File | null
}

// DTO para actualizar un usuario
export interface UpdateUsuarioDto extends Partial<CreateUsuarioDto> {}

// Respuesta del usuario desde el backend
export interface Usuario {
  id: number
  nombre: string
  apellido: string
  email: string
  genero: string
  fechaNacimiento: string
  telefono: string
  cuil: string
  localidad: string
  codigoPostal: string
  calle: string
  numero: string
  piso?: string
  departamento?: string
  educacion?: Educacion[]
  experienciaLaboral?: ExperienciaLaboral[]
  idiomas?: Idioma[]
  aptitudes?: string[]
  createdAt?: string
  updatedAt?: string
}
