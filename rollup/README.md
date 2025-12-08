# 📦 Proyecto Rollup - Catálogo de Productos

Proyecto de empaquetado web utilizando Rollup.js para crear una aplicación de catálogo de productos con consumo de API.

## 👩‍💻 Autor
**Carla Mendía Díaz**

## 🚀 Tecnologías

- **Rollup.js** - Empaquetador de módulos
- **JavaScript ES6+** - Módulos y sintaxis moderna
- **CSS3** - Estilos y animaciones
- **@rollup/plugin-html** - Generación de HTML
- **@rollup/plugin-image** - Procesamiento de imágenes
- **rollup-plugin-css-only** - Procesamiento de CSS
- **rollup-plugin-copy** - Copia de assets
- **@web/dev-server** - Servidor de desarrollo

## 📋 Características

- ✅ Logo personalizado CMD (SVG y PNG)
- ✅ Favicon personalizado
- ✅ Consumo de API REST
- ✅ Grid responsivo de productos
- ✅ Animaciones CSS
- ✅ Bundle optimizado

## 🛠️ Instalación

```bash
# Clonar el repositorio padre
git clone https://github.com/carla87571/CursoEmpaquetadoresWeb.git

# Navegar al proyecto
cd CursoEmpaquetadoresWeb/rollup

# Instalar dependencias
npm install
```

## 📦 Scripts Disponibles

```bash
# Compilar el proyecto
npm run build

# Compilar en modo watch (desarrollo)
npm run dev

# Iniciar servidor de desarrollo
npm start
```

## 🏗️ Estructura del Proyecto

```
rollup/
├── src/
│   ├── assets/
│   │   ├── cmd-logo.svg       # Logo principal
│   │   ├── cmd-logo.png       # Logo en PNG
│   │   ├── favicon.svg        # Favicon SVG
│   │   └── favicon.png        # Favicon PNG
│   ├── styles/
│   │   └── styles.css         # Estilos principales
│   └── main.js                # Punto de entrada
├── dist/                      # Archivos compilados
├── rollup.config.js           # Configuración de Rollup
├── web-dev-server.config.js   # Configuración del servidor
├── package.json
└── README.md
```

## ⚙️ Configuración de Rollup

El proyecto utiliza los siguientes plugins:

- **@rollup/plugin-html**: Genera el archivo HTML con referencias a los bundles
- **@rollup/plugin-image**: Procesa y optimiza imágenes SVG
- **rollup-plugin-css-only**: Extrae CSS en un archivo separado
- **rollup-plugin-copy**: Copia assets a la carpeta dist

## 🎨 Diseño

- **Logo**: CMD personalizado con fondo negro
- **Tipografía**: Open Sans
- **Layout**: Grid responsivo de 2 columnas
- **Colores**: Paleta minimalista con tonos grises

## 🌐 API

Consume datos de la API de productos:
```
https://api.escuelajs.co/api/v1/products/?offset=5&limit=10
```

## 📱 Responsive

El proyecto está optimizado para:
- Desktop (768px+)
- Tablet
- Mobile

## 🚀 Despliegue

El proyecto está desplegado en GitHub Pages:
[Ver Demo](https://carla87571.github.io/CursoEmpaquetadoresWeb/rollup/dist/)

## 📝 Proceso de Desarrollo

1. **Inicialización**
   ```bash
   npm init -y
   npm install rollup -D
   ```

2. **Instalación de Plugins**
   ```bash
   npm install @rollup/plugin-html -D
   npm install @rollup/plugin-image -D
   npm install rollup-plugin-copy rollup-plugin-css-only -D
   npm install @web/dev-server -D
   ```

3. **Configuración**
   - Creación de `rollup.config.js`
   - Configuración de `web-dev-server.config.js`
   - Actualización de `package.json` a `type: "module"`

4. **Desarrollo**
   - Estructura de carpetas
   - Creación de assets (logos, favicon)
   - Desarrollo de componentes
   - Estilos CSS

5. **Build y Deploy**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy rollup project"
   git push origin main
   ```

## 📄 Licencia

MIT

---

**Proyecto desarrollado como parte del Curso de Empaquetadores Web** 🎓
