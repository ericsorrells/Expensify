import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkig9wGtw0KTYxwVR5hJ5W3bXtjbCChU8",
  authDomain: "expensify-40db4.firebaseapp.com",
  databaseURL: "https://expensify-40db4.firebaseio.com",
  projectId: "expensify-40db4",
  storageBucket: "expensify-40db4.appspot.com",
  messagingSenderId: "350243492178"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//   name: 'Eric Sorrells',
//   age: 26, 
//   isSingle: false,
//   location: {
//     city: 'Atlanta',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('SUCCESSFUL!');
// }).catch((error) => {
//   console.log('ERROR:', error);
// });

database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data Removed');
  })
  .catch((error) => {
    console.log('Error: ', error);
  })


// database.ref('age').set(34);
// database.ref('location/city').set('Rome');
// database.ref('attributes').set({ height: 61, weight: 150 })
//   .then(() => {console.log('It Works 2')})
//   .catch((e) => { console.log('IT FAILED');})
