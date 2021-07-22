import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import filesize from 'rollup-plugin-filesize';

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
        },
        {
            name: NAME,
            file: 'dist/iife/index.min.js',
            format: 'iife',
            plugins: [terser()]
        }
    ],
    plugins: [nodeResolve(), commonjs(), filesize()],
};