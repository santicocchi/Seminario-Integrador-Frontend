// Utilidades para manejar la autenticación y el almacenamiento de tokens

/**
 * Guardar el token JWT en localStorage
 * @param token - Token JWT recibido del backend
 */
export const saveToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", token)
  }
}

/**
 * Obtener el token JWT desde localStorage
 * @returns Token JWT o null si no existe
 */
export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token")
  }
  return null
}

/**
 * Eliminar el token JWT de localStorage
 */
export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("access_token")
    localStorage.removeItem("user")
  }
}

/**
 * Guardar datos del usuario en localStorage
 * @param user - Datos del usuario
 */
export const saveUser = (user: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
  }
}

/**
 * Obtener datos del usuario desde localStorage
 * @returns Datos del usuario o null si no existe
 */
export const getUser = (): any | null => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }
  return null
}

/**
 * Verificar si el usuario está autenticado
 * @returns true si hay un token válido, false en caso contrario
 */
export const isAuthenticated = (): boolean => {
  return getToken() !== null
}
