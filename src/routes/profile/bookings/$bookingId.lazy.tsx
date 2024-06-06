import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile/bookings/$bookingId')({
  component: () => <div>Hello /profile/bookings/$bookingId!</div>,
});
