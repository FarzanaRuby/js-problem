// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const numbers = [167, 190, 120, 165, 137];
function lowestNumber(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

console.log(lowestNumber(numbers));



