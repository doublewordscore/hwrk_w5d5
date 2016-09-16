window.setTimeout(function () {
	alert('HAMMER TIME');
}, 5000);

function hammerTime(time) {
  window.setTimeout(function () {
    alert(`${time} is HAMMER TIME`);
  }, time);
}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits(callback) {
  reader.question("Would you like some tea?", function(answer1) {
    reader.question("Would you like some biscuits?", function(answer2) {
      const ans1 = (answer1 === 'yes') ? 'do' : 'don\'t';
      const ans2 = (answer1 === 'yes') ? 'do' : 'don\'t';
      console.log(`You ${ans1} don't want and you ${ans2} want biscuits?`);
      reader.close();
    });
  });
}

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();
Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
