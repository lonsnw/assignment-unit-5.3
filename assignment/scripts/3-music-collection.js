console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

/**
 * 
 * @param {*} collection 
 * @param {*} title 
 * @param {*} artist 
 * @param {*} yearPublished 
 * @returns album object
 */

//this is what I originally wrote before the stretch goals
// function addToCollection(collection, title, artist, yearPublished) {
//   let album = {
//     title: title,
//     artist: artist, 
//     yearPublished: yearPublished,
//   };
//   collection.push(album);
//   return album;
// }

//for stretch goal #2
function addToCollection(collection, title, artist, yearPublished, tracksAsObject) {
  let album = {
    title: title,
    artist: artist, 
    yearPublished: yearPublished,
    tracks: tracksAsObject,
  };
  collection.push(album);
  return album;
}

addToCollection(myCollection, `Parklife`, `Blur`, `1994`, [{song: 'End of a Century', duration: `2:46`}, {song: `Parklife`, duration: `3:06`}, {song: `Bank Holiday`, duration: `1:42`}]);
//i went with song instead of name because name is deprecated
console.log(`Album 1:`, myCollection[0]);
addToCollection(myCollection, `13`, `Blur`, `1998`, [{song: 'Tender', duration: `7:41`}, {song: `Coffee & TV`, duration: `5:59`}, {song: `1992`, duration: `5:29`}]);
console.log(`Album 2:`, myCollection[1]);
addToCollection(myCollection, `Gorillaz`, `Gorillaz`, `2001`, [{song: '5/4', duration: `2:42`}, {song: `Clint Eastwood`, duration: `5:41`}, {song: `Slow Country`, duration: `3:37`}]);
console.log(`Album 3:`, myCollection[2]);
addToCollection(myCollection, `Cracker Island`, `Gorillaz`, `2023`, [{song: 'Cracker Island', duration: `3:33`}, {song: `Tarantula`, duration: `3:31`}, {song: `Tormenta`, duration: `3:13`}]);
console.log(`Album 4:`, myCollection[3]);
addToCollection(myCollection, `Nadie Sabe Lo Que Va a Pasar Mañana`, `Bad Bunny`, `2023`, [{song: 'NADIE SABE', duration: `6:20`}, {song: `HIBIKI`, duration: `3:28`}, {song: `CYBERTRUCK`, duration: `3:12`}]);
console.log(`Album 5:`, myCollection[4]);
addToCollection(myCollection, `EL ÚLTIMO TOUR DEL MUNDO`, `Bad Bunny`, `2020`, [{song: 'Yo Visto Así', duration: `3:12`}, {song: `TE MUDASTE`, duration: `2:10`}, {song: `Dákiti`, duration: `3:25`}]);
console.log(`Album 6:`, myCollection[5]);

/**
 * 
 * @param {*} collection 
 */

function showCollection(collection) {
  for (let i=0; i<collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}:`);
    for (let n=0; n<collection[i].tracks.length; n++){
      console.log(`${n+1}. ${collection[i].tracks[n].song}: ${collection[i].tracks[n].duration}`)
    }
//idk how to format this nicer?
  }
}

showCollection(myCollection);

/**
 * 
 * @param {*} collection 
 * @param {*} artist 
 * @returns Return the array with the matching results. (If no results are found, an empty array should be returned.)
 */

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

//STRETCH GOALS
//was not able to figure this out
/**
 * 
 * @param {*} collection 
 * @param {*} searchCriteria 
 * @returns Return a new array of all items in the collection matching all of the search criteria.
    If no results are found, return an empty array.
    If there is no search object, an empty search object, or missing artist/yearPublished data provided as input, 
    return all albums from the collection being searched.
 */

function search(collection, searchCriteria) {
  let searchResult = [];
  for (let i=0; i<collection.length; i++){
    //trying a ternary operator
    // return (searchCriteria.artist === collection[i].artist && searchCriteria.yearPublished === collection[i].yearPublished) ? searchResult.push(collection[i])
    //   : searchResult = []
    //   ; searchResult = collection}
    //original attempt with if else
    if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished){
      searchResult.push(searchCriteria);
    }
    else if (collection[i].artist != searchCriteria.artist || collection[i].yearPublished != searchCriteria.yearPublished){
      searchResult = [];
    }
    else if (searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined){
      //trying to use a spread operator here to see if that's the issue; it's not.
      //the spread operator copies the content of one object into another
      //i'm not sure that's relevant here, as they're arrays
      //but the reason to do it is to copy the content 
      //instead of just creating a reference from the new object to the old one
      searchResult = { ...collection};
    }
  };
  return searchResult;
}

console.log('should return object Blur, 1998:', search(myCollection, {artist: `Blur`, yearPublished: `1998`}));
console.log('should return empty array:', search(myCollection, { artist: `Blur`}));
console.log('should return entire collection:', search(myCollection, { artist: `Barbara Streisand`, yearPublished: `2018` }));

//STRETCH GOAL #2
//adding tracks to each album; see above.  I did parts of it.

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
