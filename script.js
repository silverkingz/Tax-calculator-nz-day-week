function calculatePay() {
    // Get input values
    const hours = parseFloat(document.getElementById('hours').value);
    const wage = parseFloat(document.getElementById('wage').value);
    
    if (isNaN(hours) || isNaN(wage)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate gross pay
    const grossPay = hours * wage;
    
    // Calculate annual income for tax brackets
    const annualIncome = grossPay * 52;
    
    // Calculate tax based on NZ tax brackets
    let tax = 0;
    if (annualIncome > 180000) {
        tax += (annualIncome - 180000) * 0.39;
        tax += (180000 - 70000) * 0.33;
        tax += (70000 - 48000) * 0.3;
        tax += (48000 - 14000) * 0.175;
        tax += 14000 * 0.105;
    } else if (annualIncome > 70000) {
        tax += (annualIncome - 70000) * 0.33;
        tax += (70000 - 48000) * 0.3;
        tax += (48000 - 14000) * 0.175;
        tax += 14000 * 0.105;
    } else if (annualIncome > 48000) {
        tax += (annualIncome - 48000) * 0.3;
        tax += (48000 - 14000) * 0.175;
        tax += 14000 * 0.105;
    } else if (annualIncome > 14000) {
        tax += (annualIncome - 14000) * 0.175;
        tax += 14000 * 0.105;
    } else {
        tax += annualIncome * 0.105;
    }

    // Calculate weekly deductions
    const weeklyTax = tax / 52;
    const kiwiSaver = grossPay * 0.03;
    const netPay = grossPay - weeklyTax - kiwiSaver;

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Gross Pay: $${grossPay.toFixed(2)}</p>
        <p>Tax Deducted: $${weeklyTax.toFixed(2)}</p>
        <p>KiwiSaver (3%): $${kiwiSaver.toFixed(2)}</p>
        <p class="highlight">Cash in Hand: $${netPay.toFixed(2)}</p>
    `;
}
