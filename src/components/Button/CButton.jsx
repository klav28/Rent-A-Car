import PropTypes from 'prop-types';

const CButton = ({ bgcolor, children }) => {
  return (
    <div
      className={`${bgcolor} h-full w-full cursor-pointer p-2 text-center text-2xl font-thin text-black`}
    >
      {children}
    </div>
  );
};

CButton.propTypes = {
  bgcolor: PropTypes.string.isRequired,
};

export default CButton;
