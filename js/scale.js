const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector ('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
    image.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
}
const onSmallerButtonClick = () => {
    const currentValue = parseInt(scaleValue.value, 10);
    let newValue = currentValue - SCALE_STEP;
    if (newValue < MIN_SCALE) {
        newValue = MIN_SCALE;
    }
    scaleImage(newValue);
}

const onBiggerButtonClick = () => {
    const currentValue = parseInt(scaleValue.value, 10);
    let newValue = currentValue + SCALE_STEP;
    if (newValue < MAX_SCALE) {
        newValue = MAX_SCALE;
    }
    scaleImage();
}

scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
scaleBiggerButton.addEventListener('click', onBiggerButtonClick);

const resetScasle = () => {
    scaleValue(DEFAULT_SCALE)
}

export { resetScasle};
