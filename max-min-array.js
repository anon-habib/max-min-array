const numbers = [57, 415, 67, 80, 54, 44, 745, 12, 4]

// find the max number in an array
function maxNumber(inputArray){
    let maxNumber = inputArray[0];
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] > maxNumber){
            maxNumber = inputArray[i];
        }
    } return maxNumber;
}
console.log(maxNumber(numbers));

// find the min number in an array
function minNumber (inputArray){
    let minNumber = inputArray[0]
    for (let j = 0; j < inputArray.length; j++){
        if (inputArray[j] < minNumber){
            minNumber = inputArray[j]
        }
    } return minNumber;
}

console.log(minNumber(numbers))