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
import React, { useState } from 'react';

import { styled } from '../../../stitches.config';

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

const Amenities: React.FC = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleClick = (title: string) => {
    if (selectedAmenities.includes(title)) {
      setSelectedAmenities(
        selectedAmenities.filter((amenity) => amenity !== title)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, title]);
    }
  };

  return (
    <div>
      <h1>Amenities</h1>

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

      <p>
        Selected Amenities:
        <p style={{ fontWeight: '500' }}>{selectedAmenities.join(', ')}</p>
      </p>
    </div>
  );
};

export default Amenities;

const CardContainer = styled('div', {
  '&:hover': {
    border: '2px solid black',
  },
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  height: '8rem',
  padding: '1rem',
  transition: 'all 0.2s ease-in-out',
  variants: {
    isSelected: {
      true: {
        backgroundColor: '#fafafa',
        border: '2px solid black',
      },
    },
  },
  width: '14rem',
});

const CardWrapper = styled('div', {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'space-between',
  width: 'max-content',
});
