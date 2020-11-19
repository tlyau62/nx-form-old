<template>
  <div id="app">
    <NxFormCommonField
      type="text"
      name="sample"
      label="Sample text input"
      placeholder="Sample placeholder"
      help="Sample help text"
      validation="required"
      error-behavior="live"
      v-model="form.text"
      :edit="edit"
    />

    <button @click="edit = !edit">Toggle edit</button>
  </div>
</template>

<script>
import NxFormCommonField from "@/components/nx-form/NxFormCommonField";

export default {
  components: {
    NxFormCommonField,
  },
  data() {
    return {
      form: {},
      edit: false,
    };
  },
};
</script>

<style lang="scss">
@import "@braid/vue-formulate/dist/snow.min";
</style>
