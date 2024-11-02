class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance dari Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

const say = (username, age) => {
    console.log(`${username} memiliki umur ${age} tahun`);
}

say(person1.name, person1.age)
say(person2.name, person2.age)

person1.eat();
