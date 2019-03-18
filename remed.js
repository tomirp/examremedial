// A. Menentukan Array untuk masukan angka
arrKu = []

do{
    var input = parseInt(prompt("Masukkan Angka: "))
    if(!isNaN(input)){
        arrKu[arrKu.length] = input
    } else {
        break
    }
} while(true) 

console.log(arrKu);
    // Sort angka dari terkecil ke tertinggi

    var ArrSort = arrKu.sort((a,b)=>{
    return a-b})

console.log(ArrSort);


// B. Menentukan nilai min dan nilai max
var numMin
var numMax

for(i=0; i< arrKu.length; i++){
    if (arrKu[i] < numMin || numMin == undefined) {
        numMin = arrKu[i]
    }
}

console.log("Nilai terendah: "+ numMin)

for (i=0; i < arrKu.length; i++){
    if (arrKu[i]> numMax || numMax == undefined) {
        numMax = arrKu[i]
    }
}

console.log ("Nilai tertinggi: "+numMax)

// C. Menentukan angka ganjil

var ganjil = []
var genap = []

for (i=0; i < arrKu.length; i++){
    if(arrKu[i] % 2 == 0) {
        genap.push(arrKu[i])
    }
}
console.log(genap)

for (i=0; i < arrKu.length; i++) {
    if(arrKu[i] % 2 !== 0) {
        ganjil.push(arrKu[i])
    }
}
console.log(ganjil)

//D. menentukan rata - rata dan jumlah
    //rata -rata genap
var sum = genap.reduce((previous, current)=> current =+previous)
var avg = sum / genap.length
    //rata - rata ganjil
var sumJil = ganjil.reduce((previous, current)=> current =+previous)
var avgJil = sumJil / ganjil.length
console.log("Rata - rata angka Ganjil : "+avgJil+" , dan rata-rata angka Genap : " + avg);

    //jumlah ganjil dan genap 
console.log("Jumlah dari angka ganjil: "+ ganjil.length+" , dan jumlah dari angka genap: "+genap.length)