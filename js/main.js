let images = [];
for(let i = 1; i <= 8; i++) {
  images.push('assets/Images/' + i + '.jpg');
  images.push('assets/Images/' + i + '.jpg');
}
let hola = function () {
  //$('img').attr('src');
  console.log($('#img1').attr('src'));
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
  $('#img1').click(hola);
  for (let i = 0; i < 16; i++) {
    $('#img' + index[i]).attr('src', images[i]);
  }
});