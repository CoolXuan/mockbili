import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/base.less";
import "@/assets/styles/iconfont.less";
import { Tab, Tabs } from "vant";
createApp(App).use(Tab).use(Tabs).use(router).mount("#app");
