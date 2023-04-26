import LibraryCollection from "@/models/LibraryCollection";
import {Audiobook, FeatureMovie, Song, Podcast, TvEpisode, EBook} from "@/models/Media";

export default class LibraryCollectionFactory {
  static createFromITunes(volumes) {
    const collection = new LibraryCollection();

    volumes.forEach(result => {
      let newResult = false;
      if (result?.wrapperType?.toLowerCase() === "track"){
        switch (result.kind.toLowerCase()) {
          case "feature-movie":
            newResult = Object.assign(new FeatureMovie(), result);
            break;
          case "tv-episode":
            newResult = Object.assign(new TvEpisode(), result);
            break;
          case "song":
            newResult = Object.assign(new Song(), result);
            break;
          case "podcast":
            newResult = Object.assign(new Podcast(), result);
            break;
          default :
            console.warn('Found a "Track" other than the default');
            break;
        }
      } else if(result?.wrapperType?.toLowerCase() === "audiobook") {
        newResult = Object.assign(new Audiobook(), result);
      } else if(result?.kind?.toLowerCase() === "ebook") {
        newResult = Object.assign(new EBook(), result);
      }
      else {
        console.warn('Found something other than default');
      }
      if (newResult) {
        collection.add(newResult);
      }
    })
    return collection;
  }
}