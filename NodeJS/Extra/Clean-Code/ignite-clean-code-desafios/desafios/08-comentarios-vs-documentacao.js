async function register(data) {
  const { email, name, avatar } = data;

  // Verifica se o avatar foi informado.
  if (!avatar) return { error: "avatar is required" };

  // Verifica se o nome foi informado.
  if (!name) return { error: "name is required" };

  const hasUserWithThisEMail = getUserByEmail(email);
  if (hasUserWithThisEMail) {
    return { error: "email already used" };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar);

  const user = await createUser({ email, name, avatar: avatar2 });

  return { user };
}
