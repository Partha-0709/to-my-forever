const startDate = new Date("2026-02-22");
const weddingDate = new Date("2027-01-20");
const today = new Date();

const diffDays = Math.floor((today - startDate)/(1000*60*60*24));
document.getElementById("daysCounter").innerText = diffDays + " days";

const weddingDiff = Math.ceil((weddingDate - today)/(1000*60*60*24));
document.getElementById("weddingCounter").innerText =
weddingDiff > 0 ? weddingDiff + " days to forever" : "We're Married! ❤️";

function showSecret(){
document.getElementById("secret").innerText =
"You are the best thing that has ever happened to me. I love you endlessly, Sowndarya ❤️";
}
