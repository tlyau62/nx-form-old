<template>
  <NxFormLayout :edit="edit">
    <template #header>
      <slot name="header">
        {{ label }}
      </slot>
    </template>
    <template #edit>
      <slot name="edit">
        <FormulateInput
          v-bind="$attrs"
          v-model="computedValue"
          @validation="validation"
        />
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
import NxFormFieldMixin from "./nx-form-field.mixin";

export default {
  components: {
    NxFormLayout,
  },
  mixins: [NxFormFieldMixin],
  methods: {
    validation(evt) {
      this.$emit("validation", evt);
    },
  },
};
</script>

<style scoped></style>
