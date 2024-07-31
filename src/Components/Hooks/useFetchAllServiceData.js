import axios from "axios";
import { useEffect, useState } from "react";

function useFetchDataServices(URL) {
  const [apiData, setApiData] = useState({
    dataArray: [],
    Error: null,
    Loading: false,
  });

  useEffect(() => {
    const Controller = new AbortController();

    const { signal } = Controller;

    async function fetchAllApi() {
      try {
        const response = await axios.get(URL, { signal: signal });
        if (!response.ok) {
          return setApiData((prevData) => ({
            ...prevData,
            Error: "Error fetching data...!",
            Loading: true,
          }));
        }
        setApiData({
          dataArray: response.data,
          Error: null,
          Loading: false,
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchAllApi();
    return () => {
      // Cleanup function
      Controller.abort();
    };
  }, [URL]);

  //   console.log(apiData)
  return { apiDataObject: apiData };
}

export default useFetchDataServices;
