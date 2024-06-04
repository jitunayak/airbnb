import Wishlists from '@/pages/Wishlists';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/wishlists')({
  component: () => <Wishlists />,
});
