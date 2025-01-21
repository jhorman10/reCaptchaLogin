---
runme:
  id: 01HRDQH313MVA3VGCZ1DT47ZQE
  version: v3
---

## Heroes

Este proyecto ofrece una configuración básica para una aplicación React utilizando TypeScript y Vite.

### Requisitos previos

- Node.js y npm (o yarn) instalados en tu sistema.

### Instalación

1. Clona este repositorio.
2. Navega a la carpeta del proyecto en tu terminal.
3. Ejecuta `npm install` (o `yarn install`) para instalar las dependencias.

### Scripts

El proyecto incluye varios scripts para desarrollo, construcción, revisión de código (linting) y previsualización:

- `dev`: Inicia el servidor de desarrollo usando Vite.
- `build`: Construye el proyecto para producción utilizando la compilación de TypeScript y el empaquetador Vite.
- `lint`: Ejecuta ESLint para verificar el código en busca de estilo y posibles errores.
- `preview`: Inicia el servidor de desarrollo con reemplazo de módulo en caliente para un desarrollo más rápido.
- `prepare`: Instala Husky para gestionar los hooks de Git.
- `commit`: Ejecuta commitizen para crear commits convencionales.

### Desarrollo

1. Ejecuta `npm run dev` (o `yarn dev`) para iniciar el servidor de desarrollo.
2. La aplicación estará accesible en http://localhost:3000 por defecto (el puerto puede variar).

### Construcción

1. Ejecuta `npm run build` (o `yarn build`) para crear una versión lista para producción de tu aplicación. Los archivos compilados se colocarán en la carpeta `dist`.

### Revisión de código (Linting)

1. Ejecuta `npm run lint` (o `yarn lint`) para verificar tu código en busca de estilo y posibles errores usando ESLint.

### Previsualización

1. Ejecuta `npm run preview` (o `yarn preview`) para iniciar el servidor de desarrollo con reemplazo de módulo en caliente. Esto permite un desarrollo más rápido con cambios en el código reflejados automáticamente en el navegador.

### Dependencias

El proyecto depende de las siguientes bibliotecas:

**Dependencias de producción:**

- `react`: La biblioteca React central para construir interfaces de usuario.
- `react-dom`: Renderiza componentes React en el DOM del navegador.
- `react-router-dom`: Habilita funcionalidades de enrutamiento para la navegación dentro de la aplicación.

**Dependencias de desarrollo:**

- `@fontsource/fira-code`: Proporciona la fuente Fira Code para una experiencia de codificación consistente.
- `@types/react`: Definiciones de tipos para React para una mejor autocompletar y seguridad de tipos.
- `@types/react-dom`: Definiciones de tipos para React DOM para una mejor autocompletar y seguridad de tipos.
- `@typescript-eslint/eslint-plugin`: Plugin de ESLint para linting de TypeScript.
- `@typescript-eslint/parser`: Analizador de TypeScript para ESLint.
- `@vitejs/plugin-react-swc`: Plugin Vite para optimizar el código React.
- `commitizen`: Facilita la creación de mensajes de commit convencionales.
- `cz-conventional-changelog`: Genera changelogs basados en mensajes de commit.
- `eslint`: ESLint para linting de código y aplicación de estilo.
- `eslint-plugin-react-hooks`: Plugin de ESLint para verificar el uso de hooks de React.
- `eslint-plugin-react-refresh`: Plugin de ESLint para linting de código de actualización de React.
- `husky`: Gestiona los hooks de Git para tareas automatizadas.
- `lint-staged`: Linting de archivos staged antes de commit.
- `typescript`: Compilador de TypeScript para la verificación de tipos estáticos y una mejor experiencia de desarrollo.
- `vite`: Servidor de desarrollo y empaquetador para construir aplicaciones web modernas.

### Formateo de código

El proyecto usa ESLint y Prettier para formateo y revisión de código (linting). Estas herramientas aseguran un estilo de código consistente y previenen errores potenciales.

### Hooks de Git

Husky se usa para gestionar hooks de Git. Automáticamente ejecuta ESLint antes de confirmar (commit) cambios. Esto ayuda a mantener la calidad del código durante el proceso de desarrollo.

### Mensajes de commit

El proyecto fomenta el uso de mensajes de commit convencionales. Esto proporciona un formato estandarizado para mensajes de commit, mejorando la trazabilidad del código y la generación de changelogs.
