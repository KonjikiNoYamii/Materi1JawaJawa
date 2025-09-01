//let istriPertama = "Yami";
//document.getElementById('tag1').innerHTML = istriPertama
//console.log(istriPertama);

//let jumlahIstri = 6
//let tampilkan = document.getElementById('tag1');
//tampilkan.innerHTML = console.assert(jumlahIstri <= 4 ,"Anda menyalahi aturan agama");
//console.log(tampilkan.innerHTML);

//let userName = prompt("debug:testing user input - enter name:");
//let textElement = document.getElementById('tag2');
//confirm("is this your name: " + userName + '?');
//console.log("user confirmed name is " + userName);
//textElement.innerHTML = "assalamualaikum" + userName;

let umur = 15
let tampilkan = document.getElementById('tag1')

if (umur <= 18) {
    alert("anda belum cukup umur");
    tampilkan.innerHTML = "anda belum cukup umur"
}
else {
    tampilkan.innerHTML = "anda sudah cukup umur"
}

