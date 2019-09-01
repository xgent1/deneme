/* Fonksiyonların birden fazla kullanım şekli vardır. 1. Şekil */
function birinciKullanım() {
    console.log("Birinci Kullanım");
}

birinciKullanım();


/* Genel Kullanım */
function ikinciKullanım() {
    return "İkinci Kullanım"
}

console.log(ikinciKullanım());


/* Parametreli kullanım*/
function ucuncuKullanım(kullanım) {
    console.log(kullanım);
}

ucuncuKullanım("Üçüncü Kullanım");


/* Varsayılan parametreli kullanım */
function dorduncuKullanım(parametre = "Dördüncü Kullanım") {
    console.log(parametre);
}

dorduncuKullanım();


/* Ekleme birleştirme vb.*/
function ekleme(sayi = 3) {
        return sayi + 2;
}

console.log(ekleme());

function adSoyad(ad, soyad) {
    return (ad + " " + soyad)
}

console.log(adSoyad("İhsan", "YALÇIN"));


/* Değişkenli fonksiyon yazma */
var fonksiyonum = function () {
    return 2;
}

/* Eğer burda logun içerisinde fonksiyonum'u "()" siz yazarsak fonksiyonum = function olarak yazdırır.
*  "()" li yazarsak return'daki değeri yazdırır.*/
console.log(fonksiyonum());


