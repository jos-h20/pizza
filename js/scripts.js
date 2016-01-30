
function Pizza () {
  this.orderSize = null;
  this.toppings = [];
  this.orderPrice = 0;
  this.orderDisplay = [];
}

Pizza.prototype.sizePrice = function(string) {
  if (string === "Small") {
    this.orderSize = 7;
  } else if (string === "Medium") {
    this.orderSize = 9;
  } else if (string === "Large") {
    this.orderSize = 11;
  }
  return this.orderSize;
}

Pizza.prototype.toppingsSelect = function(string) {
  var pepperoni = {topping: "Pepperoni"}
  var sausage = {topping: "Sausage"}
  var olives = {topping: "Olives"}
  var toppings = [pepperoni, sausage, olives]


  if (string === 'Pepperoni') {
    this.toppings.push(toppings[0]);
  } else if (string === 'Sausage') {
    this.toppings.push(toppings[1]);
  } else if (string === 'Olives') {
    this.toppings.push(toppings[2]);
  }
  return this.toppings;
}
// console.log(this.toppings);
Pizza.prototype.fullPrice = function() {
  this.orderPrice = this.toppings.length + this.orderSize;
  return this.orderPrice;
}

// Pizza.prototype.showToppings = function() {
//   var displayToppings = [];
//
//   this.toppings.forEach(function(string) {
//     displayToppings.push(" ", + string);
//   });
//   return displayToppings;
// }

$(document).ready(function(){

$("form#size-toppings").submit(function(event) {
  event.preventDefault();

    yourPizza = new Pizza;


  inputSize = $("select#chosenSize").val();
  yourPizza.sizePrice(inputSize);

  var newpizzaSize = yourPizza.sizePrice();

  if ($("#0").is(":checked")) {
      inputPep = $("input#0").val();
      yourPizza.toppingsSelect(inputPep);
    } else {
      inputPep = "";
    }

  if ($("#1").is(":checked")) {
      inputSaus = $("input#1").val();
      yourPizza.toppingsSelect(inputSaus);
    } else {
      inputSaus = "";
    }

  if ($("#2").is(":checked")) {
      inputOli = $("input#2").val();
      yourPizza.toppingsSelect(inputOli);
    } else {
      inputOli = "";
    }
// yourPizzaToppings = yourPizza.showToppings();
yourPizzaPrice = yourPizza.fullPrice();

$("#size").append(inputSize);

$("#toppings").append('<p>' + inputPep + '</p>' + '<p>' + inputSaus + '</p>'  + '<p>' + inputOli + '</p>');

$("#price").append("$" + yourPizzaPrice);
});
});
