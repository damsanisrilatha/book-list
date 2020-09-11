//constructor
function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.getSummary = function () {
    return ` ${this.title} was written by ${this.author}
   this price${this.price}`;
    //return message(string)
  };
}
//instatiate an object
const book = new Book('book one', 'srinivas', '2345');
//console.log(book.getSummary());
//console.log(book);

function Book2(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
  //this.year = year; using prototype we can solve
}
const book3 = new Book2('my book', 'srilu', '456', '2019');
console.log(book3);
Book2.prototype.year = '2019';
//=======object===========
let person = { name: 'srilu', age: '24' };
person.name = 'srilatha'; //change
person['name'] = 'damsnai'; // change srilatha to damsani
//console.log(person);

//====================this
const person1 = {
  walk() {
    console.log(this);
  },
};
person1.walk();
//const walk = person1.walk;
//walk();
//===================function=====================
const job = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
  { id: 4, isActive: true },
];
//======funtion declaration types
// function isActive(job) {
//   return job.isActive;
// }

// const isActive = function (job) {
//   return job.isActive;
// }

// const isActive = job => {
//   return job.isActive;
// };

const filtered = job.filter(job => {
  console.log('inside filter');
  return job.isActive;
});
//console.log(filtered);

//============ArrayMap
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li> ${color} </li>`);
//console.log(items);
//============object===========
//================(getting json object&& using destructure easy===================//
const address = {
  street: 'munnekolala',
  city: 'bengaluru',
  country: 'india',
};

const street = address.street;
const city = address.city;
const country = address.country;
//aliasing street: st, city: c, country: cun
const { street: st, city: c, country: cun } = address;
//console.log(st);
//console.log(c);
//console.log(cun);

//( Array   concat &...spreadoperator)in array=========
const first = [3, 5, 8];
const second = [4, 7, 5];
//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b '];
//console.log(combined);
//================class=======
class Man {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log('walk');
  }
}
const man = new Man('srilatha');
console.log(man);
man.walk();
//=============inheritance==========
class Student {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log('walk');
  }
}
class Teacher extends Student {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log('teach');
  }
}
const teacher = new Teacher('srilatha', 'bsc');
console.log(teacher);
teacher.walk();
teacher.teach();
