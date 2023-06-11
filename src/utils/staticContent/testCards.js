const testCards = [
  {
    id: 1,
    name: '33 слова о дизайне',
    duration: 107,
    image: 'https://static.tildacdn.com/tild6233-3662-4065-a335-656162373330/______-min.jpg',
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    duration: 63,
    image: 'https://beatfilmfestival.ru/media/pages/movies/100/1803210984-1606829301/100-2-2000x869.jpg',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    duration: 102,
    image: 'https://image.tmdb.org/t/p/original/hkAj8l9paUcHuw8XCsjZNPuV79n.jpg',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Баския: Взрыв реальности',
    duration: 81,
    image: 'https://beatfilmfestival.ru/media/pages/movies/boom-for-real/1077902884-1606831160/boom-4-2000x869.jpg',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Бег это свобода',
    duration: 104,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/ce4b79aa7832da305b8c5cbed6dae23b/100x64_3',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Книготорговцы',
    duration: 97,
    image: 'https://beatfilmfestival.ru/media/pages/movies/the-booksellers/2292787762-1600890057/booksellers-adamweinbergermask-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 7,
    name: 'Когда я думаю о Германии ночью',
    duration: 116,
    image: 'https://s5.afisha.ru/upload/1161361/dPbUaPt0b66VjcBaacVkGPA1lhLNL0hzNkfop1aglfI.jpg',
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Gimme Danger: История Игги и The Stooges',
    duration: 119,
    image: 'https://photo.tvigle.ru/res/tvigle/video/2023/03/22/e3750a67-bd09-4b9f-af2c-97679e682565.jpeg',
    isFavorite: false,
  },
  {
    id: 9,
    name: 'Дженис: Маленькая девочка грустит',
    duration: 102,
    image: 'https://s3.afisha.ru/mediastorage/f0/72/ac9b6d389be14bab81fd43a672f0.jpg',
    isFavorite: true,
  },
  {
    id: 10,
    name: 'Соберись перед прыжком',
    duration: 70,
    image: 'https://beatfilmfestival.ru/media/pages/movies/minding-the-gap/3082120757-1607723379/gap-2-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 11,
    name: 'Пи Джей Харви: A dog called money',
    duration: 64,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/02a0bf0e6d9d8adbcdd4ef1296af13a9/100x64_3',
    isFavorite: false,
  },
  {
    id: 12,
    name: 'По волнам: Искусство звука в кино',
    duration: 67,
    image: 'https://img.the-village.ru/RJWNiziLsQJMW8mXCF7VNw3YN4vVkKDBY9BuKRHPCyU/q:88/plain/2020/10/13/Bernie-Krause.jpg',
    isFavorite: false,
  },
  {
    id: 13,
    name: 'Соберись перед прыжком',
    duration: 70,
    image: 'https://beatfilmfestival.ru/media/pages/movies/minding-the-gap/3082120757-1607723379/gap-2-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 14,
    name: 'Пи Джей Харви: A dog called money',
    duration: 64,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/02a0bf0e6d9d8adbcdd4ef1296af13a9/100x64_3',
    isFavorite: false,
  },
  {
    id: 15,
    name: 'По волнам: Искусство звука в кино',
    duration: 67,
    image: 'https://img.the-village.ru/RJWNiziLsQJMW8mXCF7VNw3YN4vVkKDBY9BuKRHPCyU/q:88/plain/2020/10/13/Bernie-Krause.jpg',
    isFavorite: false,
  },
  {
    id: 16,
    name: 'Соберись перед прыжком',
    duration: 70,
    image: 'https://beatfilmfestival.ru/media/pages/movies/minding-the-gap/3082120757-1607723379/gap-2-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 17,
    name: 'Пи Джей Харви: A dog called money',
    duration: 64,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/02a0bf0e6d9d8adbcdd4ef1296af13a9/100x64_3',
    isFavorite: false,
  },
  {
    id: 18,
    name: 'По волнам: Искусство звука в кино',
    duration: 67,
    image: 'https://img.the-village.ru/RJWNiziLsQJMW8mXCF7VNw3YN4vVkKDBY9BuKRHPCyU/q:88/plain/2020/10/13/Bernie-Krause.jpg',
    isFavorite: false,
  },
  {
    id: 19,
    name: 'Соберись перед прыжком',
    duration: 70,
    image: 'https://beatfilmfestival.ru/media/pages/movies/minding-the-gap/3082120757-1607723379/gap-2-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 20,
    name: 'Пи Джей Харви: A dog called money',
    duration: 64,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/02a0bf0e6d9d8adbcdd4ef1296af13a9/100x64_3',
    isFavorite: false,
  },
  {
    id: 21,
    name: 'По волнам: Искусство звука в кино',
    duration: 67,
    image: 'https://img.the-village.ru/RJWNiziLsQJMW8mXCF7VNw3YN4vVkKDBY9BuKRHPCyU/q:88/plain/2020/10/13/Bernie-Krause.jpg',
    isFavorite: false,
  },
  {
    id: 22,
    name: 'Соберись перед прыжком',
    duration: 70,
    image: 'https://beatfilmfestival.ru/media/pages/movies/minding-the-gap/3082120757-1607723379/gap-2-2000x869.jpg',
    isFavorite: true,
  },
  {
    id: 23,
    name: 'Пи Джей Харви: A dog called money',
    duration: 64,
    image: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/02a0bf0e6d9d8adbcdd4ef1296af13a9/100x64_3',
    isFavorite: false,
  },
  {
    id: 24,
    name: 'По волнам: Искусство звука в кино',
    duration: 67,
    image: 'https://img.the-village.ru/RJWNiziLsQJMW8mXCF7VNw3YN4vVkKDBY9BuKRHPCyU/q:88/plain/2020/10/13/Bernie-Krause.jpg',
    isFavorite: false,
  },
];

export default testCards;
