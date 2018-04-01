import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// import external from 'rollup-plugin-peer-deps-external'
import ignore from 'rollup-plugin-ignore'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
    input: 'src/index.js',
    external: [
        'react',
        'react-dom',
        'prop-types',
        'styled-components'
    ],
    output: [{
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        // external(),
        postcss({
            // modules: true
            extensions: ['.css']
        }),
        url(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        ignore(['stream'])
    ]
    // external: [ 'styled-components' ]
}