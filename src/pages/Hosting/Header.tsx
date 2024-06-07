import { getLocalStorage } from '@/utils/LocalStorage';
import { useNavigate } from '@tanstack/react-router';

import { AirBnbIcon } from '../../assets';
import { styled } from '../../stitches.config';

const HostingHeader: React.FC = () => {
  const navigate = useNavigate();

  const user = getLocalStorage('user');

  return (
    <Container>
      <span onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer' }}>
        <AirBnbIcon />
      </span>
      <HeaderWrapper>
        <WelcomeMsg>Welcome, {user?.given_name}!</WelcomeMsg>
        <OutlineButton onClick={() => navigate({ to: '/hosting/listing' })}>
          Add your listing
        </OutlineButton>
      </HeaderWrapper>
      <SubHeader>Your listings</SubHeader>
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
  width: '100vh',
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
