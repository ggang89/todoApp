import { useState } from "react";
import "./todoContainer.css";
import TodoList from "./todoList";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {
  const [addText, setAddText] = useState("");

  const [todo, setTodo] = useState({
    todoTitle: "리액트 배우기",
    isEditing: false,
  });
  const [todoList, setTodoList] = useState([
    {
      id: "uniqeKey",
      todoTitle: "리액트 배우기",
      isEditing: false,
    },
    // 중괄호 하나가 t값 하나다
    // {
    //   id: "uniqeKey2",
    //   todoTitle: "자바스크립트 배우기",
    //   isEditing: false,
    // },
  ]);
  //1.isEditing=true이면 input창을 보여준다.
  //2. false면 그대로 있다

  //1. 기본값을 문자로 넣어준 것을 객체로 바꿔줌.
  //2.연결된 변수를 객체의 키값으로 변경해줌

  //1.수정버튼을 누르면 isEdting이 true가 된다.
  //2. 수정창에서 수정버튼을 누르면 isEditing이 false가 된다
  const edit = () => {
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const editInList = (id) => {
    console.log("id is", id);
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
    //id값을 받는다.
    //받은 id 값과 일치하는 list의 내용을 바꿔준다
  };
  const handleTextInList = (e, id) => {
    const newText = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newText);
  };

  const handleDelete = (id) => {
    // 1.
    const newDelete = todoList.filter((t) => {
      return id !== t.id;
    });
    setTodoList(newDelete);
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
  };
  //수정된 내용을 저장해준다.
  //1.수정버튼을 누르면 onChane 이벤트에 이벤트 객체를 통해서 변수 값이 전달되고
  //2.객체에서 todoTitle만 변경해줌
  //변수의 값은 받아온 이벤트 값으로 바꿔준다.=(e.target.value)
  const handleForm = (e) => {
    setAddText(e.target.value);
  };
  const handleAdd = () => {
    const newArr = {
      todoTitle: addText,
      id: uuidv4(),
      isEditing: false
    };
    setTodoList([...todoList,newArr]);

  };
  return (
    <>
      <div className="inputBox">
        <input
          className="inputText"
          type="text"
          value={addText}
          placeholder="할 일을 입력하세요"
          onChange={handleForm}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul>
        {todoList.map((t) => {
          return (
            <TodoList
              key={t.id}
              todoTitle={t.todoTitle}
              edit={() => editInList(t.id)}
              listDelete={() => handleDelete(t.id)}
              isEditing={t.isEditing}
              handleText={(e) => handleTextInList(e, t.id)}
            />
          );
        })}

        {/* <li className="box">
          <p className="textBox">타입스크립트 배우기</p>
          <button>수정</button>
          <button>삭제</button>
        </li> */}
      </ul>
    </>
  );
}
