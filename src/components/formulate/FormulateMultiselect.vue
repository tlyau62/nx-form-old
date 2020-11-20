<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <multiselect
      track-by="id"
      label="label"
      v-model="context.model"
      v-bind="context.attributes"
      :options="context.options"
    />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped></style>
