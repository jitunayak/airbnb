import { LeftArrowIcon, RightArrowIcon } from '@/assets';
import { useApi } from '@/hooks';
import { IRoom } from '@/types';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { styled } from '@stitches/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { HeartIcon, StarIcon } from 'lucide-react';
import React, { useState } from 'react';

interface IProps {
  isWishListed: boolean;
  item: IRoom;
}
const HomeResultItem: React.FC<IProps> = ({ isWishListed = false, item }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const { user } = useKindeAuth();
  const { wishlistApi } = useApi();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const addToWishListMutation = useMutation({
    mutationFn: (data: IRoom) =>
      wishlistApi.addToWishlists(user?.id || '', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] });
      //   queryClient.setQueryData(["wishlists"], (old: any) => {
      //     return old?.length > 0 ? [...old, newData] : [newData];
      //   });
    },
  });

  const removeFromWishListMutation = useMutation({
    mutationFn: (data: IRoom) =>
      wishlistApi.removeFromWishlists(user?.id || '', data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [user?.id || '', 'wishlists'],
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData(['wishlists'], (old: any) => {
        return old?.length > 0
          ? old.filter((item: IRoom) => item.id !== data.id)
          : [];
      });
    },
  });

  const thumbnailIndexIncrement = () => {
    setThumbnailIndex((prev) => (prev < item.images.length ? prev + 1 : prev));
  };
  const thumbnailIndexDecrement = () => {
    setThumbnailIndex((prev) => (prev !== 0 ? prev - 1 : prev));
  };
  const isLastIndex = () => thumbnailIndex === item.images.length - 1;
  const isFirstIndex = () => thumbnailIndex === 0;

  const imagePositionIndicatorRenderer = (index: number) => (
    <span
      style={{
        color: 'white',
        fontSize: thumbnailIndex === index ? '50px' : '40px',
        opacity: thumbnailIndex === index ? '1' : '.7',
        userSelect: 'none',
      }}
      key={index}
    >
      .
    </span>
  );

  const imageSlidingIndicator = (item: IRoom) => {
    return (
      <div>
        {Array(item.images.length)
          .fill(1)
          .map((__, index) => {
            return imagePositionIndicatorRenderer(index);
          })}
      </div>
    );
  };

  const ImageSliderControl = () => {
    return (
      <React.Fragment>
        {isFirstIndex() ? (
          <span></span>
        ) : (
          <RoundIcon onClick={thumbnailIndexDecrement}>
            <LeftArrowIcon />
          </RoundIcon>
        )}
        {!isLastIndex() && (
          <RoundIcon onClick={thumbnailIndexIncrement}>
            <RightArrowIcon />
          </RoundIcon>
        )}
      </React.Fragment>
    );
  };

  return (
    <ItemWrapper>
      <ImageWrapper>
        <CardImageTransparent
          onClick={() =>
            navigate({
              params: {
                roomId: item.id,
              },
              to: `/rooms/$roomId`,
            })
          }
        />
        <CardImage
          height={300}
          src={item.images[thumbnailIndex].url}
          width={300}
        />
        <HeartIconWrapper
          onClick={() =>
            isWishListed
              ? removeFromWishListMutation.mutateAsync(item as IRoom)
              : addToWishListMutation.mutateAsync(item as IRoom)
          }
        >
          <HeartIcon color={isWishListed ? 'red' : 'transparent'} />
        </HeartIconWrapper>
        <ImageSliderControlWrapper>
          <ImageSliderControl />
        </ImageSliderControlWrapper>
        <ImagePositionIndicator>
          {imageSlidingIndicator(item)}
        </ImagePositionIndicator>
      </ImageWrapper>
      <CardTitle
        params={{
          roomId: item.id,
        }}
        to="/rooms/$roomId"
      >
        <Title>{item.address}</Title>
        <RatingWrapper>
          <StarIcon size={16} />
          <span style={{ fontSize: '13px' }}>{item.rating}</span>
        </RatingWrapper>
      </CardTitle>
      <div style={{ marginTop: '1rem' }}>
        <Price>
          ₹{(item.price.discountedPrice ?? item.price).toLocaleString()}
        </Price>
        <span style={{ fontSize: '13px', fontWeight: 'normal' }}> night</span>
      </div>
    </ItemWrapper>
  );
};

const CardTitle = styled(Link, {
  '&:hover': {
    color: 'black',
  },
  color: 'black',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '.5rem',
  textDecoration: 'none',
  userSelect: 'none',
});

const RatingWrapper = styled('span', {
  alignItems: 'center',
  display: 'flex',
  gap: '.4rem',
  justifyContent: 'center',
});
const ItemWrapper = styled('div', {});

const HeartIconWrapper = styled('span', {
  cursor: 'pointer',
  paddingLeft: '260px',
  paddingTop: '10px',
  position: 'absolute',
});
const Title = styled('span', { fontSize: '14px', fontWeight: '600' });

const Price = styled('span', { fontSize: '13px', fontWeight: '600' });

const RoundIcon = styled('span', {
  '&:hover': {
    opacity: '1',
    scale: '1',
  },
  backgroundColor: 'White',
  borderRadius: '100%',
  display: 'flex',
  height: 'min-content',
  opacity: '0',
  padding: '0.5rem',
  scale: '0.9',
  transition: 'all 0.5s ease-in-out',
  userSelect: 'none',
  width: 'min-content',
});

const ImageWrapper = styled('div', {
  '&:hover': {
    [`& ${RoundIcon}`]: {
      opacity: '.8',
    },
  },
  display: 'flex',
  flexDirection: 'column',
  height: '300px',
  userSelect: 'none',
  width: '300px',
});
const CardImage = styled('img', {
  borderRadius: '1rem',
  objectFit: 'cover',
  overflow: 'hidden',
  position: 'absolute',
  userSelect: 'none',
  zIndex: '-1',
});

const CardImageTransparent = styled('div', {
  height: '300px',
  marginLeft: '3rem',
  opacity: '1',
  position: 'absolute',
  userSelect: 'none',
  width: '210px',
  zIndex: '10',
});

const ImageSliderControlWrapper = styled('span', {
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '45%',
  userSelect: 'none',
  width: '90%',
});

const ImagePositionIndicator = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '25%',
  userSelect: 'none',
});
export default HomeResultItem;
