import { styled } from '@/stitches.config';
import {
  AirVent,
  CookingPot,
  ParkingCircle,
  Refrigerator,
  Tv,
  WashingMachine,
  Waves,
  WifiIcon,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const defaultIconProperties = {
  size: 28,
  strokeWidth: '1.6',
};

const Card: React.FC<{
  icon: JSX.Element;
  onClick: () => void;
  title: string;
}> = ({ icon, onClick, title }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <CardContainer
      onClick={() => {
        onClick();
        handleClick();
      }}
      isSelected={isSelected}
    >
      {React.cloneElement(icon, defaultIconProperties)}
      <p style={{ fontWeight: '500' }}>{title}</p>
    </CardContainer>
  );
};

const Amenities: React.FC<{
  onSubmit: (selectedAmenities: string[]) => void;
}> = ({ onSubmit }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleClick = (title: string) => {
    if (selectedAmenities.includes(title)) {
      setSelectedAmenities(
        selectedAmenities.filter((amenity) => amenity !== title),
      );
    } else {
      setSelectedAmenities([...selectedAmenities, title]);
    }
  };

  useEffect(() => {
    onSubmit(selectedAmenities);
  }, [onSubmit, selectedAmenities]);

  return (
    <div>
      <Header>Amenities</Header>

      <CardWrapper>
        <Card
          icon={<WifiIcon />}
          onClick={() => handleClick('Wifi')}
          title={'Wifi'}
        />
        <Card icon={<Tv />} onClick={() => handleClick('TV')} title={'TV'} />
        <Card
          icon={<CookingPot />}
          onClick={() => handleClick('Kitchen')}
          title={'Kitchen'}
        />
        <Card
          icon={<WashingMachine />}
          onClick={() => handleClick('Washing Machine')}
          title={'Washing Machine'}
        />
        <Card
          icon={<AirVent />}
          onClick={() => handleClick('Air Conditioner')}
          title={'Air Conditioner'}
        />
        <Card
          icon={<ParkingCircle />}
          onClick={() => handleClick('Parking')}
          title={'Parking'}
        />
        <Card
          icon={<Refrigerator />}
          onClick={() => handleClick('Refrigerator')}
          title={'Refrigerator'}
        />
        <Card
          icon={<Waves />}
          onClick={() => handleClick('Swimming Pool')}
          title={'Swimming Pool'}
        />
      </CardWrapper>

      <AmenitiesContainer>
        {selectedAmenities.length > 0 && 'Selected Amenities: '}
        <span style={{ fontWeight: '500' }}>
          {selectedAmenities.join(', ') || 'No Amenities Selected'}
        </span>
      </AmenitiesContainer>
    </div>
  );
};

export default Amenities;

const Header = styled('p', {
  fontSize: '$h1',
  fontWeight: 'bold',
  marginBottom: '$5',
});

const CardContainer = styled('div', {
  '&:hover': {
    border2: 'black',
  },
  border1: '$gray300',
  borderRadius: '$m',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  height: '7rem',
  pt: '$3',
  px: '$3',
  transition: 'all .2s ease-in-out',
  variants: {
    isSelected: {
      true: {
        backgroundColor: '$gray100',
        border2: 'black',
      },
    },
  },
  width: '14rem',
});

const CardWrapper = styled('div', {
  display: 'grid',
  gap: '$3',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'space-between',
  width: 'max-content',
});

const AmenitiesContainer = styled('div', {
  mb: '$5',
  mt: '$5',
});
