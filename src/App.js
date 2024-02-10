import "./App.css";
import React, { useState } from "react";
import TodoContainer from "./components/todoContainer" 
// 1.입력창에 내용을 입력한다.
//2. 추가버튼을 누른다.클릭이벤트 발생
//3.리스트에 내용이 반영된다

//1.리스트 창에서 수정버튼을 누른다.
//2. 삭제버튼이 사라진다.
//3. 텍스트 입력창이 생긴다.
//4 . 수정버튼을 다시 누르면 내용이 저장되고 삭제버튼이 생긴다
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

      <TodoContainer/>
    </div>
  );
}

export default App;
