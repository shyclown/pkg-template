import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const rollupConfig =   {
    input: 'src/index.ts',
    output: [
        {
            file: 'playground/src/components-pkg/index.js',
            format: 'esm',
            banner: '/* eslint-disable */',
        },
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' },
    ],
    plugins: [
        del({ targets: ['dist/*', 'playground/src/components-pkg'] }),
        typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};

export default rollupConfig;