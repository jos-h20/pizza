
function Pizza () {
  this.orderSize = null;
  this.toppings = [];
  this.orderPrice = 0;
  this.orderDisplay = [];
}

Pizza.prototype.sizePrice = function(string) {
  if (string === "small") {
    this.orderSize = 7;
  } else if (string === "medium") {
    this.orderSize = 9;
  } else if (string === "large") {
    this.orderSize = 11;
  }
  return this.orderSize;
}

Pizza.prototype.toppingsSelect = function(string) {
  if (string === "pepperoni") {
    this.toppings.push("pepperoni");
  } else if (string === "sausage") {
    this.toppings.push("sausage");
  } else if (string === "olives") {
    this.toppings.push("olives");
  }
  return this.toppings;
}

Pizza.prototype.fullPrice = function() {
  this.orderPrice = this.toppings.length + this.orderSize;
  return this.orderPrice;
}

Pizza.prototype.showToppings = function() {
  var displayToppings = [];
  this.toppings.forEach(function(string) {
    displayToppings.push(" ", + string)
  });
  return displayToppings;
}

$(document).ready(function(){

$("form#size-toppings").submit(function(event) {
  event.preventDefault();

    yourPizza = new Pizza;


  inputSize = $("select#chosenSize").val();
  yourPizza.sizePrice(inputSize);

  var newpizzaSize = yourPizza.sizePrice();

  if ($("#0").is(":checked")) {
      var inputPep = $("input#0").val();
      yourPizza.toppingsSelect(inputPep);
    } else {
      inputPep = 0;
    }

  if ($("#1").is(":checked")) {
      var inputSaus = $("input#1").val();
      yourPizza.toppingsSelect(inputSaus);
    } else {
      inputSaus = 0;
    }

  if ($("#2").is(":checked")) {
      var inputOli = $("input#2").val();
      yourPizza.toppingsSelect(inputOli);
    } else {
      inputOli = 0;
    }
yourPizzaToppings = yourPizza.showToppings();
yourPizzaPrice = yourPizza.fullPrice();
  // newToppings = (inputPep, inputSaus, inputOli)
  // newPizza.orderDisplay.push(newToppings);
debugger;
$("ul#price").append("<li><span class='price'>" + yourPizzaPrice + "</span></li>");
});
});
