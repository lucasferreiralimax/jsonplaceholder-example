const mergeUserPost = (posts, users) => {
  const arrayMerge = [];

  posts.map((post) => {
    const haveEqualId = (user) => user.id === post.userId
    const userWithEqualId= users.find(haveEqualId)

    arrayMerge.push(Object.assign({}, post, userWithEqualId));
  });

  return arrayMerge;
}

export default mergeUserPost
