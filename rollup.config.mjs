import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [terser(), typescript({ tsconfig: './tsconfig.json' })],
  },
]