import Bookings from '@/pages/profile/Bookings';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile/bookings/')({
  component: () => <Bookings />,
});
