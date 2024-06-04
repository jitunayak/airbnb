import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/rooms/')({
  component: () => <div>Hello /rooms/!</div>,
});
