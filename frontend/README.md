# Bolsa de Trabajo - Villa María

Plataforma web para la gestión de ofertas y postulaciones laborales en Villa María.

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Lenguaje de programación tipado
- **Tailwind CSS v4** - Framework de estilos
- **shadcn/ui** - Componentes de UI
- **Axios** - Cliente HTTP para conectar con el backend

## Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

## Instalación Local

1. Clona el repositorio:
\`\`\`bash
git clone <tu-repositorio>
cd bolsa-trabajo-villa-maria
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración del Backend

El frontend está configurado para conectarse a un backend en `http://localhost:3002`.

Para cambiar la URL del backend, edita el archivo `lib/axios.ts` y modifica la `baseURL`.

## Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"

### Opción 2: Deploy con Vercel CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## Variables de Entorno

Si tu backend requiere variables de entorno, créalas en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

## Estructura del Proyecto

\`\`\`
├── app/                    # Páginas y rutas de Next.js
│   ├── page.tsx           # Página principal
│   ├── login/             # Página de login
│   ├── registro/          # Páginas de registro
│   ├── buscar-ofertas/    # Búsqueda de ofertas
│   ├── publicar-oferta/   # Publicar ofertas
│   ├── oferta/[id]/       # Detalle de oferta
│   └── perfil/            # Perfiles de usuario y empresa
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuración
├── services/              # Servicios de API (axios)
└── types/                 # Tipos de TypeScript
\`\`\`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Conectar con el Backend

Los archivos para conectar con el backend están en:
- `lib/axios.ts` - Configuración de axios
- `services/usuario.service.ts` - Servicios de API de usuario
- `types/usuario.types.ts` - Tipos TypeScript para usuario

Actualmente el código de integración está comentado. Para activarlo, descomenta las importaciones y llamadas a los servicios en los componentes de registro.

## Soporte

Para problemas o preguntas, contacta al equipo de desarrollo.
