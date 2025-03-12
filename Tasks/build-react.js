import { build } from "esbuild";
import buildConfigJson from "../esbuild.config.json" with { type: "json" };
import stylePlugin from "esbuild-style-plugin";
import postCssPlugin from '@tailwindcss/postcss';
import autoprefixer from "autoprefixer";

const buildReactTask = async () => {
    const config = buildConfigJson ?? [];
    
    if (!Array.isArray(config) || config.length === 0) {
        return Promise.resolve("Nothing to build react");
    }

    for (const point of config) {
        console.info(`Building React component: ${point.out}`);
        await build({
            entryPoints: point.entry,
            bundle: true,
            minify: true,
            outfile: point.out,
            loader: {
                '.css': 'css',
            },
            // sourcemap: true,
            platform: 'browser',
            jsx: 'automatic',
            tsconfig: './tsconfig.json',
            plugins: [
                stylePlugin({
                    postcss: {
                        plugins: [
                            postCssPlugin,
                            autoprefixer
                        ]
                    },
                })
            ]
        }).catch((error) => {
            console.error(`Build error: ${error}`)
            process.exit(1)
        });
    }

}

export default buildReactTask;