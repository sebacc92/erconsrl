import PropTypes from 'prop-types';

function LoadingWrapper({ children, isLoading }) {
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return children;
}

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoadingWrapper.defaultProps = {
  isLoading: true,
};

export default LoadingWrapper;
