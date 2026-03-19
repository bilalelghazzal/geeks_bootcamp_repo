// Seleect element From html file ; 
const form = document.getElementById('currency-converter');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const switchBtn = document.querySelector('.switch-btn');
const convertBtn = document.getElementById("convert");



// This function handles the conversion process when the form is submitted
async function convertCurrency(event) {
    event.preventDefault(); 

    const from = fromCurrency.value;      
    const to = toCurrency.value;            
    const amount = parseFloat(amountInput.value); 

    // Validate inputs: check both currency codes and the amount (must be a positive number)
    if (!from || !to || isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = '';
        alert("Please enter valid currency codes and a positive amount.");
        return;
    }
    
    const url = `https://v6.exchangerate-api.com/v6/d003dd09917b87178ceaef66/latest/${from}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();  

        // Check if the conversion rate for the target currency is available
        //data && data.conversion_rates && data.conversion_rates[to]
        if (data?.conversion_rates?.[to]) {
            const rate = data.conversion_rates[to];
            // Calculate the converted amount
            const result = amount * rate;
            resultDiv.innerHTML = `Converted Amount: ${result.toFixed(2)} ${to}`;
        } 
        else {
            resultDiv.innerHTML = '';
            alert('Failed to retrieve exchange rate.');
        }
    } catch (error) {
        resultDiv.innerHTML = '';
        alert('Failed to retrieve exchange rate.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", convertCurrency);

    if (switchBtn) {
        switchBtn.addEventListener("click", function () {
            const temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
        });
    }
});
//