import { Footer } from '@/components/Footer';
import HomeResults from '@/components/HomeResults';
import StickyHeader from '@/components/StickyHeader';
import { styled } from '@/stitches.config';
import { getLocalStorage } from '@/utils/LocalStorage';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectUri = getLocalStorage('redirectTo');
    if (redirectUri) {
      navigate({ to: redirectUri });
      localStorage.removeItem('redirectTo');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <StickyHeader />
      <HomeResults />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});
