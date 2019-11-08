'use strict';

function Fizzbuzz() {
  this.num = 0;
};

Fizzbuzz.prototype.fizzbuzz = function(num_entry) {
  this.num = num_entry
  if (this.num % 3 == 0) {
    if (this.num % 5 == 0) {
      return 'fizzbuzz'
    } else {
      return 'fizz'
    };
  } else if (this.num % 5 == 0) {
    return 'buzz'
  } else {
    return this.num
  };
};
