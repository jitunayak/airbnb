import Messages from '@/pages/Messages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/messages')({
  component: () => <Messages />,
});
