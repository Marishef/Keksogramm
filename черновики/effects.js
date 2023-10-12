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
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const imageElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelElement = document.querySelector('.effect-level__value');

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevelElement.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
        min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  //   min: DEFAULT_EFFECT.min,
  //   max: DEFAULT_EFFECT.max,
  // },
  // start: DEFAULT_EFFECT.max,
  // step: DEFAULT_EFFECT.step,
  // connect: 'lower',
});
hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };



// const image = document.querySelector('.img-upload__preview img');
// const form = document.querySelector('.img-upload__form');
// const sliderElement = document.querySelector('.effect-level__slider');
// const effectLevel = document.querySelector('.effect-level__value');

// const EFFECTS = [
//   {
//     name: 'none',
//     min: 0,
//     max: 100,
//     step: 1,
//   },
//   {
//     name: 'chrome',
//     style: 'grayscale',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: '',
//   },
//   {
//     name: 'sepia',
//     style: 'sepia',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: '',
//   },
//   {
//     name: 'marvin',
//     style: 'invert',
//     min: 0,
//     max: 100,
//     step: 1,
//     unit: '%',
//   },
//   {
//     name: 'phobos',
//     style: 'blur',
//     min: 0,
//     max: 3,
//     step: 0.1,
//     unit: 'px',
//   },
//   {
//     name: 'heat',
//     style: 'brightness',
//     min: 1,
//     max: 3,
//     step: 0.1,
//     unit: '',
//   },
// ];
// const DEFAULT_EFFECT = EFFECTS[0];
// let chosenEffect = DEFAULT_EFFECT;

// const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// const updateSlider = () => {
//   sliderElement.classList.remove('hidden');
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: chosenEffect.min,
//       max: chosenEffect.max,
//     },
//     step: chosenEffect.step,
//     start: chosenEffect.max,
//   });

//   if (isDefault()) {
//     sliderElement.classList.add('hidden');
//   }
// };

// const onFormChange = (evt) => {
//   if (!evt.target.classList.contains('effects__radio')) {
//     return;
//   }
//   chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
//   updateSlider();
// };

// const onSliderUpdate = () => {
//   image.style.filter = 'none';
//   image.className = '';
//   effectLevel.value = '';
//   if (isDefault()) {
//     return;
//   }
//   const sliderValue = sliderElement.noUiSlider.get();
//   image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
//   image.classList.add(`effects__preview--${chosenEffect.name}`);
//   effectLevel.value = sliderValue;
// };

// const resetEffects = () => {
//   chosenEffect = DEFAULT_EFFECT;
//   updateSlider();
// };

// noUiSlider.create(sliderElement, {
//   range: {
//     min: DEFAULT_EFFECT.min,
//     max: DEFAULT_EFFECT.max,
//   },
//   start: DEFAULT_EFFECT.max,
//   step: DEFAULT_EFFECT.step,
//   connect: 'lower',
// });
// updateSlider();

// form.addEventListener('change', onFormChange);
// sliderElement.noUiSlider.on('update', onSliderUpdate);

// export { resetEffects };
