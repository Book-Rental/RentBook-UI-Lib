import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/_variables.scss" as *;'
      }
    }
  },
  assetsInclude: ['**/*.svg'],
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: './src/index.ts',
      name: 'Microfrontend',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },

      },
    },
    cssCodeSplit: true, // Enable CSS code splitting
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'], // Formats generated reports
      thresholds: {
        lines: 80,       // Fails the CI build if total line coverage is under 80%
        functions: 80,   // Fails the CI build if total function coverage is under 80%
        branches: 70,    // Fails the CI build if conditions aren't adequately checked
      },
      exclude: [
        'src/setupTests.ts',
        '**/*.stories.tsx', // Exclude Storybook stories from coverage data
        'dist/**'
      ]
    }
  }
});

