import { getRandomArrayElement, getRandomIntInclusive} from './util.js'

const NAMES = [
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Иван',
    'Злата',
    'Полина',
    'Кристина',
    'Оля',
    'Никита',
    'Максим',
    'Андрей',
    'Марина',
    'Игорь',
    'Вячеслав',
    'Светлана',
    'Алексей',
    'Елена',
    'Михаил',
    'Мила',
    'Святослав',
    'Егор',
    'Богдан',
    'Мираслава',
    'Карина',
]

const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const DESCRIPTION = [
    'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
    'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
    'Затусили с друзьями на море #laptevsea #north #northeastpassage',
    'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
    'Отдыхаем... #chill #relax #group #photo',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка! #wow #car #carwow #drive',
    '#fun #party #cool #young',
    'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
    'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
    'Норм',
];

const photoCount = 25;
const maxCommentId = 10000;
let ID = 0;
const likesRange = [15, 200];
const avatarNumber = 6;
const commentsRange = [1, 15];

// Функция создает комментарии
const createComments = () => ({
    id: getRandomIntInclusive(1, maxCommentId),
    avatar: `img/avatar-${getRandomIntInclusive(1, avatarNumber)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  });

  // Функция создает описание фотографии
const createPhotoDescriptions = () => ({
    id: ++ID,
    url: `photos/${ID}.jpg`,
    description: getRandomArrayElement (DESCRIPTION),
    likes: getRandomIntInclusive(likesRange[0], likesRange[1]),
    comments: Array.from({length: getRandomIntInclusive(commentsRange[0],
       commentsRange[1])}, createComments)
      });

//Функция создает массив фото
const PhotoDescriptions = () => Array.from({length: photoCount}, createPhotoDescriptions);


export {MESSAGE };
export {PhotoDescriptions};
