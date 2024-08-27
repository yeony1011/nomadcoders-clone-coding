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
    setAmount((pay / coins[event.target.value].quotes.USD.price.toFixed(2)).toFixed(2));
  };

  const onChangeInput = (event) => {
    setPay(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <div>
        <input type="number" placeholder="Write your coin..." value={pay} onChange={onChangeInput} />
        <span>USD</span>
      </div>
      {
        loading ?
        <strong>Loading...</strong> : 
        <select onChange={onChangeSelect}>
          {coins.map((item, index) => (
            <option value={index}>{item.name} ({item.symbol}): ${item.quotes.USD.price.toFixed(2)} USD</option>
          ))}
        </select>
      }
      <p>{pay !== 0 ? amount : 'again...'}</p>
    </div>
  );
}
export default App;