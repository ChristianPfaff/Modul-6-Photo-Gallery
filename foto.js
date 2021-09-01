imgArray = [];

function loadImg() {
  /* closeSingleimage(); */
  for (let i = 0; i < 14; i++) {
    imgArray.push(`img/${i + 1}.jpeg`);

  }
  outputImages();
}

function outputImages() {
  for (let k = 0; k < 14; k++) {
    document.getElementById('images').innerHTML += `
    <div class="imgShape"><img src="${imgArray[k]}" onclick="openSingleimage(${k})"><div/>
    `;
  };
}

function openSingleimage(imgNo) {
  document.getElementById('images').classList.add('d-none');
  document.getElementById('singleImg').innerHTML = `
    <div class="imgShapeSingle"><img src="${imgArray[imgNo]}"></div>
    <img class="iconArrow" src="img/arrow-88-48.png" onclick="closeSingleimage()">
    `;
  document.getElementById('singleImg').classList.remove('d-none');
  /* document.getElementById('singleImg').classList.add('singleImgStyle'); */
}

function closeSingleimage() {
  document.getElementById('singleImg').classList.add('d-none');
  document.getElementById('singleImg').classList.remove/* ('singleImgStyle'); *///Warum reicht  nicht einfach d-none aus, damit der schwarze Hintergrund verschwindet?? Hängt das mit positon: fixed; zusammen??
  document.getElementById('images').classList.remove('d-none');
}



