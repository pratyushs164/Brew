import { useContext, createContext } from "react";

export const authContext = createContext({
  userData: {
    status: false,
    data: {},
  },
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = authContext.Provider;
