import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { Footer } from "../components/Footer";
import HomeResults from "../components/HomeResults";
import StickyHeader from "../components/StickyHeader";
import { getLocalStorage } from "../utils/LocalStorage";

function Home() {

  const navigate = useNavigate();
  useEffect(() => {
    const redirectUri = getLocalStorage('redirectTo')
    console.log(redirectUri)
    if (redirectUri) {
      navigate({ to: redirectUri });
      localStorage.removeItem('redirectTo');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <StickyHeader />
      <HomeResults />
      <Footer />
    </>
  );
}

export default Home;
