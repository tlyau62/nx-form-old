import NxForm from "./NxForm";
import NxFormField from "./NxFormField";
import VueFormulate from "@braid/vue-formulate";
import FormulatePlugins from "@/components/formulate/formulate-plugins";

const NxFormPlugin = {
  install(Vue) {
    Vue.component("nx-form", NxForm);
    Vue.component("nx-form-field", NxFormField);
    Vue.use(VueFormulate, {
      plugins: [FormulatePlugins],
    });
  },
};

export default NxFormPlugin;
