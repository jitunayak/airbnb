import React from 'react';

import { styled } from '../../../stitches.config';
import OnboardingForm from './OnboardingForm';

const NewListingOnboarding: React.FC = () => {
  return (
    <Container>
      <OnboardingForm />
    </Container>
  );
};

export default NewListingOnboarding;

const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
});
