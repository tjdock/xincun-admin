import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({
  isAuthenticated = false,
  path = '/',
  exact = false,
  unAuthenticatedComponent: Component2,
  component: Component
}) => {
  return isAuthenticated ? (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  ) : Component2 ? (
    <Route
      path={path}
      exact={exact}
      render={props => <Component2 {...props} />}
    />
  ) : null;
};

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.object.isRequired,
  unAuthenticatedComponent: PropTypes.object
};

export default AuthRoute;
