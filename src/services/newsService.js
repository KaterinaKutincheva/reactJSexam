let dummyNews = [
  {
    _id: '1',
    title: 'Новина 1',
    content: 'Пълно съдържание на новина 1. Малко повече текст за видимост.',
    author: 'test@test.bg',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/8fiovddnsikop7x1qsq90/news1.jpg?rlkey=5by48la5pop4wungtdnbyasgu'
  },
  {
    _id: '2',
    title: 'Новина 2',
    content: 'Пълно съдържание на новина 2. Тук също добавяме примерен текст.',
    author: 'admin@site.com',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/v0zsrw0gm02y7zpa4zjs4/news3.jpg?rlkey=wihen2g3i8ng5ybb01j10jtte'
  },
  {
    _id: '3',
    title: 'Новина 3',
    content: 'Пълно съдържание на новина 3. Това е третата ни новина.',
    author: 'test@test.bg',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://157giche.com/wp-content/uploads/2017/10/Marketplace-Lending-News.jpg',
  },
  {
    _id: '4',
    title: 'Новина 4',
    content: 'Пълно съдържание на новина 4. Това е четвъртата ни новина.',
    author: 'test@test.bg',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://static01.nyt.com/images/2023/06/09/multimedia/09HL-01-qhmp/09HL-01-qhmp-superJumbo-v4.jpg',
  },
  {
    _id: '5',
    title: 'Новина 5',
    content: 'Пълно съдържание на новина 5. Това е петата ни новина.',
    author: 'test@test.bg',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://cdn.actualno.eu/actualno_2013/upload/news/2025/04/04/a71e5b2f7128e9fcad09f7331f5519a7_2425611_1920x1080.webp',
  },
];
  
  export const getAllNews = () => {
    return dummyNews;
  };
  
  export const getNewsById = (id) => {
    return dummyNews.find((n) => n._id === id);
  };
  
  export const createNews = (data, author) => {
    const newItem = {
      _id: Date.now().toString(),
      title: data.title,
      content: data.content,
      author,
      createdAt: new Date().toISOString(),
    };
    dummyNews.push(newItem);
  };
  
  export const updateNews = (id, data) => {
    const index = dummyNews.findIndex((n) => n._id === id);
    if (index !== -1) {
      dummyNews[index] = { ...dummyNews[index], ...data };
    }
  };
  
  export const deleteNews = (id) => {
    dummyNews = dummyNews.filter((n) => n._id !== id);
  };
  