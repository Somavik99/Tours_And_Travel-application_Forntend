import axios from "axios";
import { useEffect, useState } from "react";

function useFetchDataServices(URL) {
  const [apiData, setApiData] = useState({
    dataArray: [],
    Error: null,
    Loading: false,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchAllApi = async () => {
      try {
        const response = await axios.get(URL, {
          cancelToken: cancelToken.token,
        });
        if (!response.ok) {
          setApiData((prevData) => ({
            ...prevData,
            Error: "Error fetching data...!",
            Loading: true,
          }));
        }
        console.log(response.data.data);
        return setApiData({
          dataArray: response.data.data,
          Error: null,
          Loading: false,
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          return console.log(`Request failed : ${error.message}...!`);
        }
        console.log(error.message);
      }
    };

    fetchAllApi();

    const LoadingTime = setTimeout(() => {
      return apiData.Loading === true;
    }, 800);

    return () => {
      // Cleanup function
      cancelToken.cancel();
      clearTimeout(LoadingTime);
    };
  }, [URL,apiData.Loading]);

  //   console.log(apiData)
  return { apiDataObject: apiData };
}

export default useFetchDataServices;
