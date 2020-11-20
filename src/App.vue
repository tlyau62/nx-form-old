<template>
  <div id="app">
    <button @click="edit = !edit">Toggle edit</button>

    <NxForm :edit="edit">
      <NxFormInputField
        type="text"
        name="sample"
        label="Sample text input"
        placeholder="Sample placeholder"
        help="Sample help text"
        validation="required"
        error-behavior="live"
        v-model="form.text"
      />

      <NxFormInputField
        type="file"
        name="file"
        label="Select your documents to upload"
        help="Select one or more PDFs to upload"
        validation="mime:application/pdf"
        multiple
        v-model="form.files"
      >
        <template #view>
          123
          {{ form.files && form.files.files[0].name }}
        </template>
      </NxFormInputField>
    </NxForm>
  </div>
</template>

<script>
import NxForm from "@/components/nx-form/NxForm";
import NxFormInputField from "@/components/nx-form/NxFormInputField";

export default {
  components: {
    NxForm,
    NxFormInputField,
  },
  data() {
    return {
      form: {},
      edit: false,
    };
  },
  watch: {
    "form.files"(files) {
      console.log(files);
    },
  },
};
</script>

<style lang="scss">
@import "@braid/vue-formulate/dist/snow.min";
</style>
