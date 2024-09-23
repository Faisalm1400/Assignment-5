// Donate card 1

document.getElementById('btn-donate-1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donateMoney = getInputFieldValueById('input-donate-1');
        const balance = getTextFieldValueById('account-balance');
        const donateBalance = getTextFieldValueById('donate-balance-1');

        if (isNaN(donateMoney)) {
            alert('Failed to donate');
            return;
        }
        if (donateMoney > balance) {
            alert('You do not have enough money.');
            return;
        }
        if (donateMoney > 0) {
            const newBalance = balance - donateMoney;
            const newDonateBalance = donateMoney + donateBalance;

            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('donate-balance-1').innerText = newDonateBalance;
        }
        else{
            alert('Failed to donated money. Please try again.')
        }

    })


// Donate card 2

document.getElementById('btn-donate-2')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donateMoney = getInputFieldValueById('input-donate-2');
        const balance = getTextFieldValueById('account-balance');
        const donateBalance = getTextFieldValueById('donate-balance-2');

        if (isNaN(donateMoney)) {
            alert('Failed to donate');
            return;
        }
        if (donateMoney > balance) {
            alert('You do not have enough money.');
            return;
        }
        if (donateMoney > 0) {
            const newBalance = balance - donateMoney;
            const newDonateBalance = donateMoney + donateBalance;

            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('donate-balance-2').innerText = newDonateBalance;
        }
        else{
            alert('Failed to donated money. Please try again.')
        }

    })
// Donate card 3

document.getElementById('btn-donate-3')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donateMoney = getInputFieldValueById('input-donate-3');
        const balance = getTextFieldValueById('account-balance');
        const donateBalance = getTextFieldValueById('donate-balance-3');

        if (isNaN(donateMoney)) {
            alert('Failed to donate');
            return;
        }
        if (donateMoney > balance) {
            alert('You do not have enough money.');
            return;
        }
        if (donateMoney > 0) {
            const newBalance = balance - donateMoney;
            const newDonateBalance = donateMoney + donateBalance;

            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('donate-balance-3').innerText = newDonateBalance;
        }
        else{
            alert('Failed to donated money. Please try again.')
        }

    })