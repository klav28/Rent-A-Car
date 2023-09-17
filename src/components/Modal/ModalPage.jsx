import StModal from './ModalPage.components';
import PropTypes from 'prop-types';

const ModalPage = ({ carDetail, handleModalClose }) => {
  const addressSplit = carDetail.address.split(',');
  const mileAge = carDetail.mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <StModal.Backdrop onClick={handleModalClose}>
      <StModal.Card>
              <StModal.CloseButton onClick={handleModalClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </StModal.CloseButton>
        <StModal.Img
          src={`${carDetail.img}`}
          alt={`${carDetail.make} ${carDetail.model}`}
        />
        <StModal.CarInfo>
          <StModal.Name>
            {carDetail.make}&nbsp;
            <StModal.Model>{carDetail.model}</StModal.Model>, {carDetail.year}
          </StModal.Name>
          <StModal.Details>
            <StModal.Li>{addressSplit[1]}</StModal.Li>
            <StModal.Li>{addressSplit[2]}</StModal.Li>
            <StModal.Li>Id: {carDetail.id}</StModal.Li>
            <StModal.Li>Year: {carDetail.year}</StModal.Li>
            <StModal.Li>Type: {carDetail.type}</StModal.Li>
          </StModal.Details>
          <StModal.Details>
            <StModal.Li>
              Fuel Consumption: {carDetail.fuelConsumption}
            </StModal.Li>
            <StModal.Li>Engine Size: {carDetail.engineSize}</StModal.Li>
          </StModal.Details>
          <StModal.Description>{carDetail.description}</StModal.Description>
          <StModal.Subheader>
            Accessories and functionalities:
          </StModal.Subheader>
          <StModal.Details>
            {carDetail.accessories.map(el => (
              <StModal.Li>{el}</StModal.Li>
            ))}
          </StModal.Details>
          <StModal.Details>
            {carDetail.functionalities.map(el => (
              <StModal.Li>{el}</StModal.Li>
            ))}
          </StModal.Details>
          <StModal.Subheader>Rental Conditions:</StModal.Subheader>
          <StModal.Condition>
            {carDetail.rentalConditions.split('\n').map(el => (
              <StModal.ConditionEl>
                <StModal.ConditionElP>{el}</StModal.ConditionElP>
              </StModal.ConditionEl>
            ))}
            <StModal.ConditionEl>
              <StModal.ConditionElP>
                Mileage:{' '}
                <StModal.ConditionElAcc>{mileAge}</StModal.ConditionElAcc>
              </StModal.ConditionElP>
            </StModal.ConditionEl>
            <StModal.ConditionEl>
              <StModal.ConditionElP>
                Price:{' '}
                <StModal.ConditionElAcc>
                  {carDetail.rentalPrice}
                </StModal.ConditionElAcc>
              </StModal.ConditionElP>
            </StModal.ConditionEl>
          </StModal.Condition>
        </StModal.CarInfo>
        <StModal.Button to="tel:+380730000000">Rental Car</StModal.Button>
      </StModal.Card>
    </StModal.Backdrop>
  );
};

ModalPage.propTypes = {
  carDetail: PropTypes.object.isRequired,
  handleModalClose: PropTypes.object.isRequired,
};

export default ModalPage;
