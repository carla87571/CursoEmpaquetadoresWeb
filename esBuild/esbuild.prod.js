import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';

// Crear carpeta dist si no existe
mkdirSync('dist', { recursive: true });

// Build para producción
esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  minify: true,
  sourcemap: true,
  loader: {
    '.css': 'css'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).then(() => {
  // Copiar index.html a dist
  copyFileSync('public/index.html', 'dist/index.html');
  console.log('✅ Build completado en dist/');
}).catch(() => process.exit(1));
