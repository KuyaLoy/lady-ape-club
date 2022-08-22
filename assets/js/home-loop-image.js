// show list of monkey
var allPics = 39;

for(i=0;i<=allPics; i++){
  // myImg.src = images[i];

  // TODO: adjust this to whatever you want
  // in this example, use `<a>` that link to another page
  // you can use javascript to show modal/alert too
  var picture = document.createElement('picture');

  var img = document.createElement('img');
  img.src = './assets/images/lac-nft/'+[i]+'.png';
  picture.appendChild(img);

  if(i > 19) {
    document.getElementById('slide-lac-cont-2').appendChild(picture); 
  } else {
    document.getElementById('slide-lac-cont-1').appendChild(picture);
  }

} 