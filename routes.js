const routes = {
  rootPath: () => '/',
  profilePath: () => '/profile',
  loginPath: () => '/login',
  ticketsPath: () => '/tickets',
  ticketPath: (id) => `/ticket/${id}`,
  api: {
    ticketsPath: () => '/tickets',
    ticketPath: (id) => `/ticket/${id}`,
  },
};

export default routes;
