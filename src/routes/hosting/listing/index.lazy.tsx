import NewListingOnboarding from '@/pages/Hosting/NewListing';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/hosting/listing/')({
  component: () => <NewListingOnboarding />,
});
