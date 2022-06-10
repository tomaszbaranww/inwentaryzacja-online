import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/organisms/ContentWrapper/ContentWrapper';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useAuth } from 'hooks/useAuth';

export const ResetPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      await resetPassword(email);
      navigate('/reset-password-confirmation');
    } catch (e) {
      console.log(e);
    }
  };

  navigate('/reset-password-confirmation', { replace: true });
  return (
    <>
      <Header title="Problem z logowaniem" companyName="Compolexos"></Header>
      <ContentWrapper>
        <ViewWrapper as="form" onSubmit={handleSubmit}>
          <InfoLabel>Wpisz swój adres email:</InfoLabel>
          <FormField label="EMAIL" id="email" name="email" type="email" ref={emailRef} />
          <Button name="blue" type="submit">
            Wyślij
          </Button>
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
