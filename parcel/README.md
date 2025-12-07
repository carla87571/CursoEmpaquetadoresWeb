# Proyecto Parcel - E-commerce Products

Proyecto de demostración de un catálogo de productos construido con Parcel bundler, que consume una API REST para mostrar productos de manera dinámica.

## 🚀 Características

- **Bundler**: Parcel v2
- **API**: [Platzi Fake Store API](https://api.escuelajs.co)
- **Características**:
  - Consumo de API REST
  - Renderizado dinámico de productos
  - Diseño responsive con CSS Grid
  - Componentes modulares con PostHTML Include
  - Optimización automática de assets

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

## 🔧 Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Uso

### Modo Desarrollo

```bash
npm start
```

Abre [http://localhost:8080](http://localhost:8080) en tu navegador.

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Desplegar en GitHub Pages

```bash
npm run deploy
```

## 📁 Estructura del Proyecto

```
parcel/
├── src/
│   ├── index.html          # Archivo HTML principal
│   ├── index.js            # Lógica JavaScript
│   ├── styles.css          # Estilos CSS
│   └── partials/
│       └── header.html     # Componente header
├── .posthtmlrc             # Configuración PostHTML
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

## 🛠️ Tecnologías

- **Parcel** - Empaquetador web
- **PostHTML Include** - Sistema de componentes HTML
- **Vanilla JavaScript** - Fetch API para consumo de datos
- **CSS Grid** - Layout responsive
- **Google Fonts** - Tipografía Open Sans

## 📦 Scripts Disponibles

- `npm start` - Inicia servidor de desarrollo en puerto 8080
- `npm run build` - Genera build de producción
- `npm run deploy` - Despliega en GitHub Pages

## 🎨 API Utilizada

Este proyecto consume la [Platzi Fake Store API](https://api.escuelajs.co/api/v1/products) para obtener información de productos.

## 👤 Autor

**Carla Mendía Díaz**

## 📄 Licencia

MIT

---

Desarrollado como parte del Curso de Empaquetadores Web
