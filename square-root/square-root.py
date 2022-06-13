def square(x): return x * x
def average(a, b): return (a + b) / 2


def square_root(x):
  def good_enough(guess):
    return abs(square(guess) - x) < 0.001

  def improve(guess):
    return average(guess, x / guess)

  guess = 1
  while not good_enough(guess):
    guess = improve(guess)
  return guess


print(square_root(25))
print(square_root(49))
print(square_root(square(10)))
