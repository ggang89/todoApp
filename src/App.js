import "./App.css";

function App() {
  return (
    <div className="wrap">
      <h1 className="headerName"> Vite Todo App</h1>
      
      <div className="inputBox">
        <input className="inputText" type="text" placeholder="할 일을 입력하세요">
        </input>
        <button>추가</button>
      </div>
    </div>
  );
}

export default App;
