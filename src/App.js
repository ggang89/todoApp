import "./App.css";

function App() {
  return (
    <div className="wrap">
      <h1 className="headerName"> Vite Todo App</h1>

      <div className="inputBox">
        <input
          className="inputText"
          type="text"
          placeholder="할 일을 입력하세요"
        ></input>
        <button>추가</button>
      </div>

      <ul >
        <li className="box">
          <p className="textBox">리액트 배우기 열심히</p>
          <button className="button">수정</button>
          <button>삭제</button>
        </li>
        {/* <li className="box">
          <p className="textBox">타입스크립트 배우기</p>
          <button>수정</button>
          <button>삭제</button>
        </li> */}
        <li className="box">
          <input className="updateInput"></input>
          <button>수정</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
