//Q.1 Calculate avg price
var priceArray = [];

var prices = items.forEach(function(item) {
  priceArray.push(item.price);
});

var total = priceArray.reduce(function(x,y){
   return x + y;
});

var avg = total / 25;

console.log('The average price is $' + avg.toFixed(2));

//Array of items that cost between $14 & $18

var limited = priceArray.filter (function (num) {
  return num >= 14 && num <= 18;
});



console.log (limited);
