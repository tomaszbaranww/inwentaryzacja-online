import axios from 'api/axios';
import { Button } from 'components/organisms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper, LeftSide, RightSide } from 'components/organisms/Footer/Footer.styles';
import { requests } from 'api/requests';

export const Footer = ({
  hasBackToPrevPageButton,
  hasBackToAdminPanelButton,
  hasBackToAccountantPanelButton,
  hasDeleteUserButton,
  hasDeleteFixedAssetButton,
  hasDeleteInventoryButton,
  hasDeleteIssueButton,
  hasCreateUserButton,
  hasCreateFixedAssetButton,
  hasCreateInventoryButton,
  hasCreateIssueButton,
  hasSaveEditedUserButton,
  hasSaveEditedFixedAssetButton,
  hasSaveEditedInventoryButton,
  hasAbortInventoryButton,
  hasConfirmUserAsset,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToPrevPage = () => {
    navigate(-1);
  };

  const navigateToUserManagement = () => {
    navigate(requests.userManagement);
  };

  const navigateToFixedAssetManagement = () => {
    navigate(requests.fixedAssetManagement);
  };

  const navigateToInventoryManagement = () => {
    navigate(requests.inventoryManagement);
  };

  const navigateToIssueManagement = () => {
    navigate(requests.issueManagement);
  };

  const navigateToConfirmInventory = () => {
    navigate(requests.userFixedAssetConfirm);
  };

  const navigateToAdminPanel = () => {
    navigate(requests.adminPanel);
  };

  const navigateToAccountantPanel = () => {
    navigate(requests.accountantPanel);
  };

  const deleteUser = () => {
    try {
      axios.delete(`${requests.singleUser}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
    } catch (error) {
      console.error(error.message);
    }

    alert('Usunięto użytkownika');
    navigateToUserManagement();
  };

  const deleteFixedAsset = () => {
    try {
      axios.delete(`${requests.singleFixedAsset}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
    } catch (error) {
      console.error(error.message);
    }

    alert('Usunięto srodek trwaly');
    navigateToFixedAssetManagement();
  };

  const deleteInventory = () => {
    try {
      axios.delete(`${requests.singleInventory}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
    } catch (error) {
      console.error(error.message);
    }

    alert('Usunięto inwentaryzacje');
    navigateToInventoryManagement();
  };

  const deleteIssue = () => {
    try {
      axios.delete(`${requests.singleIssue}/${id}`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
      });
    } catch (error) {
      console.error(error.message);
    }

    alert('Usunięto zgłoszenie');
    navigateToIssueManagement();
  };

  return (
    <Wrapper>
      <LeftSide>
        {hasBackToPrevPageButton && <Button name="red" text="Cofnij" onClick={navigateToPrevPage} />}
        {hasBackToAdminPanelButton && <Button name="red" text="Cofnij" onClick={navigateToAdminPanel} />}
        {hasBackToAccountantPanelButton && <Button name="red" text="Cofnij" onClick={navigateToAccountantPanel} />}
        {hasDeleteUserButton && <Button name="red" text="Usuń" type="submit" onClick={deleteUser} />}
        {hasDeleteFixedAssetButton && <Button name="red" text="Usuń" onClick={deleteFixedAsset} />}
        {hasDeleteInventoryButton && <Button name="red" text="Usuń" onClick={deleteInventory} />}
        {hasDeleteIssueButton && <Button name="red" text="Usuń" onClick={deleteIssue} />}
      </LeftSide>
      <RightSide>
        {hasCreateUserButton && <Button name="green" text="Zatwierdź" type="submit" form="userCreateForm" />}
        {hasCreateFixedAssetButton && <Button name="green" text="Zatwierdź" type="submit" form="fixedAssetCreateForm" />}
        {hasCreateInventoryButton && <Button name="green" text="Zatwierdź" type="submit" form="inventoryCreateForm" />}
        {hasCreateIssueButton && <Button name="green" text="Zatwierdź" type="submit" form="issueCreateForm" />}
        {hasSaveEditedUserButton && <Button name="green" text="Zatwierdź" type="submit" form="userEditForm" />}
        {hasSaveEditedFixedAssetButton && <Button name="blue" text="Zapisz" type="submit" form="fixedAssetEditForm" />}
        {hasSaveEditedInventoryButton && <Button name="blue" text="Zapisz" type="submit" form="inventoryEditForm" />}
        {hasAbortInventoryButton && <Button name="red" text="Przerwij" type="submit" />}
        {hasConfirmUserAsset && <Button name="green" text="Zatwierdź" type="submit" onClick={navigateToConfirmInventory} />}
      </RightSide>
    </Wrapper>
  );
};
