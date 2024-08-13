function product(p1, p2) {
  return p1 * p2;
}

console.log('The product of 9 and 10 is ' + product(9, 10));

//function to check for electricity bill as per unit(assumtion)

function bill(units) {
  if (units < 20) {
    return 80;
  } else if (units < 50) {
    return 80 + (units - 20) * 7;
  } else {
    return 80 + 30 * 7 + (units - 50) * 8.6;
  }
}

console.log('The bill amount of 117 units is ' + bill(117));
