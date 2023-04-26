function Book(title, pages){
  this.title = title ?? 'Default Title';
  this.pages = pages ?? 0;
}
Book.type = "Book";

class Movie {
  static type = 'Movie';
  title = '';
  runtime = 0;

  constructor(title, runtime) {
    this.title = title ?? '';
    this.runtime = runtime ?? 0;
  }
}

class Media {
  trackId = 0;
  collectionId = 0;
  wrapperType = '';
  kind = '';
  artistName = '';
  collectionName = '';
  trackName = '';
  collectionCensoredName = '';
  artistViewUrl = '';
  trackCensoredName = '';
  collectionArtistViewUrl = '';
  collectionViewUrl = '';
  trackViewUrl = '';
  artworkUrl100 = '';
  collectionPrice = '';
  trackPrice = 0;
}

class Song extends Media {
  static type = 'song';
  get type() { return Song.type; }
  
  trackTimeMillis = 0;
  // kind = '';
  // artistName = '';
  // collectionName = '';
  // trackName = '';
  // collectionPrice = '';
  // trackPrice = '';
}

class FeatureMovie extends Media {
  static type = 'feature-movie';
  get type() { return FeatureMovie.type; }
  
  trackTimeMillis = 0;
  contentAdvisoryRating = '';
  
  // trackName = '';
}

class Audiobook extends Media {
  static type = 'audiobook';
  get type() { return Audiobook.type; }
  primaryGenreName = '';
  
}

class EBook extends Media {
  static type = 'ebook';
  get type() { return EBook.type; }
  
}

class Podcast extends Media {
  static type = 'podcast';
  get type() { return Podcast.type(); }
  trackName = '';
}

class TvEpisode extends Media {
  static type = 'tv-episode';
  get type() { return TvEpisode.type(); }
}




export { Book, Movie, Song, FeatureMovie, Audiobook, Podcast, TvEpisode, EBook};