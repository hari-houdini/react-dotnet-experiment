import { build } from "esbuild";
import buildConfigJson from "../esbuild.config.json";

const buildReactTask = async () => {
    const configs = buildConfigJson ?? [];
    
    if (!Array.isArray(config) || config.length === 0) {
        return Promise.resolve("Build config empty");
    }
    
    for (const config of configs) {
        await build({
            entryPoints: config.entry,
            format: "esm",
            bundle: true,
            minify: true,
            outfile: config.out
        })
    }
}

export default buildReactTask;