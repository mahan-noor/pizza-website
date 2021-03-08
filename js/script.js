$(document).ready(function() {
    //form function to submit the users input, calculate total for the order
    $("#text-center").submit(function(event) {
        //function to get users input from the forms
        function flavour() {
            var pizzaFlavour = document.getElementById("flavour").value;
            return parseInt(pizzaFlavour);

        }
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);

        }
        function crust(){
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);

        }
        function toppings(){
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);

        }
        function number(){
            var pizzaNumber = document.getElementById("quantity").value;
            return parseInt(pizzaNumber);

        }
        //a constructor to create objects/instances of user's orders
        function order(flavour, size, crust, toppings, quantity) {
            this.newFlavour = flavour;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = quantity;
        }

        //an object/instance (of the above constructor) to save users order
        var userInput = new Order (flavour(), size(), crust(), toppings(), number());

        //a variable to store the total expenditure of the user
        var totalCost = 
        (userInput.newCrust +
            userInput.newSize +
            userInput.newToppings +
            userInput.newFlavour) *
            userInput.newQuantity;

          //  $("#text-center").reset();
          //  event.preventDefault();
        });
    });
            
    //delivery input form 


    $(document).ready(function() {
        $("#delivery").submit(function () {

            var name = $("input#name").val();
            var number = $("input#number").val();
            var region = $("input#region").val();

            alert("hello" + name + ".your order has been successfully received and will be delivered to you " + "within an hour.the delivery cost will be 200/= Thank you for choosing Rocket pizza." );
            //$(this).get(0).reset()
            // event.preventDefault()
        });
    });

