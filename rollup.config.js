import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

const NAME = 'utils'

export default {
    input: 'index.js',
    output: [
        {
            name: NAME,
            file: 'dist/umd/index.js',
            format: 'umd'
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm'
        },
        {
            file: 'dist/cjs/index.js',
            format: 'cjs'
        },
        {
            name: NAME,
            file: 'dist/iife/index.js',
            format: 'iife'
        }
    ],
    plugins: [commonjs(), resolve()],
};