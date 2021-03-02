import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOprions] = useState(null);

  const doFetch = (options = {}) => {
    setOprions(options);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, options)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);

        console.log(error);
      });
  });

  return [{ isLoading, response, error }, doFetch];
};
export default useFetch;
