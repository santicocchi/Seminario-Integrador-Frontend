// Configuración de axios para conectar con el backend
import axios from "axios"

// URL base del backend
const BASE_URL = "http://localhost:3002"

// Crear instancia de axios con configuración base
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 segundos de timeout
})

// Interceptor para agregar el token JWT a todas las peticiones
axiosInstance.interceptors.request.use(
  (config) => {
    // Obtener el token del localStorage
    const token = localStorage.getItem("access_token")

    // Si existe el token, agregarlo al header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Interceptor para manejar respuestas y errores
axiosInstance.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, retornarla
    return response
  },
  (error) => {
    // Si el token expiró (401), limpiar el localStorage y redirigir al login
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("user")
      window.location.href = "/login"
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
