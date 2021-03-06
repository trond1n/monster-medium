import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useFetch = (url) => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOprions] = useState(null);
  const [token] = useLocalStorage("token");

  const doFetch = useCallback((options = {}) => {
    setOprions(options);
    setIsLoading(true);
  }, []);
  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{ headers: { authorization: token ? `Token ${token}` : "" } },
    };

    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, requestOptions)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);

        console.log(error);
      });
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, error }, doFetch];
};
export default useFetch;
