function productHandler(isIncrease, pricing, id) {
    let quantity = document.getElementById(id + 'Quantity').value;
    let quantityNumber = parseInt(quantity);
    if (isIncrease == true) {
        quantityNumber += 1;
    } else if (isIncrease == false && quantityNumber > 0) {
        quantityNumber -= 1;
    }
    document.getElementById(id + 'Quantity').value = quantityNumber;
    let price = pricing * quantityNumber;
    document.getElementById(id + 'Amount').innerText = price;

    const phoneAmount = document.getElementById('mobileAmount').innerText;
    const phoneAmountNumber = parseInt(phoneAmount)
    const caseAmount = document.getElementById('caseAmount').innerText;
    const caseAmountNumber = parseInt(caseAmount)
    const totalAmount = phoneAmountNumber + caseAmountNumber;
    document.getElementById('subTotal').innerText = totalAmount;
    const taxValue = Math.round(totalAmount * 0.1);
    document.getElementById('tax').innerText = taxValue;
    const taxAddedTotal = totalAmount + taxValue;
    document.getElementById('totalAmount').innerText = taxAddedTotal;
}