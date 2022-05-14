const tipButtons = document.querySelectorAll('#percent');
const customTip = document.querySelector('#custom-btn')
const billSubtotal = document.querySelector('#bill-input');
const totalPeople = document.querySelector('#people-input');
const totalTip = document.querySelector('#tip-per-person');
const totalPerPerson = document.querySelector('#share-per-person');

// Event listener to calculate tip and total bill on tip button press
for (i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener("click", function (e) {
        // Error states if any values are nil
        if (billSubtotal.value == 0) {
            billZeroErrorAdd();
        }
        if (totalPeople.value == 0) {
            peopleZeroErrorAdd();
        }

        // Values returned if both bill and people values are inputted
        if (totalPeople.value > 0 && billSubtotal.value > 0) {

            // Calculate total tip and add to relevant box
            let tipPercent = e.target.value;
            let numberOfPeople = Math.round(totalPeople.value * 1e2) / 1e2;
            let bill = Math.round(billSubtotal.value * 1e2) / 1e2;
            let tipAmount = bill * ((tipPercent / 100) / numberOfPeople);
            let tip = Math.round(tipAmount * 1e2) / 1e2;
            totalTip.innerText = "$" + tip.toFixed(2);

            // Split tip and between people
            let totalAmountPerPerson = (bill / numberOfPeople) + tip;
            totalAmountPerPerson = Math.round(totalAmountPerPerson * 1e2) / 1e2;
            totalPerPerson.innerText = "$" + totalAmountPerPerson.toFixed(2);

        }
    });
}

// Event listener to calculate tip and total bill when using custom tip objectPosition: 
customTip.addEventListener("keyup", function (e) {
    // Error states if any values are nil
    if (billSubtotal.value == 0) {
        billZeroErrorAdd();
    }
    if (totalPeople.value == 0) {
        peopleZeroErrorAdd();
    }
    // Values returned if both bill and people values are inputted
    if (totalPeople.value > 0 && billSubtotal.value > 0) {
        let tipPercent = e.target.value;
        let numberOfPeople = Math.round(totalPeople.value * 1e2) / 1e2;
        let bill = Math.round(billSubtotal.value * 1e2) / 1e2;
        let tipAmount = bill * ((tipPercent / 100) / numberOfPeople);
        let tip = Math.round(tipAmount * 1e2) / 1e2;
        totalTip.innerText = "$" + tip.toFixed(2);

        // Split tip and between people
        let totalAmountPerPerson = (bill / numberOfPeople) + tip;
        totalAmountPerPerson = Math.round(totalAmountPerPerson * 1e2) / 1e2;
        totalPerPerson.innerText = "$" + totalAmountPerPerson.toFixed(2);
    }
})

// Functions to add error classes to inputs if value is 0
function billZeroErrorAdd() {
    billSubtotal.classList.add('zero-error-box');
    document.querySelector('.zero-error-bill-text').classList.remove('hidden');
}

function peopleZeroErrorAdd() {
    totalPeople.classList.add('zero-error-box');
    document.querySelector('.zero-error-people-text').classList.remove('hidden');

}

// Remove error classes if value is passed into input fields
document.querySelector('#bill-input').addEventListener("keyup", function () {
    if (this.value > 0) {
        billSubtotal.classList.remove('zero-error-box');
        document.querySelector('.zero-error-bill-text').classList.add('hidden');
    }
});

document.querySelector('#people-input').addEventListener("keyup", function () {
    if (this.value > 0) {
        totalPeople.classList.remove('zero-error-box');
        document.querySelector('.zero-error-people-text').classList.add('hidden');
    }
});

// Event listener to reset all values to 0

document.querySelector('#reset-btn').addEventListener("click", function () {
    billSubtotal.value = null;
    customTip.value = null;
    totalPeople.value = null;
    totalTip.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
})