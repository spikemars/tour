import esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import { createEsbuildConfig, devServerConfig, watchConfig } from './esbuild.config.mjs'
import { existsSync, cpSync } from 'fs';

const args = process.argv.slice(2)
const isProd = args.includes('--production')
const isWatch = args.includes('--watch')

// 清理dist目录
await rimraf('dist')

// 创建esbuild配置
const esbuildOpts = createEsbuildConfig({ isProd, isWatch })

// 错误处理函数
function handleError(error) {
  console.error('构建失败:', error)
  process.exit(1)
}

// 成功处理函数
function handleSuccess(result) {
  if (isProd) {
    console.log('✅ 生产构建完成!')
    if (result.metafile) {
      const size = Object.values(result.metafile.outputs).reduce((acc, output) => {
        return acc + (output.bytes || 0)
      }, 0)
      console.log(`📦 总大小: ${(size / 1024).toFixed(2)} KB`)
    }
  } else {
    console.log('🚀 开发服务器启动成功!')
  }
}

if (existsSync('public')) {
  cpSync('public', 'dist', { recursive: true });
  console.log('✅ 已复制 public 目录到 dist');
}

try {
  if (isProd) {
    // 生产构建
    const result = await esbuild.build(esbuildOpts)
    handleSuccess(result)
  } else {
    // 开发模式
    const ctx = await esbuild.context(esbuildOpts)
    
    if (isWatch) {
      // 监听模式
      await ctx.watch(watchConfig)
      console.log('👀 监听模式已启动，文件变化时自动重新构建')
    } else {
      // 开发服务器模式
      const { hosts, port } = await ctx.serve(devServerConfig)
      
      handleSuccess()
      console.log(`🌐 服务器运行在:`)
      hosts.forEach((host) => {
        console.log(`   http://${host}:${port}`)
      })
      console.log('\n📝 按 Ctrl+C 停止服务器')
      
      // 优雅关闭
      process.on('SIGINT', async () => {
        await ctx.dispose()
        process.exit(0)
      })
    }
  }
} catch (error) {
  handleError(error)
}
