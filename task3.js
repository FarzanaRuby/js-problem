// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.



function calculateElectronicsBudget(leptop,tablet,mobile){
    let  laptoPrice = 35000 ;
   let tabletPrice = 15000 ;
   let  mobilePrice = 20000 ;


    let laptopquantity = leptop*laptoPrice;
    let tabletquantity = tablet*tabletPrice;
   let mobilequantity=mobilePrice*mobile;

   let totalCost= laptopquantity+tabletquantity+mobilequantity;
   return totalCost;


}

let price = calculateElectronicsBudget(1,11,2);
console.log(price)
