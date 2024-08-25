import { Button } from '@/components/Button';
import { useApi } from '@/hooks';
import { getLocalStorage } from '@/utils/LocalStorage';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { PencilIcon, Trash2Icon } from 'lucide-react';

import { AirBnbIcon } from '../../assets';
import { styled } from '../../stitches.config';

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
            <Card>
              <div style={{ fontWeight: '500', marginBottom: '1rem' }}>
                {room.name.substring(0, 20)}...
              </div>
              <img
                style={{
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
                height={300}
                src={room.images[0].url}
                width={300}
              />
              <EditDeleteWrapper>
                <Button
                  color={'outline'}
                  onClick={() => navigate({ to: `/hosting/edit/${room.id}` })}
                  round={'xs'}
                >
                  <PencilIcon size={16} />
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you want to delete this listing?',
                      )
                    ) {
                      // roomsApi.deleteRoom(room.id).then(() => {
                      //   roomQuery.refetch();
                      // });
                    }
                  }}
                  style={{
                    color: 'red',
                  }}
                  color={'outline'}
                  round={'xs'}
                >
                  <Trash2Icon size={16} />
                </Button>
              </EditDeleteWrapper>
            </Card>
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

const EditDeleteWrapper = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  pb: '$2',
  pl: '$2',
});

const Card = styled('div', {
  border1: '$gray200',
  borderRadius: '8px',
  boxShadow: '$s',
  mx: '$2',
  my: '$2',
  padding: '$2',
});
