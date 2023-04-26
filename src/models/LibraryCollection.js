import LibraryItem from "@/models/LibraryItem";

function LibraryCollection(){
  let arr = [];

  arr.add = function(item){
    this.push(new LibraryItem(item));

    return this; // allows for chaining
  }

  arr.removeItem = function(item){
    console.log(item, this);
    this.splice(this.indexOf(item), 1);

    return this;
  }

  return arr;
}

export default LibraryCollection;

