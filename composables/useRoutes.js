const useRoutes = () => {
  const runtimeConfig = useRuntimeConfig();
  const BASE_API_PATH = runtimeConfig.public.USE_MOCK_API === 'true' ? '/api/mock' : '/api/v1';

  const routes = {
    rootPath: () => '/',
    profilePath: () => '/profile',
    loginPath: () => '/login',
    ticketsPath: () => '/tickets',
    ticketPath: ({ id }) => `/tickets/${id}`,
    api: {
      ticketsPath: () => [BASE_API_PATH, 'tickets'].join('/'),
      ticketPath: ({ id }) => [BASE_API_PATH, 'tickets', id].join('/'),
    },
  };

  return { routes };
};

export default useRoutes;
