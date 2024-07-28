import { createContext } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const authInfo = { name: "Alamin" };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;
