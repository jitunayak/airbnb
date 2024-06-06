/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column, Row } from '@/components';
import { styled } from '@/stitches.config';
import client from '@/utils/AxiosClient';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';

const Bookings: React.FC = () => {
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
    queryFn: () => getBookingByUser('fada82b0-3101-42d3-9b7b-0b7b386a4c78'),
    queryKey: ['user', 'bookings'],
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
              <Title>{booking.room.name}</Title>
              <p>{booking.room.summary}</p>
              <Row style={{ gap: '1rem' }}>
                <div style={{ marginTop: '.2rem' }}>
                  <div style={{}}>
                    <div style={{ fontSize: '1.4rem' }}>
                      {moment(booking.checkIn).format('D')}-
                      {moment(booking.checkOut).format('D')}
                    </div>
                  </div>
                  <div style={{ fontSize: '1.4rem' }}>
                    {moment(booking.checkIn).format('MMM')}
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    {moment(booking.checkIn).format('YYYY')}
                  </div>

                  {/* <div style={{ fontWeight: '500', marginTop: '.6rem' }}>
                    {booking.room.address}
                  </div> */}
                </div>
                <div>
                  <Price>${booking.price}</Price>
                  <Status>{booking.status}</Status>
                </div>
              </Row>
            </Column>

            <ThumbNail src={booking.room.images[0].url} />
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
  padding: '6rem',
  position: 'relative',
  width: '60rem',
});

const SubHeader = styled('p', {
  fontSize: '$h5',
  fontWeight: '600',
});
const Card = styled('div', {
  '&:hover': {
    boxShadow: '-1px 4px 10px 3px rgba(0,0,0,0.09)',
  },
  border1: '$gray200',
  borderRadius: '$m',
  boxShadow: '-1px 4px 10px 3px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'Row',
  margin: '1rem 0',
  my: '$1',
  //   padding: '1rem',
  width: '100%',
});

const Title = styled('span', {
  fontSize: '$h5',
  fontWeight: '500',
});

const Price = styled('span', {
  fontSize: '$h5',
  fontWeight: '500',
  width: 'fit-content',
});

const Status = styled('span', {
  backgroundColor: '$primary',
  borderRadius: '$m',
  color: 'white',
  fontSize: '$l',
  fontWeight: '600',
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
