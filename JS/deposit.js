document.getElementById("btn-deposit").addEventListener("click", function() {
    // console.log("onclick added");

    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDipositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(depositTotal);
    const currentDepositTotal = previousDepositTotal + newDipositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalElementEstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementEstring);

    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




    depositField.value = "";
});