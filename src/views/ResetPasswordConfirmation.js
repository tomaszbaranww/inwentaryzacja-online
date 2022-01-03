import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleLeftTop } from 'components/atoms/TitleLeftTop/TitleLeftTop';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { InfoLabel } from 'components/atoms/InfoLabel/InfoLabel';
import { Button } from 'components/atoms/Button/Button';

const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/', { replace: true });
  return (
    <>
      <TitleLeftTop>Problem z logowaniem</TitleLeftTop>
      <ViewWrapper>
        <InfoLabel>Mail został wysłany!</InfoLabel>
        <InfoLabel>Sprawdź swoją skrzynkę odbiorczą</InfoLabel>
        <Button type="submit" onClick={handleClick}>
          Powrót
        </Button>
      </ViewWrapper>
    </>
  );
};

export default ResetPasswordConfirmation;
