import { defineConfig } from 'abell';
import mdx from '@mdx-js/rollup';
import { vitePluginJSXToHTML } from 'vite-plugin-jsx-to-html';

export default defineConfig({
  plugins: [
    mdx(), // Turns MDX to React Component (JSX)
    vitePluginJSXToHTML({ extensions: ['.mdx'] }), // Turns JSX to HTML
  ],
});