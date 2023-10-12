
import { resetEditPhoto } from './edit-foto.js';

import { sendData } from './api.js';

const filePhoto = document.querySelector('#upload-file');
const closeBtn = document.querySelector('#upload-cancel');
const editorPhoto = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgSubmitBtn = document.querySelector('.img-upload__submit');


let isErrorModal = false;
const isEscapeKey = (evt) => evt.key === 'Escape';

const onClose = () => {
  editorPhoto.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadForm.reset();
  resetEditPhoto();
};

const clickBtnClose = () => closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  onClose();
});

const closeEscEditor = () => document.addEventListener('keydown', (evt) => {
  if (isErrorModal === true) {
    return false;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onClose();
  }
});

const openEditor = () => filePhoto.addEventListener('change', () => {
  editorPhoto.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', closeEscEditor);
  document.addEventListener('click', clickBtnClose);
});

const closeEditor = () => {
  onClose();

  document.removeEventListener('keydown', closeEscEditor);
  document.removeEventListener('click', clickBtnClose);
};

const succesTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const closeModal = (modal) => {
  modal.remove();
};

const blockSubmitButton = () => {
  imgSubmitBtn.disabled = true;
  imgSubmitBtn.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  imgSubmitBtn.disabled = false;
  imgSubmitBtn.textContent = 'Опубликовать';
};

const appendSuccesModal = () => {
  const successElement = succesTemplate.cloneNode(true);
  bodyElement.appendChild(successElement);

  const successModalElement = document.querySelector('.success');

  const onSuccessModalEscKeydown = () => document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(successModalElement);
    }
  });

  const onSuccesClickClose = () => successModalElement.addEventListener('click', () => {
    closeModal(successModalElement);
    closeEditor();
  });

  onSuccessModalEscKeydown();
  onSuccesClickClose();
  unblockSubmitButton();
};

const errorDownload = () => {
  isErrorModal = true;
  const errorElement = errorTemplate.cloneNode(true);
  bodyElement.appendChild(errorElement);

  const errorModalElement = document.querySelector('.error');

  const onErrorModalEscKeydown = () => document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(errorModalElement);
      isErrorModal = false;
    }
  });

  const onErrorClickClose = () => document.addEventListener('click', () => {
    closeModal(errorModalElement);
    isErrorModal = false;
  });

  onErrorModalEscKeydown();
  onErrorClickClose();
  unblockSubmitButton();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  blockSubmitButton();
  sendData(formData, appendSuccesModal, errorDownload);
});

export {
  openEditor,
  closeEditor,
  clickBtnClose,
  closeEscEditor,
};



// import { resetEffects} from "./effects.js"
// import { resetScasle } from "./scale.js";
// import { hashtagsInput, commentInput, outlineDefaultStyle } from './validator.js'


// const uploadForm = document.querySelector('.img-upload__form');
// const imgUploadOverlay = document.querySelector('.img-upload__overlay');
// const body = document.querySelector('body');
// const cancelButton = document.querySelector('#upload-cancel');
// const fileField = document.querySelector('#upload-file');
// const hashTagField = document.querySelector('.text__hashtags');
// const commentField = document.querySelector('.text__description');


// const showModal = () => {
//   imgUploadOverlay.classList.remove('hidden');
//   document.body.classList.add('modal-open');
//   document.addEventListener('keydown', onEscKeyDown);
// }

// // фцнкция закрытия окна
// const closeModal = () => {
//   uploadForm.reset();

//   imgUploadOverlay.classList.add('hidden');
//   body.classList.remove('modal-open');
//   document.removeEventListener('keydown', onEscKeyDown);
//   resetScasle();
//   resetEffects();
//   document.removeEventListener('keydown', onDocumentKeydown);
// };

// // при фокусе не сработает esc


// //функция, вызываемая при нажатии esc
// function onEscKeyDown(evt) {
// if (evt.key === 'Escape' && !(document.activeElement === hashtagsInput) && !(document.activeElement === commentInput)) {
//       evt.preventDefault();
//       closeModal();
// }
// }

// // закрыть крестиком
// const onCancelButtonClick = () => {
//   closeModal();
// }
// //открыть окно загрузки
// const onFileInputChange = () => {
//   showModal();
// }


// //запускаем слушатели
// //слушаем изменения в первоначальной форме загрузки файла и открываем модальное окно
// fileField.addEventListener('change', onFileInputChange);
// //слушаем нажатие крестика и закрываем окно
// cancelButton.addEventListener('click', onCancelButtonClick);


// export {  closeModal};


