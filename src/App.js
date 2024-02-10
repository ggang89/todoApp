import "./App.css";
import React, { useState } from "react";
// 1.입력창에 내용을 입력한다.
//2. 추가버튼을 누른다.클릭이벤트 발생
//3.리스트에 내용이 반영된다

//1.리스트 창에서 수정버튼을 누른다.
//2. 삭제버튼이 사라진다.
//3. 텍스트 입력창이 생긴다.
//4 . 수정버튼을 다시 누르면 내용이 저장되고 삭제버튼이 생긴다
function App() {
  const [todo, setTodo] = useState({
    todoTitle: "리액트 배우기",
    isEditing: false,
  });
  //1.isEditing=true이면 input창을 보여준다.
  //2. false면 그대로 있다

  //1. 기본값을 문자로 넣어준 것을 객체로 바꿔줌.
  //2.연결된 변수를 객체의 키값으로 변경해줌

  //1.수정버튼을 누르면 isEdting이 true가 된다.
  //2. 수정창에서 수정버튼을 누르면 isEditing이 false가 된다
  const edit = () => {
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };

  const handleText = (e) => {
    setTodo({...todo,todoTitle:e.target.value});
  };
  //수정된 내용을 저장해준다.
  //1.수정버튼을 누르면 onChane 이벤트에 이벤트 객체를 통해서 변수 값이 전달되고
  //2.객체에서 todoTitle만 변경해줌
  //변수의 값은 받아온 이벤트 값으로 바꿔준다.=(e.target.value)

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
          {todo.isEditing ? (
            <>
              <input
                className="updateInput"
                value={todo.todoTitle}
                onChange={handleText}
              />
              {/* input태그의 값을 받기 위해서 value로 변수값을 받아온다! */}
              {/* 객체의 키값으로 변수를 받아옴 */}
              <button onClick={edit}>수정</button>
            </>
          ) : (
            <>
              <p className="textBox">{todo.todoTitle}</p>
              {/* {변수명}에 변경되는 값이 들어간다.글자가 보이는 자리에 연결해준다 */}
              <button onClick={edit} className="button">
                수정
              </button>
              <button>삭제</button>
            </>
          )}
        </li>
        {/* <li className="box">
          <p className="textBox">타입스크립트 배우기</p>
          <button>수정</button>
          <button>삭제</button>
        </li> */}
        <li className="box"></li>
      </ul>
    </div>
  );
}

export default App;
