import { useState } from "react";

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }

    // toDos.push(); toDos = ""; 와 같이 입력 불가. state를 직접 수정할 수 없음
    setToDos((currentArray) => [toDo, ...currentArray]);

    // 수정하는 함수를 사용할 때, 두가지 옵션을 이용할 수 있음
    // 단순히 값만 보낼때, setToDo("");
    // 함수를 보낼때, 함수의 첫번째 argument를 현재 state로 보냄
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write your to do..."  value={toDo} onChange={onChange} />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
      
    </div>
  );
  // map() : 예전 배열을 가져와서 변형
}

export default App;