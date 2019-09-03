// do while for loops //

let counter = 1
do {
  console.log(`Kurcaci ke ${counter} sedang berjalan menuju kebun`)
  counter++
} while(counter <= 7)

//while loops
while(counter < 6) {
  console.log(number)
  number++
}

//for loops
for(let i=number; i<6; i++) {
  console.log(i)
}


// faktorijal

let number = 5;
let total = 1;

for (i = 0; i < number; i++){
    total = total * (number - i);
}

console.log(number + '! = ' + total);

//reverse

let input = "ridho";
let balik = "";

for(let i = input.length-1; i>=0; i--){
  balik += input[i];
}
console.log(balik);


