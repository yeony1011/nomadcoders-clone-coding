import { useEffect, useState } from "react";

function App(){
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

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {
        loading ?
        <strong>Loading...</strong> : 
        <ul>
          {coins.map((item) => <li>{item.name} ({item.symbol}): ${item.quotes.USD.price} USD</li>)}
        </ul>
      }
    </div>
  );
}

export default App;