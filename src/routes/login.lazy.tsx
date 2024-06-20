import { Login } from '@/pages/Login';
import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/login')({
  component: () => <Login />,
});
