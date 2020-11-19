<template>
  <NxFormLayout :edit="edit">
    <template #header>{{ label }}</template>
    <template #view>{{ computedValue }}</template>
    <template #edit>
      <FormulateInput v-bind="$attrs" v-model="computedValue" />
    </template>
  </NxFormLayout>
</template>

<script>
import NxFormLayout from "./NxFormLayout";

export default {
  props: ["label", "value", "edit"],
  components: {
    NxFormLayout,
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped></style>
