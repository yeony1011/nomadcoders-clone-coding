import { useEffect, useState } from "react";

function App(){
  const [pay, setPay] = useState(0);
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) => response.json())
    // .then((json) => console.log(json));
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  // 로딩, 코딩을 위한 변수

  const onChangeSelect = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.value, coins[event.target.value].quotes.USD.price.toFixed(2));
    setAmount((pay / coins[event.target.value].quotes.USD.price.toFixed(2)));
  };

  const onChangeInput = (event) => {
    setPay(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {
        loading ?
        <strong>Loading...</strong> : 
        <div>
          <input type="number" placeholder="Enter the amount." value={pay} onChange={onChangeInput} />
          <span style={{paddingLeft:'5px'}}>USD</span>
          <select onChange={onChangeSelect} style={{display:'block', marginTop:'15px'}}>
            {coins.map((item, index) => (
              <option key={item.id} value={index}>{item.name} ({item.symbol}): ${item.quotes.USD.price.toFixed(2)} USD</option>
            ))}
          </select>
        </div>
      }
      <p>
        {
          pay < 0
          ? 'Please write a positive number.'
          : (
              pay === 0 ? 'Enter the amount' : `${amount} coins available for purchase`
            )
        }
      </p>
    </div>
  );
}
export default App;