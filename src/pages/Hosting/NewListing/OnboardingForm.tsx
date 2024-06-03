import { styled } from '../../../stitches.config';
import OnboardingFormStep1 from './Steps/Step1';

const OnboardingForm: React.FC = () => {
  return (
    <Container>
      <OnboardingFormStep1 />
    </Container>
  );
};

export default OnboardingForm;

const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem',
  width: '60rem',
});
