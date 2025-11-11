// Servicio para manejar todas las peticiones relacionadas con usuarios
import axiosInstance from "@/lib/axios"
import type { CreateUsuarioDto, UpdateUsuarioDto, Usuario } from "@/types/usuario.types"

// Objeto con todos los métodos del servicio de usuario
const usuarioService = {
  /**
   * Crear un nuevo usuario (registro)
   * @param data - Datos del usuario a crear
   * @returns Usuario creado
   */
  async create(data: CreateUsuarioDto): Promise<Usuario> {
    try {
      const response = await axiosInstance.post<Usuario>("/usuario", data)
      return response.data
    } catch (error: any) {
      console.error("[v0] Error al crear usuario:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al crear usuario")
    }
  },

  /**
   * Obtener todos los usuarios
   * @returns Lista de usuarios
   */
  async findAll(): Promise<Usuario[]> {
    try {
      const response = await axiosInstance.get<Usuario[]>("/usuario")
      return response.data
    } catch (error: any) {
      console.error("[v0] Error al obtener usuarios:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al obtener usuarios")
    }
  },

  /**
   * Obtener un usuario por ID
   * @param id - ID del usuario
   * @returns Usuario encontrado
   */
  async findOne(id: number): Promise<Usuario> {
    try {
      const response = await axiosInstance.get<Usuario>(`/usuario/${id}`)
      return response.data
    } catch (error: any) {
      console.error("[v0] Error al obtener usuario:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al obtener usuario")
    }
  },

  /**
   * Obtener el perfil del usuario autenticado
   * Requiere token JWT válido
   * @returns Perfil del usuario
   */
  async getPerfil(): Promise<Usuario> {
    try {
      const response = await axiosInstance.get<Usuario>("/usuario/perfil")
      return response.data
    } catch (error: any) {
      console.error("[v0] Error al obtener perfil:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al obtener perfil")
    }
  },

  /**
   * Actualizar un usuario
   * @param id - ID del usuario a actualizar
   * @param data - Datos a actualizar
   * @returns Usuario actualizado
   */
  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    try {
      const response = await axiosInstance.patch<Usuario>(`/usuario/${id}`, data)
      return response.data
    } catch (error: any) {
      console.error("[v0] Error al actualizar usuario:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al actualizar usuario")
    }
  },

  /**
   * Eliminar un usuario
   * @param id - ID del usuario a eliminar
   */
  async remove(id: number): Promise<void> {
    try {
      await axiosInstance.delete(`/usuario/${id}`)
    } catch (error: any) {
      console.error("[v0] Error al eliminar usuario:", error.response?.data || error.message)
      throw new Error(error.response?.data?.message || "Error al eliminar usuario")
    }
  },
}

// Exportar el servicio
export { usuarioService }
export default usuarioService
