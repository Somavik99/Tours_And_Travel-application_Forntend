import axios from "axios";
import { useEffect, useState } from "react";

function useFetchDataServices(URL) {
  const [apiData, setApiData] = useState({
    dataArray: [],
    Error: null,
    Loading: false,
  });

  let cancelToken = axios.CancelToken.source();
  async function fetchAllApi() {
    try {
      const responseApi = await axios.get(URL, {
        cancelToken: cancelToken.token,
      });
      if (!responseApi.ok) {
        return setApiData({
          dataArray: [],
          Error: "Error fetching data...!",
          Loading: true,
        });
      }
      setApiData({
        dataArray: responseApi.data,
        Error: null,
        Loading: false,
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        return error.message;
      }

      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllApi();
    return () => {
      cancelToken.cancel();
    };
  }, [URL]);

  return { apiDataObject: apiData };
}

export default useFetchDataServices;
