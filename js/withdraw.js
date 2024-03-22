// 1.add eventhandler with the withdraw button.
// 2.get the withdraw amount from the withdraw amount field.
// 2.5. Also make sure to convert the input into a number by using parseFloat.
// 3. get previous withdraw total
// 4.calculate total withdraw
// 5.get the previous balance total
// 6.calculate new balance total
// 7.clear the input value



// step1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
   // step 2:
   const withdrawField =document.getElementById('withdraw-field');
   const newWithdrawAmountString =withdrawField.value;
   const newWithdrawAmount =parseFloat(newWithdrawAmountString);
   
   // step 3:
     const withdrawTotalElement = document.getElementById('withdraw-total');
     const previousWithdrawTotalString =withdrawTotalElement.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   // step4:
     const currentWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;
   //   step5:
   
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal =parseFloat (previousBalanceTotalString);

   // step 6:
   const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText= newBlanceTotal;

  


//   step7:
   withdrawField.value='';

})