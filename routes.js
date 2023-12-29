const BASE_API_PATH = '/api/v1';

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

export default routes;
