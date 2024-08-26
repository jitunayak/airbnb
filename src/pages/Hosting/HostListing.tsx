import { Button } from '@/components/Button';
import { styled } from '@/stitches.config';
import { IRoom } from '@/types';
import { useNavigate } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

type IProps = {
  room: IRoom;
};
const HostListing: React.FC<IProps> = ({ room }) => {
  const navigate = useNavigate();
  const [isHovered, setisHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <Title>{room.name.substring(0, 20)}...</Title>
      <img
        style={{
          borderRadius: '4px',
          objectFit: 'cover',
        }}
        height={300}
        src={room.images[0].url}
        width={'100%'}
      />
      <span>₹{room.price.discountedPrice}</span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default HostListing;

const EditDeleteWrapper = styled('div', {
  bottom: 10,
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  pb: '$2',
  pl: '$2',
  position: 'absolute',
  right: 20,
});

const Card = styled('div', {
  border1: '$gray200',
  borderRadius: '8px',
  boxShadow: '$s',
  mx: '$2',
  my: '$2',
  padding: '$2',
  position: 'relative',
});

const Title = styled('div', {
  fontSize: '$s',
  fontWeight: '500',
  marginBottom: '1rem',
  width: '100%',
});
