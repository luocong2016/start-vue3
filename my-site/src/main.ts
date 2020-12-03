import { createApp } from "vue";
import router from "/@/router";
import store from "/@/store";

// plugins
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "/@/App.vue";
import "/@/styles/index.scss";

createApp(App)
  .use(router)
  .use(store)
  .use(Antd)
  .mount("#app");
