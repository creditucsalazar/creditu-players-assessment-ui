<template>
  <div id="players-grid" class="columns is-multiline is-centered row">
    <Player v-for="player in value" :key="player.id" :player="player" />
  </div>
</template>
<script>
import Player from "@/components/Player.vue";
export default {
  components: { Player },
  props: {
    value: { type: Array, default: () => [] },
  },
};
</script>
<style scoped></style>
