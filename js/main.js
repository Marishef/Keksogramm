import { createPicture } from './rendering-thumbnails.js';

import {getData} from './api.js';
import './util.js';
import './download-foto.js';
import {  validateHashtags, validateComments } from './validator.js';
import { editSize, changeImgEffect, createSlider } from './edit-foto.js';
import { openEditor, closeEditor, clickBtnClose, closeEscEditor } from './download-foto.js'
import { setOnFilterClick, turnFilterOn, filterPictures } from './filters.js';

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
  setOnFilterClick(renderPictures);
};
// onFormSubmit(async (data) => {
//   await sendData(onSendDataSuccess, onSendDataError, data);
// });

getData ((photos) => {
  createPicture(photos);
  onGetDataSuccess ()
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



