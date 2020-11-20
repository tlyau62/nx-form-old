<template>
  <component
    :is="fieldComponent"
    :type="type"
    :label="label"
    v-bind="$attrs"
    v-model="computedValue"
  />
</template>

<script>
import NxFormGeneralField from "./NxFormGeneralField";
import NxFormMultiSelectField from "./NxFormMultiSelectField";
import NxFormFieldMixin from "./nx-form-field.mixin";

export default {
  props: ["type", "value"],
  components: {
    NxFormGeneralField,
    NxFormMultiSelectField,
  },
  mixins: [NxFormFieldMixin],
  computed: {
    fieldComponent() {
      if (this.type === "multiselect") {
        return "NxFormMultiSelectField";
      }

      return "NxFormGeneralField";
    },
  },
};
</script>

<style scoped></style>
