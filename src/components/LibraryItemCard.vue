<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item" />
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
<!--      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Add To Bag</button>-->
      <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
<!--      <button disabled v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Added To Bag</button>-->
<!--      <button disabled v-else-if="item.returned" class="btn btn-outline-info">Returned</button>-->
<!--      <button class="btn btn-danger" @click="item.remove(item)">Delete</button>-->
    </div>
  </div>
</template>

<script>
// import BookDetails from "@/components/BookDetails.vue";
// import MovieDetails from "@/components/MovieDetails.vue";
import SongDetails from "@/components/MediaDetails/SongDetails.vue";
import FeatureMovieDetails from "@/components/MediaDetails/FeatureMovieDetails.vue";
import AudiobookDetails from "@/components/MediaDetails/AudiobookDetails.vue";
import PodcastDetails from "@/components/MediaDetails/PodcastDetails.vue";
import TvEpisodeDetails from "@/components/MediaDetails/TvEpisodeDetails.vue";
import EBookDetails from "@/components/MediaDetails/EBookDetails.vue";

export default {
  name: "LibraryItemCard",
  components: {SongDetails, FeatureMovieDetails, AudiobookDetails, PodcastDetails, TvEpisodeDetails, EBookDetails},
  props: {
    item: {type: Object}
  },
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; // will fail with webpack
      return item.constructor.type + 'Details';
    }
  },
}
</script>

<style scoped>

</style>