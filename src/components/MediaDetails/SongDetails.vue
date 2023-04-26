<template>
  <div class="song row">
      <div class="col col-9">
          <h3 class="card-title">{{ item.trackName }}</h3>
          <h5 class="card-subtitle">{{ item.collectionName }}</h5>
          <p class="card-text">Song Runtime: {{ parsedRuntime }}</p>
      </div>
      <img :src="item.artworkUrl100" alt="" class="col col-3">
  </div>
</template>

<script>
import {Song} from "@/models/Media";
export default {
  name: "SongDetails",
  props: {
    item: {type: Song}
  },
	computed: {
		parsedRuntime() {
		let seconds = Math.floor(this.item.trackTimeMillis / 1000);
		let minutes = Math.floor(seconds / 60);
		let remainingSeconds = seconds % 60;

		return minutes + 'm ' + remainingSeconds + 's';
		},
	},
}
</script>

<style scoped>

</style>