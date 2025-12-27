import React from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //state to store the data
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    ) //fetching the data from the API
      .then((res) => res.json()) //converting to json
      .then((res) => setData(res[currency])); //setting the data
    console.log(data);
  }, [currency]); //this is a dependency array, it will run the useEffect only when the currency changes
  return data;
}

export default useCurrencyInfo;
