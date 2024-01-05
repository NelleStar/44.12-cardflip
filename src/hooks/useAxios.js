import { useState, useEffect } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        return response.data;
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then((initialData) => {
      if (initialData) {
        setData([{ ...initialData, id: uuid() }]);
      }
    });
  }, [url]);

  const addCard = async () => {
    const newData = await axios.get(url).then((response) => response.data);
    if (newData) {
      setData((prevData) => [...prevData, { ...newData, id: uuid() }]);
    }
  };

  return { data, error, loading, addCard };
};

export default useAxios;
