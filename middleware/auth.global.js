export default defineNuxtRouteMiddleware((to) => {
  const { routes } = useRoutes();
  const { token } = useAuth();
  const runtimeConfig = useRuntimeConfig();

  if (!token.value && !runtimeConfig.public.GUEST_PAGES.includes(to.name)) {
    return navigateTo(routes.loginPath());
  }
});
