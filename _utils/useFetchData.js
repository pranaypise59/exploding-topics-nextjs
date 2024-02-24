import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlYTY3MzgxNzFlYzNkODNhZjVkZWQiLCJpYXQiOjE3MDg1MjMxMTksImV4cCI6MTcwOTEyNzkxOX0.GLj0DriHZWnurnewqaF3vSrnhnp06-Qj3fumJcaU39c`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        setData(result.keywords);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
