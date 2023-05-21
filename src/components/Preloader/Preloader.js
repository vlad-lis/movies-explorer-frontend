import PropTypes from 'prop-types';

function Preloader({ loading }) {
  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    );
  }
}

Preloader.propTypes = {
  loading: PropTypes.bool,
};

export default Preloader;
