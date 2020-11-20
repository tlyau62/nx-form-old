import FormulateMultiselect from "./FormulateMultiselect";

export default function(formulateInstance) {
  formulateInstance.extend({
    components: {
      FormulateMultiselect,
    },
    library: {
      multiselect: {
        classification: "text",
        component: "FormulateMultiselect",
      },
    },
  });
}
