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

const onValueChange = database.ref()
  .on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`);
  }, (e) => {
    console.log('ERROR: ', e);
  })

  console.log('VAL', onValueChange);


  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log('VAL: ', val);
  // })
  // .catch((e) => {
  //   console.log('ERROR: ', e);
  // })

// database.ref().set({
//   name: 'Eric Sorrells',
//   age: 26, 
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'SW Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Atlanta',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('SUCCESSFUL!');
// }).catch((error) => {
//   console.log('ERROR:', error);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data Removed');
//   })
//   .catch((error) => {
//     console.log('Error: ', error);
//   })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {

// }).catch(() => {

// })

// database.ref('age').set(34);
// database.ref('location/city').set('Rome');
// database.ref('attributes').set({ height: 61, weight: 150 })
//   .then(() => {console.log('It Works 2')})
//   .catch((e) => { console.log('IT FAILED');})
