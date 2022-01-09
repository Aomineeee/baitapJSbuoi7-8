// array=[-5,-2,-1,0,1,2,5,7]

var songuyenEl = document.getElementById("songuyen")
var songuyen1El = document.getElementById("songuyen1")
var songuyen2El = document.getElementById("songuyen2")
var numArr = []
function ketQua(tongSoDuong, countSoDuong, soAmNhoNhat, soDuongNhoNhat, soChanCuoiCung, hoanDoiHaiSoNguyen, soNguyenToDauTien, sapXepSoNguyen) {
    document.getElementById("result1").innerText = tongSoDuong;
    document.getElementById("result2").innerText = countSoDuong;
    document.getElementById("result3").innerText = soAmNhoNhat;
    document.getElementById("result4").innerText = soDuongNhoNhat;
    document.getElementById("result5").innerText = soChanCuoiCung;
    document.getElementById("result6").innerText = hoanDoiHaiSoNguyen;
    document.getElementById("result7").innerText = soNguyenToDauTien;
    document.getElementById("result8").innerText = sapXepSoNguyen;
}


function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
    return num > 1;
}
function themso() {
    var value = songuyenEl.value.trim() * 1;
    var a = songuyen1El.value.trim() * 1;
    var b = songuyen2El.value.trim() * 1;
    if (value)
        numArr.push(value);
    var tongSoDuong = 0;
    var countSoDuong = 0
    var soAmNhoNhat = 0;
    var soDuongNhoNhat;
    var soChanCuoiCung;
    var indexSochan;
    var hoanDoiHaiSoNguyen;
    var soNguyenToDauTien;

    songuyenEl.value = "";
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            indexSochan = i;
            soChanCuoiCung = numArr[i]
            break;
        }
    }
    for (i = 0; i < numArr.length; i++) {
        if (0 < numArr[i]) {
            soDuongNhoNhat = numArr[i];
            break;
        }
    }
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            tongSoDuong += numArr[i];
        }
        if (numArr[i] > 0) {
            countSoDuong++
        }
        if (soAmNhoNhat > numArr[i]) {
            soAmNhoNhat = numArr[i]
        }
        if (0 < numArr[i] && soDuongNhoNhat > numArr[i]) {
            soDuongNhoNhat = numArr[i];
        }
        if (numArr[i] % 2 == 0 && i >= indexSochan) {
            soChanCuoiCung = numArr[i];
        }
        else {
            soChanCuoiCung = -1;
        }
    }
    for (i = 0; i < numArr.length; i++) {
        var soNguyenTo = isPrime(numArr[i])
        if (soNguyenTo) {
            soNguyenToDauTien = numArr[i];
            break;
        }
    }
    if (a <= numArr.length && b <= numArr.length) {
        var temp = numArr[a];
        numArr[a] = numArr[b];
        numArr[b] = temp;
        hoanDoiHaiSoNguyen = numArr;
    }
    var numbers = numArr;
    numbers = numbers.sort(function(a,b){
        return a-b;
    });
    var sapXepSoNguyen = numbers
    



    ketQua(tongSoDuong, countSoDuong, soAmNhoNhat, soDuongNhoNhat, soChanCuoiCung, hoanDoiHaiSoNguyen, soNguyenToDauTien, sapXepSoNguyen);
}