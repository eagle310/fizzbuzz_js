'use strict';

describe ('Fizzbuzz', function() {
  var fizzbuzz_num

  beforeEach(function(){
    fizzbuzz_num = new Fizzbuzz();
  });

  it('returns "fizz" when passed 3', function(){
    expect(fizzbuzz_num.fizzbuzz(3)).toEqual('fizz');
  });

  it('returns "buzz" when passed 5', function(){
    expect(fizzbuzz_num.fizzbuzz(5)).toEqual('buzz');
  });

  it('returns "fizzbuzz" when passed 15', function(){
    expect(fizzbuzz_num.fizzbuzz(15)).toEqual('fizzbuzz');
  });

  it('returns number when passed 23', function(){
    expect(fizzbuzz_num.fizzbuzz(23)).toEqual(23);
  });
});
