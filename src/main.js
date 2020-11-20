import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFormulate from "@braid/vue-formulate";
import FormulatePlugins from "@/components/formulate/formulate-plugins";

Vue.use(VueFormulate, {
  plugins: [FormulatePlugins],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
