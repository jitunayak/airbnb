import RoomPage from '@/pages/Room';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/rooms/$roomId')({
  component: () => <RoomPage />,
});
