import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import APUsers from 'components/organisms/APUsers/APUsers';
import APFixedAssets from 'components/organisms/APFixedAssets/APFixedAssets';
import LoginScreen from 'views/LoginScreen';
import ResetPassword from 'views/ResetPassword';
import ResetPasswordConfirmation from 'views/ResetPasswordConfirmation';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<APUsers />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-confirmation" element={<ResetPasswordConfirmation />} />
        <Route path="/APUsers" element={<APUsers />} />
        <Route path="/APFixedAssets" element={<APFixedAssets />} />
      </Routes>
    </Wrapper>
  );
};

const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<LoginScreen />} />
      </Routes>
    </Wrapper>
  );
};

const Root = () => {
  const auth = useAuth();
  console.log(auth.user);

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
