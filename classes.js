// class Human {
//   update() {
//     console.log(this)
//   }
// }

// const a = class {};

// function HumanFnc () {}
// console.log(new Human(), new HumanFnc());

class Leg {
  step() {
    console.log('Step...')
  }
}

class Hand {
  click() {
    console.log('Click');
  }
}

class Head {}

class Pair {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

class Human {
  constructor(age) {
    this.legs = new Pair (new Leg(), new Leg());
    this.hands = new Pair (new Hand(), new Hand());
    this.head = new Head();
    this.age = age;
  }
}

class Woman extends Human {
  constructor(age) {
    super(age);
    console.log('Hello woman');
  }
}

class Man extends Human {
  constructor(age) {
    super(age);
    console.log('Hello man');
  }
}

const human = new Human();
const man = new Man();
const woman = new Woman();

console.log(man, woman, human);

class Employee {
  constructor(gender) {
    if (gender instanceof Human) {
      this.gender = gender;
    } else {
      throw new Error('Not a Human!')
    }
  }
}
class Developer extends Employee {
  code() {
    this.gender.hands.left.click();
    this.gender.hands.right.click();
  }
}
class JSDeveloper extends Developer {
  createMobileApp() {
    this.code();
  }
}

const jsDev = new JSDeveloper(new Woman(18));
jsDev.createMobileApp();
console.log(jsDev);