const save = document.getElementById('save');
const Forsave = document.getElementById('Forsave');
document.addEventListener('mousemove', showSaveNot);
function showSaveNot(event) {
  const target = event.target;
  
  if (target === save) {
    const x = event.clientX;
    const y = event.clientY;
    
    Forsave.style.left = x + 'px';
    Forsave.style.top = y + 'px';
    Forsave.style.display = 'block';
  } else {
    Forsave.style.display = 'none';
  }
}

const undo = document.getElementById('undo');
const Forundo = document.getElementById('Forundo');
document.addEventListener('mousemove', showundoNot)
function showundoNot(event) {
  const target = event.target;
  
  if (target === undo) {
    const x = event.clientX;
    const y = event.clientY;
    
    Forundo.style.left = x + 'px';
    Forundo.style.top = y + 'px';
    Forundo.style.display = 'block';
  } else {
    Forundo.style.display = 'none';
  }
}

const redo = document.getElementById('redo');
const Forredo = document.getElementById('Forredo');
document.addEventListener('mousemove', showredoNot)
function showredoNot(event) {
  const target = event.target;
  
  if (target === redo) {
    const x = event.clientX;
    const y = event.clientY;
    
    Forredo.style.left = x + 'px';
    Forredo.style.top = y + 'px';
    Forredo.style.display = 'block';
  } else {
    Forredo.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var toolBar = document.getElementById('toolBar');
  var toolBbar = document.getElementById('toolBbar');
  var FileBar = document.getElementById('FileBar');
  var file = document.getElementById('file');

  file.addEventListener('click', function() {
    toolBar.style.display = 'none';
    toolBbar.style.display = 'none';
    FileBar.style.display = 'block';
    FileBar.style.position = 'absolute';
    FileBar.style.left = '-100%';

    var pos = -100;
    var animation = setInterval(function() {
      if (pos >= 0) {
        clearInterval(animation);
        FileBar.style.position = 'static';
      } else {
        pos += 5;
        FileBar.style.left = pos + '%';
      }
    }, 10);
  });
});

let insert = document.getElementById("insert");
insert.addEventListener("click", Home);
function Home(){
  window.location.href = "index.html";
}


