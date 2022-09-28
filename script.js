
    
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
   var numspeople=document.getElementById("people").value;
  
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    
  
  
    var total = (billAmt * serviceQual)/numspeople;

    total = Math.round(total * 100) / 100;
   
    total = total.toFixed(2);
   
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = "Calculated Tip : ₹" + total;
  
  }
  
  
  document.getElementById("totalTip").style.display = "none";
  
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
    