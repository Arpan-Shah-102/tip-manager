let fifteenTip = document.querySelector('#fifteen');
let twentyTip = document.querySelector('#twenty');
let twentyFiveTip = document.querySelector('#twenty-five');
let customTip = document.querySelector('.custom-tip');
let noTip = document.querySelector('.no-tip');

let totalBillHeading = document.querySelector('.total');
let fifteenTipTotal = document.querySelector('.fifteen');
let twentyTipTotal = document.querySelector('.twenty');
let twentyFiveTipTotal = document.querySelector('.twenty-five');

let askTip = prompt("Enter your total bill: ");
askTip = parseFloat(askTip);
if (askTip === null || isNaN(askTip) || askTip <= 0) {
  alert("Please enter a valid number for the total bill.");
  askTip = 0; // Default to 0 if invalid input
}
// let askTip = 276.33; // Example value for testing

totalBillHeading.textContent = `$${formatMoney(askTip)}`;
fifteenTipTotal.textContent = `$${formatMoney(askTip * 0.15)}`;
twentyTipTotal.textContent = `$${formatMoney(askTip * 0.20)}`;
twentyFiveTipTotal.textContent = `$${formatMoney(askTip * 0.25)}`;

fifteenTip.addEventListener('click', () => {
  totalBillHeading.textContent = `Total Bill: $${formatMoney(askTip + (askTip * 0.15))}`;
  alert("Thank you for tipping 15%, total bill updated.");
  hideStuff();
});
twentyTip.addEventListener('click', () => {
  totalBillHeading.textContent = `Total Bill: $${formatMoney(askTip + (askTip * 0.20))}`;
  alert("Thank you for tipping 20%! Total bill updated.");
  hideStuff();
});
twentyFiveTip.addEventListener('click', () => {
  totalBillHeading.textContent = `Total Bill: $${formatMoney(askTip + (askTip * 0.25))}`;
  alert("Thank you for tipping 25%!! Total bill has been updated!");
  hideStuff();
});

customTip.addEventListener('click', () => {
  let customTipValue = prompt("Enter your custom tip percentage (e.g., 18 for 18%):");
  if (customTipValue !== null && !isNaN(customTipValue)) {
    customTipValue = parseFloat(customTipValue) / 100;
    totalBillHeading.textContent = `Total Bill: $${formatMoney(askTip + (askTip * customTipValue))}`;
    alert(`Thank you for tipping ${customTipValue * 100}%, total bill updated.`);
    hideStuff();
  }
});
noTip.addEventListener('click', () => {
  totalBillHeading.textContent = `Total Bill: $${formatMoney(askTip)}`;
  alert("No tip selected, total bill remains the same.");
  hideStuff();
});

function hideStuff() {
  document.querySelectorAll('h2').forEach(h2 => {
    h2.style.display = 'none';
  });
  document.querySelector('.tip-presets').style.display = 'none';
  customTip.style.display = 'none';
  noTip.style.display = 'none';
}
function formatMoney(value) {
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}