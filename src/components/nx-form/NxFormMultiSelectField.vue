<template>
  <NxFormField
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
  </NxFormField>
</template>

<script>
import NxFormField from "./NxFormField";
import NxFormFieldMixin from "./nx-form-field.mixin";

export default {
  mixins: [NxFormFieldMixin],
  components: {
    NxFormField,
  },
};
</script>

<style scoped></style>
