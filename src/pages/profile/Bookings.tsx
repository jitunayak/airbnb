/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column, Divider, Row } from '@/components';
import { styled } from '@/stitches.config';
import client from '@/utils/AxiosClient';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import dayjs from 'dayjs';
import { Map } from 'lucide-react';
import React from 'react';

const Bookings: React.FC = () => {
  const { user } = useKindeAuth();
  const getBookingByUser = async (userId: string) => {
    const result = await client.get('/api/v1/bookings', {
      params: { userId },
    });

    return result.data;
  };

  const {
    data: bookings,
    isError,
    isPending,
  } = useQuery({
    queryFn: () => getBookingByUser(user?.id || ''),
    queryKey: ['user', 'bookings', user?.id],
  });

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Opps!😰 refresh the page</div>;

  return (
    <Container>
      <div>
        <h1>Trips</h1>
        <SubHeader>Upcoming reservations</SubHeader>
      </div>
      <div>
        {bookings?.map((booking: any) => (
          <Card key={booking.id}>
            <Column style={{ paddingLeft: '1rem', paddingTop: '.6rem' }}>
              <div>
                <Title>{booking.room.name}</Title>
                <Sumamry>{booking.room.summary}</Sumamry>
              </div>
              <Divider
                color={'secondary'}
                orientation={'horizontal'}
                style={{ marginBottom: '.6rem', marginTop: '.6rem' }}
              />
              <Row style={{ gap: '1rem' }}>
                <div
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: '.2rem',
                    padding: '1rem',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.4rem' }}>
                      {dayjs(booking.checkIn).format('D')}-
                      {dayjs(booking.checkOut).format('D')}
                    </div>
                  </div>
                  <div style={{ fontSize: '1.4rem' }}>
                    {dayjs(booking.checkIn).format('MMM')}
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    {dayjs(booking.checkIn).format('YYYY')}
                  </div>

                  {/* <div style={{ fontWeight: '500', marginTop: '.6rem' }}>
                    {booking.room.address}
                  </div> */}
                </div>
                <Divider color={'secondary'} orientation={'vertical'} />
                <Column>
                  <div
                    style={{
                      alignItems: 'flex-start',
                      display: 'flex',
                      marginTop: '1rem',
                    }}
                  >
                    <Price>
                      {booking.currency} {booking.price}
                    </Price>
                    <Status>
                      {dayjs(booking.checkIn).diff(dayjs(), 'days') < 0
                        ? 'Expired'
                        : booking.status}
                    </Status>
                  </div>
                  <Row
                    style={{
                      alignItems: 'center',
                      display: 'inline-flex',
                      gap: '.6rem',
                      marginTop: '1rem',
                    }}
                  >
                    <Map size={16} />
                    <Link
                      style={{ fontWeight: '400', textDecoration: 'none' }}
                      to={'/booking/' + booking.id}
                    >
                      Get direction
                    </Link>
                  </Row>
                </Column>
              </Row>
            </Column>
            <div>
              {dayjs(booking.checkIn).diff(dayjs(), 'days') > 0 ? (
                <div
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '1rem',
                    padding: '1rem',
                    width: '2rem',
                  }}
                >
                  {Math.abs(dayjs(booking.checkIn).diff(dayjs(), 'days'))} days
                  left
                </div>
              ) : null}
            </div>

            <ThumbNail src={booking.images[0].url} />
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Bookings;

const Container = styled('div', {
  alignItems: 'initial',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  px: '6rem',
  width: '60rem',
});

const SubHeader = styled('p', {
  fontSize: '$l',
  fontWeight: '500',
});
const Card = styled('div', {
  '&:hover': {
    boxShadow: '-1px 4px 10px 3px rgba(0,0,0,0.09)',
  },
  border1: '$gray200',
  borderRadius: '$m',
  boxShadow: '-1px 4px 10px 3px rgba(0,0,0,0.05)',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',

  flexDirection: 'Row',
  margin: '1rem 0',
  my: '$6',
  //   padding: '1rem',
  width: '100%',
});

const Title = styled('span', {
  fontSize: '$l',
  fontWeight: '400',
});

const Sumamry = styled('div', {
  color: '$gray400',
  fontSize: '$s',
  fontWeight: '400',
  marginTop: '1rem',
});

const Price = styled('span', {
  fontSize: '$h6',
  fontWeight: '400',
  width: 'fit-content',
});

const Status = styled('span', {
  backgroundColor: '$gray200',
  borderRadius: '$s',
  color: '$gray800',
  fontSize: '$s',
  fontWeight: '500',
  marginLeft: '$3',
  px: '$2',
  py: '$1',
  width: 'fit-content',
});

const ThumbNail = styled('img', {
  borderBottomRightRadius: '$m',
  borderTopRightRadius: '$m',
  height: '240px',
  objectFit: 'fill',
  width: '600px',
});
