const urlParams = new URLSearchParams(window.location.search);
const receivedRate=urlParams.get("rate");
const rateElement=document.getElementById('rate');
rateElement.textContent=receivedRate;
