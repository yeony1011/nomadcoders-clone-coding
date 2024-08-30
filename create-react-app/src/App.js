import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Hash Brower는 url에 # 붙음
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="hello" 
          element={
            <h1>Hello World</h1>
          }>
        </Route>
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
    // <Switch> 하나의 Route 만 렌더링 되도록 사용
    // <Switch> 컴포넌트가 <Routes> 컴포넌트로 대체됨
  );
}

export default App;

// 라우터는 url을 보고있는 컴포넌트