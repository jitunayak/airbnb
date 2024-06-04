import RoomPage from '@/pages/Room';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rooms/$roomId')({
  component: () => <RoomPage />,
  staleTime: 10_000,
});
