<template>
  <NxFormLayout :edit="edit">
    <template #header>
      <slot name="header">
        {{ label }}
      </slot>
    </template>
    <template #edit>
      <slot name="edit">
        <FormulateInput v-bind="$attrs" v-model="computedValue" />
      </slot>
    </template>
    <template #view>
      <slot name="view">
        {{ computedValue }}
      </slot>
    </template>
  </NxFormLayout>
</template>

<script>
import NxFormLayout from "./NxFormLayout";

export default {
  props: ["label", "value"],
  components: {
    NxFormLayout,
  },
  data() {
    return {
      edit: false,
    };
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
  created() {
    this.$parent.$emit("created:field", {
      context: this,
    });
  },
};
</script>

<style scoped></style>
