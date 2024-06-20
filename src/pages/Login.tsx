import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useEffect } from 'react';

export const Login = () => {
  const { isAuthenticated, login } = useKindeAuth();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/';
    } else {
      login();
    }
  }, [isAuthenticated, login]);

  return <div>Login</div>;
};
