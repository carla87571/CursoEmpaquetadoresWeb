# 🚀 LinkTree Personal - Carla Mendía Díaz

Página web estilo LinkTree personalizada, desarrollada con Webpack 5, Babel y Tailwind CSS como parte del aprendizaje de empaquetadores web modernos.

## 📋 Descripción

Sitio web de una sola página que centraliza todos mis enlaces importantes: mentorías, blog, podcast, cursos y sponsors. Diseñado con un enfoque responsive y moderno.

## ✨ Características

- 🎨 Diseño responsive con Tailwind CSS
- 📦 Empaquetado con Webpack 5
- 🔄 Transpilación ES6+ con Babel
- 🖼️ Optimización de imágenes
- 🚀 Deploy automático a GitHub Pages
- 🔥 Hot Module Replacement en desarrollo
- 📱 Meta tags optimizadas para SEO y redes sociales

## 🛠️ Tecnologías

- **Webpack 5.103.0** - Module bundler
- **Babel 7.28.5** - JavaScript compiler
- **Tailwind CSS** - Utility-first CSS framework (vía CDN)
- **webpack-dev-server** - Development server con live reload
- **gh-pages** - Deploy automático a GitHub Pages

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/carla87571/CursoEmpaquetadoresWeb.git

# Navegar a la carpeta del proyecto
cd CursoEmpaquetadoresWeb/webpack

# Instalar dependencias
npm install
```

## 🚀 Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo (http://localhost:8080)
npm start
# o
npm run dev
```

### Producción

```bash
# Generar build optimizado en carpeta dist/
npm run build
```

### Deploy

```bash
# Desplegar a GitHub Pages
npm run deploy
```

## 📁 Estructura del Proyecto

```
webpack/
├── public/
│   ├── index.html          # Template HTML
│   └── favicon.svg         # Favicon personalizado
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── CarlaFotoWeb.png
│   └── index.js            # Entry point principal
├── dist/                   # Build de producción (generado)
├── webpack.config.js       # Configuración de Webpack
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

## ⚙️ Configuración de Webpack

- **Entry**: `./src/index.js`
- **Output**: `dist/main.js`
- **Loaders**:
  - `babel-loader` - Transpilación JavaScript
  - Asset modules - Manejo de imágenes
- **Plugins**:
  - `HtmlWebpackPlugin` - Generación HTML
  - `CopyWebpackPlugin` - Copia de assets estáticos

## 🌐 Deploy

El sitio está desplegado automáticamente en:
**https://carla87571.github.io/CursoEmpaquetadoresWeb/**

Cada vez que ejecutas `npm run deploy`, el contenido de la carpeta `dist/` se publica en la rama `gh-pages`.

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia servidor de desarrollo con hot reload |
| `npm run dev` | Alias de `npm start` |
| `npm run build` | Genera build de producción optimizado |
| `npm run deploy` | Despliega a GitHub Pages |

## 🎨 Personalización

### Modificar Enlaces

Edita el archivo `src/index.js`:

```javascript
const data = {
  name: "Tu Nombre",
  nickname: "tunickname",
  links: [
    {
      name: "Nombre del enlace",
      url: "https://tu-url.com/",
      color: "fuchsia", // Colores Tailwind
      emoji: "🎯",
    },
    // ... más enlaces
  ],
};
```

### Cambiar Imagen de Perfil

1. Coloca tu imagen en `src/assets/images/`
2. Actualiza la importación en `src/index.js`:
```javascript
import profileImage from './assets/images/tu-imagen.png';
```

### Modificar Favicon

Edita `public/favicon.svg` y ajusta:
- Color de fondo: `fill="#475569"`
- Texto: Cambia "CMD" por tus iniciales
- Fuente y tamaño según preferencia

## 📊 Métricas

- **Bundle principal**: ~1.81 KB (minificado)
- **Imagen optimizada**: 1.78 MB
- **Total assets**: < 2 MB

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal. Si encuentras errores o tienes sugerencias, siéntete libre de abrir un issue.

## 👩‍💻 Autora

**Carla Mendía Díaz** - [@cmd](https://github.com/carla87571)

Desarrolladora Full Stack en transición profesional, compartiendo el camino de aprendizaje en programación y desarrollo web.

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles

## 🙏 Agradecimientos

- Curso de Empaquetadores Web
- Comunidad de desarrolladores
- Plantilla base inspirada en proyectos LinkTree

---

⭐ **Per Aspera Ad Astra** - A través de las dificultades hacia las estrellas 🚀
