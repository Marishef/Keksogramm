import { resetEffects} from "./effects.js"
import { resetScasle } from "./scale.js";

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashTagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');



const lineValid = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
const maxHashTagCount = 5;
const minHashTagLength = 2;
const maxHashTagLength = 20;
// https://habr.com/ru/articles/123845/
//https://stackru.com/questions/34058492/kak-dekodirovat-javascript-v-regulyarnoe-vyirazhenie-a-za-z0-9-g
//https://habr.com/ru/companies/ruvds/articles/343798/



//валидация формы
const formPristine = new Pristine (
  uploadForm, {
    ClassTo: 'img-upload__element',
    errorTextParent: 'img-upload__element',
    errorTextClass: 'img-upload__error'
    // errorClass: 'img-upload__element--invalid',
    // successClass: 'img-upload__element--valid',
    // errorTextTag: 'span',
    // errorTextClass: 'form__error'
  }
);
const showModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  // bodyModal.classList.add('modal-open');
  document.body.classList.add('modal-open');
  // document.removeEventListener('keydown', onEscKeyDown);
  document.addEventListener('keydown', onEscKeyDown);
}

// фцнкция закрытия окна
const closeModal = () => {
  uploadForm.reset();
  formPristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  resetScasle();
  resetEffects()
  // fileField.removeEventListener('change', () => {
  //   showModal();
  // });
};

// при фокусе не сработает esc
const isTextFieldFocused = () =>
document.activeElement === hashtagField ||
document.activeElement === commentField;

//функция, вызываемая при нажатии esc
function onEscKeyDown(evt) {
if (evt.keyCode === 'Escape') {
      evt.preventDefault();
      closeModal();
}
}

// закрыть крестиком
const onCancelButtonClick = () => {
  closeModal();
}
//открыть окно загрузки
const onFileInputChange = () => {
  showModal();
}
//функция возвращает, true, если слово начиналось с #
const startHashTag = (string) => string[0] === '0';

//функция возвращает, true, если длина хэштега от 2 до 20
const hasValidLength = (string) => {
  string.length >= minHashTagLength && string.length <= maxHashTagLength;
}

//функция возвращает, true, если ???????????
const hasValidSymbols = (string) => !lineValid.test(string.slice(1));

//возвращает tru, если все 3 функции были true
const isValidHashTag = (tag) =>
startHashTag(tag) && hasValidLength(tag) && hasValidSymbols(tag);

//возвращает true, если хэштегов меньше 5
const hasValidCount = (tags) => tags.length <= maxHashTagCount;

  //возвращает true, если переменная, гду хранятся теги = переменной,
  // где теги, преобразованные в нижний регистр
const hasUniqueHashTags = (tags) => {
// преобразуем в нижний регистр
  const lowerCaseHashTags = tags.map((tag) => tag.toLowerCase());
  // сверим
  return lowerCaseHashTags.length === new Set(lowerCaseHashTags).size;
}

//возвращает true, если 2 функции и проверка других фукций тоже true
const validateHashTag = (value) => {
  //присвоем значения хэштегов переменной
  const tags = value
  //удаолим вначале и в конце пробелы
    .trim()
  //разделим тх по пробелу
    .split(' ')
  //отфильтруем в новый массив количество без пробелов
    .filter((tag) => tag.trim().length);

    // Метод массива .every() позволяет узнать, удовлетворяют ли все
    // элементы в массиве условию в функции-колбэке
    //возвращаем true или false
    return hasValidCount (tags) && hasUniqueHashTags(tags) && tags.every(isValidHashTag);
};

//валидация
formPristine.addValidator (
  //переменная, поиск текста хэштега
  hashTagField,
  validateHashTag,
  'Неправильно заполнены хэштеги'
);

// запуск валидации
const onFormSubmit = (evt) => {
  evt.preventDefault();
  formPristine.validate();
}

//запускаем слушатели

//слушаем изменения в первоначальной форме загрузки файла и открываем модальное окно
fileField.addEventListener('change', onFileInputChange);

//слушаем нажатие крестика и закрываем окно
cancelButton.addEventListener('click', onCancelButtonClick);

//ловим отправку форму с валидативными данными
uploadForm.addEventListener('submit', onFormSubmit);


