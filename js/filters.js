
import { createPicture } from './rendering-thumbnails.js';
import { debounce } from './util.js';


//создадим объкт с кнопками фильтрации
const filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');

const PICTURES_COUNT = 10;
let currentFilter = '';
let pictures = [];

const randomSort = () => Math.random() - 0.5;
const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const turnFilterOn = (loaderPictures) => {

  filterElement .classList.remove('img-filters--inactive');
  pictures = [ ...loaderPictures ];
  currentFilter = filter.DEFAULT;
};



const filterPictures = () => {
  switch (currentFilter) {
    case filter.RANDOM:
      return [ ...pictures].sort(randomSort).slice(0, PICTURES_COUNT);
    case filter.DISCUSSED:
      return [ ... pictures].sort(discussedSort);
    default:
      return [ ...pictures];
  }
};

const setOnFilterClick = (cb) => {
  const debouncedCallbacke = debounce(cb);

  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains ('img-filter__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filterElement
    .querySelector ('.img-filters__button--active')
    .classList.remove ('.img-filters__button--active');

    clickedButton.classList.add('.img-filters__button--active');
    currentFilter = clickedButton.id;
    debouncedCallbacke(filterPictures());
});
};

export { setOnFilterClick, turnFilterOn, filterPictures };
