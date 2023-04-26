<template>
  <div class="audiobook row">
      <div class="col col-9">
          <h3 class="card-title">{{ item.collectionName }}</h3>
          <h5 class="card-subtitle">Author: {{ item.artistName }}</h5>
          <p class="card-text">{{ item.primaryGenreName }}</p>
      </div>
      <img :src="item.artworkUrl100" alt="" class="col col-3 p-0 ps-3">
  </div>
</template>

<script>
import {Podcast} from "@/models/Media";
export default {
  name: "PodcastDetails",
  props: {
    item: {type: Podcast}
  },
}
</script>

<style scoped>


</style>