let dummyNews = [
    {
      _id: '1',
      title: 'Новина 1',
      content: 'Пълно съдържание на новина 1',
      author: 'test@test.bg',
    },
    {
      _id: '2',
      title: 'Новина 2',
      content: 'Пълно съдържание на новина 2',
      author: 'admin@site.com',
    },
    {
      _id: '3',
      title: 'Новина 3',
      content: 'Пълно съдържание на новина 3',
      author: 'test@test.bg',
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
  