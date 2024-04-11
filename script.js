const runner=document.getElementById("delivery-runner");
const runnerDetails=document.getElementsByClassName("delivery-runner-details")[0];
const self=document.getElementById("self-collect");
const selfDetails=document.getElementsByClassName("delivery-self-details")[0];


/*If #delivery-runner is checked:
location-type and datetime become required.
message becomes required if #custom is checked.
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
        var locationType = document.querySelectorAll("input[name='location-type']");
        locationType.forEach(function(input) {
            input.required = true;
        });
    
    } else if (self.checked) {
        datetimeRunner.required = false;
        datetimeSelf.required = true;
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