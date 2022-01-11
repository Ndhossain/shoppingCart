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
    let phoneAmountNumber = parseInt(phoneAmount)
    const caseAmount = document.getElementById('caseAmount').innerText;
    let caseAmountNumber = parseInt(caseAmount)
    let totalAmount = phoneAmountNumber + caseAmountNumber;
    document.getElementById('subTotal').innerText = totalAmount;
    document.getElementById('totalAmount').innerText = totalAmount;
}