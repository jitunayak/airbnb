import { Column, Divider, Row } from '@/components';
import HeaderAnimate from '@/components/HeaderAnimate';
import { styled } from '@/stitches.config';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ShimmerFeaturedGallery, ShimmerTitle } from 'react-shimmer-effects';

import Reserve from './Reserve';
import { roomByQueryOptions } from './roomQueryOptions';

function RoomPage() {
  const { roomId } = useParams({ from: '/rooms/$roomId' });
  // const {
  //   data: room,
  //   isError,
  //   isLoading,
  // } = useSuspenseQuery(roomByQueryOptions(roomId));

  const {
    data: room,
    isError,
    isLoading,
  } = useQuery(roomByQueryOptions(roomId));

  useEffect(() => {
    document.title = `Airbnb - ${room?.name}`;
  }, [room]);

  if (!roomId) return <div>Room not found</div>;

  if (isLoading)
    return (
      <ShimmerLoaderWrapper>
        <ShimmerTitle gap={10} line={2} variant="primary" />
        <ShimmerFeaturedGallery
          card
          col={2}
          frameHeight={'60rem'}
          frameWidth={'60rem'}
          row={2}
        />
        <ShimmerTitle gap={10} line={2} variant="primary" />
      </ShimmerLoaderWrapper>
    );

  if (isError || !room) return <div>Something went wrong!</div>;

  return (
    <Container>
      <HeaderAnimate />
      <Divider
        orientation={'horizontal'}
        style={{ marginBottom: '2rem', marginTop: '3.6rem' }}
      />
      <PageContainer>
        {/* RoomPage {roomId} */}
        <Title>{room.name}</Title>
        <SubTitle>{room.address}</SubTitle>
        <ImageContainer>
          <ImageHover
            height={480}
            src={room.images[0]?.url}
            style={{ borderRadius: '1rem 0rem 0rem 1rem' }}
            width={580}
          />
          <ImageCollage>
            <ImageHover height={235} src={room.images[1]?.url} width={260} />
            <ImageHover
              height={235}
              src={room.images[2]?.url}
              style={{ borderRadius: '0rem 1rem 0rem 0rem' }}
              width={260}
            />
            <ImageHover height={235} src={room.images[3]?.url} width={260} />
            <ImageHover
              height={235}
              src={room.images[0]?.url}
              style={{ borderRadius: '0rem 0rem 1rem 0rem' }}
              width={260}
            />
          </ImageCollage>
        </ImageContainer>

        <Row>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '1rem',
              paddingRight: '2rem',
            }}
          >
            <HostTitle>Entire home hosted by {room?.user?.name}</HostTitle>
            <HostSubTitle>{room.summary}</HostSubTitle>
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '1px',
                marginBottom: '2rem',
                marginTop: '2rem',
              }}
            />
            <Column>
              <Row style={{ columnGap: '1rem' }}>
                <img
                  height={50}
                  src={room.user?.picture as string}
                  style={{ borderRadius: '50%' }}
                  width={50}
                />
                <Column>
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>
                    Hosted by {room.user.name}{' '}
                  </span>
                  <span
                    style={{
                      color: 'gray',
                      fontSize: '15px',
                      fontWeight: '400',
                    }}
                  >
                    2 months hosting
                  </span>
                </Column>
              </Row>
            </Column>
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '1px',
                marginBottom: '2rem',
                marginTop: '2rem',
              }}
            />
            <div
              style={{
                color: 'gray',
                fontSize: '15px',
                fontWeight: '400',
                paddingRight: '2rem',
              }}
            >
              {room.description}.
            </div>
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '1px',
                marginBottom: '2rem',
                marginTop: '2rem',
              }}
            />
          </div>

          <Reserve room={room} />
        </Row>
      </PageContainer>
    </Container>
  );
}

const Container = styled('div', {
  paddingTop: '2rem',
});

const ImageCollage = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
});

const ImageContainer = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',
  gap: '.5rem',
  marginTop: '1rem',
});

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '2rem',
  maxWidth: '70rem',
  width: '100%',
});

const Title = styled('span', {
  fontSize: '1.6rem',
  fontWeight: '500',
});

const SubTitle = styled('div', {
  fontSize: '1rem',
  fontWeight: '400',
});

const ImageHover = styled('img', {
  '&:hover': {
    filter: 'brightness(80%) saturate(120%)',
  },
  objectFit: 'cover',
});

const HostTitle = styled('div', {
  fontSize: '1.4rem',
  fontWeight: '500',
  mt: '1.2rem',
});

const HostSubTitle = styled('div', {
  color: '$textSecondary',
});

const ShimmerLoaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'center',
  marginTop: '2rem',
  width: '70rem',
});

export default RoomPage;
