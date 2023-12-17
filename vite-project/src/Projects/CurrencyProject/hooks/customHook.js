import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                } else {
                    throw new Error('Data not available for the selected currency');
                }
            })
            .catch(error => {
                console.error(error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
