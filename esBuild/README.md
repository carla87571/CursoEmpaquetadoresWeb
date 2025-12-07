# Proyecto React con esbuild

Proyecto de ejemplo usando **esbuild** como empaquetador para una aplicación React con TypeScript.

## 📋 Descripción

Este proyecto demuestra cómo configurar y utilizar esbuild como alternativa rápida a Webpack o Parcel para empaquetar aplicaciones React. Incluye configuración para desarrollo y producción.

## 🛠️ Tecnologías

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **esbuild** - Empaquetador ultra-rápido
- **esbuild-serve** - Servidor de desarrollo

## 📦 Instalación

```bash
npm install
```

## 🚀 Scripts Disponibles

### Desarrollo

```bash
npm start
```
Inicia el servidor de desarrollo en `http://localhost:8000`. La aplicación se recarga automáticamente al hacer cambios.

### Build de Producción

```bash
npm run build
```
Genera los archivos optimizados para producción en la carpeta `dist/`:
- Código minificado
- Source maps
- Optimización de React para producción

### Build de Desarrollo

```bash
npm run build:dev
```
Ejecuta el build de desarrollo sin minificación.

## 📁 Estructura del Proyecto

```
esBuild/
├── src/
│   ├── components/
│   │   └── App.tsx          # Componente principal
│   └── index.tsx            # Punto de entrada
├── public/
│   └── index.html           # HTML base
├── dist/                    # Archivos de producción (generados)
├── esbuild.dev.js          # Configuración de desarrollo
├── esbuild.prod.js         # Configuración de producción
├── tsconfig.json           # Configuración de TypeScript
└── package.json
```

## ⚙️ Configuración

### esbuild.dev.js
- Servidor de desarrollo con hot reload
- Source maps habilitados
- `NODE_ENV` configurado como "development"

### esbuild.prod.js
- Minificación de código
- Optimización para producción
- `NODE_ENV` configurado como "production"
- Copia automática de archivos estáticos

## 🌟 Características

- ⚡ Build extremadamente rápido con esbuild
- 🔄 Hot reload en desarrollo
- 📝 TypeScript integrado
- 🎯 Configuración separada para dev y prod
- 🗺️ Source maps para debugging

## 👤 Autor

**Carla Mendía Díaz**

## 📄 Licencia

MIT
