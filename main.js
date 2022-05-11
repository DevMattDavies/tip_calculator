const tipButtons = document.querySelectorAll('#percent');
const billSubtotal = document.querySelector('#bill-input');
const totalPeople = document.querySelector('#people-input');
const totalTip = document.querySelector('#tip-per-person');
const totalPerPerson = document.querySelector('#share-per-person');

for (i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener("click", function (e) {
        // Function to calculate total tip and add to relevant box
        let tipPercent = e.target.value;
        let numberOfPeople = Math.round(totalPeople.value * 1e2) / 1e2;
        let bill = Math.round(billSubtotal.value * 1e2) / 1e2;
        let tipAmount = bill * ((tipPercent / 100) / numberOfPeople);
        let tip = Math.round(tipAmount * 1e2) / 1e2;
        totalTip.innerText = "$" + tip.toFixed(2);

        // Function to split tip between people

        let totalAmountPerPerson = (bill / numberOfPeople) + tip;
        totalAmountPerPerson = Math.round(totalAmountPerPerson * 1e2) / 1e2;
        totalPerPerson.innerText = "$" + totalAmountPerPerson.toFixed(2);
    });
}