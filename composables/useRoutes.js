const useRoutes = () => {
  const runtimeConfig = useRuntimeConfig();
  const BASE_API_PATH = runtimeConfig.public.USE_MOCK_API === 'true' ? '/api/mock' : '/api/v1';

  const routes = {
    rootPath: () => '/',
    profilePath: ({ id } = {}) => (id ? `/profile/${id}` : '/profile'),
    loginPath: () => '/login',
    ticketsPath: () => '/tickets',
    ticketPath: ({ id }) => `/tickets/${id}`,
    api: {
      ticketsPath: () => [BASE_API_PATH, 'tickets'].join('/'),
      ticketPath: ({ id }) => [BASE_API_PATH, 'tickets', id].join('/'),
      userPath: ({ id }) => [BASE_API_PATH, 'users', id].join('/'),
      loginPath: () => [BASE_API_PATH, 'login'].join('/'),
    },
  };

  return { routes };
};

export default useRoutes;
