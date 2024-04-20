import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PatientsContext = createContext();

export const usePatients = () => useContext(PatientsContext);

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function loadPatients() {
      const api = "https://health.shrp.dev/items/people";
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(api);
        const data = await response.data.data;

        setLoading(false);
        setError(false);

        setPatients(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }

    loadPatients();
  }, []);

  return (
    <PatientsContext.Provider value={{ patients, isLoading, isError }}>
      {children}
    </PatientsContext.Provider>
  );
};
