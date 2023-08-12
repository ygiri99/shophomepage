import { createContext, useContext } from 'react';
//context to handle cart, cart quantity and card details
const UserContext = createContext();
export { UserContext, useContext };