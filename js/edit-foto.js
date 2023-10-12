const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

// Элементы размера фото
const sizeControl = document.querySelector('.scale__control--value');
const sizeSmaller = document.querySelector('.scale__control--smaller');
const sizeBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');

// Элементы эффектов
const effectsList = document.querySelector('.effects');
const sliderEffectWrapper = document.querySelector('.effect-level');
const sliderEffect = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const imgPreviewFile = imgUploadPreview.querySelector('img');

const sizeValueDefault = 100;
const SIZE_MIN = 25;
const SIZE_MAX = 100;
const SIZE_STEP = 25;
let sizeValue = 100;

// Размер фотографии

const editSize = () => {

  sizeSmaller.addEventListener('click', () => {
    if (sizeValue > SIZE_MIN) {
      sizeValue -= SIZE_STEP;
      sizeControl.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
  sizeBigger.addEventListener('click', () => {
    if (sizeValue < SIZE_MAX) {
      sizeValue += SIZE_STEP;
      sizeControl.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
};

// Эффекты

const addSlider = () => {
  sliderEffectWrapper.style.visibility = 'visible';
  sliderEffectWrapper.removeAttribute('aria-hidden');
};

const removeSlider = () => {
  sliderEffectWrapper.style.visibility = 'hidden';
  sliderEffectWrapper.setAttribute('aria-hidden', 'true');
};

const resetEffect = () => {
  imgPreviewFile.classList.forEach(
    (item) =>
      item.includes('effects__preview--') &&
      imgPreviewFile.classList.remove(item),
    imgPreviewFile.style.filter = 'inherit'
  );
};

const updateSlider = (effect) => {
  if (!EFFECTS[effect]) {
    return;
  }

  const { min, max, step } = EFFECTS[effect];

  sliderEffect.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};

const changeImgEffect = () => {
  const onEffectsListChange = () => {
    const { value: effect } = effectsList.querySelector(
      'input[type=radio]:checked'
    );

    sliderEffect.noUiSlider.off('update');
    resetEffect();

    if (effect !== 'none') {
      imgPreviewFile.classList.add(`effects__preview--${effect}`);
      addSlider();
      updateSlider(effect);

      sliderEffect.noUiSlider.on('update', () => {
        effectLevel.value = sliderEffect.noUiSlider.get();
        const filter = EFFECTS[effect];
        imgPreviewFile.style.filter = `${filter}(${effectLevel.value}${filter})`;
      });
    } else {
      removeSlider();
    }
  };

  effectsList.addEventListener('change', onEffectsListChange);
};

const createSlider = () => {
  noUiSlider.create(sliderEffect, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
  removeSlider();
};

const resetEditPhoto = () => {
  sizeValue = sizeValueDefault;
  sizeControl.value = `${sizeValueDefault}%`;
  imgUploadPreview.style.transform = `scale(${sizeValueDefault / 100})`;
  resetEffect();
  removeSlider();
};

export {
  changeImgEffect,
  createSlider,
  editSize,
  resetEditPhoto
};
