console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist, 
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}

addToCollection(myCollection, `Parklife`, `Blur`, `1994`);
console.log(myCollection);
addToCollection(myCollection, `13`, `Blur`, `1998`);
console.log(myCollection);
addToCollection(myCollection, `Gorillaz`, `Gorillaz`, `2001`);
console.log(myCollection);
addToCollection(myCollection, `Cracker Island`, `Gorillaz`, `2023`);
console.log(myCollection);
addToCollection(myCollection, `SR. SANTOS`, `Bad Bunny`, `2022`);
console.log(myCollection);
addToCollection(myCollection, `EL ÚLTIMO TOUR DEL MUNDO`, `Bad Bunny`, `2020`);
console.log(myCollection);

function showCollection(collection) {
  for (let i=0; i<collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    // console.log(collection.title + ` by ` + collection.artist + `, published in ` + collection.yearPublished);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let artistMatch = [];
  for (let i=0; i<collection.length; i++){
    if (collection[i].artist === artist) {
      artistMatch.push(collection[i]);
    }
  }
  return artistMatch;
}

console.log(findByArtist(myCollection, `Bad Bunny`));
console.log(findByArtist(myCollection, `J Balvin`));

function search(collection, searchCriteria) {
  let searchMatch = []; 
  for (let i=0; i<collection.length; i++){
    if (searchCriteria === ("artist: ", collection[i].artist, ", yearPublished: ", collection[i].yearPublished)) {
      searchMatch.push(collection[i]);
      console.log(searchMatch);
    }
    else if (searchCriteria != (collection[i].artist, collection[i].yearPublished)) {
      console.log(collection);
    }
    else if (searchCriteria === "" || searchCriteria === collection[i].artist || searchCriteria === collection[i].yearPublished){
      return collection;
    }
  }
}

search(myCollection, "artist: Blur, yearPublished: 1994");



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
