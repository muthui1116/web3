import { web3_backend} from "../../declarations/web3_backend";
window.addEventListener("load", async function() {
  const currentAmount = await web3_backend.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();
  // console.log('submitted');
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  const button = event.target.querySelector("#submit-btn");
  
  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await web3_backend.topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
  await web3_backend.withdraw(outputAmount);
  } 

  const currentAmount = await web3_backend.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

