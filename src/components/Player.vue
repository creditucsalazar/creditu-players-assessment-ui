<template>
  <div class="column is-2">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="`https://${player.avatar}`" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p :id="`${player.id}-nickname`" class="title is-4">
              {{ player.nickname }}
            </p>
            <p :id="`${player.id}-balance`" class="subtitle is-6">
              {{ player.balance }}
            </p>
          </div>
        </div>
        <div class="content">
          <table>
            <tr>
              <td :id="`${player.id}-status`">{{ player.status }}</td>
            </tr>
            <tr>
              <td :id="`${player.id}-id`">{{ player.id }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    player: { type: Object, default: () => ({}) },
  },
};
</script>
<style scoped></style>
