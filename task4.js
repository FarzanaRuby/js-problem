// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


// start from here

  const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
      { model: "PhoneB", brand: "Samsung", price: 40000 },
     { model: "PhoneC", brand: "Oppo", price: 26000 },
     { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
      { model: "PhoneF", brand: "HTC", price: 48000 },
   ];


function findAveragePhonePrice(phones){
    let sum = 0;
    // let avg=0;
    for(let phone of phones){
        sum= sum+phone.price;
        avg = sum/6;
    }
   
    return avg;
}

let price = findAveragePhonePrice(phones)
console.log(price)