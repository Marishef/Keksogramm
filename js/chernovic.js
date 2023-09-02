//из download-foto.js
const valideHashTags = () => {

  hashtagField = hashtagField.toLowerCase();
  const hashtagText = hashtagField.split(' ');
  const hashtagTextLength = hashtagText.length;

  //количество введенных хэштегов
  const quantityHashTags = ()=> {
    let quantityHashTag = 0;
    for (let i = 0; i < hashtagField.length; i++) {
      if (hashtagField[i] === '#') {
        quantityHashTag +=1;
      }
    }
    return quantityHashTag;
  }

}
