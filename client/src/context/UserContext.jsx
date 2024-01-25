// UserContext.js
import { createContext, useContext, useReducer, useEffect } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CLEAR_USER':
      return null;
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatchUser({ type: 'SET_USER', payload: storedUser });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('useUserContext must be used inside a UserContextProvider');
  }

  return context;
};
