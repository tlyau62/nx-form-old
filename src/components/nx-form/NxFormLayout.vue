<template>
  <div>
    <h4>
      <slot name="header">{{ label }}</slot>
    </h4>
    <template v-if="edit">
      <slot name="edit"></slot>
    </template>
    <template v-else>
      <slot name="view"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: ["label", "edit"],
};
</script>
