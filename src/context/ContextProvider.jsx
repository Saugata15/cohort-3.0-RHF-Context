import { useState } from "react";
import MyStore from "./MyStore";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <MyStore.Provider value={{ users, setUsers, isFormOpen, setIsFormOpen }}>
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
