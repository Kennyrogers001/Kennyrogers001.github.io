
const runner=document.getElementById("delivery-runner");
const runnerDetails=document.getElementsByClassName("delivery-runner-details")[0];
const self=document.getElementById("self-collect");
const selfDetails=document.getElementsByClassName("delivery-self-details")[0];

function deliveryDetails(){
    if(runner.checked){
        if (runnerDetails && runnerDetails.style) { // Check if runnerDetails exists and has a style property
            runnerDetails.style.display = "block";
          }
        } else {
          runnerDetails.style.display = "none";
        }
        selfDetails.style.display = self.checked ? "block" : "none";
        console.log("delivery on the way");
    }
    if (self.checked) {
        runnerDetails.style.display="none";
        selfDetails.style.display="block";
        console.log("delivery on the way");
 
    } else {
        runnerDetails.style.display="none";
        selfDetails.style.display="none";
        console.log("delivery on the way");
 
    }
runner.addEventListener("click",deliveryDetails);
self.addEventListener("click",deliveryDetails);
