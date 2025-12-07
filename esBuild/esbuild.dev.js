import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'public/bundle.js',
    minify: false,
    sourcemap: true,
    loader: {
      '.css': 'css'
    },
    define: {
      'process.env.NODE_ENV': '"development"'
    }
  },
  {
    port: 8000,
    root: 'public',
  }
);
