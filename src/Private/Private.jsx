import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <p>Loading....</p>;
  if (user) return children;
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

Private.propTypes = {
  children: PropTypes.element,
};

export default Private;
