import { defineConfig, configDefaults, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({

    test: {
        exclude: [...configDefaults.exclude],
        environment: 'jsdom',
    },
}))