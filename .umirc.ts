import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
  ],
  fastRefresh: {},
  devServer:{
    port: 7000,
  },
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer。
    hmr: false, // 表示是否启用 dva model 的热更新。
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  antd: {
    dark: true,
    compact: true,
  },
  qiankun:{
    master: {
      apps: [
        {
          name: 'myLinks', // 唯一 id
          entry: 'https://omylink-dev.xmalle.com/', // html entry
        },
      ]
    }
  }
});
