<template>
  <div id="app">
    <button @click="edit = !edit">Toggle edit</button>

    <NxForm :edit="edit">
      <NxFormCommonField
        type="text"
        name="sample"
        label="Sample text input"
        placeholder="Sample placeholder"
        help="Sample help text"
        validation="required"
        error-behavior="live"
        v-model="form.text"
      />
    </NxForm>
  </div>
</template>

<script>
import NxForm from "@/components/nx-form/NxForm";
import NxFormCommonField from "@/components/nx-form/NxFormCommonField";

export default {
  components: {
    NxForm,
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
