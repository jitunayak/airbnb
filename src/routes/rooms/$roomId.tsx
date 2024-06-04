import RoomPage from '@/pages/Room';
import { roomByQueryOptions } from '@/pages/Room/roomQueryOptions';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rooms/$roomId')({
  component: () => <RoomPage />,
  loader: ({ context: { queryClient }, params }) => {
    queryClient.ensureQueryData(roomByQueryOptions(params.roomId));
  },
  staleTime: 10_000,
});
