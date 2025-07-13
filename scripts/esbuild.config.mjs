import * as esbuild from 'esbuild'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { readFileSync } from 'fs'
import { join } from 'path'

// 读取package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))

/**
 * 创建esbuild配置
 * @param {Object} options - 配置选项
 * @param {boolean} options.isProd - 是否为生产模式
 * @param {boolean} options.isWatch - 是否为监听模式
 * @returns {esbuild.BuildOptions} esbuild配置
 */
export function createEsbuildConfig({ isProd = false, isWatch = false } = {}) {
  return {
    color: true,
    entryPoints: ['src/main.tsx'],
    outdir: 'dist',
    entryNames: '[name]',
    write: true,
    bundle: true,
    format: 'iife',
    sourcemap: isProd ? false : 'linked',
    minify: isProd,
    treeShaking: true,
    jsx: 'automatic',
    jsxImportSource: 'react',
    target: ['es2020'],
    platform: 'browser',
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.gif': 'file',
      '.svg': 'file',
      '.webp': 'file',
      '.woff': 'file',
      '.woff2': 'file',
      '.ttf': 'file',
      '.eot': 'file',
    },
    define: {
      'process.env.NODE_ENV': isProd ? '"production"' : '"development"',
      'process.env.VERSION': `"${packageJson.version}"`,
      'process.env.BUILD_TIME': `"${new Date().toISOString()}"`,
    },
    plugins: [
      stylePlugin({
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      }),
      // HTML复制插件
      {
        name: 'html-copy',
        setup(build) {
          build.onResolve({ filter: /\.html$/ }, () => {
            return { path: join(process.cwd(), 'index.html'), namespace: 'html' }
          })
          
          build.onLoad({ filter: /.*/, namespace: 'html' }, async (args) => {
            const html = readFileSync(args.path, 'utf8')
            return {
              contents: html,
              loader: 'copy'
            }
          })
        }
      },
      // 环境变量插件
      {
        name: 'env',
        setup(build) {
          build.onResolve({ filter: /^env$/ }, () => {
            return { path: 'env', namespace: 'env' }
          })
          
          build.onLoad({ filter: /.*/, namespace: 'env' }, () => {
            return {
              contents: `export default ${JSON.stringify({
                NODE_ENV: isProd ? 'production' : 'development',
                VERSION: packageJson.version,
                BUILD_TIME: new Date().toISOString(),
              })}`,
              loader: 'js'
            }
          })
        }
      }
    ],
    external: isProd ? [] : undefined,
    metafile: isProd,
    banner: isProd ? {
      js: `/* ${packageJson.name} v${packageJson.version} - ${new Date().toISOString()} */`
    } : undefined,
    footer: isProd ? {
      js: `/* 构建完成 */`
    } : undefined,
  }
}

/**
 * 开发服务器配置
 */
export const devServerConfig = {
  servedir: 'dist',
  port: 3000,
  host: 'localhost',
  fallback: 'index.html', // SPA路由支持
}

/**
 * 监听模式配置
 */
export const watchConfig = {
  onRebuild(error, result) {
    if (error) {
      console.error('❌ 构建失败:', error)
    } else {
      console.log('✅ 重新构建完成')
    }
  },
} 