import { useState, useEffect } from "react";

const useHttp = (url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function sendRequest() {
      const response = await fetch(url);
      setLoading(false);

      if (!response.ok) {
        setError(true);
        alert("ups...");
        return;
      }
      const json = await response.json();
      setData(json);
    }
    if (!data) {
      sendRequest();
      setLoading(true);
      setError(false);
    }
  }, []);

  return { error, loading, data };
};

export default useHttp;
