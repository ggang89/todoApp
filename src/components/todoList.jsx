import React from "react";

export default function TodoList({ listDelete, isEditing, todoTitle, edit, handleText }) {
  return (
    <li className="box">
      {isEditing ? (
        <>
          <input
            className="updateInput"
            value={todoTitle}
            onChange={handleText}
          />
          {/* input태그의 값을 받기 위해서 value로 변수값을 받아온다! */}
          {/* 객체의 키값으로 변수를 받아옴 */}
          <button onClick={edit}>수정</button>
        </>
      ) : (
        <>
          <p className="textBox">{todoTitle}</p>
          {/* {변수명}에 변경되는 값이 들어간다.글자가 보이는 자리에 연결해준다 */}
          <button onClick={edit} className="button">
            수정
          </button>
          <button onClick={listDelete}>삭제</button>
        </>
      )}
    </li>
  );
}
