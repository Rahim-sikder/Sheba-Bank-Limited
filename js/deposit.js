
document.getElementById('btn-deposit').addEventListener('click',function(){
   // step2: Get the deposit amount from the deposite input field
   // for input field use .value to the value inside the input field 
   const depositFiled = document.getElementById('deposit-field');
   const newDepositAmountString = depositFiled.value;
   const newDepositAmount = parseFloat(newDepositAmountString);

   // step3: get the current deposit total
  //for non input (element other than input , textarea) use innertext to get the text 
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositeTotalString = depositTotalElement.innerText;
   const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    
   // step4: Add numbers to set the total deposit
   const currentDepositTotal = previousDepositeTotal + newDepositAmount;
            //  set the deposite total
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat (previousBalanceTotalString);

    const currentBalanceTotal = newDepositAmount + previousBalanceTotal ;
    balanceTotalElement.innerText = currentBalanceTotal;
     
     

   // step7: clear the input field 
      depositFiled.value='';
      
   });

