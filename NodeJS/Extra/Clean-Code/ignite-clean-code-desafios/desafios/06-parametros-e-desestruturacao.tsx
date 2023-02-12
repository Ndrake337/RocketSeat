function updateUserRoute(body, params) {
  const { name, email, password } = body;
  const { id } = params;

  const requestInformation = {
    body: { name, email, password },
    params: { id },
  };
  updateUserController(requestInformation);
}

function updateUserController({ body, params }) {
  userRepository.update({ body, params });
}

const userRepository = {
  update: (requestInformation) => {
    const { name, email, password } = requestInformation.body;
    const { id } = requestInformation.params;
    const user = userRepository.findById(id);
    if (!user) {
      throw new Error("User Not Founded");
    }
    const updatedUser = {
      id,
      name,
      email,
      password,
    };
    return {
      updatedUser,
    };
  },
};