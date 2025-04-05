import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import readingTime from 'rspress-plugin-reading-time';
import pluginContainerSyntax from './plugins/plugin-container-syntax';
import { pluginShiki, createTransformerDiff } from '@rspress/plugin-shiki';
import { pluginPreview } from '@rspress/plugin-preview';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/blog/',
  title: '果冻怪',
  description: '果冻怪的魔法书，基于 Rspress 构建。',
  icon: '/logo/jelly-monster.png',
  logo: {
    light: '/logo/jelly-monster.png',
    dark: '/logo/jelly-monster.png',
  },
  logoText: '果冻怪',
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  themeConfig: {
    footer: {},
    outlineTitle: '页面导航',
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    prevPageText: '上一页',
    nextPageText: '下一页',
    searchPlaceholderText: '搜索文档',
    searchNoResultsText: '未搜索到相关结果',
    searchSuggestedQueryText: '可更换不同的关键字后重试',
    darkMode: true,
    hideNavbar: 'auto',
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    overview: {
      filterNameText: '过滤',
      filterPlaceholderText: '输入关键词',
      filterNoResultText: '未搜索到相关结果',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/lemonnuu/blog',
      },
      {
        icon: 'wechat',
        mode: 'img',
        content: '/aboutme/wechat-qrcode.jpg',
      },
    ],
  },
  globalStyles: path.join(__dirname, 'styles/index.css'),
  builderPlugins: [],
  plugins: [
    pluginShiki({
      transformers: [
        // 按需加入即可
        createTransformerDiff(),
        // createTransformerLineNumber(),
        // createTransformerErrorLevel(),
        // createTransformerHighlight(),
        // createTransformerFocus(),
      ],
    }),
    readingTime({ defaultLocale: 'zh-CN' }),
    pluginPreview({
      defaultRenderMode: 'pure',
    }),
  ],
  markdown: {
    remarkPlugins: [
      pluginContainerSyntax, // 替换 @rspress/plugin-container-syntax 插件
    ],
  },
});
