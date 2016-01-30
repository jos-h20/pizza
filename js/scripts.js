
function Pizza () {
  this.orderSize = null;
  this.toppings = [];
  this.orderPrice = 0;
}

Pizza.prototype.sizePrice = function(string) {
  if (string === "small") {
    this.orderSize = 7;
  } else if (string === "medium") {
    this.orderSize = 9;
  } else if (string === "large"); {
    this.orderSize === 11;
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
