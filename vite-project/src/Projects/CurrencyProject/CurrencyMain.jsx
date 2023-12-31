import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/customHook'
import { useState } from 'react'

function CurrencyMain() {
  const [amount,setAmount] = useState(0)
  const [fromCurrency ,setFromCurrency] = useState("usd")
  const [toCurrency , setToCurrency] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)
  // list of currency keys
  const objects = Object.keys(currencyInfo)

  // for swapping
  const swap = () =>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // for executing
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage:`url(https://images.pexels.com/photos/3532555/pexels-photo-3532555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      <h1 className='text-black font-semibold text-4xl bg-white w-full text-center p-4'>CURRENCY CONVERTER</h1>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e)=>{e.preventDefault();convert()}}>
              <div className="w-full mb-1">
                <InputBox label="From" amount={amount} currencyList={objects} onAmountChange={(amount) => setAmount(amount)} onCurrencyChange={(currency) => setFromCurrency(currency)} selectCurrency={fromCurrency}/>
              </div>
              <div className="relative w-full h-0.5">
                <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-black text-white px-2 py-0.5' onClick={swap}>Swap</button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" amount={convertedAmount} onAmountChange={(amount) => setConvertedAmount(amount)} currencyList={objects} onCurrencyChange={(currency) => setToCurrency(currency)} selectCurrency={toCurrency}/>
              </div>
              <button type='submit' className='w-full bg-black text-white px-4 py-3 rounded-lg'>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyMain;
