#!/usr/bin/env node

import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

console.log('🚀 开始部署到 GitHub Pages...')

// 检查是否在git仓库中
if (!existsSync('.git')) {
  console.error('❌ 错误: 当前目录不是git仓库')
  process.exit(1)
}

try {
  // 1. 构建项目
  console.log('📦 构建项目...')
  execSync('npm run build', { stdio: 'inherit' })
  
  // 2. 检查dist目录是否存在
  if (!existsSync('dist')) {
    console.error('❌ 错误: dist目录不存在，构建可能失败')
    process.exit(1)
  }
  
  // 3. 检查index.html是否存在
  if (!existsSync(join('dist', 'index.html'))) {
    console.error('❌ 错误: dist/index.html不存在')
    process.exit(1)
  }
  
  console.log('✅ 构建完成，文件已准备就绪')
  console.log('📝 请确保：')
  console.log('   1. 已推送代码到GitHub')
  console.log('   2. 在GitHub仓库设置中启用了GitHub Pages')
  console.log('   3. 设置了正确的分支和目录')
  console.log('   4. GitHub Actions工作流已配置')
  
  console.log('\n🌐 部署地址: https://spikemars.github.io/tour/')
  
} catch (error) {
  console.error('❌ 部署失败:', error.message)
  process.exit(1)
} 