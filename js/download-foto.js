const fileField = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const bodyModal = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

function onEscKeyDown(evt) {
  if (evt.keyCode === 'Escape') {
        evt.preventDefault();
        closeModal();
  }
}
const showModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyModal.classList.add('modal-open');

  document.removeEventListener('keydown', onEscKeyDown);
}

fileField.addEventListener('change' , () => {
  showModal();
})

const closeModal = () => {
  bimgUploadOverlay.classList.add('hidden');
  bodyModal.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  fileField.removeEventListener('change', () => {
    showModal();
  });
}


