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
      this.setEdit();
    });
  },
  watch: {
    edit(edit) {
      this.setEdit();
    },
  },
  methods: {
    setEdit() {
      for (const component of this.components) {
        component.context.edit = this.edit;
      }
    },
  },
};
</script>

<style></style>
