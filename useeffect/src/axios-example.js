import axios from "axios";
import { useEffect } from "react";

const AxiosExample = () => {
  const fetchPincodeInfo = async () => {
    try {
      const response = await axios({
        url: `https://api.postalpincode.in/pincode/${506163}`,
        method: "POST",
        headers: {
          // myCustomeHeader: "Some Header",
        },
        //   data: {
        //     name: "Aravind",
        //     age: 23,
        //   },
        params: {
          name: "Aravind",
          age: 23,
        },
      });
      console.log({ response });
    } catch (error) {
      // AxiosError object
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPincodeInfo();
  }, []);
  return null;
};

// fetch method
// const response = await fetch();
// const data = await response.json();

// axios => request/response handling is easy.

// axios(config);
// axios.get() => get request
// axios.post() => post request
// axios.delete() => delete request

export default AxiosExample;
