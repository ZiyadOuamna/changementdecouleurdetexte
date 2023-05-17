
/*let td2 = document.querySelector('.td2');
let td1 = document.querySelector('.td1');
let td3 = document.querySelector('.td3');



td1.addEventListener('click', function() {
  let couleurFond = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
  maDivision.style.backgroundColor = couleurFond;
});

td2.addEventListener('click', function() {
    let couleurBordure = this.style.backgroundColor;
  
    let maDivision = document.querySelector('.maDivision');
    maDivision.style.borderColor = couleurBordure;
  });
  
td3.addEventListener('click', function() {
    let couleurTexte = this.style.backgroundColor;
  
    let maDivision = document.querySelector('.maDivision');
    maDivision.style.color = couleurTexte;
  });
  let td2 = document.querySelectorAll('.td2');
let td1 = document.querySelectorAll('.td1');
let td3 = document.querySelectorAll('.td3');

td1.forEach(function(td) {
  td.addEventListener('click', function() {
    let couleurFond = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.backgroundColor = couleurFond;
  });
});
td2.forEach(function(td) {
  td.addEventListener('click', function() {
    let couleurBordure = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.borderColor = couleurBordure;
  });
});
td3.forEach(function(td) {
  td.addEventListener('click', function() {
    let couleurTexte = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.color = couleurTexte;
  });
});*/
let td2 = document.querySelectorAll('.td2');
let td1 = document.querySelectorAll('.td1');
let td3 = document.querySelectorAll('.td3');

for (let i = 0; i < td1.length; i++) {
  td1[i].addEventListener('click', function() {
    let couleurFond = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.backgroundColor = couleurFond;
  });
}

for (let i = 0; i < td2.length; i++) {
  td2[i].addEventListener('click', function() {
    let couleurBordure = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.borderColor = couleurBordure;
  });
}

for (let i = 0; i < td3.length; i++) {
  td3[i].addEventListener('click', function() {
    let couleurTexte = this.style.backgroundColor;

    let maDivision = document.querySelector('.maDivision');
    maDivision.style.color = couleurTexte;
  });
}





