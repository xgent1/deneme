/*

*   && ("Ve" İşlemlerden hepsinin doğru olmasında True yanlış olmasında False Döner.)
*   || ("Veya" İşlemlerin herhangi birisi doğru olduğunda True hepsi yanlış yada hepsi doğru olduğunda False döner.)

* */

var sayi1 = 1,
    sayi2 = 2,
    sayi3 = 3;

var durum = (sayi1 == 1 && sayi2 == 2) || (sayi3 == 4);

console.log(durum);
