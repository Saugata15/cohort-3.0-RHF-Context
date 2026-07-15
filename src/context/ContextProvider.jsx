import { useEffect, useState } from "react";
import MyStore from "./MyStore";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      return [];
    }
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <MyStore.Provider
      value={{ users, setUsers, isFormOpen, setIsFormOpen, editId, setEditId }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
