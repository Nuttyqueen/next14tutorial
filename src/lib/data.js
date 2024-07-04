//TEMPORARY DATA
const users = [
  {
    id: 1,
    name: "John",
    pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Jane",
    pic: "https://images.pexels.com/photos/20831561/pexels-photo-20831561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Anne",
    pic: "https://images.pexels.com/photos/17858988/pexels-photo-17858988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "......",
    userId: 1,
    date: "01.01.2024",
  },
  {
    id: 2,
    title: "Post 2",
    body: "......",
    userId: 2,
    date: "02.01.2024",
  },
  {
    id: 3,
    title: "Post 3",
    body: "......",
    userId: 3,
    date: "03.01.2024",
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
