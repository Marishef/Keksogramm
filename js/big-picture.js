
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const bodyBigPicture = document.querySelector('body');
const commentContainer = document.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCloseElement = bigPicture.querySelector('#picture-cancel');
const commentsFragment = document.createDocumentFragment();
const MAX_COMMENTS_VALUE = 5;



function onEscKeyDown(evt) {
  if (evt.keyCode === 'Escape') {
        evt.preventDefault();
        bigPictureClose();
  }
}
// const onCancelButtonClick = () => {
//   hideBigPicture();
// }

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPictureOpen();

  bigPictureImage.src = url;
  bigPictureImage.alt = description;
  likesCount.textContent = likes;
  bigPictureDescription.textContent = description;

  //функция отрисовки комментариев
  let commentsValue = 0;

  const showComment = () => {
    commentsValue += MAX_COMMENTS_VALUE;
    comments.slice(0, commentsValue).forEach(({avatar, name,message}) => {
      const socialCommentTemplate = socialComment.cloneNode(true);
      const socialCommentImage = socialCommentTemplate.querySelector('.social__picture');
      const socialCommentText = socialCommentTemplate.querySelector('.social__text');

      socialCommentImage.src = avatar;
      socialCommentImage.alt = name;
      socialCommentText.textContent = message;

      commentsFragment.append(socialCommentTemplate);
    });

    commentContainer.innerHTML = '';
    commentContainer.append(commentsFragment);

    //Проверка на условие показа кнопки Загрузить еще
    if (comments.length <= commentsValue) {
      socialCommentsCount.textContent = `${comments.length} из ${comments.length} комментариев`;
      commentsLoader.classList.add('hidden');
    }else{
      socialCommentsCount.textContent = `${commentsValue} из ${comments.length} комментариев`;
      commentsLoader.classList.remove('hidden');
    }
  };

  //Вывод 5 комментариев
  showComment();

  bigPictureCloseElement.addEventListener('click', bigPictureClose);
  commentsLoader.addEventListener ('click', () => showComment());

};


const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  bodyBigPicture.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
}

const bigPictureOpen = () => {
  bigPicture.classList.remove('hidden');
  bodyBigPicture.classList.add ('modal-open');

  //  document.addEventListener('keydown', onEscKeyDown);
  document.removeEventListener('keydown', onEscKeyDown);
}

export{ renderBigPicture};
