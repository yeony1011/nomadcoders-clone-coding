import { useState, useEffect } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0); // create react app을 사용하고있어서 React.useState()를 사용하지 않아도 됨
  const [keyword, setKeyword] = useState('');
  
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  // console.log('i run all the time');
  
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once');
  // }
  // useEffect(iRunOnlyOnce, []); // useEffect() : state가 변화하던, 코드를 딱 한번만 실행시켜줌

  useEffect(() => {
    console.log('I run only once');
  }, []);
  useEffect(() => {
    // if(keyword !== '' && keyword.length > 5) {
    //   console.log('search for', keyword);
    // }
    console.log('I run when keyword changes');
  }, [keyword]); // keyword 가 변화할때, 코드를 실행 (API를 호출시켜줌)
  useEffect(() => {
    console.log('I run when counter changes');
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword and counter changes');
  }, [keyword, counter]);

  return (
    <div>
      <input type="text" value={keyword} placeholder="Search here" onChange={onChange} />
      <h1>{counter}</h1>
      <button type="button" onClick={onClick}>Click me</button>
      {/* <h1 className={styles.title}>Welcome Back!!!</h1>
      <Button className={styles.btn} text={'Continue'} /> */}
    </div>
  );
}

export default App;