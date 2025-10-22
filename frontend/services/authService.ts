// src/services/authService.ts

export interface LoginData {
  email: string;
  password: string;
}

// función para login
export async function login(data: LoginData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Error al iniciar sesión");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error en authService.login:", error);
    throw error;
  }
}
