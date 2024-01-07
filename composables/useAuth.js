const useAuth = () => {
  const { routes } = useRoutes();
  const token = useCookie('token');
  const currentUser = useCookie('current-user');

  const logIn = async ({ username, password }) => {
    const data = await $fetch(routes.api.loginPath({
      username: username.value,
      password: password.value,
    }));

    token.value = data.token;
    currentUser.value = data.user;
  };

  const logOut = () => {
    token.value = null;
    currentUser.value = null;
  };

  return {
    logIn,
    logOut,
    token,
    currentUser,
  };
};

export default useAuth;
