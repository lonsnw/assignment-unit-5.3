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
console.log(myCollection[0]);
addToCollection(myCollection, `13`, `Blur`, `1998`);
console.log(myCollection[1]);
addToCollection(myCollection, `Gorillaz`, `Gorillaz`, `2001`);
console.log(myCollection[2]);
addToCollection(myCollection, `Cracker Island`, `Gorillaz`, `2023`);
console.log(myCollection[3]);
addToCollection(myCollection, `SR. SANTOS`, `Bad Bunny`, `2023`);
//it's actually 2022 but i want overlap in years
console.log(myCollection[4]);
addToCollection(myCollection, `EL ÚLTIMO TOUR DEL MUNDO`, `Bad Bunny`, `2020`);
console.log(myCollection[5]);

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

console.log(`looking for Bad Bunny:`, findByArtist(myCollection, `Bad Bunny`));
console.log(`looking for J Balvin:`, findByArtist(myCollection, `J Balvin`));


//was not able to figure this out
function search(collection, searchCriteria) {
  let searchResult = [];
  for (let i=0; i<collection.length; i++){
    //trying a ternary operator
    // return (searchCriteria.artist === collection[i].artist && searchCriteria.yearPublished === collection[i].yearPublished) ? searchResult.push(collection[i])
    //   : searchResult = []
    //   ; searchResult = collection}
    //original attempt with if else
    //   console.log(searchCriteria);
    if (searchCriteria.artist === collection[i].artist && searchCriteria.yearPublished === collection[i].yearPublished){
      searchResult.push(collection[i]);
    }
    else if (searchCriteria.artist != collection[i].artist || searchCriteria.yearPublished != collection[i].yearPublished){
      searchResult = [];
    }
    else if (searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined){
      searchResult = collection;
    }
  };
  return searchResult;
}

console.log('should return object Blur, 1998:', search(myCollection, {artist: `Blur`, yearPublished: `1998`}));
console.log('should return empty array:', search(myCollection, { artist: `Blur`}));
console.log('should return entire collection:', search(myCollection, { artist: `Barbara Streisand`, yearPublished: `2018` }));



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
