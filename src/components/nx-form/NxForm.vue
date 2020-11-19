<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      components: [],
    };
  },
  created() {
    this.$on("created:field", (component) => {
      this.components.push(component);
    });
  },
  watch: {
    edit(edit) {
      for (const component of this.components) {
        component.context.edit = edit;
      }
    },
  },
};
</script>

<style></style>
