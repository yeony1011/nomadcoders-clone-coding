import { useEffect, useState } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0); // create react app을 사용하고있어서 React.useState()를 사용하지 않아도 됨
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time');
  
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once');
  // }
  // useEffect(iRunOnlyOnce, []); // useEffect() : state가 변화하던, 코드를 딱 한번만 실행시켜줌

  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={onClick}>Click me</button>
      {/* <h1 className={styles.title}>Welcome Back!!!</h1>
      <Button className={styles.btn} text={'Continue'} /> */}
    </div>
  );
}

export default App;
