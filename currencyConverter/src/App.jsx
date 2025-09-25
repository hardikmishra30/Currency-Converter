import React, { useState } from "react";
import { InputBox } from "./components/";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { AiOutlineArrowRight } from 'react-icons/ai'

function App() {
  const [amount, setAmount] = useState(0); // This will hold the amount entered by the user
  const [from, setFrom] = useState("usd"); // Default currencies set to USD and INR
  const [to, setTo] = useState("inr"); // Default currencies set to USD and INR
  const [convertedAmount, setConvertedAmount] = useState(0); // This will hold the converted amount

  const currencyInfo = useCurrencyInfo(from); // Fetch currency information based on the 'from' currency

  const Options = Object.keys(currencyInfo); // Get all the keys from the currencyInfo object

  const swap = () => {
    setFrom(to); // Swap the currencies
    setTo(from); // Swap the currencies
    setConvertedAmount(amount); // Swap the currencies
    setAmount(convertedAmount); // Swap the currencies
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); // Convert the amount from 'from' currency to 'to' currency
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/31792356/pexels-photo-31792356.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(); // Call the convert function on form submission
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()} <AiOutlineArrowRight className="inline-block ml-2 mb-1"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
