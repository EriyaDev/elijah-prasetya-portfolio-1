let hamburgerIcon = document.getElementById('hamburger');
let navigation = document.querySelector('#navMobile');
let closeIcon = document.querySelector('#close');
let body = document.querySelector('body');

let gambarPorto1 = document.getElementById('porto1');
let gambarPorto2 = document.getElementById('porto2');
let gambarPorto3 = document.getElementById('porto3');

// hamburgerIcon.addEventListener('click', function(){
//     console.log("Halo");
//     navigation.classList.remove("hidden");
//     navigation.classList.add("flex");
// })

function tampilkanNav(){
    console.log('Tampilkan');
    navigation.classList.remove("-translate-x-full");
    navigation.classList.add("-translate-x-0");
    body.classList.add("overflow-hidden")
}

function hilangkanNav(){
    console.log('hilangkan');
    navigation.classList.remove("-translate-x-0");
    navigation.classList.add("-translate-x-full");
    body.classList.remove("overflow-hidden")
}

// Gambar 1
function gantiGambar1(){
    gambarPorto1.setAttribute("src", "image/Project/anime2.png");
}

function kembaliGambar1(){
    gambarPorto1.setAttribute("src", "image/Project/anime1.png");

}

// Gambar 2
function gantiGambar2(){
    gambarPorto2.setAttribute("src", "image/Project/codlin2.png");
}

function kembaliGambar2(){
    gambarPorto2.setAttribute("src", "image/Project/codlin1.png");

}

// Gambar 3
function gantiGambar3(){
    gambarPorto3.setAttribute("src", "image/Project/marsha2.png");
}

function kembaliGambar3(){
    gambarPorto3.setAttribute("src", "image/Project/marsha-1.png");

}



