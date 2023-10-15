

import { renderBigPicture} from "./big-picture.js";

const container = document.querySelector('.pictures');
const pictureTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();
const imageFilterContainer = document.querySelector('.img-filters');

const createPicture = (data) => {
  data.forEach(({comments, description, likes, url}) => {

    const pictureElementClone = pictureTemplate.cloneNode(true);

    pictureElementClone.querySelector('.picture__img').src = url;
    // pictureElementClone.querySelector('.picture__info').alt = description;
    pictureElementClone.querySelector('.picture__comments').textContent = comments.length;
    pictureElementClone.querySelector('.picture__likes ').textContent = likes;

    pictureFragment.appendChild(pictureElementClone);

    pictureElementClone.addEventListener('click', () => {
      renderBigPicture({url, likes, comments, description});
    });



  });

  //Очистка контейнера перед наполнением новых фото
  container.querySelectorAll ('.picture').forEach((element) => {element.remove();});
  container.appendChild(pictureFragment);

  //Показывает меню фильтров, после загрузки фото
  imageFilterContainer.classList.remove('img-filters--inactive');
};

export {createPicture};
