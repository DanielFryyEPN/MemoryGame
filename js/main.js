let images = [];
for(let i = 1; i <= 8; i++) {
  images.push('assets/Images/' + i + '.jpg');
  images.push('assets/Images/' + i + '.jpg');
}
let try1 = '';
let try2 = '';
let contador = 0;
let iguales = false;
let hola = function () {
  if(contador < 2 && $(this).children('img').hasClass('hide') === true) {
    $(this).children('img').addClass('show');
    contador++;
    if (contador === 1) {
      try1 = $(this).children('img').attr('src');
    } else {
      try2 = $(this).children('img').attr('src');
      if (try1 === try2) {
        let id = $(this).children('img').attr('id');
        
        $('#' + id).a
        console.log('html =>', id);
        $('td').children('img').attr('src', try1);
        console.log('try1:', try1, 'try2:', try2);
        iguales = true;
        console.log(iguales);
      } else {
        iguales = false;
        console.log(iguales);
      }
      contador = 0;
    }
  }
};
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
  for (let i = 0; i < 16; i++) {
    $('#img' + index[i]).attr('src', images[i]);
  }
  $('td').click(hola);
});