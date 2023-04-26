export default function LibraryItem(media){
  const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold', RETURNED: 'returned'}

  // add library item functionality to the book or movie (media)

  // set the default status
  media.status = STATUSES.CHECKED_IN;

  // methods
  media.checkIn = function(){
    this.status = STATUSES.CHECKED_IN;
  }

  media.checkOut = function(){
    this.status = STATUSES.CHECKED_OUT;
  }
  
  media.isAvailable = function(){
    return this.status === STATUSES.CHECKED_IN;
  }

  return media;
}