const print = console.log;
const square = (x) => x * x;
const abs = (x) => x >= 0 ? x : -x;
const average = (a, b) => (a + b) / 2;

function square_root(x) {
  const good_enough = (guess) => abs(square(guess) - x) < 0.001;
  const improve = (guess) => average(guess, x / guess);

  let guess = 1;
  while (!good_enough(guess)) {
    guess = improve(guess);
  }
  return guess;
}

print(square_root(25));
print(square_root(49));
print(square_root(square(10)));
