// CONDITIONAL

const x = 5;
const y = 11; 

if (x === 10) {
    console.log('x is 10')
} else if (x > 10)  {
    console.log('x is larger than 10')
}
else {
    console.log('x is less 10')
}

// note:
/**
 * double equal (==) not matching the data type
 * misal, jika yang dibandingkan 10 dengan tipe number
 * dan 10 dengan tipe string maka hasilnya akan tetap TRUE
 * karena double equal (==) tidak membandingkan tipe datanya
 * melainkan hanya nilainya.
 * 
 * third equal (===) membandingkan value dan tipe datanya
 * misal, jika dibandingkan 10 dengan tipe number
 * dan 10 dengan tipe string maka hasilnya akan FALSE
 * karena value dan tipe data dari variabel nya ikut dibandingin
 **/

 // multiple condition
 if (x > 5 || y > 10){
     console.log('x is more than 5 or y is more than 10');
 }

 // ternary operator
 const xi = 11;

 const color =  xi > 10 ? 'red' : 'blue';

 console.log(color);

 switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
 }