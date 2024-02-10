import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("리액트 열심히 잘 배우기");

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

      <ul>
        <li className="box">
          <p className="textBox">{todo}</p>
          {/* {변수명}에 변경되는 값이 들어간다.글자가 보이는 자리에 연결해준다 */}
          <button className="button">수정</button>
          <button>삭제</button>
        </li>
        {/* <li className="box">
          <p className="textBox">타입스크립트 배우기</p>
          <button>수정</button>
          <button>삭제</button>
        </li> */}
        <li className="box">
          <input className="updateInput" value={todo}></input>
          {/* input태그의 값을 받기 위해서 value로 변수값을 받아온다! */}
          <button>수정</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
