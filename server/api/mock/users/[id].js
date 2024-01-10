import { getUser } from '@/server/lib/users';

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  return getUser({ id });
});
