#!/bin/bash

echo "🚀 Desplegando proyectos a GitHub Pages..."

# Asegurarse de estar en main
git checkout main

# Construir ambos proyectos
echo "📦 Construyendo proyecto Webpack..."
cd webpack && npm run build && cd ..

echo "⚡ Construyendo proyecto Parcel..."
cd parcel && npm run build && cd ..

# Cambiar a gh-pages y limpiar
echo "🧹 Limpiando rama gh-pages..."
git checkout gh-pages
git rm -rf webpack/ parcel/ *.js *.css *.map 2>/dev/null || true

# Copiar archivos del index principal
echo "📄 Copiando index principal..."
git checkout main -- index.html

# Copiar builds
echo "📁 Copiando builds de webpack..."
mkdir -p webpack
cp -r webpack/dist/* webpack/

echo "📁 Copiando builds de parcel..."
mkdir -p parcel  
cp -r parcel/dist/* parcel/

# Commit y push
echo "💾 Guardando cambios..."
git add .
git commit -m "Deploy: Update both projects" || echo "No changes to commit"
git push origin gh-pages

# Volver a main
git checkout main

echo "✅ ¡Despliegue completado!"
echo "🌐 Tu sitio estará disponible en: https://carla87571.github.io/CursoEmpaquetadoresWeb/"
