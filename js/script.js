$(document).ready(function(){
    //form section to submit the users input calculate the total for the order//
    $(text-center).submit(function(event){
        //function to get users input from the form
        function flavour(){
            var pizzaFlavour = document.getElementById("flavour").value;
            return parseInt(pizzaFlavour)

        }
        function size(){
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize)

        }
        function crust(){
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust)

        }
        function toppings(){
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings)

        }
        function number(){
            var pizzaNumber = document.getElementById("number").value;
            return parseInt(pizzaNumber)

        }
        //a constructor to create objects
        function order(flavour, size, crust, toppings, quantity){
            this.newFlavour = flavour;
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newQuantity = quantity;

        }
        //above constructor to save users order
        var userInput = new Order (flavour(), size(), crust(), toppings(), number());
        var totalCost = 
        (userInput.newCrust +
            userInput.newSize +
            userInput.newToppings +
            userInput.newFlavour) *
            userInput.newQuantity;
            
    })
})