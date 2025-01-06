import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
