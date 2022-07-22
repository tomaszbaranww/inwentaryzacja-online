import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table } from 'components/organisms/Table/Table';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Footer } from 'components/organisms/Footer/Footer';
import { Button } from 'components/organisms/Button/Button';
import { Loading } from 'components/molecules/Loading/Loading';

export const UserPanelList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateToCreateUser = () => {
    navigate('/user-management/create');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://localhost:5001/api/user/onlyall');

        setData(result.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Uzytkownicy" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading ? (
              <>
                <Table dane={data} dataName="user" id="usersTable" />
                <Button name="green" text="Dodaj" onClick={navigateToCreateUser} />
              </>
            ) : (
              <Loading />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};
