const fetch = require('node-fetch');

(async () => {
  // Assign one promise (fetch) to each variable
  const users = fetch('https://jsonplaceholder.typicode.com/users');
  const posts = fetch('https://jsonplaceholder.typicode.com/posts');
  const albums = fetch('https://jsonplaceholder.typicode.com/albums');

  // Wait for all three promises to resolve
  const responses = await Promise.all([users, posts, albums]);

  // Transform the promise body into json
  const data = await Promise.all(responses.map((el) => el.json()));
  console.log(data);

  // To each user, assign the corresponding post and albums
  const userData = data[0].map((user) => {
    user.posts = data[1].filter((post) => post.userId === user.id);
    user.albums = data[2].filter((album) => album.userId === user.id);
    return user;
  });

  //the users received their matching albums and posts
  console.log(userData);
})();