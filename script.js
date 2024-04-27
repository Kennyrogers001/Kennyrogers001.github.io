const runner=document.getElementById("delivery-runner");
const runnerDetails=document.getElementsByClassName("delivery-runner-details")[0];
const self=document.getElementById("self-collect");
const selfDetails=document.getElementsByClassName("delivery-self-details")[0];
var originalInput = document.getElementById("original");
var cheeseInput = document.getElementById("cheese");
var carbonaraInput = document.getElementById("carbonara");
var totalSpan = document.getElementById("total");

 // Calculate the total price function
 function calculateTotal() {
    // Get the quantity entered for each item
    var originalQty = originalInput.value ? parseInt(originalInput.value) : 0;
    var cheeseQty = cheeseInput.value ? parseInt(cheeseInput.value) : 0;
    var carbonaraQty = carbonaraInput.value ? parseInt(carbonaraInput.value) : 0;

    // Define the prices for each item
    var originalPrice = 6.00; // Assuming price for each original item is $5.00
    var cheesePrice = 6.00; // Assuming price for each cheese item is $5.60
    var carbonaraPrice = 7.00; // Assuming price for each carbonara item is $5.60

    // Calculate the total price
    var totalPrice = (originalQty * originalPrice) + (cheeseQty * cheesePrice) + (carbonaraQty * carbonaraPrice);
        
    // Update the total price displayed
    if (totalPrice <= 0) {
        originalInput.required = true;
    } else {
        originalInput.required = false;
    }
    
    // Update the total price displayed
    totalSpan.textContent = "RM " + totalPrice.toFixed(2);
}
/*If #delivery-runner is checked:
location-type and datetime become required.
customLocation is required if runner.checked
If #self-collect is checked:
datetime becomes required.*/
function requiredRadio() {
    var datetimeRunner = document.getElementById("datetime-runner");
    var datetimeSelf = document.getElementById("datetime-self");
    var customRadio = document.getElementById("custom");
    var messageInput = document.getElementById("message");
    var customLocation = document.getElementById("custom-location");

    if (runner.checked) {
        datetimeRunner.required = true;
        datetimeSelf.required = false;
        customLocation.required = true;
        var locationType = document.querySelectorAll("input[name='location-type']");
        locationType.forEach(function(input) {
            input.required = true;
        });
    
    } else if (self.checked) {
        datetimeRunner.required = false;
        datetimeSelf.required = true;
        customLocation.required = false;
        var locationType = document.querySelectorAll("input[name='location-type']");
        locationType.forEach(function(input) {
            input.required = false;
        });
    }
}

function deliveryDetails(){
    if(runner.checked){
        if (runnerDetails && runnerDetails.style) { // Check if runnerDetails exists and has a style property
            runnerDetails.style.display = "block";
          }
        } else {
          runnerDetails.style.display = "none";
        }
        selfDetails.style.display = self.checked ? "block" : "none";
    }   
    if (self.checked) {
        runnerDetails.style.display="none";
        selfDetails.style.display="block";
 
    } else {
        runnerDetails.style.display="none";
        selfDetails.style.display="none";
 
    }

runner.addEventListener("click",function() {
    deliveryDetails();
    requiredRadio();
});
self.addEventListener("click",function() {
    deliveryDetails();
    requiredRadio();
});
    // Call the calculateTotal function whenever any input changes
originalInput.addEventListener("input", calculateTotal);
cheeseInput.addEventListener("input", calculateTotal);
carbonaraInput.addEventListener("input", calculateTotal);

calculateTotal();