
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

var limited = items.filter(function(item){
  return item.price >= 14 && item.price <= 18;
});

var describe = limited.forEach(function(item){

   console.log('Items that cost between $14.00 USD and $18.00 USD:' + item.title);

});


//Find item with GBP

//way with filter.need to ask about .call
var currency = items.filter(function(a){
   return a.currency_code === 'GBP';
});

var queen = currency.map.call(currency, function(a){
  console.log(a.title + "costs \u00A3" + a.price);
});

//which items are made of wood

var material = items.forEach(function(item){
  item.materials.forEach(function(material){
   if(material === 'wood')
    console.log(item.title);
  });
});


//8 or more materials
var countAll = items.filter(function(count){
  return count.materials.length >= 8;
});

var countMaterials = countAll.map.call(countAll, function(a){
  console.log(a.title + a.materials);
});




//how many made by sellers

var sellers = items.filter(function(item){
  return item.who_made === 'i_did'
});

console.log(sellers.length + " were made by their sellers.");
