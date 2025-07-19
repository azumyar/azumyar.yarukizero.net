import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "やるきぜろ",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "プロダクト", link: "/products/index" },
      { text: "メモ", link: "/memo/index" },
],

    sidebar: [
      {
        text: "プロダクト",
        items: [
          { text: "表紙", link: '/products/index' },
        ]
      },
      {
        text: "メモ",
        items: [
          { text: "表紙", link: "/memo/index" },
          { text: "各合成音声UI Framework", link: "/memo/voiceroid-ui-framework"},
          { text: "アイボス/CeVIOと.NET連携", link: "/memo/aivoce-cevio-dotonetocore" },
          { text: "ボイスピAPI調査", link: "/memo/voicepeak-recotte" },
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/azumyar/azumyar.yarukizero.net" }
    ]
  }
})
