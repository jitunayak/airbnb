import { useApi } from '@/hooks';
import { getLocalStorage } from '@/utils/LocalStorage';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { AirBnbIcon } from '../../assets';
import { styled } from '../../stitches.config';
import HostListing from './HostListing';

const HostingHeader: React.FC = () => {
  const navigate = useNavigate();

  const user = getLocalStorage('user');
  const { roomsApi } = useApi();

  const roomQuery = useQuery({
    queryFn: () =>
      roomsApi.getRoomsByHost('fada82b0-3101-42d3-9b7b-0b7b386a4c78'),
    queryKey: ['rooms', 'fada82b0-3101-42d3-9b7b-0b7b386a4c78'],
  });

  return (
    <Container>
      <span onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer' }}>
        <AirBnbIcon />
      </span>
      <HeaderWrapper>
        <WelcomeMsg>Welcome, {user?.given_name}!</WelcomeMsg>
        <OutlineButton onClick={() => navigate({ to: '/hosting/listing' })}>
          Add new property
        </OutlineButton>
      </HeaderWrapper>
      <SubHeader>Your listings</SubHeader>

      {roomQuery.isError && <p>Error: {roomQuery.error.message}</p>}
      {roomQuery.data?.length === 0 && <p>No listings found</p>}
      {roomQuery.isLoading && <p>Loading...</p>}
      {roomQuery.isSuccess && (
        <div
          style={{
            display: 'inline-flex',
            overflowX: 'scroll',
            width: '100%',
          }}
        >
          {roomQuery.data.map((room) => (
            <HostListing key={room.id} room={room} />
          ))}
        </div>
      )}
    </Container>
  );
};
export default HostingHeader;

const Container = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: '2rem',
  width: '116vh',
});

const HeaderWrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const OutlineButton = styled('button', {
  '&:hover': {
    backgroundColor: '#eee',
  },
  backgroundColor: 'transparent',
  border: '1px solid black',
  color: 'black',
  fontSize: '14px',
});

const WelcomeMsg = styled('p', {
  fontSize: '32px',
  fontWeight: '600',
});

const SubHeader = styled('p', {
  fontSize: '26px',
  fontWeight: '500',
});
