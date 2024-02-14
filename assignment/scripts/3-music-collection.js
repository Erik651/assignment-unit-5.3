console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line
//Create an empty array named myCollection *
let myCollection = [];
//let publicEnemyCollection = [];
//Create a function named addToCollection *
function addToCollection(collection, title, artist, yearPublished) {
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(record);
  console.log(record);
  return record;
}

addToCollection(myCollection, 'Definitely Maybe', 'Oasis', '1994');
addToCollection(
  myCollection,
  `(What's the Story) Morning Glory`,
  'Oasis',
  '1995'
);
addToCollection(myCollection, `Don't Believe the Truth`, 'Oasis', '2005');
// addToCollection(
//   publicEnemyCollection,
//   'Yo! Bum Rush the Show',
//   'Public Enemy',
//   '1987'
// );
//addToCollection(
//   publicEnemyCollection,
//   'It Takes a Nation of Millions to Hold Us Back',
//   'Public Enemy',
//   '1988'
// );
addToCollection(myCollection, 'Dig Out Your Soul', 'Oasis', '2008');
addToCollection(myCollection, 'Be Here Now', 'Oasis', 1996);
addToCollection(
  myCollection,
  'Standing on the Shoulder of Giants',
  'Oasis',
  '2000'
);
addToCollection(myCollection, 'Urban Hymns', 'The Verve', '1997');
addToCollection(myCollection, 'Siamese Dream', 'The Smashing Pumpkins', '1993');
addToCollection(myCollection, 'Fantastic Plant', 'Failure', '1996');
addToCollection(myCollection, 'De Stijl', 'The White Stripes', '2000');
addToCollection(myCollection, 'The White Stripes', 'The White Stripes', '1999');
addToCollection(myCollection, 'White Blood Cells', 'The White Stripes', '2001');
//addToCollection(publicEnemyCollection, 'Fear of a Black Planet', '1990');
console.log(myCollection);
//console.log(publicEnemyCollection);

//Create a function named showCollection
function showCollection(collection) {
  for (const element of collection) {
    console.log(
      `${element.title} by ${element.artist}, published in ${element.yearPublished}`
    );
  }
}
console.log(showCollection(myCollection));

//Add a function named findByArtist
function findByArtist(collection, artist) {
  let matches = [];

  for (const item of collection) {
    if (item.artist === artist) {
      matches.push(item);
    }
  }
  //console.log('test');
  return matches;
}

console.log(findByArtist(myCollection, 'Oasis'));
console.log(findByArtist(myCollection, 'The Verve'));

//Create a function called search that will allow for searching by artist and yearPublished.
// function search(collection, artist, yearPublished) {
//   let searchResults = [];
//   for (const item of collection) {
//     if (item.artist === artist && item.yearPublished === yearPublished) {
//       searchResults.push(item);
//     }
//   }
//   console.log(searchResults);
//   return searchResults;
// }

// console.log(search(myCollection, 'Oasis', 1996));
// console.log(search(myCollection, 'Oasis', '1995'));

function search(collection, searchCriteria) {
  let searchResults = [];
  for (const item of collection) {
    if (
      item.artist === searchCriteria.artist &&
      item.yearPublished === searchCriteria.yearPublished
    ) {
      searchResults.push(item.artist, item.yearPublished);
    }
  }
  console.log(searchResults);
  return searchResults;
}

//let criteria = { artist: 'Oasis', yearPublished: '1995' };
let criteria = { artist: 'The White Stripes', yearPublished: '2001' };
//search(myCollection, criteria);
console.log(search(myCollection, criteria));
//console.log(searchResults);

//// template literals ${}
//used to add js variable to a string
// let petFirstName = 'Scout';
// let petLastName = 'Boyd';
// let petFullName = `${petFirstName} ${petLastName}`;

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
