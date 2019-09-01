/*
*   == (Eşit ise)
*   === (Veri türü dahil eşit ise)
*   != (Eşit değil ise)
*   !== (Veri türü dahil eşit değil ise)
*   > (Büyüktür)
*   < (Küçüktür)
*   >= (Büyük eşittir)
*   <= (Küçük eşittir)
* */

/* Yazdırırken "==" de int (Tırnaksız) olarak yazdığında da doğru çıkar. String "tırnaklı" olarakta yazdığımzda doğru çıkar*/
var sayi = 2;

console.log(sayi == 2);



/* "===" Veri türü dahil eşit ise olduğu için değerdeki ile yazdırdığımız sayı aynı olması lazım (int-int, string-string) yoksa yanlış çıkar */
var sayi2= 3;

console.log(sayi2 === "3");


/* Eşit değilse */
var sayi3 = 3;

console.log(sayi3 != 2);


/* Veri türü dahil eşit değilse*/
var sayi4 = 4;

console.log(sayi4 !== "4");


/* Sayi5 büyükse */
var sayi5 = 5;

console.log(sayi5 > 4);


/* Sayi6 küçükse */
var sayi6 = 6;

console.log(sayi6 < 5);


/* Sayi7 yazdırdığımız sayıdan büyük veya eşitse */
var sayi7 = 7;

console.log(sayi7 >= 8);
console.log(sayi7 >= 7);


/* Sayi8 yazdırdığımız sayıdan büyükse veya eşitse */
var sayi8 = 8;

console.log(sayi8 = 9);
console.log(sayi8 = 8);