const fileField = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const bodyModal = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

const heshtegField = document.querySelector('.text__hashtags');
const lineValid = /^#[A-Za-zА-Яа-яЁё0-9]{1-19}$/;

//функция, вызываемая при нажатии esc
function onEscKeyDown(evt) {
  if (evt.keyCode === 'Escape') {
        evt.preventDefault();
        closeModal();
  }
}
//открытие модального окна загрузки фото
const showModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyModal.classList.add('modal-open');

  document.removeEventListener('keydown', onEscKeyDown);
}

//событие: ожидание изменений при загрузки фото
fileField.addEventListener('change' , () => {
  showModal();
})

// фцнкция закрытия окна
const closeModal = () => {
  bimgUploadOverlay.classList.add('hidden');
  bodyModal.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  fileField.removeEventListener('change', () => {
    showModal();
  });
}

//валидация формы
const form = new Pristine (
  form, {
    ClassTo: 'img-upload__element',
    errorTextParent: 'img-upload__element',
    errorTextClass: 'img-upload__error',
  }
);




