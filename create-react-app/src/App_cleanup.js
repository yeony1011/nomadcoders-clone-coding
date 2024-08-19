import { useState, useEffect } from "react";

function Hello() {
  // ** Cleanup function **

  // function destroyedFn(){
  //   console.log('destroyed!');
  // }
  // function effectFn(){
  //   console.log('created!');
  //   return destroyedFn;
  // }
  // useEffect(effectFn, []);

  // useEffect(() => {
  //   console.log('created!');
  //   return () => console.log('destroyed!'); // 컴포넌트가 없어질때
  // }, []);

  // useEffect(() => {}, []); // useEffect(function(){}, []);

  useEffect(() => {
    console.log('hi');
    return () => console.log('bye');
  }, []);

  // useEffect(function(){
  //   console.log('hi');
  //   return function(){
  //     console.log('bye');
  //   };
  // }, []);

  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button type="button" onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
  // jsx 안에서 js사용할때 중괄호 꼭 쓰기! {}
}

export default App;