export default defineNuxtRouteMiddleware((to) => {
  const { routes } = useRoutes();

  return navigateTo(routes.loginPath());
});
