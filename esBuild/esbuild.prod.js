import * as esbuild from 'esbuild';

// Build para producción
esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  minify: true,
  sourcemap: true,
  loader: {
    '.css': 'css'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).then(() => {
  console.log('✅ Build completado en public/');
}).catch(() => process.exit(1));
