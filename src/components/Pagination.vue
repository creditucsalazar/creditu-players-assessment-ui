<template>
  <b-pagination
    v-model="auxValue"
    :total="total"
    :per-page="perPage"
    rounded
    order="is-centered"
    size="is-small"
  />
</template>
<script>
export default {
  props: {
    value: { type: Number, default: 1 },
    total: { type: Number, default: 1 },
    perPage: { type: Number, default: 10 },
  },
  data() {
    return {
      auxValue: 1,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.auxValue = val;
      },
    },
    auxValue: {
      immediate: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
<style scoped></style>
