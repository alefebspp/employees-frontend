import { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  const [employee, setEmployee] = useState();

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
