import { createPicture } from './rendering-thumbnails.js';

import {getData} from './api.js';
import './util.js';
import './download-foto.js';
import {  validateHashtags, validateComments } from './validator.js';
import { editSize, changeImgEffect, createSlider } from './edit-foto.js';
import { openEditor, closeEditor, clickBtnClose, closeEscEditor } from './download-foto.js'
import { debounce } from './util.js'

// onFormSubmit(async (data) => {
//   await sendData(onSendDataSuccess, onSendDataError, data);
// });

getData ((photos) => {
  createPicture(photos);
}
)
clickBtnClose();
closeEscEditor();
openEditor();
closeEditor();
editSize();
createSlider();
changeImgEffect();
validateHashtags();
validateComments();



