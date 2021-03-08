$(document).ready(function() {
    //form function to submit the users input, calculate total for the order, and prompt the user for some details
      $("#text-center").submit(function(event) {
        //functions to get user input from the forms
        function flavor() {
          var pizzaFlavour = document.getElementById("flavor").value;
          return parseInt(pizzaFlavour);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
        }
    
        //a constructor to create objects/instances of a user's orders
        function Order(flavor, size, crust, topping, quantity) {
          this.newFlavor = flavor;
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
        }
    
        //an object/instance (of the above constructor) to save the users order
        var userInput = new Order(flavor(), size(), crust(), topping(), number());
    
        //a variable to store the total expenditure of the user
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping +
            userInput.newFlavor) *
          userInput.newQuantity;
    

            //prompt for the user
            alert("your charges for the pizza" + totalCost);
        
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

