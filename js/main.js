var images = [];
for(var i = 1; i <= 8; i++) {
  images.push('assets/Images/' + i + '.jpg');
}
hola = function () {
  console.log('ya hice algo mas nuevo');
  var index = Math.floor(Math.random() * 9);
  console.log(index);
};
$(document).ready(function(){
  $('td').click(hola);
  for(var i = 1; i <= 8; i++) {
    var index1 = Math.floor(Math.random() * 9) + 1;
    $('#img' + index1).attr('src', images[i-1]);
  }
  for(i; i <= 16; i++) {
    var index2 = Math.floor(Math.random() * 9) + 8;
    $('#img' + index2).attr('src', images[i-9]);
  }
});