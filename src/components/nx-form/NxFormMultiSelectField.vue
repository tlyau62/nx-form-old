<template>
  <NxFormGeneralField
    :edit="edit"
    :label="label"
    v-bind="$attrs"
    v-model="computedValue"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #edit>
      <slot name="edit"></slot>
    </template>
    <template #view>
      {{ computedValue && computedValue.value }}
    </template>
  </NxFormGeneralField>
</template>

<script>
import NxFormGeneralField from "./NxFormGeneralField";
import NxFormFieldMixin from "./nx-form-field.mixin";

export default {
  mixins: [NxFormFieldMixin],
  components: {
    NxFormGeneralField,
  },
};
</script>

<style scoped></style>
