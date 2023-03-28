//Arithmetic Aggregation Operators

$abs
Returns the absolute value of a number.

$add
Adds numbers to return the sum, or adds numbers and a date to return a new date. If adding numbers and a date, treats the numbers as milliseconds. Accepts any number of argument expressions, but at most, one expression can resolve to a date.

$ceil Returns the smallest integer greater than or equal to the specified number.

$divide
Returns the result of dividing the lint number by the second. Accepts two argument expressions.

$exp
Raises e to the specified exponent.

$floor
Returns the largest integer less than or equal to the specified number.

$in
Calculates the natural log of a number.

$log
Calculates the log of a number in the specified base.


$log10
Calculates the log base 10 of a number.

$mod
Returns the remainder of the first number divided by the second. Accepts two argument expressions.

$multiply
Multiplies numbers to return the product. Accepts any number of argument expressions.

$pow
Raises a number to the specified exponent.

$sqrt
Calculates the square root.

$subtract
Returns the result of subtracting the second value from the first. If the two values are numbers, return the difference. If the two values are dates, return the difference in milliseconds.

$trunc Truncates a number to its integer.


db.products.aggregate([
    {
      $match: { remark: "NEW" },
    },
    {
      $addFields: { "newPrice": {$add: [1,3]} },
    },
  ]);
