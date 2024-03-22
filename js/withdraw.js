// 1.add eventhandler with the withdraw button.
// 2.get the withdraw amount from the withdraw amount field

// step1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField =document.getElementById('withdraw-field');
   const newWithdrawAmountString =withdrawField.value;
   const newWithdrawAmount =parseFloat(newWithdrawAmountString);

   withdrawField.value='';

})