import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { requests } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Wrapper, InnerWrapper } from 'assets/styles/TableComponents';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Table } from 'components/organisms/Table/Table';
import { Button } from 'components/organisms/Button/Button';
import { LoadingOrError } from 'components/molecules/LoadingOrError/LoadingOrError';
import { Footer } from 'components/organisms/Footer/Footer';

export const InventoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToCreateInventory = () => {
    navigate('/inventory-management/create');
  };

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requests.getInventories);
      setData(result.data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header title="Inwentaryzacje" companyName="Compolexos" hasLogoutButton />
      <ContentWrapper>
        <Wrapper>
          <InnerWrapper>
            {!loading && !error && data?.length ? (
              <>
                <Table dane={data} dataName="inventory" id="inventoryTable" />
                <Button name="green" text="Dodaj" onClick={navigateToCreateInventory} />
              </>
            ) : (
              <LoadingOrError msg={error ? error : 'Loading...'} />
            )}
          </InnerWrapper>
        </Wrapper>
      </ContentWrapper>
      <Footer hasBackToPrevPageButton />
    </>
  );
};