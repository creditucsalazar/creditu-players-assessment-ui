<template>
  <div class="searchbar">
    <b-field>
      <b-input
        :id="id"
        v-model="auxValue"
        :placeholder="placeholder"
        rounded
        icon="magnify"
      />
    </b-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auxValue: "",
    };
  },
  watch: {
    auxValue: {
      immediate: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
    value: {
      immediate: true,
      handler(val) {
        this.auxValue = val;
      },
    },
  },
  props: {
    id: { type: String, default: "" },
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
};
</script>
<style scoped>
.searchbar {
  background-color: aquamarine;
  justify-content: center;
  padding: 3% 10% 3%;
}
</style>
