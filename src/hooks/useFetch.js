import { useEffect, useState } from 'react';

const REQUEST_OPTIONS = () => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

const useFetch = (url, initialState, property) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(initialState);

  useEffect(() => {
    if (url) {
      setLoading(true);
      const options = REQUEST_OPTIONS();
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => setResponseData(property ? data[property] : data))
        .catch((e) => setError(e.message, e.error))
        .finally(() => setLoading(false));
    }
  }, [url, property]);
  return { loading, error, data: responseData };
};

export default useFetch;
