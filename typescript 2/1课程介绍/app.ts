class Greeters {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeters = new Greeters('world');

let button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function() {
  alert(greeter.greet());
};

document.body.appendChild(button);
