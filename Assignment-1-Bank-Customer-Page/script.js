const Welcome=document.getElementById('wel');

Welcome.addEventListener('mouseover',() => {
  alert("WELCOME to XYZ BANK");
});

function hide(){
  document.getElementById('instructions').style.display = "none";
}

function showPopup(message){
  document.getElementById("popMessage").textContent=message;
  document.getElementById("popup").style.display="block";
}
function closePopup(){
  document.getElementById("popup").style.display="none";
}

function validateCustomer(){
  let Id=document.getElementById("custID").value;
  if(Id.includes("XYZ")){
    showPopup("Customer Id is Valid");
  }
  else if(Id==""){
    showPopup("Custome Id cannot be Blank");
  }
  else{
    showPopup("Customer Id is Invalid");
  }
}
function generateCoupon(){
  let Id=document.getElementById("custID").value;
  if(Id == ""){
    showPopup("Enter Customer ID first");
  }
  else if(!Id.includes("XYZ")){
    showPopup("Invalid Customer");
  }
  else{
    let coupon = Id + "DIWALI50";
    showPopup("Your Coupon Code is: " + coupon);
  }
}