

const SERVER_ADDRESS_FOR_GET = 'https://25.javascript.pages.academy/kekstagram/data';
const ALERT_GET_DATA_TEXT = 'Сервер не доступен!';
const ALERT_SEND_DATA_TEXT = 'Не удалось отправить форму. Попробуйте ещё раз';

const ALERT_SHOW_TIME = 5000;
const ALERT_BACKGROUND_CHANGE_TIME = 300;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.padding = '10px 10px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.textAlign = 'center';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  const changeBackground = async () => {
    let i = 0;
    while (i < ALERT_SHOW_TIME) {
      alertContainer.style.backgroundColor = 'red';
      await sleep(ALERT_BACKGROUND_CHANGE_TIME);
      alertContainer.style.backgroundColor = 'black';
      await sleep(ALERT_BACKGROUND_CHANGE_TIME);
      i = i + ALERT_BACKGROUND_CHANGE_TIME * 2;
    }
  };

  changeBackground();

  setTimeout(() => { alertContainer.remove(); }, ALERT_SHOW_TIME);
};




const getData = (onSuccess) => {
fetch (SERVER_ADDRESS_FOR_GET)
  .then ((response) => {
    if (response.ok) {
      return response;
    } else {
      showAlert(ALERT_GET_DATA_TEXT);
    }
  })
  .then ((response) => response.json())
  .then ((photos) => {
    onSuccess(photos);
  });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_ADDRESS_FOR_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(ALERT_SEND_DATA_TEXT);
      }
    })
    .catch(() => {
      onFail(ALERT_SEND_DATA_TEXT);
    });
};

export { getData, sendData };
