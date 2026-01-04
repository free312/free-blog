# 将项目从npm迁移到pnpm

## 前提条件
- pnpm已安装（版本8.6.7）
- Node.js版本18.16.1

## 迁移步骤

### 1. 清理当前npm依赖
- 删除node_modules目录
- 删除package-lock.json文件

### 2. 使用pnpm安装依赖
- 运行`pnpm install`命令安装所有依赖
- 验证是否生成pnpm-lock.yaml文件

### 3. 更新package.json脚本（如果需要）
- 检查package.json中的脚本命令
- 确保所有命令与pnpm兼容

### 4. 测试项目是否正常工作
- 运行`pnpm run dev`启动开发服务器
- 验证项目是否可以正常访问
- 测试构建命令`pnpm run build`和`pnpm run export`

## 预期结果
- 项目成功从npm迁移到pnpm
- 依赖安装正常
- 开发服务器可以正常启动
- 构建和导出功能正常

## 注意事项
- pnpm使用符号链接管理依赖，可能会有一些权限问题
- 确保.gitignore文件中包含pnpm-lock.yaml
- 如果遇到依赖冲突，可以使用`pnpm install --force`或`pnpm install --legacy-peer-deps`命令