const bill = document.getElementById('bill');
const tipCustom = document.getElementById('tip');
const people = document.getElementById('no-of-people');

bill.addEventListener('input', setBillValue);
people.addEventListener('input', setPeopleValue);
tipCustom.addEventListener(`change`,tipFunction);

var billValue;
var tipValue;
var peopleValue;

function setBillValue() {
  billValue = parseFloat(bill.value);
  calculateTip();
}

function setPeopleValue() {
  peopleValue = parseFloat(people.value);
  calculateTip();
}

function tipFunction() {
  tipValue = (this.value)/100;
  // document.getElementById('tip-per-person').innerText = tipValue;
}

function calculateTip() {
  let tipAmount = ((billValue * tipValue) / peopleValue);
            let total = (billValue/ peopleValue)+ tipAmount;
            document.getElementById("tip-per-person").innerHTML = tipAmount.toFixed(2);
            document.getElementById("total-per-person").innerHTML = total.toFixed(2);
}