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
