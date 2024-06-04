import { styled } from '@/stitches.config';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useNavigate } from '@tanstack/react-router';
import { MapPin, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { AirBnbIcon, HumBurgerIcon } from '../assets';
import { useOutsideClick } from '../hooks';
import { Button } from './Button';
import { Row } from './Common';
import { Divider } from './Divider';
import UserMenu from './UserMenu';

const locations = [
  'Banglore',
  'London',
  'Paris',
  'New York',
  'San Francisco',
  'Tokyo',
];

function Header() {
  const navigate = useNavigate();
  const { getToken, isAuthenticated, isLoading, login, user } = useKindeAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => setShowUserMenu(false));

  const [selectLocation, setSelectLocation] =
    useState<(typeof locations)[number]>('');
  const [showLocationOtions, setShowLocationOtions] = useState(false);

  //   console.log(user && user);
  //   console.log(user && getPermissions().permissions);

  useEffect(() => {
    if (!isAuthenticated) return;
    getToken().then((token) => {
      if (token) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
  }, [getToken, isAuthenticated, user]);

  const handleSwitchToHosting = () => {
    navigate({ to: '/hosting' });
  };

  return (
    <HeaderWrapper>
      <span onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer' }}>
        <AirBnbIcon />
      </span>
      <Button
        color="outline"
        shadow="1"
        style={{ marginLeft: '4rem', position: 'relative' }}
      >
        <Button
          style={{
            cursor: 'pointer',
            fontWeight: selectLocation ? 'bold' : 'normal',
          }}
          color="text"
          onClick={() => setShowLocationOtions(!showLocationOtions)}
        >
          {selectLocation || 'Anywhere'}
        </Button>
        {showLocationOtions && (
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid #eee',
              borderRadius: '5px',
              left: '0',
              position: 'absolute',
              top: '3.5rem',
              zIndex: '1',
            }}
          >
            {locations.map((location) => (
              <Row
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  justifyContent: 'flex-start',
                  paddingLeft: '1rem',
                }}
              >
                <MapPin size={15} strokeWidth={2.6} />
                <Button
                  onClick={() => {
                    setSelectLocation(location);
                    setShowLocationOtions(false);
                  }}
                  color="text"
                  key={location}
                >
                  {location}
                </Button>
              </Row>
            ))}
          </div>
        )}
        <Divider />
        <Button color="text">Any week</Button>
        <Divider />
        <Button color="textSecondary">Add guest</Button>
        <Button color="primary">
          Search <Search size={14} strokeWidth={2.6} />
        </Button>
      </Button>

      <GroupWrapper>
        <Button color={'lightText'} onClick={() => handleSwitchToHosting()}>
          Switching to hosting
        </Button>
        {isAuthenticated && !isLoading && user && (
          <Button
            color={'outline'}
            gap="s"
            onClick={() => setShowUserMenu(!showUserMenu)}
            onMouseEnter={() => setShowUserMenu(true)}
            round={'l'}
            size={'s'}
          >
            <HumBurgerIcon />
            <RoundIcon>{user?.given_name?.charAt(0)}</RoundIcon>
          </Button>
        )}
        {showUserMenu && <UserMenu menuRef={menuRef} />}
        {!user && !isLoading && (
          <Button onClick={() => login({})}>Login</Button>
        )}
      </GroupWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0rem 2rem',
});
const RoundIcon = styled('span', {
  alignItems: 'center',
  backgroundColor: 'black',
  borderRadius: '100%',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '10px',
  fontWeight: '500',
  height: '16px',
  justifyContent: 'center',
  padding: '0.5rem',
  width: '16px',
});

const GroupWrapper = styled('span', {
  alignItems: 'center',
  display: 'inline-flex',
  gap: '1rem',
  justifyContent: 'center',
  position: 'relative',
});
