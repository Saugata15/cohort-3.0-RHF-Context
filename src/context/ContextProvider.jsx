import { useState } from "react";
import MyStore from "./MyStore";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  return (
    <MyStore.Provider
      value={{ users, setUsers, isFormOpen, setIsFormOpen, editId, setEditId }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
