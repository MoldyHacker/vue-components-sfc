<template>
  <nav class="navbar bg-dark">
      <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
      <div class="pe-5">
        <input id="search" v-model="searchTerm">
        <button id="searchBtn" @click="searchITunes()">Search</button>
      </div>
  </nav>
  <div class="container-fluid mt-3">
    <library-item-list :library="searchResults"></library-item-list>
  </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import LibraryCollection from "@/models/LibraryCollection";
import ITunes from "@/data/ITunes";
import LibraryCollectionFactory from "@/models/LibraryCollectionFactory";

export default {
  name: 'App',
  components: {
    LibraryItemList,
  },
  data() {
    return {
      searching: true,
      searchTerm: 'Stuff You Should Know',
      searchResults: new LibraryCollection(),
      currentCollection: new LibraryCollection(),
    }
  },
  computed: {
    parsedSearchTerm() {
      return this.searchTerm.toLowerCase().split(" ").join("+");
    }
  },
  methods: {
    clearResults() {this.searchResults = new LibraryCollection();},
    searchITunes() {
      if (this.searchTerm){
        this.clearResults();

        this.searching = true;

        ITunes
            .search(this.parsedSearchTerm)
            .then(response => {
              console.log('api response', response)

              if (response.data.results.length > 0) {
                this.searchResults = LibraryCollectionFactory.createFromITunes(response.data.results);
                console.log(this.searchResults);
              }

            })
            .catch(error => {
              console.error("AJAX SEARCH ERROR!", error);
            })
            .finally(() => {
              this.searching = false;
            })

      }
    },
  },
  mounted: function () {
    this.searchITunes();
  }
}
</script>

<style lang="scss">

</style>
