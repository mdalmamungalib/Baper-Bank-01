document.getElementById("btn-withdraw").addEventListener("click", function(){
    // console.log("withdraw added");

    const withdrawField = document.getElementById("wthdraw-field");
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(newWithDrawAmount);

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const privousWithdrawTotalSting = withdrawTotalElement.innerText;
    const privousWithdrawTotal = parseFloat(privousWithdrawTotalSting);
    // console.log(privousWithdrawTotal);

    const currentWithdrawTotal = privousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalEliment = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalEliment.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalEliment.innerText = newBalanceTotal;



withdrawField.value = "";
});