import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // 如果提供的默认值需要在模板中渲染，需要额外添加配置，才能正常显示默认值
    reactivityTransform: true
  })],
  server:{
    host:'172.16.6.184' ,//ip地址s
    port: 5173, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  }
})
