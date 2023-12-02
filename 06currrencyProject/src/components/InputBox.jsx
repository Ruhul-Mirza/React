import React,{useId} from "react";

function InputBox({label,amount,onAmountChange,selectCurrency="",onCurrencyChange,currencyList=[]}){
    const amountId = useId()
    return(
        <>
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label htmlFor="amountId" className="text-black font-semibold mb-2 inline-block">
                    {label}
                </label>
                <input type="number" id={amountId} className="outline-none w-full rounded-md pl-2 bg-gray-200 py-1.5" value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} placeholder="amount"/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black font-semibold mb-2 w-full">
                    Currency Type
                </p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {
                    currencyList.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                      ))
                    }

                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox;