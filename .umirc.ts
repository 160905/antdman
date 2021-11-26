import { defineConfig } from 'umi';

export default defineConfig({
  locale: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
  //   { path: '/links',
  //    microApp: 'links',
  //     microAppProps: {
  //     autoSetLoading: true,
  //     className: 'linksContainer',
  //     wrapperClassName: 'linksWrapper',
  //   } 
  // },
  ],
  fastRefresh: {},
  devServer:{
  },
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer。
    hmr: false, // 表示是否启用 dva model 的热更新。
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '长春',
    locale: false,
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
          name: 'links', // 唯一 id
          entry: 'https://omylink-dev.xmalle.com/', // html entry
        },
      ]
    }
  }
});
