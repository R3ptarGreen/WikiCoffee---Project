import { defineConfig, configDefaults, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({

    test: {
        globals:true,
        exclude: [...configDefaults.exclude],
        environment: 'jsdom',
        css:true
    },
}))