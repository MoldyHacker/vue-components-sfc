<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.collectionId">
      <library-item-card :item="item"/>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
// import LibraryCollection from "@/models/LibraryCollection";
// import {Book, Movie} from "@/models/Media";

export default {
  name: "LibraryItemList",
  props: ['library'],
  components: {LibraryItemCard},
  // data() {
  //   return {
  //     library: new LibraryCollection()
  //         .add(new Book('1984', 237))
  //         .add(new Movie('Ready Player 1', 122))
  //         .add(new Movie('Avengers: End Game', 189))
  //   }
  // },
}

</script>

<style scoped>

</style>