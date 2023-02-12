// Nomenclatura de variáveis

const categories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

async function defineUserCategory(req, res) {
  const githubUsername = String(req.query.username);

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubUserRequest = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if (githubUserRequest.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`,
    });
  }

  const githubUser = await githubUserRequest.json();

  const CategoriesSorted = categories.sort(
    (PreviousCategory, CurrentCategory) =>
      CurrentCategory.followers - PreviousCategory.followers
  );

  const userCategory = CategoriesSorted.find(
    (category) => githubUser.followers > category.followers
  );

  const gihubUserCategorized = {
    githubUser,
    category: userCategory.title,
  };

  return gihubUserCategorized;
}

defineUserCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
).then((response) => {
  console.log(response);
});