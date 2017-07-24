let images = [];

for(let i = 1; i <= 8; i++) {
  images.push('assets/Images/' + i + '.jpg');
  images.push('assets/Images/' + i + '.jpg');
}

let try1 = '';
let try2 = '';
let contador = 0;

function play () {
  if(contador < 2 && $(this).children('img').hasClass('show') === false) {
    //$(this).children('img').css({'border-radius': '10%', 'transform': 'rotateY(360deg)'});
    $(this).children('img').addClass('show').css('transform', 'rotateY(360deg)');
    contador++;
    if (contador === 1) {
      try1 = $(this).children('img').attr('src');
    } else {
      try2 = $(this).children('img').attr('src');
      if (try1 === try2) {
        setTimeout(function() {
          $('td').children("img[src='" + try2 + "']").attr('src', 'assets/Images/iguales.png').removeClass('hide');
        }, 1200);
      } else {
        setTimeout(function() {
          $('img').not('src', 'assets/Images/iguales.png').removeClass('show').attr('style', '');
        }, 1200);
      }
      contador = 0;
    }
  }
  //console.log($("img[src='assets/Images/iguales.png']").length);
}

function startTimer () {
  let secs = 0;
  let txtS = '';
  let mins = 0;
  let txtM = '';
  setInterval(function () {
    secs++;
    if (secs<=9) {
      txtS = '0' + secs;
    } else {
      txtS = secs;
    }
    $('#secs').text(txtS);
    if (secs === 60) {
      secs = 0;
      mins++;
      if (mins<=9) {
        txtM = '0' + mins;
      } else {
        txtM = mins;
      }
      $('#mins').text(txtM);
    }
  }, 1000);
}

let index = [];

for(let k = 1; k <= 16; k++){
  let rand = Math.floor(Math.random() * 16) + 1;
  if((index.find(function (value) {return value === rand;})) === undefined) {
    index.push(rand);
  } else {
    k--;
  }
}

$(document).ready(function(){
  $('img').addClass('hide');
  for (let i = 0; i < 16; i++) {
    $('#img' + index[i]).attr('src', images[i]);
  }
  $('td').click(play);
  startTimer();
});