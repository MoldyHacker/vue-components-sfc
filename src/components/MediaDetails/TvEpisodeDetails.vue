<template>
  <div class="featureMovie row">
      <div class="col col-9">
          <h3 class="card-title">{{ item.trackName }}</h3>
          <h5 class="card-subtitle">{{ item.collectionName }}</h5>
          <p class="card-text">Show Runtime: {{ parsedRuntime }} minutes</p>
      </div>
      <img class="col col-3 p-0 ps-3" :src="item.artworkUrl100" alt="">
  </div>
</template>

<script>
import {TvEpisode} from "@/models/Media";

export default {
  name: "TvEpisodeDetails",
  props: {
    item: {type: TvEpisode}
  },
    computed: {
			parsedRuntime() {
				return Math.floor(this.item.trackTimeMillis / 60000);
			},
    },
}
</script>

<style scoped>

</style>