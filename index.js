



function conv(){
    const from= document.getElementById("from").value;
const to= document.getElementById("to").value;
const amount= document.getElementById("amount").value;
const result= document.getElementById("result")
   fetch(`https://v6.exchangerate-api.com/v6/9f6585a8f497cff72c1e64a9/latest/${from}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const conversionAmount= data.conversion_rates[to]*amount;
    document.getElementById("result").innerHTML= amount + from + "=" + conversionAmount + to;
  });

 
}