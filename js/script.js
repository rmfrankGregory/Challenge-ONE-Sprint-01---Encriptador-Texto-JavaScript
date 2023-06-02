


const stringTextArea = document.querySelector(".Text-area");
const stringMensaje = document.querySelector(".Mensaje");

function btnEncrypter() {
  const txtEncriptado = encrypter(stringTextArea.value);
  stringMensaje.value = txtEncriptado;
}

function btnDecrypter() {
  const txtEncriptado = decrypter(stringTextArea.value);
  stringMensaje.value = txtEncriptado;
}

function encrypter(_text) {
  _text = formateado(_text)

  _text = _text.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return _text;
}

function decrypter(_text) {
   _text = formateado(_text);

  _text = _text.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return _text;
}


function btnCopiar() {
  const mensajeTextarea = document.querySelector('.Mensaje');
  mensajeTextarea.select();
  document.execCommand('copy');
}


function formateado(text) {
  const accentsMap = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'à': 'a',
    'è': 'e',
    'ì': 'i',
    'ò': 'o',
    'ù': 'u',
    'â': 'a',
    'ê': 'e',
    'î': 'i',
    'ô': 'o',
    'û': 'u',
    'ä': 'a',
    'ë': 'e',
    'ï': 'i',
    'ö': 'o',
    'ü': 'u',
    'ñ': 'n',
    'ç': 'c'
  };

  return text.replace(/[áéíóúàèìòùâêîôûäëïöüñç]/gi, function(matched) {
    return accentsMap[matched].toLowerCase();
  });
}















