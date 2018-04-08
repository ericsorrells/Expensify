const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolving my Promise');
    reject('Something went wrong')
  }, 5000)
});

console.log('BEFORE');

promise.then((data) => {
  console.log('Data', data);
}).catch((error) => {
  console.log('I Failed: ' + error);
})

console.log('AFTER');
