export default {
  props: ["label", "value"],
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
    this.$on("created:field", (evt) =>
      this.$parent.$emit("created:field", evt)
    );

    this.$parent.$emit("created:field", {
      context: this,
    });
  },
};
