describe('Pizza', function() {
  it("creates a pizza with size and toppings", function() {
    var testPizza = new Pizza;
    expect(testPizza.orderSize).to.equal(null);
    expect(testPizza.toppings).to.eql([]);
   });
   it("selects a pizza size", function() {
     var testPizza = new Pizza;
     expect(testPizza.sizePrice("medium")).to.equal(9);
   });
   it("selects toppings for the pizza", function () {
     var testPizza = new Pizza;
     expect(testPizza.toppingsSelect("pepperoni")).to.eql(["pepperoni"])
   });
   it("determines the price of the size and toppings", function() {
     var testPizza = new Pizza;
     testPizza.sizePrice("large");
     testPizza.toppings = ["pepperoni"];
     expect(testPizza.fullPrice()).to.equal(12);
   });


});
