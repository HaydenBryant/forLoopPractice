const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

//#1
//for
ascii = [];

for (var i = 0; i < numbers.length; i++){
    ascii.push(String.fromCharCode(numbers[i]));
}

//forEach
numbers.forEach((number) => {
    console.log(String.fromCharCode(number));
})

//map
numbers.map((number) => {
    return(String.fromCharCode(number));
})


//#2
numbers.filter(number => number > 72 && number <= 88)


//#3
numbers.reduce(
    ( accumulator, currentValue ) => accumulator * currentValue,
  );


// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
// Using the forEach method:
// Using the map method:

// String.fromCharCode

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

// 3. Display the product of all numbers using reduce
// Answer: