import Hosting from '@/pages/Hosting';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/hosting/')({
  component: () => <Hosting />,
});
