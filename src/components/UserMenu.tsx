import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { styled } from '@stitches/react';
import { Link } from '@tanstack/react-router';

export default function UserMenu({
  menuRef,
}: {
  menuRef: React.RefObject<HTMLDivElement>;
}) {
  const { logout } = useKindeAuth();
  return (
    <FloatWrapper ref={menuRef}>
      <MenuItem variant="primary">Messages</MenuItem>
      <MenuItem variant="primary">Notifications</MenuItem>
      <MenuItem variant="primary">
        <Link style={{ color: 'black' }} to="/profile/bookings">
          Bookings
        </Link>
      </MenuItem>
      {/* <MenuItem variant="primary">'Trips</MenuItem> */}
      <MenuItem variant="primary">
        <Link style={{ display: 'flex' }} to="/wishlists">
          Wishlists
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem variant="secondary">Airbnb your home</MenuItem>
      <MenuItem variant="secondary">Account</MenuItem>
      <Divider />
      <MenuItem variant="secondary">Help Center</MenuItem>
      <MenuItem onClick={logout} variant="danger">
        Logout
      </MenuItem>
    </FloatWrapper>
  );
}

const FloatWrapper = styled('div', {
  // backgroundColor: "White",
  backdropFilter: 'blur(40px)',
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  border: '1px solid #eee',
  borderRadius: '.6rem',
  boxShadow: '-1px 4px 10px 3px rgba(0,0,0,0.1);',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  padding: '.6rem 0rem',
  position: 'absolute',
  right: '.5rem',
  top: '3rem',
  zIndex: 11,
});
const Divider = styled('div', {
  backgroundColor: '#eee',
  height: '1px',
  margin: '.8rem 0rem',
  width: '100%',
});
const MenuItem = styled('span', {
  '&:hover': {
    backgroundColor: '#f6f6f6',
  },
  fontSize: '13px',
  minWidth: '12rem',
  padding: '.6rem 1rem',
  variants: {
    variant: {
      danger: {
        '&:hover': {
          fontWeight: '500',
        },
        color: 'red',
      },
      primary: {
        color: 'black',
        fontWeight: '500',
      },
      secondary: {
        color: 'gray',
        fontWeight: '400',
      },
    },
  },
});
