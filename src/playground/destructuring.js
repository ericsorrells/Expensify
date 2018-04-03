console.log('DESTRUCTURING');

const person = {
  name: 'Eric',
  age: 42,
  location: {
    city: 'Atlanta',
    temp: 101
  }
};

const {name, age} = person;
console.log(`${name} is ${age} years old`)
const { city, temp } = person.location;
console.log(`${city} is ${temp} degrees`);


const book = {
  title: 'Blade Runner',
  author: 'Phillip K Dick',
  publisher: {
  }
}

const { name: publisherName = 'SelfPublished' } = book.publisher
console.log(publisherName);


// ARRAYS

const address = ['123 Elm St', 'Atlanta', 'GA', '30318'];
const [myAddress, myCity, state, zip] = address;
console.log(`You are in ${myCity}`);